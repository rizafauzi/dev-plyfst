<template>
  <div v-if="showRotateModal" class="modal-container">
    <div class="backdrop" @click="toggleRotateModal()" />
    <div class="modal-content" v-bind:id="[showRotateModal ? 'show' : 'hide']">
      <div class="close-container">
        <div class="close-button" @click="toggleRotateModal()">
          <img 
            class="icon-close"
            src="~/static/icon/cancel.png" 
            alt="image"
          >
        </div>
      </div>
      <div class="modal-description">
        <h2>Rotate your phone to landscape mode for best experience.</h2>
        <div class="button-container">
          <div class="modal-button">
            <nuxt-link to="/home">
              <h1>Continue</h1>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showRotateModal: {
			type: Boolean,
			default() {
				return false
			}
		},
    toggleRotateModal: { type: Function }
  },
	methods: {},
  mounted() {
    this.toggleRotateModal()
  }
}
</script>

<style lang="scss" scoped>
.modal-container {
  top: 0px;
  left: 40%;
  width: 65%;
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
    background: rgba(75, 45, 105, 0.7);
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
    filter: drop-shadow(0px 5px 20px #4B2D69);
    background-image: url('~@/static/img/aurora-background.png');
    animation: fadeIn 600ms cubic-bezier(0.62, 0.01, 0.33, 0.97) 0s 1 normal forwards;
    @media (max-width: 1023px) {
      width: 60%;
      height: 40%;
      border-radius: 15px;
    }
    .close-container {
      height: 20%;
      width: 100%;
      .close-button {
        width: 8%;
        height: 80%;
        display: flex;
        border-radius: 50px;
        align-items: flex-start;
        justify-content: flex-start;
        .icon-close {
          width: 85%;
          height: 85%;
          object-fit: contain;
        }
      }
    }
    .modal-description {
      height: 90%;
      display: flex;
      align-items: center;
      border-radius: 20px;
      padding: 0% 5% 0% 5%;
      flex-direction: column;
      justify-content: center;
      .button-container {
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        .modal-button {
          width: 60%;
          margin: 2%;
          height: 40%;
          display: flex;
          margin-top: 3%;
          border-radius: 50px;
          align-items: center;
          background: #AFE3F1;
          justify-content: center;
        }
      }
    }
    
  }
}

#no {
  color: #666666;
  background: #DDDDDD;
}

#yes {
  color: #4B2D69;
  background: #AFE3F1;
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