<template>
  <div>
    <div v-show="showModal" @click="modalToggle()" class="backdrop" />
    <div >
      <div class="map-wrapper" v-bind:id="[showModal ? 'map-expand' : 'map-collapse']">
          <div class="background">
            <div class="chat-container">
              <div class="chat-list">
                <div v-for="(data, index) in dataState" :key="`${index}`" class="chat-each">
                  <h2>{{data.username}}</h2>
                  <h3>{{data.message}}</h3>
                </div>
              </div>
              <div v-if="isLogin" class="chat-content">
                <div class="emoticon">
                  <img 
                    class="icon-close"
                    src="~/static/icon/smile.png" 
                    alt="image"
                  >
                </div>
                <input class="chat-input" placeholder="Type something..." v-model="newMessage" />
                <div @click="addMessage()" class="send-button">
                  <h1>Send</h1>
                </div>
              </div>
              <div v-else class="chat-content" @click="onLogin()" >
                <h1 class="login-button" >Login to comment</h1>
              </div>
            </div>
          </div>
          
          <div @click="modalToggle()" class="map-title">
            <span class="shortcut-title sm:text-xxs lg:text-xl">LIVE CHAT</span>
            <div class="box-button" >
              <img 
                class="icon-close"
                src="~/static/icon/cancel.png" 
                alt="image"
              >
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgLoader from './SvgLoader.vue'
export default {
  components: {
    SvgLoader
  },
  props: {
    dataState: {
      type: Array,
      default() {
        return []
      }
    },
    showModal: {
			type: Boolean,
			default() {
				return true
			}
    },
    modalToggle: {
			type: Function
		},
    addNewMessage: {
			type: Function
		},
    toggleLoginModal: {
			type: Function
		},
  },
  data() {
		return {
      newMessage: '',
      initial: false,
      asdasdasd: this.$store.state.user,
      email: this.$store.state.user.email,
      isLogin: this.$store.state.user.isLogin,
      password: this.$store.state.user.password,
		}
  },
  methods: {
    addMessage() {
      if(this.newMessage !== '') {
        const message = { username: this.email === '' ? 'unknown' : this.email, message: this.newMessage }
        this.addNewMessage(message)
        this.newMessage = ''
      }
    },
    onLogin() {
      this.modalToggle()
      this.toggleLoginModal()
      // this.$store.dispatch('user/setOpenLogin', true)
    }
  }
}
</script>

<style lang="scss" scoped>

.backdrop {
  top: 0px;
  left: 0px;
  z-index: 19;
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(75, 45, 105, 0.6);
  animation: smoothShow 500ms ease 0s 1 normal forwards;
}

.map-wrapper {
  width: 35%;
  right: 0px;
  z-index: 20;
  height: 100%;
  display: flex;
  position: absolute;
  flex-direction: column;
  @media (max-width: 1023px) {
    width: 30%;
  }
  .background {
    top: 7%;
    right: 0;
    width :100%;
    height: 100%;
    display: flex;
    padding: 10%;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    background: #4A2D69;
    .chat-container {
      left: 2%;
      bottom: 2%;
      z-index: 5;
      width: 95%;
      height: 95%;
      display: flex;
      position: absolute;
      flex-direction: column;
      @media (max-width: 1023px) {
        height: 60%;
      }
      .chat-list {
        height: 85%;
        width: 100%;
        padding-left: 2%;
        // background: #FFFFFF;
        margin-bottom: 2%;
        overflow-y: scroll;
        scrollbar-width: none;
        -ms-overflow-style: none;
        justify-content: flex-end;
        flex-direction: column-reverse;
        .chat-each {
          width: 100%;
          display: flex;
          margin-bottom: 3%;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
        }
      }
      .chat-content {
        width: 100%;
        height: 7%;
        padding: 10px;
        display: flex;
        border-radius: 50px;
        flex-direction: row;
        align-items: center;
        backdrop-filter: blur(10px);
        justify-content: space-between;
        background: rgba(255, 255, 255, 0.4);
        @media (max-width: 1023px) {
          height: 20%;
        }
        .login-button {
          margin-left: 5%;
        }
        .emoticon {
          width: 8%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          .icon-close {
            width: 85%;
            height: 85%;
            object-fit: contain;
            filter: drop-shadow(0px 0px 10px #4B2D69);
          }
        }
        .chat-input {
          width: 70%;
          height: 70%;
          margin-left: 5%;
          border: none;
          outline: none;
          color: #ffffff;
          font-style: normal;
          background: transparent;
          font-family: 'Narasi Sans Bold';
        }
        .send-button {
          width: 20%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
  .map-title {
    width: 100%;
    height: 7%;
    z-index: 200;
    display: flex;
    position: absolute;
    align-items: center;
    background: #4499A0;
    justify-content: space-between;
    border-radius: 1000px 0px 0px 0px;
    .shortcut-title {
      width: 85%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .box-button {
      width: 15%;
      height: 100%;
      display: flex;
      align-items: center;
      background: #96C6CA;
      justify-content: center;
      .icon-close {
        width: 50%;
        height: 50%;
        object-fit: contain;
      }
    }
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
  @media (max-width: 1100px) {
    font-size: 16px;
  }
}

h2 {
  font-size: 18px;
  color: #FFFFFF;
  font-weight: bold;
  line-height: 200%;
  font-style: normal;
  text-align: center;
  font-family: 'Narasi Sans Bold';
  filter: drop-shadow(0px 0px 5px #4B2D69);
  @media (max-width: 1100px) {
    font-size: 14px;
  }
}

h3 {
  font-size: 14px;
  color: #FFFFFF;
  font-weight: bold;
  line-height: 100%;
  font-style: normal;
  /* margin-top: -5%; */
  text-align: center;
  letter-spacing: 0.15em;
  font-family: 'Narasi Sans Light';
  filter: drop-shadow(0px 0px 5px #4B2D69);
  @media (max-width: 1024px) {
    font-size: 12px;
  }
}

span {
  color: #ffffff;
  font-weight: 800;
  line-height: 11px;
  line-height: 150%;
  text-align: center;
  font-style: normal;
  letter-spacing: 0.1em;
  font-family: 'Narasi Sans ExtraBold';
}


#map-collapse {
  top: 0px;
  right: -(35%);
  // animation: fadeOut 400ms ease-in-out 0s 1 normal forwards;
}

#map-expand {
  top: 0px;
  right: 0px;
  animation: fadeIn 400ms ease-in-out 0s 1 normal forwards;
}

@keyframes smoothShow {
  from {
    opacity: 0;
	}
	to {
    opacity: 1;
	}
}


@keyframes fadeOut {
	from {
    transform: translateY(-92%);
	}
	to {
    transform: translateY(0%);
	}
}

@keyframes fadeIn {
	from {
    transform: translateX(100%);
	}
	to {
    transform: translateX(0%);
	}
}

.login-button:hover {
  cursor: pointer;
  filter: drop-shadow(0px 0px 10px #FFFFFF);
}

.map-collapse:hover {
  cursor: pointer;
  filter: drop-shadow(0px 5px 10px #FFFFFF);
}

.map-title:hover {
  cursor: pointer;
  filter: drop-shadow(0px 0px 4px #FFFFFF);
}

</style>