<template>
    <base-app>
        <main class="contact-us">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-lg-12 text-center">
                        <h2 class="contact-title text-dark-blue">Informasi <b>lebih detail</b> silakan <b>Hubungi</b> Kami</h2>
                    </div>
                </div>
                <div class="row contact justify-content-center">
                    <div class="col-lg-5 col-md-6 text-center mb-5">
                        <div class="profile-image rounded-circle">
                            <img src="img/esta.png" alt="Ayu Esta Trimurti Image" width="100%">
                        </div>
                        <h3>Ayu <b>Esta</b> Trimurti</h3>
                        <h3>Eventy.ID</h3>
                        <br>
                        <a href="mailto:marketing@eventy.id" class="font-16">marketing@eventy.id</a>
                        <!-- <p>0812 2764 5880</p> -->
                        <br>
                        <a href="https://api.whatsapp.com/send?text=Hai%2C%20saya%20Ayu%20Esta%20Dari%20Eventy.%0AAda%20yang%20bisa%20saya%20bantu%3F%0A&phone=6281227645880">
                            <img src="img/wa-button.png">
                        </a>
                    </div>
                    <div class="col-lg-5 col-md-6">
                        <h5 class="text-dark-blue font-weight-bold">Eventy Office at Crocodic</h5>
                        <p class="mb-3">Jalan Bina Remaja No.6 Srondol Wetan, Banyumanik, Semarang, Jawa Tengah 50363</p>
                        <p>Senin - Sabtu : 09.00 - 17.00 WIB</p>
                        <br><br>
                        <h5 class="text-dark-blue font-weight-bold">Menara Rajawali, Level 7-1</h5>
                        <p class="mb-3">Jl.DR.Ide Anak Agung Gde Agung Kawasan Mega Kuningan Jakarta Selatan 12950</p>
                        <p>Phone: (021) 29608235</p>
                        <p>Fax: (021) 29608234</p>
                    </div>
                </div>
            </div>
        </main>
    </base-app>
</template>

<style scoped>
p {
    margin: 0;
    font-size: 16px;
}
h3 {
    font-size: 22px;
}
.profile-image {
    width: 150px;
    height: 150px;
    overflow: hidden;
    display: inline-block;
    margin-bottom: 1rem;
}
.contact-us {
    margin-top: 6rem;
    margin-bottom: 5rem;
    min-height: 32rem;
}
.contact-title {
    font-size: 24px;
}
@media (max-width: 991.98px) {
    .contact {
        text-align: center;
    }
}
</style>
