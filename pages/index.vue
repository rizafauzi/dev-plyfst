<template>
  <div>
    <div v-if="device === 'MOBILE' && deviceOrientation === 'portrait'" id="mobilePortrait" >
      <img 
        class="background"
        src="~/static/img/aurora-background.png" 
      >
      <div class="playfest-logo-container">
        <div class="event-content" >
          <h2 class="sm:text-xxs lg:text-tiny xl:text-xl 2xl:text-2xl">{{`${deviceOrientation}an event by`}}</h2>
          <img 
            class="narasi-logo"
            src="~/static/img/narasi-brandmark-primary-yellow.png" 
            alt="image"
          >
        </div>
        <img 
          class="playfest-logo"
          src="~/static/img/playfest.png" 
          alt="image"
        >

        <div @click="toggleRotateModal()" class="getin-container">
          <h2 id="getin" class="sm:text-tiny lg:text-xl xl:text-2xl 2xl:text-2xl">GET IN</h2>
        </div>
      </div>
      <RotationModal 
        :showRotateModal="showRotateModal" 
        :toggleRotateModal="toggleRotateModal" 
      />
    </div>

    <div v-else-if="device === 'MOBILE' && deviceOrientation === 'landscape' " id="mobileLandscape" >
      <img 
        class="background"
        src="~/static/img/aurora-background.png" 
      >
      <div class="playfest-logo-container">
        <div class="event-content" >
          <h2 class="sm:text-xxs lg:text-tiny xl:text-xl 2xl:text-2xl">an event by</h2>
          <img 
            class="narasi-logo"
            src="~/static/img/narasi-brandmark-primary-yellow.png" 
            alt="image"
          >
        </div>
        <img 
          class="playfest-logo"
          src="~/static/img/playfest.png" 
          alt="image"
        >

        <nuxt-link to="/boarding" class="getin-container">
          <h2 id="getin" class="sm:text-tiny lg:text-xl xl:text-2xl 2xl:text-2xl">GET IN</h2>
        </nuxt-link>

      </div>
    </div>

    <div v-else-if="device === 'DESKTOP' || device === 'MOBILE' && deviceOrientation === 'landscape' " id="containerLandscape" >
      <img 
        class="background"
        src="~/static/img/aurora-background.png" 
      >
      <div class="playfest-logo-container">
        <div class="event-content" >
          <h2 class="sm:text-xxs lg:text-tiny xl:text-xl 2xl:text-2xl">an event by</h2>
          <img 
            class="narasi-logo"
            src="~/static/img/narasi-brandmark-primary-yellow.png" 
            alt="image"
          >
        </div>
        <img 
          class="playfest-logo"
          src="~/static/img/playfest.png" 
          alt="image"
        >

        <nuxt-link to="/boarding" class="getin-container">
          <h2 id="getin" class="sm:text-tiny lg:text-xl xl:text-2xl 2xl:text-2xl">GET IN</h2>
        </nuxt-link>

      </div>
    </div>
  </div>
  
</template>


<script>
import RotationModal from '../components/RotationModal.vue'
export default {
  components: {
    RotationModal
  },
  data() {
    return {
      showRotateModal: false,
      deviceOrientation: 'landscape',
      device: this.$store.getters['app/getDevice']
    }
  },
  methods: {
    toggleRotateModal() {
      this.showRotateModal = !this.showRotateModal
    }
  },
  mounted() {
    this.toggleRotateModal()
    this.deviceOrientation = screen.height > screen.width ? 'portrait' : 'landscape'

    let _this = this
    window.addEventListener('orientationchange', doOnOrientationChange);
    function doOnOrientationChange() {
      _this.deviceOrientation = screen.height > screen.width ? 'portrait' : 'landscape'
    }
  }
}
</script>


<style lang="scss" scoped>

#mobilePortrait {
  height: 100vh;
	max-width: 100%;
  overflow: hidden;
  padding: 0 0% 0 0%;
  transform: rotate(-90deg);
  .background {
    top: 0;
    right: 0;
    z-index: 1;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    position: relative;
  }
  .playfest-logo-container {
    top: 30%;
    left: 30%;
    width: 40%;
    z-index: 5;
    padding: 20px;
    display: flex;
    position: absolute;
    align-items: flex-end;
    flex-direction: column;
    justify-content: flex-start;
    @media (max-width: 1023px) {
      left: 47%;
      width: 50%;
    }
  }
}

#mobileLandscape {
  height: 100vh;
	max-width: 100%;
  overflow: hidden;
  padding: 0 0% 0 0%;
  .background {
    top: 0;
    right: 0;
    z-index: 1;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    position: relative;
  }
  .playfest-logo-container {
    top: 40%;
    left: 30%;
    width: 40%;
    z-index: 5;
    padding: 20px;
    display: flex;
    position: absolute;
    align-items: flex-end;
    flex-direction: column;
    justify-content: flex-start;
    @media (max-width: 1023px) {
      top: 25%;
      left: 25%;
      width: 50%;
    }
  }
}


#containerLandscape {
	max-width: 100%;
  height: 100vh;
  overflow: hidden;
  padding: 0 0% 0 0%;
  .background {
    top: 0;
    right: 0;
    z-index: 1;
    position: relative;
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  .playfest-logo-container {
    top: 40%;
    left: 30%;
    width: 40%;
    z-index: 5;
    padding: 20px;
    display: flex;
    position: absolute;
    align-items: flex-end;
    flex-direction: column;
    justify-content: flex-start;
    @media (max-width: 1023px) {
      left: 10%;
      width: 80%;
    }
  }
}

.event-content {
  width: 100%;
  display: flex;
  margin-bottom: 5%;
  flex-direction: row;
  justify-content: center;
  .narasi-logo {
    width: 30%;
    height: 50px;
    object-fit: contain;
    margin-left: 10px;
    margin-top: -20px;
  }
}

.playfest-logo {
  width: 100%;
  display: flex;
}

.getin-container {
  width: 100%;
  padding: 2%;
  display: flex;
  margin-top: 10%;
  align-items: center;
  justify-content: center;
}

#getin:hover {
  cursor: pointer;
  filter: drop-shadow(0px 0px 10px #FFFFFF);
}

span {
  font-size: 20px;
  color: #ffffff;
  font-weight: 800;
  line-height: 11px;
  font-style: normal;
  letter-spacing: 0.1em;
  font-family: 'Narasi Sans Bold';
}

h2 {
  /* font-size: 18px; */
  color: #ffffff;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  letter-spacing: 0.1em;
  font-family: 'Narasi Sans Bold';
}

</style>