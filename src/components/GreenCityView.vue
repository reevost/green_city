// This is the big internal window, i.e. not title or footer.
// fa prima il render delle liste e poi della immagine
<template>
  <div id="container">
    <div id="manage_button" class="manage_button z-50" v-show="flag">
      <button
          class="border rounded px-1 py-px text-xs border-orange-500 text-orange-500"
          v-on:click="change"
      >Gestisci distretti</button>
    </div>
    <DistrictView />
    <ControlDistrict
        v-if="flag"
        v-bind:chosenDistricts="districts"/>
    <DistrictChoice
        v-bind:tags_obj="districts_name_obj"
        v-on:confirm="choices"
        v-on:reset="reset"
        v-else/>
  </div>
</template>

<script>
import ControlDistrict from "@/components/ControlDistrict.vue";
import DistrictView from "@/components/DistrictView.vue";
import DistrictChoice from "@/components/DistrictChoice.vue";
import {useChallengesStore} from "@/stores/ChallengesStore";
import {mapWritableState} from "pinia";
import { useStorage } from '@vueuse/core';

export default {
  components: {
    DistrictChoice,
    ControlDistrict,
    DistrictView
  },
  data() {
    return {
      flag: false,
      districts: [],
      districts_name_obj: useStorage("districts_tags", [
        {
          "name": "centro storico",
          "id": "centro storico",
          "complete": false
        },
        {
          "name": "commerciale",
          "id": "commerciale",
          "complete": false
        },
        {
          "name": "industriale",
          "id": "industriale",
          "complete": false
        },
        {
          "name": "residenziale",
          "id": "residenziale",
          "complete": false
        },
        {
          "name": "scolastico",
          "id": "scolastico",
          "complete": false
        },
      ])
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
    },
    change() {
      this.districts = this.allDistricts
      this.flag = ! this.flag
    },
    reset() {
      this.districts_name_obj.forEach(i => {i.complete = false})
      let cleanChallenges = useChallengesStore()
      cleanChallenges.fill(this.allDistricts)
    }
  }
}
// header with title and image in the following
</script>

<style scoped>
.manage_button{
  position: absolute;
  top: 8px;
  right: 16px;
}
</style>