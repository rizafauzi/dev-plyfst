<template>
  <div class="playfest-logo-container">
    <div class="background" v-bind:id="[setDevice ? 'showBG' : 'hideBG']" >
      <div class="event-content" >
        <h2 class="sm:text-xxs lg:text-tiny xl:text-xl 2xl:text-2xl">Sponsored by</h2>
        <img 
          class="narasi-logo"
          src="~/static/logo/narasi-brandmark-primary-yellow.png" 
          alt="image"
        >
      </div>
      <img 
        class="playfest-logo"
        src="~/static/logo/playfest.png" 
        alt="image"
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      setDevice: true,
      showChatModal: false,
      device: this.$store.getters['app/getDevice']
    }
  },
  methods: {
    compareDevice() {
      if (this.device === "DESKTOP") {
        this.setDevice = true
      } else {
        this.setDevice = false
      }
    }
  },
  mounted() {
    this.compareDevice()
  }
}
</script>

<style lang="scss" scoped>
.playfest-logo-container {
  top: 0%;
  left: 0%;
  width: 25%;
  z-index: 5;
  height: 18%;
  display: flex;
  position: absolute;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 0px 0px 40px 0px;
  .background {
    right: 0%;
    bottom: 0%;
    width: 100%;
    height: 100%;
    padding: 10%;
    display: flex;
    position: absolute;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-radius: 0px 0px 50px 0px;
  }
  .event-content {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    justify-content: space-around;
    .narasi-logo {
      width: 40%;
      margin-left: 10px;
      margin-top: -20px;
      object-fit: contain;
    }
  }
  .playfest-logo {
    width: 100%;
    display: flex;
  }
}

#showBG {
  background: #4B2D69;
}

#hideBG {
  background: clear;
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