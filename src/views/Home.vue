<template>
  <div class="home text-left">
    <HeaderEventy />
    <HeroEventy />
    <FloatButton />
    <EventyAction />
    <HeadWhy />
    <WhyEventy />
    <EventyPoint />
    <CompareEventy />
    <!-- <WomanEventy /> -->
    <PartnerEventy />
    <EventyDemo/>
    <EventyPartner/>
    <FooterEventy />
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

import HeaderEventy from "@/components/HeaderEventy.vue";
import HeroEventy from "@/components/HeroEventy.vue";
// import WomanEventy from "@/components/WomanEventy.vue";
import EventyAction from "@/components/EventyAction.vue";
import CompareEventy from "@/components/CompareEventy.vue";
import HeadWhy from "@/components/HeadWhy.vue";
import WhyEventy from "@/components/WhyEventy.vue";
import EventyPoint from "@/components/EventyPoint.vue";
import PartnerEventy from "@/components/PartnerEventy.vue";
import EventyPartner from "@/components/EventyPartner.vue";

import FloatButton from "@/components/FloatButton.vue";

import FooterEventy from "@/components/FooterEventy.vue";
import EventyDemo from "@/components/EventyDemo.vue";

export default {
  name: "home",
  components: {
    HeaderEventy,
    HeroEventy,
    EventyAction,
    EventyPartner,
    WhyEventy,
    EventyPoint,
    HeadWhy,
    PartnerEventy,
    CompareEventy,
    EventyDemo,
    FooterEventy,
    FloatButton
  }
};
</script>
