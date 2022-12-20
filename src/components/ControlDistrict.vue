// right panel with districts tags and list.
<template>
  <section class="space-y-6">
    <ChallengeSearch v-on:search="filter"></ChallengeSearch>
    <ChallengeList v-bind:challenges="inProgress" title="Challenges in Progress"></ChallengeList>
    <ChallengeList v-bind:challenges="completed" title="Challenges Completed"></ChallengeList>
  </section>
</template>

<script>
import ChallengeList from "@/components/ChallengeList.vue";
import ChallengeSearch from "@/components/ChallengeSearch.vue";
import {useChallengesStore} from "@/stores/ChallengesStore";
import {mapWritableState} from "pinia";

export default {
  components: {
    ChallengeList, ChallengeSearch
  },
  data() {
    return {
      challenges: []
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
  methods: {
    filter(idNumber) {
      this.challenges.push({
        name: idNumber,
        complete: false,
        id: this.challenges.length +1
      })
    }
  },
}
</script>

<style scoped>
</style>