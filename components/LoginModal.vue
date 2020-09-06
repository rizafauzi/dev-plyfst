<template>
  <div v-if="showLoginModal" class="login-container">
    <div class="backdrop" @click="toggleLoginModal()" />
    <div class="login-content" v-bind:id="[showLoginModal ? 'show' : 'hide']">
      <div class="close-container">
        <div class="close-button" @click="toggleLoginModal()">
          <img 
            class="icon-close"
            src="~/static/icon/cancel.png" 
            alt="image"
          >
        </div>
      </div>
      <div class="login-description">
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
        <div class="login-button" @click="onLogin()">
          <progress v-if="isLoading" class="pure-material-progress-circular"/>
          <h1 v-else class="sm:text-xxs lg:text-xl">Login</h1>
        </div>
        <h2 @click="onForgotPassword()" id="href" class="sm:text-xxs lg:text-lg">Forgot Password</h2>
        <h2 @click="onRegister()" id="href" class="sm:text-xxs lg:text-lg">Don't have an account? Register</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    onForgotPassword() {
      window.open('https://www.narasi.tv/', '_blank')
    },
    onRegister() {
      window.open('https://www.narasi.tv/', '_blank')
    },
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

        if (this.newUsername !== '' && !this.validateEmail(this.newUsername)) {
          this.setError.username = 'Email format is wrong'
        }

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
      }, 1000 );
    },
    validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
	}
}

</script>

<style  lang="scss" scoped>
.login-container {
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
  .login-content {
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
    .login-description {
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
      .login-button {
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
      }
    }
    
  }
}

.login-button:hover {
  cursor: pointer;
  filter: drop-shadow(0px 0px 5px #FFFFFF);
}

.close-button:hover {
  cursor: pointer;
  filter: drop-shadow(0px 0px 5px #FFFFFF);
}

#href:hover {
  cursor: pointer;
  filter: drop-shadow(0px 0px 5px #FFFFFF);
}

a {
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


.pure-material-progress-circular {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    box-sizing: border-box;
    border: none;
    border-radius: 50%;
    padding: 0.25em;
    width: 2.5em;
    height: 2.5em;
    color: #4B2D69;
    background-color: transparent;
    font-size: 16px;
    overflow: hidden;
    @media (max-width: 1023px) {
      width: 2em;
      height: 2em;
      font-size: 12px;
    }
}

.pure-material-progress-circular::-webkit-progress-bar {
    background-color: transparent;
}

/* Indeterminate */
.pure-material-progress-circular:indeterminate {
    -webkit-mask-image: linear-gradient(transparent 50%, black 50%), linear-gradient(to right, transparent 50%, black 50%);
    mask-image: linear-gradient(transparent 50%, black 50%), linear-gradient(to right, transparent 50%, black 50%);
    animation: pure-material-progress-circular 6s infinite cubic-bezier(0.3, 0.6, 1, 1);
}

:-ms-lang(x), .pure-material-progress-circular:indeterminate {
    animation: none;
}

.pure-material-progress-circular:indeterminate::before,
.pure-material-progress-circular:indeterminate::-webkit-progress-value {
    content: "";
    display: block;
    box-sizing: border-box;
    margin-bottom: 0.25em;
    border: solid 0.25em transparent;
    border-top-color: currentColor;
    border-radius: 50%;
    width: 100% !important;
    height: 100%;
    background-color: transparent;
    animation: pure-material-progress-circular-pseudo 0.75s infinite linear alternate;
}

.pure-material-progress-circular:indeterminate::-moz-progress-bar {
    box-sizing: border-box;
    border: solid 0.25em transparent;
    border-top-color: currentColor;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    background-color: transparent;
    animation: pure-material-progress-circular-pseudo 0.75s infinite linear alternate;
}

.pure-material-progress-circular:indeterminate::-ms-fill {
    animation-name: -ms-ring;
}

@keyframes pure-material-progress-circular {
  0% {
      transform: rotate(0deg);
  }
  12.5% {
      transform: rotate(180deg);
      animation-timing-function: linear;
  }
  25% {
      transform: rotate(630deg);
  }
  37.5% {
      transform: rotate(810deg);
      animation-timing-function: linear;
  }
  50% {
      transform: rotate(1260deg);
  }
  62.5% {
      transform: rotate(1440deg);
      animation-timing-function: linear;
  }
  75% {
      transform: rotate(1890deg);
  }
  87.5% {
      transform: rotate(2070deg);
      animation-timing-function: linear;
  }
  100% {
      transform: rotate(2520deg);
  }
}

@keyframes pure-material-progress-circular-pseudo {
  0% {
      transform: rotate(-30deg);
  }
  29.4% {
      border-left-color: transparent;
  }
  29.41% {
      border-left-color: currentColor;
  }
  64.7% {
      border-bottom-color: transparent;
  }
  64.71% {
      border-bottom-color: currentColor;
  }
  100% {
      border-left-color: currentColor;
      border-bottom-color: currentColor;
      transform: rotate(225deg);
  }
}
</style>