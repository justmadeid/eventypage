<template>
        <section class="contact" id="contact" style="background:#FAFAFA;">
            <div class="container">
                <div class="heading text-center">
                    <h2>Mau lihat demo Eventy Virtual Event? </h2>
                </div>
                    <div class="col-md-12 bg-white">
                        <form>
                            <div class="row input-section">
                                <div class="col-sm-12 mt-3">
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="namaLengkap"
                                      aria-describedby="namaHelp"
                                      placeholder="Masukan Nama"
                                      v-model="post.name"
                                    />
                                    <img src="image/request/icon_company.png" class="img-responsive search-img" alt="search">
                                    
                                </div>
                                <div class="col-sm-6 mt-3">
                                  <input
                                    type="email"
                                    class="form-control"
                                    id="emailAddress"
                                    aria-describedby="emailHelp"
                                    placeholder="Masukan Email"
                                    v-model="post.email"
                                  />
                                  <img src="image/request/icon_company.png" class="img-responsive search-img" alt="search">
                                </div>
                                <div class="col-sm-6 mt-3">
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="noHP"
                                    aria-describedby="noHPHelp"
                                    placeholder="Masukan No. HP"
                                    v-model="post.number"
                                  />
                                  <img src="image/request/icon_company.png" class="img-responsive search-img" alt="search">
                                </div>
                                <div class="col-sm-12 mt-3">
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="namaLengkap"
                                      aria-describedby="namaHelp"
                                      placeholder="Masukan Nama"
                                      v-model="post.company"
                                    />
                                    <img src="image/request/icon_company.png" class="img-responsive search-img" alt="search">
                                </div>



                            
                                <div class="col-sm-12 mt-3">
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="namaLengkap"
                                      aria-describedby="namaHelp"
                                      placeholder="Masukan Jenis Event"
                                      v-model="post.type"
                                    />
                                    <img src="image/request/icon_company.png" class="img-responsive search-img" alt="search">
                                    
                                </div>
                                <div class="col-sm-6 mt-3">
                                  <input
                                    type="date"
                                    class="form-control"
                                    id="emailAddress"
                                    aria-describedby="emailHelp"
                                    placeholder="Masukan Tanggal Mulai event"
                                    v-model="post.startdate"
                                  />
                                  <img src="image/request/icon_company.png" class="img-responsive search-img" alt="search">
                                </div>
                                <div class="col-sm-6 mt-3">
                                  <input
                                    type="date"
                                    class="form-control"
                                    id="noHP"
                                    aria-describedby="noHPHelp"
                                    placeholder="Tanggal Akhir Event"
                                    v-model="post.enddate"
                                  />
                                  <img src="image/request/icon_company.png" class="img-responsive search-img" alt="search">
                                </div>
                                <div class="col-sm-12 mt-3">
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="namaLengkap"
                                      aria-describedby="namaHelp"
                                      placeholder="Seberapa Tertarik"
                                      v-model="post.interest"
                                    />
                                    <img src="image/request/icon_company.png" class="img-responsive search-img" alt="search">
                                </div>

                                <a @click="sendreqorder()" href="#" class="btn btn-block-color text-center">Send Order</a>
                            </div>
                            <!-- <button class="btn btn-block" type="submit">Send Now!</button> -->
                        
                        </form>
                    </div>
            </div>
        </section>
</template>

<script>
    import axios from 'axios'

    export default {
      name: "EventyReqdemo",
        data() {
            return {
                post: {},
                validation: []
            }
        },
        created() {
            axios.get("http://127.0.0.1:8000/api/demoreqs")
                .then((response) => {
                this.post = response.data.data;
            });
        },
        methods: {
        // fungsi mengirim data ke API
        sendreqorder() {

          let sendreqorderData = {
            name: this.post.name,
            email: this.post.email,
            number: this.post.number,
            company: this.post.company,
            type: this.post.type,
            startdate: this.post.startdate,
            enddate: this.post.enddate,
            interest: this.post.interest
          };
          axios
            .post(
              "http://127.0.0.1:8000/api/sendreqorder",
              sendreqorderData
            )
            .then(() => this.$router.push("cerita-sukses"))
            // eslint-disable-next-line no-console
            .catch(err => console.log(err));
        }
      }
    }
</script>


<style scoped>

  .bg-white{
    background: #fff;
    padding: 50px;
    border-radius: 13px;
    box-shadow: 10px 34px 70px rgba(29, 97, 98, 0.15);
  }

    .input-section img {
        position: absolute;
        top: 10px;
        width: 25px;
        height: 25px;
        left: 25px;
    }

    .input-section {
        margin: 25px auto;
    }

    .input-section input {
      padding-left: 40px;
      background: #FAFAFA;
    }

    @media (max-width: 768px) {
        .input-section .col-sm-6{
            padding: 0 15px 0 15px;
        }

        .input-section input {
            padding: 3px 0 0 50px;
        }
    }

  .btn-block-color{
    background: linear-gradient(90.22deg, #4ABFF6 0.19%, #9E6FD9 99.83%);
    border-radius: 13px;
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    padding: 12px;
    /* identical to box height */


    /* clear_white */

    color: #FFFFFF;
  }

</style>