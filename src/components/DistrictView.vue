<template>
  <img alt="Vue logo" src="@/assets/BW.svg" class="">

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
      districtName: "name",
      challengesSet: "challenges",
      inProgress: "inProgressChallenges",
      completed: "completedChallenges"
    }),
  },
}
</script>

<style scoped>
.city-map{

}

</style>