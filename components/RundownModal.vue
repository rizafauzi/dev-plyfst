<template>
  <div v-if="showRundownModal" class="modal-container">
    <WatchNow v-if="showRundownModal && !disableLiveNow" id="popup" />
    <div @click="toggleRundownModal()" >
      <BackButton />
    </div>
    <div class="backdrop" @click="toggleRundownModal()" />
    <div class="modal-content" v-bind:id="[showRundownModal ? 'show' : 'hide']">
      <div class="title-wrapper">
        <h1>RUNDOWN PLAYFEST VIRTUAL BY NARASI.TV</h1>
      </div>
      <div class="rundown-description">
        <img 
          class="rundown-image"
          src="~/static/img/rundown.jpg" 
          alt="image"
        >
      </div>
    </div>
  </div>
</template>

<script>
import WatchNow from './WatchNow.vue'
import BackButton from './BackButton.vue'

export default {
  components: {
    WatchNow,
    BackButton
  },
  props: {
    showRundownModal: {
			type: Boolean,
			default() {
				return false
			}
		},
    disableLiveNow: {
			type: Boolean,
			default() {
				return false
			}
		},
    toggleRundownModal: {
			type: Function
		},
  },
	methods: {
		
    isMobile() {
      if (process.browser) {
          if (window.innerWidth <= 768) {
              return true
          }
      }
    },
  },
  mounted() {
    this.toggleRundownModal()
  }
}
</script>

<style lang="scss" scoped>

.modal-container {
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 30;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  animation: smoothFade 400ms ease-in-out 0s 1 normal forwards;
  .backdrop {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(75, 45, 105, 0.75);
  }
  .modal-content {
    width: 90%;
    margin-top: 4%;
    height: 80%;
    display: flex;
    align-items: center;
    border-radius: 25px;
    flex-direction: column;
    justify-content: space-around;
    filter: drop-shadow(0px 5px 20px #4B2D69);
    animation: fadeIn 600ms cubic-bezier(0.62, 0.01, 0.33, 0.97) 0s 1 normal forwards;
    @media (max-width: 1023px) {
      height: 70%;
      border-radius: 15px;
    }
    .title-wrapper {
      top: 0;
      height: 10%;
      width: 100%;
      z-index: 50;
      display: flex;
      position: sticky;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(10px);
      background: rgba(255, 255, 255, 0.5);
      .close-button {
        width: 8%;
        height: 100%;
        border-radius: 50px;
        background: #FFFFFF;
      }
    }
    .rundown-description {
      height: 90%;
      width: 100%;
      display: flex;
      align-items: center;
      background: #AFE3F1;
      border-radius: 0px 0px 20px 20px;
      flex-direction: column;
      justify-content: center;
      .rundown-image {
        top: 10%;
        left: 0;
        width: 100%;
        overflow: hidden;
        object-fit: cover;
        position: absolute;
      }
    }
    
  }
}

#popup {
  z-index: 32;
}

.modal-button:hover {
  cursor: pointer;
  filter: drop-shadow(0px 0px 15px #FFFFFF);
}

.close-button:hover {
  cursor: pointer;
  filter: drop-shadow(0px 0px 5px #FFFFFF);
}

h2 {
  font-size: 18px;
  color: #FFFFFF;
  font-weight: bold;
  line-height: 200%;
  font-style: normal;
  text-align: center;
  font-family: 'Narasi Sans Bold';
  @media (max-width: 1023px) {
    font-size: 14px;
  }
}

h1 {
  font-size: 20px;
  color: #FFFFFF;
  font-weight: bold;
  line-height: 200%;
  font-style: normal;
  text-align: center;
  font-family: 'Narasi Sans Bold';
  filter: drop-shadow(0px 0px 5px #4B2D69);
  @media (max-width: 1023px) {
    font-size: 16px;
  }
}

@keyframes fadeIn {
	from {
    transform: translateY(50%);
    opacity: 0;
	}
	to {
    transform: translateY(0%);
    opacity: 1;
	}
}

@keyframes smoothFade {
	from {
    opacity: 0;
	}
	to {
    opacity: 1;
	}
}

</style>