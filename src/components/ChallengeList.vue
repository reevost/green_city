// list of challenge of the selected district, with search bar.
<template>
  <section
      v-if="filterChallenge.length"
  >
    <div class="flex justify-between items-start">
      <h2 class="font-bold mb-2">
        {{ title }}
      </h2>
      <button v-on:click="$emit('toggle', this.title)" v-if="toggleChallenge">
        &#8595;
      </button>
      <button v-on:click="$emit('toggle', this.title)" v-else>
        &times;
      </button>
    </div>


    <ul class="border border-gray-600 divide-y divide-gray-600 mt-6" v-show="! toggleChallenge">
      <ChallengeItem
        v-for="single_challenge in filterChallenge"
        v-bind:key="single_challenge.id"
        v-bind:challenge="single_challenge"
        v-on:done="single_challenge.complete = ! single_challenge.complete"
      />
    </ul>
  </section>
</template>

<script>
import ChallengeItem from "@/components/ChallengeItem.vue";

export default {
  components: {
    ChallengeItem,
  },
  props:{
    challenges: Array,
    title: String,
    searchValue: String,
    tagValue: String,
    toggleChallenge: Boolean
  },
  computed: {
    filterChallenge() {
      return this.challenges.filter(
          a => a.district === this.tagValue &&
              ((a.name.toLowerCase()).includes(this.searchValue.toLowerCase())
                  || String(a.id).includes(this.searchValue)));
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>