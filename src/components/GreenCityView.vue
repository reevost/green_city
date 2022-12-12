// This is the big internal window, i.e. not title or footer.
<template>
    <div class="flex justify-between gap-2">
      <img alt="Vue logo" src="./assets/logo.png">

      <ControlDistrict></ControlDistrict>
    </div>
</template>

<script>
import controlDistrict from "@/components/ControlDistrict.vue";
export default {
  components: {
    controlDistrict
  }
}
// header with title and image in the following
</script>

<style scoped>

</style>