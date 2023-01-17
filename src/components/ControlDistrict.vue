// right panel with districts tags and list.
<template>
  <div id="menu" class="fixed bg-white w-1/3 min-w-[480px] h-screen p-8 overflow-y-scroll z-50">
    <section id="challenges tag and search">
      <DistrictTags
          v-bind:tags="districts"
          v-model:currentTag="currentDistrict"
          v-on:update:currentTag="filterReset"
      />
      <div class="border border-gray-600 text-black">
        <input v-model="filterWord" placeholder="cerca..." class="p-2"/>
      </div>
    </section>
    <section id="challenges" class="mt-6">
      <ChallengeList
          v-bind:challenges="inProgress"
          title="Sfide in corso"
          v-bind:searchValue="filterWord"
          v-bind:tagValue="currentDistrict"
          v-model:toggleChallenge="toggleProgressChallenge"
          v-on:toggle="toggleChallenges"
      ></ChallengeList>
    </section>
    <section id="completed challenges" class="mt-6">
      <ChallengeList
          v-bind:challenges="completed"
          title="Sfide completate"
          v-bind:searchValue="filterWord"
          v-bind:tagValue="currentDistrict"
          v-model:toggleChallenge="toggleCompleteChallenge"
          v-on:toggle="toggleChallenges"
      ></ChallengeList>
    </section>
    <section id="scoring" class="font-bold mt-6 border border-gray-600 p-2">
      Punteggio: {{totalScore}}
    </section>
  </div>
</template>

<script>
import ChallengeList from "@/components/ChallengeList.vue";
import DistrictTags from "@/components/DistrictTags.vue";
import {useChallengesStore} from "@/stores/ChallengesStore";
import {mapWritableState} from "pinia";

export default {
  components: {
    ChallengeList, DistrictTags
  },
  data() {
    return {
      currentDistrict: "centro storico",
      filterWord: "",
      toggleProgressChallenge: false,
      toggleCompleteChallenge: false
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
    toggleChallenges(title) {
      title === "Sfide in corso" ? this.toggleProgressChallenge = ! this.toggleProgressChallenge : this.toggleCompleteChallenge = ! this.toggleCompleteChallenge
    },
    filterReset() {
      this.filterWord = ""
      this.toggleProgressChallenge = false
      this.toggleCompleteChallenge = false
    }
  }
}
</script>

<style scoped>

</style>