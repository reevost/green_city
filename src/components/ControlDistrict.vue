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
    <section id="challenges">
      <ChallengeList v-bind:challenges="inProgress" title="Challenges in Progress" v-bind:searchValue="filterWord"></ChallengeList>
    </section>
    <section id="completed challenges">
      <ChallengeList v-bind:challenges="completed" title="Challenges Completed" v-bind:searchValue="filterWord"></ChallengeList>
    </section>
    <section id="scoring">
      Qui ci va lo scoring, quelle sopra toggable sul titolo
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
      districts: "allDistricts"
    }),
  },
  methods: {
    filter(idInput) {
      this.filterWord = idInput
    }
  },
}
</script>

<style scoped>

</style>