<template>
  <div v-if="showOrientationWarning" >
    <div id="modal-portrait">
      <div class="backdrop" @click="toggleOrientationWarning()" />
      <div class="modal-content" v-bind:id="[showOrientationWarning ? 'show' : 'hide']">
        <div class="modal-description">
          <h2>You are now entering landscape mode.</h2>
          <br>
          <h2>Please enable the auto rotate function and rotate your phone for better experience.</h2>
          <div class="icon-rotate">
            <img 
              class="img-rotate"
              src="~/static/icon/rotate.png" 
              alt="image"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deviceOrientation: 'landscape',
      device: this.$store.getters['app/getDevice']
    }
  },
  props: {
    showOrientationWarning: {
			type: Boolean,
			default() {
				return false
			}
		},
    toggleOrientationWarning: { type: Function }
  },
	methods: {},
}
</script>

<style lang="scss" scoped>
#modal-portrait {
  bottom: 22.5%;
  right: 25%;
  width: 65%;
  z-index: 30;
  height: 100vh;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  transform: rotate(-90deg);
  animation: smoothFade 400ms ease-in-out 0s 1 normal forwards;
  .backdrop {
    top: 0px;
    left: 0px;
    width: 150%;
    height: 150%;
    display: flex;
    position: absolute;
    filter: blur(10px);
    background: rgba(75, 45, 105, 0.9);
  }
  .modal-content {
    width: 50%;
    padding: 2%;
    height: 30%;
    display: flex;
    align-items: center;
    border-radius: 25px;
    flex-direction: column;
    justify-content: space-around;
    filter: drop-shadow(0px 0px 10px #281739);
    background-image: url('~@/static/img/aurora-background.png');
    animation: fadeIn 600ms cubic-bezier(0.62, 0.01, 0.33, 0.97) 0s 1 normal forwards;
    @media (max-width: 1023px) {
      width: 60%;
      height: 60%;
      border-radius: 15px;
    }
    .modal-description {
      height: 90%;
      display: flex;
      align-items: center;
      border-radius: 20px;
      padding: 0% 5% 0% 5%;
      flex-direction: column;
      justify-content: center;
      .icon-rotate {
        margin-top: 20%;
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
        border-radius: 100px;
        justify-content: center;
        background: rgba(44, 38, 148, 0.4);
        .img-rotate {
          width: 80px;
          height: 80px;
          object-fit: contain; 
          animation: spinImg 2000ms cubic-bezier(0.62, 0.01, 0.33, 0.97) 100ms infinite normal forwards; 
        }
      }
    }
  }
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
  line-height: 130%;
  font-style: normal;
  text-align: center;
  font-family: 'Narasi Sans Bold';
  @media (max-width: 1100px) {
    font-size: 14px;
  }
}

h1 {
  font-size: 20px;
  font-weight: bold;
  line-height: 200%;
  font-style: normal;
  text-align: center;
  font-family: 'Narasi Sans Bold';
  @media (max-width: 1100px) {
    font-size: 16px;
  }
}

@keyframes spinImg {
  0% {
    transform: rotate(0deg);
    // opacity: 0;
  }
  50% {
    transform: rotate(90deg);
    // opacity: 1;
  }
  100% {
    transform: rotate(90deg);
    // opacity: 1;
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