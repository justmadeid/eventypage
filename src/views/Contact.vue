<template>
  <div class="home">
    <HeaderEventy />
    <EventyContact />
    <FooterEventy />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import HeaderEventy from "@/components/HeaderEventy.vue";
import EventyContact from "@/components/EventyContact.vue";
import FooterEventy from "@/components/FooterEventy.vue";

export default {
  name: "contact",
  components: {
    HeaderEventy,
    EventyContact,
    FooterEventy
  }
};
</script>
