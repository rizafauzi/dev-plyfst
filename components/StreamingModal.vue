<template>
  <div v-if="showModal" class="modal-container">
    <div class="backdrop" @click="showModal = !showModal" />
    <div class="modal-content" v-bind:id="[showModal ? 'show' : 'hide']">
      <div class="close-container">
        <div class="close-button" @click="toggleModal()">
          <img 
            class="icon-close"
            src="~/static/icon/cancel.png" 
            alt="image"
          >
        </div>
      </div>
      <div class="modal-description">
        <h2 class="sm:text-xxs lg:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </h2>
        <div v-for="(button, index) in buttonList" :key="index" class="modal-button">
          <h1 class="sm:text-xxs lg:text-xl">{{button}}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
		return {
      showModal: false,
      buttonList: ['Lorem Ipsum', 'Dolor sit', 'consectetur adipiscing elit'],
		}
  },
  mounted() {
    setTimeout(() => {
      this.showModal = true
    }, 1500 );
  },
	methods: {
		isDesktop() {
        if (process.browser) {
            if (window.innerWidth >= 1024) {
                return true
            }
        }
    },
    isMobile() {
      if (process.browser) {
          if (window.innerWidth <= 768) {
              return true
          }
      }
    },
    toggleModal() {
      this.showModal = !this.showModal
    },
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
    background: rgba(75, 45, 105, 0.7);
  }
  .modal-content {
    width: 60%;
    padding: 2%;
    height: 60%;
    display: flex;
    align-items: center;
    border-radius: 25px;
    flex-direction: column;
    justify-content: space-around;
    filter: drop-shadow(0px 5px 20px #4B2D69);
    background-image: url('~@/static/img/aurora-background.png');
    animation: fadeIn 600ms cubic-bezier(0.62, 0.01, 0.33, 0.97) 0s 1 normal forwards;
    @media (max-width: 1023px) {
      width: 50%;
    }
    .close-container {
      height: 10%;
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
      .modal-button {
        width: 60%;
        height: 12%;
        display: flex;
        margin-top: 3%;
        border-radius: 30px;
        align-items: center;
        background: #AFE3F1;
        justify-content: center;
      }
    }
    
  }
}

.modal-button:hover {
  cursor: pointer;
  -webkit-filter: drop-shadow(5px 5px 5px #FFFFFF);
  filter: drop-shadow(0px 0px 15px #FFFFFF);
}

.close-button:hover {
  cursor: pointer;
  -webkit-filter: drop-shadow(5px 5px 5px #FFFFFF);
  filter: drop-shadow(0px 0px 5px #FFFFFF);
}

h2 {
  color: #FFFFFF;
  font-weight: bold;
  line-height: 200%;
  font-style: normal;
  text-align: center;
  font-family: 'Narasi Sans Bold';
}

h1 {
  color: #4B2D69;
  font-weight: bold;
  line-height: 200%;
  font-style: normal;
  text-align: center;
  font-family: 'Narasi Sans Bold';
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