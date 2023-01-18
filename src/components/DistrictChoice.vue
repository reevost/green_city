<template>
  <div class="modal-mask">
    <div class="modal-container">
      <h2 class="modal-header">
        <slot name="header"> Con che distretti giochi? </slot>
      </h2>

      <div id="district list" class="border border-gray-600 divide-y divide-gray-600 mt-6">
        <DistrictItem
            v-for="district in tags_obj"
            v-bind:key="district"
            v-bind:district="district"
            v-on:done="district.complete = ! district.complete"
        />
      </div>

      <footer class="modal-footer">
        <slot name="footer">
          <button @click="$emit('confirm', allowedDistricts)">Conferma</button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
import DistrictItem from "@/components/DistrictItem.vue";
export default {
  components: {DistrictItem},
  props: {
    tags: Array,
  },
  data() {
    return {
      tags_obj: []
    }
  },
  computed: {
    allowedDistricts() {
      return this.tags_obj.filter(a => a.complete).map(a => a.name)
    }
  },
  mounted() {
    this.tags.forEach(i => {
      this.tags_obj.push({"name": i, "id": i, "complete": false})
    })
  }
}
</script>

<style>
.modal-mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, .6);
  display: grid;
  place-items: center;
}
.modal-container {
  background: white;
  padding: 1rem;
  width: 80vw;
  max-width: 500px;
  border-radius: 7px;
}
.modal-footer {
  border-top: 1px solid #ddd;
  margin-top: 1rem;
  padding-top: 0.5rem;
  font-size: .8rem;
}
.modal-header {
  margin-bottom: 3rem;
  padding-bottom: 0.5rem;
  font-size: 1.4rem;
}
.modal-footer button {
  background: #ddd;
  padding: .25rem .75rem;
  border-radius: 20px;
}
.modal-footer button:hover {
  background: #c8c8c8;
}
</style>