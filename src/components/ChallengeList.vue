// list of challenge of the selected district, with search bar.
<template>
  <section
      v-if="challenges.length"
  >
    <h2 class="font-bold mb-2">
      {{ title }}
      <span> ({{ challenges.length }})</span>
    </h2>

    <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
      <ChallengeItem
        v-for="single_challenge in challenges"
        v-bind:key="single_challenge.id"
        v-bind:challenge="single_challenge"
        v-on:done="single_challenge.complete = ! single_challenge.complete">
      </ChallengeItem>
    </ul>
  </section>
</template>

<script>
import ChallengeItem from "@/components/ChallengeItem.vue";

export default {
  components: {
    ChallengeItem
  },
  props:{
    challenges: Array,
    title: String
  },
}
</script>

<style scoped>

</style>