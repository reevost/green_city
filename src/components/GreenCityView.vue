// This is the big internal window, i.e. not title or footer.
// fa prima il render delle liste e poi della immagine
<template>
  <div id="container">
    <DistrictView />
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