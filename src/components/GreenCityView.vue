// This is the big internal window, i.e. not title or footer.
// fa prima il render delle liste e poi della immagine
<template>
  <div id="container">
    <DistrictView />
    <ControlDistrict
        v-if="flag"
        v-bind:chosenDistricts="districts"/>
    <DistrictChoice
        v-bind:tags="allDistricts"
        v-on:confirm="choices"
        v-else/>
  </div>
</template>

<script>
import ControlDistrict from "@/components/ControlDistrict.vue";
import DistrictView from "@/components/DistrictView.vue";
import DistrictChoice from "@/components/DistrictChoice.vue";
import {useChallengesStore} from "@/stores/ChallengesStore";
import {mapWritableState} from "pinia";

export default {
  components: {
    DistrictChoice,
    ControlDistrict,
    DistrictView
  },
  data() {
    return {
      flag: false,
      districts: []
    }
  },
  computed: {
    ...mapWritableState(useChallengesStore, {
      allDistricts: "allDistricts",
    }),
  },
  methods: {
    choices(arr) {
      this.districts = arr
      this.flag = ! this.flag
    }
  }
}
// header with title and image in the following
</script>

<style scoped>

</style>