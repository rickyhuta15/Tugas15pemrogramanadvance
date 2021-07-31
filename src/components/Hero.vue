<template>
  <div class="hero">
    <!-- Desktop -->
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="coll-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h3>
                <strong> Toko Bangunan Ricky, </strong><br />Menyediakan Apapun
                yang kalian butuhkan
              </h3>
              <p>
                Membutuhkan bahan bangun rumah dan alat bangunya?<br />ayo
                silahkan memesan di tempat kami barang bagus dan harga juga
                bagus<br />
                Ayo segera pesan.
              </p>
              <router-link to="/DaftarBarang" class="btn btn-lg btn-success"
                >Pesan<br /><b-icon-arrow-right></b-icon-arrow-right
              ></router-link>
            </div>
          </div>
        </div>
        <div class="coll-md-6">
          <img src="../assets/images/Hero.png" width="80%" />
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
         <div class="coll-md-6 mb-3">
          <img src="../assets/images/Hero.png" width="80%" />
        </div>
        <div class="coll-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h3>
                <strong> Toko Bangunan Ricky, </strong><br />Menyediakan Apapun
                yang kalian butuhkan
              </h3>
              <p>
                Membutuhkan bahan bangun rumah dan alat bangunya?<br />ayo
                silahkan memesan di tempat kami barang bagus dan harga juga
                bagus<br />
                Ayo segera pesan.
              </p>
              <router-link to="/DaftarBarang" class="btn btn-lg btn-success"
                >Pesan<br /><b-icon-arrow-right></b-icon-arrow-right
              ></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style>
</style>