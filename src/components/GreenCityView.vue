// This is the big internal window, i.e. not title or footer.
<template>
  <div class="flex justify-between gap-2">
    <DistrictView /> // fa prima il render delle liste e poi della immagine
    <ControlDistrict />
  </div>
</template>

<script>
import ControlDistrict from "@/components/ControlDistrict.vue";
import DistrictView from "@/components/DistrictView.vue";
export default {
  components: {
    ControlDistrict,
    DistrictView
  }
}
// header with title and image in the following
</script>

<style scoped>

</style>