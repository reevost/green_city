// top tags
<template>
  <div class="flex gap-2">
    <button
        v-for="tag in tags"
        v-bind:key="tag"
        v-on:click="$emit('update:currentTag', tag)"
        class="border rounded px-1 py-px text-xs"
        v-bind:class="{
                'border-blue-500 text-blue-500': tag === currentTag
            }"
    >{{tag}}</button>
  </div>
</template>

<script>
export default {
  props: {
    tags: Array,
    currentTag: String
  }
}
</script>

<style scoped>

</style>