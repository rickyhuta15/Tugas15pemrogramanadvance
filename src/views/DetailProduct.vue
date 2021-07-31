<template>
  <div class="Detail-Product">
    <Navbar />
    <div class="container">
      <!-- breadcrumb -->
      <div class="row mt-5">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/DaftarBarang" class="text-dark"
                  >Daftar Barang</router-link
                >
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Order Barang
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col-m6-6"></div>
        <div class="col-md-6">
          <h2>
            <strong>{{ product.nama }}</strong>
          </h2>
          <hr />
          <h4>
            Harga : <strong>Rp. {{ product.harga }} </strong>
          </h4>

          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="jumlah_pemesanan">Jumlah Pesan</label>
              <input
                type="number"
                class="form-control"
                placeholder="Minimal Pengoderan Diatas 0"
                v-model="pesan.jumlah_pemesanan"
              />
            </div>

            <div class="form-group">
              <label for="alamat">Alamat</label>
              <textarea
                v-model="pesan.alamat"
                class="form-control"
                placeholder="Masukan Alamat yang dituju.."
              ></textarea>
            </div>

            <button type="submit" class="btn btn-success" @click="pemesanan">
              <b-icon-cart>Pesan</b-icon-cart>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "DetailProduct",
  components: {
    Navbar,
  },

  data() {
    return {
      product: {},
      pesan: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    pemesanan() {
      if(this.pesan.jumlah_pemesanan > 0){
        this.pesan.products = this.product;
      axios
        .post("http://localhost:3000/keranjangs", this.pesan)
        .then(() => {
          this.$router.push({ path:"/Keranjang"})
          this.$toast.success("Berhasil Masuk Keranjang", {
            type: 'success',
            position: 'top-right',
            duration: 3000,
            dismissible: true

          });
        })
        .catch((err) => console.log(err));
      }
      else{
        this.$toast.error("Jumlah pesanan wajib di isi", {
            type: 'error',
            position: 'top-right',
            duration: 3000,
            dismissible: true
        });
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>