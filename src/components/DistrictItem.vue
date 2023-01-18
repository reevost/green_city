// single district
<template>
  <li>
    <label class="p-2 flex justify-between items-center ">
      {{district.name}}
      <input type="checkbox" v-bind:checked="district.complete" v-on:click="$emit('done')" class="ml-3">
    </label>
  </li>
</template>

<script>

// eslint-disable-next-line no-undef
export default {
  props: {
    district: Object
  }
}
</script>

<style scoped>

</style>