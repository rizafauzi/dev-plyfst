<template>
  <div v-if="showModal" class="container">
    <div @click="toggleModal()" class="backdrop" />
    <WatchNow v-if="showModal" id="popup" />
    <div class="playstage-wrapper" v-bind:id="[showModal ? 'expand' : 'collapse']" >
      <img 
        class="playstage-background"
        src="~/static/img/background-map-1440x900.png" 
        alt="cek"
      >
      <div class="playstage-container" >
        <div class="playstage-header">
          <div @click="toggleModal()" >
            <BackButton />
          </div>
        </div>
        <div class="playstage-content">
          <div class="playstage-each">
            <div class="playstage-image">
              <img 
                class="playstage-building"
                src="~/static/img/play-stage-building.png" 
                alt="cek"
              >
              <span class="title-building sm:text-sm lg:text-lg xl:text-2xl">PLAY STAGE</span>
            </div>
            <div 
              v-for="(data, index) in dataState.slice(1)" :key="index" 
              class="playstage-description">
              <span>{{ index === 0 ? `UP NEXT : ${data.artist}` : `${data.start_time} - ${data.end_time} : ${data.artist}`}}</span>
            </div>
            <div class="playstage-description" id="rundown">
              <span id="purple">VIEW FULL RUNDOWN</span>
            </div>
          </div>
          <div class="current-playstage">
            <div class="live-now-wrapper">
              <div class="image-wrapper">
              </div>
              <div class="title-wrapper">
                <div class="time-description">
                  <h2>{{ dataState.length > 0 ? `LIVE NOW | ${dataState[0].start_time} - ${dataState[0].end_time} WIB` : 'OFF'}}</h2>
                </div>
                <div class="artist-title">
                  <h2>{{ dataState.length > 0 ? `${dataState[0].artist}` : 'OFF'}}</h2>
                </div>
              </div>
            </div>
            <div class="description-wrapper">
              <div class="description">
                <span>{{ dataState.length > 0 ? `${dataState[0].description}` : 'OFF'}}</span>
              </div>
              <div class="button-wrapper">
                <div class="enter-button">
                  <div @click="$router.replace({  path: '/entertainment-area/play-stage' })">
                    <h2 id="purple">ENTER AREA</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WatchNow from './WatchNow.vue'
import BackButton from './BackButton.vue'

export default {
  components: {
    WatchNow,
    BackButton
  },
  data() {
    return {
      dataState: [
        {
          id: 1,
          start_time: '16.00',
          end_time: '16.50',
          artist: 'ISYANA SARASVATI',
          description: 'Lorem Ipsum Dolor sit consectetur adipiscing elit, sedLorem Ipsum Dolor sit consectetur adipiscing elit, sed'
        },
        {
          id: 2,
          start_time: '17.00',
          end_time: '17.50',
          artist: 'TULUS',
          description: 'Lorem Ipsum Dolor sit consectetur adipiscing elit, sedLorem Ipsum Dolor sit consectetur adipiscing elit, sed'
        },
        {
          id: 3,
          start_time: '18.00',
          end_time: '18.30',
          artist: 'RAISA',
          description: 'Lorem Ipsum Dolor sit consectetur adipiscing elit, sedLorem Ipsum Dolor sit consectetur adipiscing elit, sed'
        },
        {
          id: 4,
          start_time: '18.35',
          end_time: '19.05',
          artist: 'TOMPI',
          description: 'Lorem Ipsum Dolor sit consectetur adipiscing elit, sedLorem Ipsum Dolor sit consectetur adipiscing elit, sed'
        },
      ]
    }
  },
  props: {
    showModal: {
			type: Boolean,
			default() {
				return false
			}
		},
    toggleModal: {
			type: Function
		},
  },
  mounted() {
    this.toggleModal()
  }
}
</script>

<style lang="scss" scoped>

#popup {
  z-index: 32;
}

.container {
  animation: smoothFade 400ms linear 0s 1 normal forwards;
  .backdrop {
    top: 0px;
    left: 0px;
    z-index: 25;
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(75, 45, 105, 0.5);
  }
}


