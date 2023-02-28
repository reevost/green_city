<template>
  <div id="gallery_container"
       draggable="true">
    <ul id="gallery" class="">
      <li v-for="challenge in images"
          v-bind:key="challenge.id">
        <img v-bind:src="`COLOR_${challenge.id}.svg`"
             class="gallery-img" alt="missing image"/>
      </li>
    </ul>
  </div>

</template>

<script>
import {useChallengesStore} from "@/stores/ChallengesStore";
import {mapWritableState} from "pinia";

export default {
  data() {
    return {
      challenge: [],
      galleryX: 0,
      galleryY: 0,
      cursorX:0,
      cursorY:0
    }
  },
  computed: {
    ...mapWritableState(useChallengesStore, {
      completed: "completedChallenges",
      images: "visibleImages"
    }),
  },
  methods: {
    dragInitCoord(event) {
      this.cursorX = event.pageX;
      this.cursorY = event.pageY;
    },
    onDragging(event) {
      this.galleryX += this.cursorX+event.pageX
      this.galleryY += this.cursorY+event.pageY
    }
  }
}
</script>

<style scoped>
#gallery img {
  position: fixed;
  width: 100vw;
  height: 100vh;
  object-fit: contain;
  object-position: center;
}
.gallery-img {
  position: absolute;
  top: v-bind(galleryX)px;
  left: v-bind(galleryY)px;
}
</style>