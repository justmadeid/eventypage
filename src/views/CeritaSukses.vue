<template>
  <div class="home">
    <HeaderEventy />
    <HeadStory />
    <SucessStory />
    <FooterEventy />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import HeaderEventy from "@/components/HeaderEventy.vue";
import SucessStory from "@/components/SucessStory.vue";
import HeadStory from "@/components/HeadStory.vue";
import FooterEventy from "@/components/FooterEventy.vue";

export default {
  name: "cerita",
  components: {
    HeaderEventy,
    SucessStory,
    HeadStory,
    FooterEventy
  }
};
</script>
