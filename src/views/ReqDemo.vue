<template>
  <div class="home">
    <HeaderEventy />
    <ImageHead />
    <EventyReqdemo />
    <FooterEventy />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import HeaderEventy from "@/components/HeaderEventy.vue";
import EventyReqdemo from "@/components/EventyReqdemo.vue";
import ImageHead from "@/components/ImageHead.vue";
import FooterEventy from "@/components/FooterEventy.vue";

export default {
  name: "reqdemo",
  components: {
    HeaderEventy,
    EventyReqdemo,
    ImageHead,
    FooterEventy
  }
};
</script>
