<template>
  <div>
    <div @click="modalToggle()"  class="live-now-container">
      <div class="live-description">
        <p class="marquee">
          <span class="sm:text-xxs lg:text-xl">ISYANA SARASVATI ON PLAYSTAGE!!!</span>
        </p>
      </div>
      <div class="watch-now">
        <span class="sm:text-xxs lg:text-xl" >LIVE NOW</span>
      </div>
    </div>
    <div v-show="showModal" @click="modalToggle()" class="backdrop" />
    <div >
      <div class="map-wrapper" v-bind:id="[initial ? 'initial' : showModal ? 'map-expand' : 'map-collapse']">
          <img 
            class="background"
            src="~/static/img/aurora-background.png" 
            alt="image"
          >
          <div 
            v-for="(item, index) in filteredRoute()" 
            :key="index" class="watch-container" 
            v-bind:id="index % 2 === 0 ? 'odd' : 'even'"
            @click="navigate(item.route)"
            >
            <div class="watch-description-container">
              <h2>{{item.title}}</h2>
              <h3>{{`${item.start_time}-${item.end_time} | ${item.area}`}}</h3>
            </div>
            <div class="watch-button-container">
              <div class="watch-button">
                <h1>WATCH NOW</h1>
              </div>
            </div>
          </div>
          <div @click="modalToggle()"  class="live-now-expand">
            <div class="live-description">
              <p class="marquee">
                <span class="sm:text-xxs lg:text-xl">LIVE NOW: ISYANA SARASVATI ON PLAYSTAGE!!!</span>
              </p>
            </div>
            <div class="watch-now">
              <span class="sm:text-xxs lg:text-xl" >LIVE NOW</span>
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
      watchList: [
        {
          title: 'BTS - Dynamite',
          area: 'Entertainment Area',
          start_time: '16.50',
          end_time: '17.20',
          route: '/entertainment-area/karaoke-room'
        },
        {
          title: 'Narasi - Pandemi',
          area: 'Entertainment Area',
          start_time: '16.50',
          end_time: '17.20',
          route: '/ideas-area/conference-room'
        },
        {
          title: 'Lofi Hip Hop Radio',
          area: 'Ideas Area',
          start_time: '16.50',
          end_time: '17.20',
          route: '/ideas-area/talkshow'
        },
        {
          title: 'MXMTOON - Almost Home',
          area: 'Ideas Area',
          start_time: '16.50',
          end_time: '17.20',
          route: '/ideas-area/conference-room'
        }
      ],
      initial: false,
      showModal: false
    }
  },
  methods: {
    filteredRoute() {
      return this.watchList.filter(dt => dt.route !== this.$router.history.current.path)
    },
    modalToggle() {
      this.showModal = !this.showModal
      this.initial = false
    },
    navigate(route) {
      this.$router.replace({  path: route })
    }
  },
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
    // animation: smoothShow 500ms ease 0s 1 normal forwards;
  }

.map-wrapper {
  width: 40%;
  right: 0px;
  z-index: 20;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  flex-direction: column;
  @media (max-width: 1023px) {
    width: 30%;
  }
  .background {
    top: 0%;
    right: 0;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
    position: absolute;
    border-radius: 0px 0px 0px 60px;
  }
  #even {
    background: #4499A0;
  }
  #odd {
    background: #4B2D69;
  }
  .watch-container {
    width: 94%;
    z-index: 15;
    height: 10%;
    padding: 2%;
    display: flex;
    margin: 0% 3% 3% 3%;
    border-radius: 10px;
    // background: #4499A0;
    .watch-description-container {
      width: 60%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
    .watch-button-container {
      width: 40%;
      display: flex;
      align-items: center;
      justify-content: center;
      .watch-button {
        width: 90%;
        height: 80%;
        display: flex;
        border-radius: 50px;
        align-items: center;
        background: #96C6CA;
        justify-content: center;
      }
    }
  }

  .live-now-expand {
    width: 100%;
    height: 60px;
    z-index: 15;
    display: flex;
    padding-left: 2%;
    overflow: hidden;
    align-items: center;
    border-radius: 0px 0px 0px 60px;
    backdrop-filter: blur(5px);
    justify-content: flex-start;
    background: rgba(255, 255, 255, 0.4);
    @media (max-width: 1023px) {
      height: 8vh;
      padding-left: 2%;
    }
    .live-description {
      width: 60%;
      height: 100%;
      display: flex;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      align-items: center;
      flex-direction: row;
      justify-content: flex-start;
    }
    .watch-now {
      top: 0%;
      right: 0%;
      bottom: 0%;
      width: 40%;
      display: flex;
      position: absolute;
      align-items: center;
      background: #FF868D;
      justify-content: center;
      border-radius: 0px 0px 0px 60px;
    }
  }
  .map-title {
    width: 100%;
    height: 9%;
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
      width: 18%;
      height: 100%;
      display: flex;
      align-items: center;
      background: #96C6CA;
      justify-content: center;
    }
  }
}

