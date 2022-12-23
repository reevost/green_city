<template>
  <ul id="gallery" class="">
    <li v-for="challenge in images"
    v-bind:key="challenge.id">
      <img v-bind:src="`COLOR_${challenge.id}.svg`"
           class="">
    </li>
  </ul>
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
#gallery img {
  position: fixed;
  width: 100vw;
  height: 100vh;
  object-fit: contain;
  object-position: center;
}
</style>