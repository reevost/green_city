// right panel with districts tags and list.
<template>
  <div id="menu" class="fixed bg-white w-1/3 min-w-[480px] h-screen p-8 overflow-y-scroll z-20">
    <section id="challenges tag and search" class="">
      <DistrictTags class="p-2"
          v-bind:tags="chosenDistricts"
          v-model:currentTag="currentDistrict"
          v-on:update:currentTag="filterReset"
      />
      <div class="border border-gray-600 text-black">
        <input v-model="filterWord" placeholder="cerca..." class="w-full p-2"/>
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
  </div>
</template>

<script>
import ChallengeList from "@/components/ChallengeList.vue";
import DistrictTags from "@/components/DistrictTags.vue";
import {useChallengesStore} from "@/stores/ChallengesStore";
import {mapWritableState, mapActions} from "pinia";

export default {
  components: {
    ChallengeList, DistrictTags
  },
  props:{
    chosenDistricts: Array,
  },
  data() {
    return {
      currentDistrict: this.chosenDistricts[0],
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
    ...mapActions(useChallengesStore, ["fill"]),
    toggleChallenges(title) {
      title === "Sfide in corso" ? this.toggleProgressChallenge = ! this.toggleProgressChallenge : this.toggleCompleteChallenge = ! this.toggleCompleteChallenge
    },
    filterReset() {
      this.filterWord = ""
      this.toggleProgressChallenge = false
      this.toggleCompleteChallenge = false
    }
  },
}
</script>

<style scoped>

</style>