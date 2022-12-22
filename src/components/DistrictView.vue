<template>
  <div v-for="challenge in images"
       v-bind:key="challenge.id"
  >
    <img v-bind:src="`COLOR_${challenge.id}.svg`"
         class="active">
  </div>
</template>

<script>
import {useChallengesStore} from "@/stores/ChallengesStore";
import {mapWritableState} from "pinia";

export default {
  data() {
    return {
      challenge: []
    }
  },
  computed: {
    ...mapWritableState(useChallengesStore, {
      completed: "completedChallenges",
      images: "visibleImages"
    }),
  },
}
</script>

<style scoped>
.active{
  position: absolute;
  opacity: 90%;
  height: 100%;
  width: 100%;
}
</style>