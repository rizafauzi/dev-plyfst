<template>
  <div class="chat-container">
    <div class="chat-list">
      <div v-for="(data, index) in dataState" :key="`${index}`" class="chat-each">
        <h2>{{data.username}}</h2>
        <h3>{{data.message}}</h3>
      </div>
    </div>
    <div class="chat-content">
      <div class="emoticon">
        <img 
          class="icon-close"
          src="~/static/icon/smile.png" 
          alt="cek"
        >
      </div>
      <input class="chat-input" placeholder="Type something..." v-model="newMessage" />
      <div @click="addMessage()" class="send-button">
        <h1>Send</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newMessage: ''
    }
  },
  props: {
		dataState: {
			type: Array,
			default() {
				return []
			}
    },
    addNewMessage: {
			type: Function
		},
  },
  methods: {
    addMessage() {
      if(this.newMessage !== '') {
        const message = { username: 'unknown', message: this.newMessage }
        this.addNewMessage(message)
        this.newMessage = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.chat-container {
  left: 2%;
  bottom: 2%;
  z-index: 5;
  width: 40%;
  height: 70%;
  display: flex;
  position: absolute;
  flex-direction: column;
  @media (max-width: 1023px) {
    height: 60%;
  }
  .chat-list {
    height: 88%;
    width: 100%;
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
    height: 10%;
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

*::-webkit-input-placeholder {
    color: white;
}

input:focus::-webkit-input-placeholder {
    opacity: 0;
}

.send-button:hover {
  cursor: pointer;
  -webkit-filter: drop-shadow(5px 5px 5px #FFFFFF);
  filter: drop-shadow(0px 0px 5px #FFFFFF);
}

.chat-list::-webkit-scrollbar { 
  display: none;
  width: 0;
  height: 0;
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

</style>