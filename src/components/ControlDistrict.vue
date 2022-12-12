// right panel with districts tags and list.
<template>
  <section class="space-y-6">
    <ChallengeSearch v-on:search="filter"></ChallengeSearch>
    <ChallengeList v-bind:challenges="inProgressChallenges" title="Challenges in Progress"></ChallengeList>
    <ChallengeList v-bind:challenges="completedChallenges" title="Challenges Completed"></ChallengeList>
  </section></template>

<script>
import ChallengeList from "@/components/ChallengeList.vue";
import ChallengeSearch from "@/components/ChallengeSearch.vue";

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
    inProgressChallenges(){
      return this.challenges.filter(a => ! a.complete);
    },
    completedChallenges() {
      return this.challenges.filter(a => a.complete);
    }
  },
  created() {
    fetch('http://localhost:3001/challenges')
        .then(response =>response.json())
        .then(challenges => {
          this.challenges = challenges;
        })
  },
  methods: {
    filter(idNumber) {
      this.challenges.push({
        name: idNumber,
        complete: false,
        id: this.challenges.length +1
      })
    }
  }
}
</script>

<style scoped>
</style>