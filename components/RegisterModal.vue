<template>
  <div>
    <div v-if="showRegisterModal" class="register-container">
      <div class="backdrop" @click="toggleRegisterModal()" />
      <div class="register-content" v-bind:id="[showRegisterModal ? 'show' : 'hide']">
        <div class="close-container">
          <div class="close-button" @click="toggleRegisterModal()">
            <img 
              class="icon-close"
              src="~/static/icon/cancel.png" 
              alt="image"
            >
          </div>
        </div>
        <div class="register-description">
          <h2>
            Join the fun with others by creating or log in into your account!
          </h2>
          <div class="button-container">
              <div v-bind:id="'register'" @click="onRegister()" class="register-button">
                <h1>Create New Account</h1>
              </div>
            <div @click="onLogin()" v-bind:id="'login'" class="register-button">
              <h1>Login</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <LoginModal 
      :reloadPage="reloadPage"
      :showLoginModal="showLoginModal" 
      :toggleLoginModal="toggleLoginModal"
    />
  </div>
</template>

<script>
import LoginModal from './LoginModal.vue'
export default {
  components: {
    LoginModal
  },
  data() {
    return {
      showLoginModal: false
    }
  },
  props: {
    showRegisterModal: {
			type: Boolean,
			default() {
				return false
			}
    },
    reloadPage: {
      type: Function
    },
    toggleRegisterModal: {
			type: Function
		},
  },
	methods: {
    onRegister() {
      window.open('https://www.narasi.tv/', '_blank')
      this.toggleRegisterModal()
    },
    onLogin() {
      this.toggleRegisterModal()
      this.showLoginModal = !this.showLoginModal
    },
    toggleLoginModal() {
      this.showLoginModal = !this.showLoginModal
    }
  },
  mounted() {
    this.toggleRegisterModal()
  }
}



</script>

<style lang="scss" scoped >
.register-container {
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
  .register-content {
    width: 30%;
    padding: 2%;
    height: 40%;
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
      height: 50%;
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
    .register-description {
      height: 90%;
      display: flex;
      align-items: center;
      border-radius: 20px;
      padding: 0% 5% 0% 5%;
      flex-direction: column;
      justify-content: center;
      .button-container {
        display: flex;
        width: 100%;
        height: 50%;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        .register-button {
          width: 80%;
          height: 50%;
          margin: 2%;
          display: flex;
          margin-top: 3%;
          border-radius: 50px;
          align-items: center;
          justify-content: center;
          @media (max-width: 1023px) {
            height: 60%;
          }
        }
      }
    }
    
  }
}

#login {
  color: #AFE3F1;
  background: none;
  border-width: 2px;
  border-color: #AFE3F1;
}

#register {
  color: #4B2D69;
  background: #AFE3F1;
}

.register-button:hover {
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