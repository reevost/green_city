<template>
  <div class="modal-mask">
    <div class="modal-container">
      <h2 class="modal-header">
        <slot name="header"> Con che distretti giochi? </slot>
      </h2>
      <p>
        (puoi scegliere più distretti)
      </p>

      <div id="district list" class="border border-gray-600 divide-y divide-gray-600 mt-6">
        <DistrictItem
            v-for="district in tags_obj"
            v-bind:key="district"
            v-bind:district="district"
            v-on:done="district.complete = ! district.complete"
        />
      </div>

      <footer class="modal-footer flex justify-between">
        <slot name="footer">
          <button id="confirm"
              class="text-green-800 bg-green-200 hover:bg-green-400"
              @click="$emit('confirm', allowedDistricts)"
          >Conferma</button>
          <button
              id="reset"
              class="text-red-800 bg-red-200 hover:bg-red-400"
              @click="$emit('reset')"
          >Reset</button>
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
    tags_obj: Object
  },
  computed: {
    allowedDistricts() {
      return this.tags_obj.filter(a => a.complete).map(a => a.name)
    }
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
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  font-size: 1.4rem;
}
.modal-footer button {
  padding: .25rem .75rem;
  border-radius: 20px;
}
</style>