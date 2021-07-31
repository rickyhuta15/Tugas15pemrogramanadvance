<template>
  <div class="Keranjang">
    <Navbar :updateKeranjang="keranjangs" />
    <div class="container">
      <!-- breadcrumb -->
      <div class="row mt-4">
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
                Keranjang
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h2>Keranjang <strong>Saya</strong></h2>
          <div class="table-responsive mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nama Barang</th>
                  <th scope="col">Alamat</th>
                  <th scope="col">Jumlah</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Total Harga</th>
                  <th scope="col">Hapus</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(keranjang, index) in keranjangs"
                  :key="keranjang.id"
                >
                  <th>{{ index + 1 }}</th>
                  <td>
                    <strong>{{ keranjang.products.nama }}</strong>
                  </td>
                  <td>{{ keranjang.alamat ? keranjang.alamat : "-" }}</td>
                  <td>{{ keranjang.jumlah_pemesanan }}</td>
                  <td align="justify">Rp. {{ keranjang.products.harga }}</td>
                  <td align="justify">
                    Rp.
                    {{ keranjang.products.harga * keranjang.jumlah_pemesanan }}
                  </td>
                  <td align="center">
                    <b-icon-trash
                      @click="hapusKeranjang(keranjang.id)"
                    ></b-icon-trash>
                  </td>
                </tr>
                <tr>
                  <td colspan="5" align="right">
                    <strong> Total Harga :</strong>
                  </td>
                  <td>
                    <strong>Rp.{{ totalHarga }}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="row justify-content-end">
        <div class="col-md-4">
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="nama">Nama Penerima:</label>
              <input
                type="text"
                class="form-control"
                placeholder="Wajib di isi!!"
                v-model="pesan.nama"
              />
            </div>

            <button
              type="submit"
              class="btn btn-success float-right"
              @click="checkout"
            >
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
  name: "Keranjang",
  components: {
    Navbar,
  },
  data() {
    return {
      keranjangs: [],
      pesan: {},
    };
  },
  methods: {
    setKeranjang(data) {
      this.keranjangs = data;
    },
    hapusKeranjang(id) {
      axios
        .delete("http://localhost:3000/keranjangs/" + id)
        .then(() => {
          this.$toast.error("Data Terhapus", {
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });

          //update data keranjang
          axios
            .get("http://localhost:3000/keranjangs")
            .then((response) => this.setKeranjang(response.data));
        })

        .catch((error) => console.log(error));
    },
    checkout() {
      if (this.pesan.nama) {
        this.pesan.keranjangs = this.keranjangs;
        axios
          .post("http://localhost:3000/pesanans", this.pesan)
          .then(() => {

            //hapus semua keranjang
            this.keranjangs.map(function (item) {
              return axios
                .delete("http://localhost:3000/keranjangs/" +item.id)
                .catch((error) => console.log(error));
            });

            
            this.$router.push({ path: "/pesanan-sukses" });
            this.$toast.success("Pesanan anda Berhasil", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.error("Nama Penerima wajib Di isi", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },

  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => this.setKeranjang(response.data))
      .catch((error) => console.log(error));
  },

  computed: {
    totalHarga() {
      return this.keranjangs.reduce(function (items, data) {
        return items + data.products.harga * data.jumlah_pemesanan;
      }, 0);
    },
  },
};
</script>

<style>
</style>