.playstage-wrapper {
  width: 90%;
  z-index: 30;
  height: 100%;
  display: flex;
  position: absolute;
  background: #FFFFFF;
  flex-direction: column;
  .playstage-background {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
    position: absolute;
  }
  .playstage-container {
    width: 98%;
    height: 100%;
    margin-left: 2%;
    position: absolute;
    flex-direction: column;
  }
  .playstage-header {
    width: 100%;
    height: 10%;
    z-index: 35;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .playstage-content {
    width: 98%;
    height: 88%;
    display: flex;
    justify-content: space-between;
    .playstage-each {
      width: 30%;
      padding: 1%;
      height: 100%;
      display: flex;
      margin-right: 1%;
      border-radius: 25px;
      background: #4B2D69;
      flex-direction: column;
      .playstage-image {
        width: 100%;
        height: 70%;
        padding: 5%;
        display: flex;
        border-radius: 10px;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        background-image: radial-gradient(#862991, #1A0E59);
        .playstage-building {
          object-fit: contain;
          width: 80%;
          height: 80%
        }
        .title-building {
          color: #ffffff;
          margin-top: 8%;
          font-weight: 800;
          line-height: 11px;
          font-style: normal;
          letter-spacing: 0.1em;
          font-family: 'Narasi Sans ExtraBold';
          filter: drop-shadow(0px 0px 3px #000000);
        }
      }
      .playstage-description {
        padding: 3%;
        height: 10%;
        display: flex;
        margin-top: 3%;
        text-align: center;
        border-radius: 15px;
        align-items: center;
        background: #439AA0; 
        justify-content: center;
      }
      #rundown.playstage-description {
        color: #4A2D69;
        background: #AFE3F1;
      }
    }
    .current-playstage {
      width: 70%;
      padding: 1%;
      height: 100%;
      display: flex;
      border-radius: 30px;
      background: #4B2D69;
      flex-direction: column;
      .live-now-wrapper {
        width: 100%;
        height: 75%;
        display: flex;
        flex-direction: column;
        border-radius: 15px;
        .image-wrapper {
          width: 100%;
          height: 83%;
          background: #FFFFFF;
          border-radius: 20px 20px 0px 0px;
        }
        .title-wrapper {
          width: 100%;
          height: 17%;
          display: flex;
          flex-direction: row;
          background: #4B2D69;
          .time-description {
            width: 60%;
            height: 100%;
            display: flex;
            align-items: center;
            background: #68567A;
            justify-content: center;
            border-radius: 0px 0px 0px 20px;
          }
          .artist-title {
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            background: #51A7AD; 
            justify-content: center;
            border-radius: 0px 0px 20px 0px;
          }
        }
      }
      .description-wrapper {
        padding: 3%;
        height: 25%;
        width: 100%;
        display: flex;
        margin-top: 1%;
        text-align: center;
        flex-direction: row;
        border-radius: 20px;
        align-items: center;
        background: #68567A;
        justify-content: center;
        .description {
          padding: 1%;
          height: 100;
          width: 60%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        .button-wrapper {
          width: 40%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          .enter-button {
            width: 90%;
            height: 50%;
            display: flex;
            color: #4A2D69;
            border-radius: 50px;
            align-items: center;
            background: #AFE3F1;
            justify-content: center;
          }
        }
      }
    }
  }
}

#expand.playstage-wrapper {
  top: 0;
  left: 10%;
  animation: fadeIn 400ms ease-in-out 0s 1 normal forwards;
}

#collapse.playstage-wrapper {
  top: 0;
  left: 100%;
  animation: fadeOut 400ms ease-in-out 0s 1 normal forwards;
}

#rundown:hover {
  cursor: pointer;
  filter: drop-shadow(0px 0px 5px #FFFFFF);
}

.enter-button:hover {
  cursor: pointer;
  filter: drop-shadow(0px 0px 10px #FFFFFF);
}

.playstage-content::-webkit-scrollbar { 
  width: 0;
  height: 0;
  display: none;
}

span {
  font-size: 16px;
  color: #FFFFFF;
  font-weight: bold;
  line-height: 200%;
  font-style: normal;
  text-align: initial;
  letter-spacing: 0.1em;
  font-family: 'Narasi Sans Bold';
  @media (max-width: 1024px) {
    font-size: 12px;
  }
}

#purple {
  color: #4A2D69;
}

h2 {
  font-size: 24px;
  color: #FFFFFF;
  font-weight: bold;
  line-height: 200%;
  font-style: normal;
  letter-spacing: 0.1em;
  font-family: 'Narasi Sans Bold';
  @media (max-width: 1024px) {
    font-size: 16px;
  }
}


@keyframes fadeOut {
	from {
    transform: translateX(0%);
    opacity: 1;
	}
	to {
    transform: translateX(100%);
    opacity: 1;
	}
}

@keyframes fadeIn {
	from {
    transform: translateX(100%);
    opacity: 1;
	}
	to {
    transform: translateX(0%);
    opacity: 1;
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

</style>