.watch-container:hover {
  cursor: pointer;
  filter: drop-shadow(0px 0px 10px #FFFFFF);
}

#initial {
  top: calc(var(--vh, 1vh) * 100);
}

#map-collapse {
  top: calc(var(--vh, 1vh) * 100);
  animation: fadeOut 400ms ease-in-out 0s 1 normal forwards;
}

#map-expand {
  top: calc(var(--vh, 1vh) * 0);
  animation: fadeIn 400ms ease-in-out 0s 1 normal forwards;
}


.live-now-container {
  right: 0%;
  top: 0%;
  width: 40%;
  height: 60px;
  z-index: 15;
  display: flex;
  padding-left: 2%;
  overflow: hidden;
  position: absolute;
  align-items: center;
  backdrop-filter: blur(5px);
  justify-content: flex-start;
  border-radius: 0px 0px 0px 60px;
  background: rgba(255, 255, 255, 0.4);
  @media (max-width: 1023px) {
    height: 8vh;
    padding-left: 2%;
  }
  .live-description {
    width: 60%;
    height: 100%;
    display: flex;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
  }
  .watch-now {
    top: 0%;
    right: 0%;
    bottom: 0%;
    width: 40%;
    display: flex;
    position: absolute;
    align-items: center;
    background: #FF868D;
    justify-content: center;
    border-radius: 0px 0px 0px 60px;
  }
}

.live-now-container:hover {
  cursor: pointer;
}

#running-text {
  animation: runningtext 15s linear infinite normal forwards;
}

@keyframes runningtext {
  0% {
    margin-left: 0%;
  }
  10% {
    margin-left: 0%;
  }
  95% {
    margin-left: -90%;
  }
  100% {
    margin-left: -90%;
  }
}

h1 {
  font-size: 18px;
  color: #4B2D69;
  font-weight: bold;
  line-height: 100%;
  font-style: normal;
  letter-spacing: 0.1em;
  font-family: 'Narasi Sans Bold';
  @media (max-width: 1100px) {
    font-size: 16px;
  }
}

h2 {
  font-size: 18px;
  color: #FFFFFF;
  font-weight: bold;
  line-height: 100%;
  font-style: normal;
  letter-spacing: 0.1em;
  font-family: 'Narasi Sans Bold';
  filter: drop-shadow(0px 0px 5px #FFFFFF);
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
  letter-spacing: 0.15em;
  font-family: 'Narasi Sans Bold';
  filter: drop-shadow(0px 0px 5px #FFFFFF);
  @media (max-width: 1024px) {
    font-size: 12px;
  }
}

span {
  color: #ffffff;
  font-weight: 800;
  font-style: normal;
  letter-spacing: 0.1em;
  font-family: 'Narasi Sans Bold';
}

.marquee span {
  display: inline-block;
  animation: marquee 15s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translate(-0%, 0);
  }
  10% {
    transform: translate(-0%, 0);
  }
  100% {
    transform: translate(-120%, 0);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
	}
	to {
    transform: rotate(180deg);
	}
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
    z-index: 100;
    transform: translateY(100%);
	}
	to {
    z-index: 5;
    transform: translateY(0%);
	}
}

@keyframes fadeIn {
	from {
    z-index: 5;
    transform: translateY(-100%);
	}
	to {
    z-index: 100;
    transform: translateY(0%);
	}
}
</style>