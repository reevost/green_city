<template>
  <form v-on:submit.prevent="search">
    <div class="border border-gray-600 text-black">
      <input v-model="idSearch" placeholder="cerca..." class="p-2"/>
      <button type="submit" class="bg-white p-2 border-l">{{ buttonText }}</button>
    </div>
  </form>
</template>

<script>
export default {
  data (){
    return {
      idSearch: "",
    }
  },
  computed: {
    buttonText(){
      return this.idSearch.length ? "Filtra" : "Mostra tutto"
    }
  },
  methods: {
    search() {
      this.$emit("search", this.idSearch);
    }
  }
}
</script>

<style scoped>

</style>