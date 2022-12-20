// single challenge
<template>
  <li>
    <label class="p-2 flex justify-between items-center ">
      {{challenge.id}} - {{challenge.name}}
      <input type="checkbox" v-bind="challenge.complete" v-on:click="$emit('done')" class="ml-3">
    </label>
  </li>
</template>

<script>
// eslint-disable-next-line no-undef
export default {
  props: {
    challenge: Object
  }
}
</script>

<style scoped>

</style>