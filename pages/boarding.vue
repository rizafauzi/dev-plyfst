<template>
  <div class="container" >
    <img 
      class="background"
      src="~/static/img/aurora-background.png" 
    >
    <div class="current-playing">
      <iframe 
        class="iframe"
        src="https://www.youtube.com/embed/p7TeLAGk8wk?autoplay=1" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen />
    </div>

    <OrientationWarning 
      :showOrientationWarning="showOrientationWarning"
      :toggleOrientationWarning="toggleOrientationWarning"
    />

    <nuxt-link to="/home">
      <div v-if="revealSkip" class="getin-container">
        <h2 class="sm:text-tiny lg:text-xl xl:text-2xl 2xl:text-2xl" id="getin">Skip Video</h2>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import OrientationWarning from '../components/OrientationWarning.vue'
export default {
  components: {
    OrientationWarning
  },
  data() {
    return {
      revealSkip: false,
      showOrientationWarning: true
    }
  },
  methods: {
    toggleOrientationWarning() {
      this.showOrientationWarning = !this.showOrientationWarning
    },
  },
  mounted() {
    setTimeout(() => {
      this.revealSkip = true
    }, 5000 );

    let vh = window.innerHeight * 0.01;
    window.addEventListener('resize', () => {
      let sec = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${sec}px`);
    })
    document.documentElement.style.setProperty('--vh', `${vh}px`);
   

    let _this = this
    this.showOrientationWarning = screen.height > screen.width ? true : false
    window.addEventListener('orientationchange', doOnOrientationChange);
    function doOnOrientationChange() {
      _this.showOrientationWarning = screen.height > screen.width ? true : false
    }
  },
}
</script>


<style lang="scss" scoped>
.container {
	max-width: 100%;
  height: 100vh;
  overflow: hidden;
  padding: 0 0% 0 0%;
  .background {
    top: 0;
    left: 0;
    z-index: 1;
    position: relative;
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  .current-playing {
    top: 4;
    left: 0;
    right: 0;
    z-index: 5;
    bottom: 0;
    width: 100%;
    display: flex;
    height: 100vh;
    position: fixed;
    align-items: center;
    justify-content: center;
    .iframe {
      width: 100%;
      position: absolute;
      bottom: 0;
      height: calc(var(--vh, 1vh) * 100);
      filter: drop-shadow(0px 0px 5px #FFFFFF);
    }
  }
  .getin-container {
    right: 4%;
    width: 20%;
    padding: 1%;
    z-index: 20;
    display: flex;
    position: absolute;
    border-radius: 50px;
    align-items: center;
    background: #AFE3F1;
    justify-content: center;
    top: calc(var(--vh, 1vh) * 85);
  }
	@media (max-width: 1023px) {
		padding: 0;
		.columns {
      display: absolute;
		}
	}
}

.getin-container:hover {
  cursor: pointer;
  filter: drop-shadow(0px 0px 10px #FFFFFF);
}

span {
  font-size: 20px;
  color: #4B2D69;
  font-weight: 800;
  line-height: 11px;
  font-style: normal;
  letter-spacing: 0.1em;
  font-family: 'Narasi Sans Bold';
}

h2 {
  color: #4B2D69;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  letter-spacing: 0.1em;
  font-family: 'Narasi Sans Bold';
}

</style>