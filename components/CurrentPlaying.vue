<template>
  <div class="current-playing">
    <iframe 
      v-if="currentPlaying !== ''"
      class="iframe"
      :src="currentPlaying" 
      frameborder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
    </iframe>
    <Loader v-else />
  </div>
</template>

<script>
import Loader from './Loader.vue'
export default {
  components: {
    Loader
  },
  props: {
		currentPlaying: {
			type: String,
			default() {
				return {}
			}
		}
  },
}
</script>

<style lang="scss" scoped>
.current-playing {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  height: 100vh;
  position: fixed;
  align-items: center;
  justify-content: center;
  .iframe {
    width: 34%;
    height: 35%;
    filter: drop-shadow(0px 0px 5px #FFFFFF);
    @media (max-width: 1024px) {
      width: 45%;
      height: 35%;
      filter: drop-shadow(0px 0px 3px #FFFFFF);
    }
    @media (max-width: 1000px) {
      width: 35%;
      height: 45%;
      filter: drop-shadow(0px 0px 3px #FFFFFF);
    }
  }
}
</style>>