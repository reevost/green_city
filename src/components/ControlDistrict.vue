// right panel with districts tags and list.
<template>
  <div id="menu" class="fixed bg-white w-1/3 min-w-[480px] h-screen p-8 overflow-y-scroll z-50">
    <section id="challenges tag and search">
      <DistrictTags
          v-bind:tags="districts"
          v-model:currentTag="currentDistrict"
      />
      <ChallengeSearch v-on:search="filter"></ChallengeSearch>
    </section>
    <section id="challenges" class="mt-6">
      <ChallengeList v-bind:challenges="inProgress" title="Challenges in Progress" v-bind:searchValue="filterWord" v-bind:tagValue="currentDistrict"></ChallengeList>
    </section>
    <section id="completed challenges" class="mt-6">
      <ChallengeList v-bind:challenges="completed" title="Challenges Completed" v-bind:searchValue="filterWord" v-bind:tagValue="currentDistrict"></ChallengeList>
    </section>
    <section id="scoring" class="font-bold mt-6 border border-gray-600 p-2">
      Punteggio: {{totalScore}}
    </section>
  </div>
</template>

<script>
import ChallengeList from "@/components/ChallengeList.vue";
import ChallengeSearch from "@/components/ChallengeSearch.vue";
import DistrictTags from "@/components/DistrictTags.vue";
import {useChallengesStore} from "@/stores/ChallengesStore";
import {mapWritableState} from "pinia";

export default {
  components: {
    ChallengeList, ChallengeSearch, DistrictTags
  },
  data() {
    return {
      filterWord: "",
      currentDistrict: "centro storico",
    }
  },
  computed: {
    ...mapWritableState(useChallengesStore, {
      inProgress: "inProgressChallenges",
      completed: "completedChallenges",
      districts: "allDistricts",
      totalScore: "impactSum"
    }),
  },
  methods: {
    filter(idInput) {
      this.filterWord = idInput
    }
  }
}
</script>

<style scoped>

</style>