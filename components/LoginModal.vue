<template>
  <div v-if="showLoginModal" class="modal-container">
    <div class="backdrop" @click="toggleLoginModal()" />
    <div class="modal-content" v-bind:id="[showLoginModal ? 'show' : 'hide']">
      <div class="close-container">
        <div class="close-button" @click="toggleLoginModal()">
          <img 
            class="icon-close"
            src="~/static/icon/cancel.png" 
            alt="image"
          >
        </div>
      </div>
      <div class="modal-description">
        <h2 class="sm:text-xxs lg:text-xl">
          Log in
        </h2>
        <div class="input-container">
          <h3 class="label-input sm:text-xxs lg:text-lg">Email</h3>
          <input class="login-input sm:text-tiny lg:text-xl" placeholder="Enter username" v-model="newUsername" />
          <div class="line-shape" />
          <h5 class="error-label sm:text-xxs lg:text-tiny">{{setError.username}}</h5>
        </div>
        <div class="input-container">
          <h3 class="label-input sm:text-xxs lg:text-lg">Password</h3>
          <input type="password" class="login-input sm:text-tiny lg:text-xl" placeholder="Enter password" v-model="newPassword" />
          <div class="line-shape" />
          <h5 class="error-label sm:text-xxs lg:text-tiny">{{setError.password}}</h5>
        </div>
        <div class="modal-button" @click="onLogin()">
          <Loader v-if="isLoading" class="loading"/>
          <h1 v-else class="sm:text-xxs lg:text-xl">Login</h1>
        </div>
        <h2 class="sm:text-xxs lg:text-lg">Forgot Password</h2>
        <h2 class="sm:text-xxs lg:text-lg">Don't have an account? Register</h2>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from './Loader.vue'
export default {
  components: {
    Loader
  },
  props: {
    showLoginModal: {
			type: Boolean,
			default() {
				return false
			}
		},
    toggleLoginModal: {
			type: Function
    },
    reloadPage: {
      type: Function
    }
  },
  data() {
		return {
      isLoading: false,
      setError: {
        username: '',
        password: ''
      },
      newUsername: '',
      newPassword: '',
      showModal: this.$store.state.user.onLogin,
      buttonList: ['Lorem Ipsum', 'Dolor sit', 'consectetur adipiscing elit'],
		}
  },
	methods: {
    async onLogin() {
      let data = { 
        username: this.newUsername, 
        password: this.newPassword,
        token: 'ASD133REDSF342===',
        onLogin: true,
        isLogin: true
      }
      this.isLoading = true

      setTimeout(() => {
        this.isLoading = false
        this.newUsername === '' ? 
          this.setError.username = 'Please fill username':
          this.setError.username = ''

        this.newUsername !== '' && !this.validateEmail(this.newUsername) ? 
          this.setError.username = 'Email format is wrong':
          this.setError.username = ''

        this.newPassword === '' ? 
          this.setError.password = 'Please fill password':
          this.setError.password = ''
          
        if(this.newUsername !== '' && this.validateEmail(this.newUsername) && this.newPassword !== '') {
          if(process.browser) {
            var nameReplace = this.newUsername.replace(/@.*$/,"");
            var username = nameReplace !== this.newUsername ? nameReplace : null;

            localStorage.setItem('username', username)
            // localStorage.setItem('token', 'ASD133REDSF342===')
            localStorage.setItem('isLogin', true)
          }
          this.newUsername = ''
          this.newPassword = ''
          this.toggleLoginModal()
          this.reloadPage()
        }
      }, 2000 );
    },
    validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
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
    background: rgba(75, 45, 105, 0.5);
  }
  .modal-content {
    width: 38%;
    padding: 2%;
    height: 70%;
    display: flex;
    align-items: center;
    border-radius: 25px;
    background: #4B2D69;
    flex-direction: column;
    justify-content: space-around;
    animation: fadeIn 600ms cubic-bezier(0.62, 0.01, 0.33, 0.97) 0s 1 normal forwards;
    @media (max-width: 1023px) {
      width: 40%;
      height: 80%;
    }
    .close-container {
      height: 10%;
      width: 100%;
      .close-button {
        width: 7%;
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
      width: 100%;
      display: flex;
      align-items: center;
      border-radius: 20px;
      padding: 0% 5% 0% 5%;
      flex-direction: column;
      justify-content: center;
      .input-container {
        width: 80%;
        height: 15%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin-bottom: 8%;
        .label-input {
          width: 100%;
          display: flex;
          align-items: flex-start;
        }
        .error-label {
          width: 100%;
          display: flex;
          margin-top: 2%;
          align-items: flex-start;
        }
        .login-input {
          width: 100%;
          height: 70%;
          border: none;
          outline: none;
          color: #ffffff;
          background: palegreen;
          font-style: normal;
          background: transparent;
          font-family: 'Narasi Sans Bold';
        }
        .line-shape {
          width: 100%;
          height: 1px;
          border-radius: 1px;
          background: #FFFFFF;
        }
      }
      .modal-button {
        width: 60%;
        height: 10%;
        display: flex;
        margin-top: 3%;
        padding: 10px;
        margin-bottom: 10%;
        border-radius: 30px;
        align-items: center;
        background: #AFE3F1;
        justify-content: center;
        .loading {
          color: #4B2D69;
        }
      }
    }
    
  }
}

.modal-button:hover {
  cursor: pointer;
  -webkit-filter: drop-shadow(5px 5px 5px #FFFFFF);
  filter: drop-shadow(0px 0px 5px #FFFFFF);
}

.close-button:hover {
  cursor: pointer;
  -webkit-filter: drop-shadow(5px 5px 5px #FFFFFF);
  filter: drop-shadow(0px 0px 5px #FFFFFF);
}

h1 {
  color: #4B2D69;
  font-weight: bold;
  line-height: 200%;
  font-style: normal;
  text-align: center;
  font-family: 'Narasi Sans Bold';
}

h2 {
  color: #FFFFFF;
  font-weight: bold;
  line-height: 200%;
  font-style: normal;
  text-align: center;
  font-family: 'Narasi Sans Bold';
}

h3 {
  color: #FFFFFF;
  font-weight: bold;
  line-height: 100%;
  font-style: normal;
  text-align: center;
  letter-spacing: 0.1em;
  font-family: 'Narasi Sans Light';
}

h5 {
  color: #AFE3F1;
  font-weight: bold;
  line-height: 100%;
  font-style: normal;
  text-align: center;
  letter-spacing: 0.1em;
  font-family: 'Narasi Sans Light';
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