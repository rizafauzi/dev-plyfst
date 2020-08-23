<template>
  <div>
    <div v-show="showModal" @click="modalToggle()" class="backdrop" />
    <div >
      <div class="map-wrapper" v-bind:id="[initial ? 'initial' : showModal ? 'map-expand' : 'map-collapse']">
          <img 
            class="background"
            src="~/static/img/aurora-background.png" 
            alt="cek"
          >
          <div @click="modalToggle()" class="map-title">
            <span class="shortcut-title sm:text-xxs lg:text-xl">{{ currentRoute }}</span>
            <div class="box-button" >
              <SvgLoader :iconName="'CHEVRON UP'" :wrapper="'NAVIGATION'" v-bind:id="[showModal ? 'chevron-up' : 'chevro-down']" />
            </div>
          </div>
          <div class="shortcut-modal" >
            <div @click="$router.replace({ path: '/home' })" >
              <div class="main-map-shortcut">
                <img 
                  class="background-button"
                  src="~/static/img/main-map-640x160.png" 
                  alt="cek"
                >
                <div class="button-text">
                  <span class="button-text sm:text-xxs lg:text-xl p-12">GO TO MAIN MAP</span>
                </div>
              </div>
            </div>
            <span class="sm:text-xxs lg:text-xl">MAP OF OTHER AREAS</span>

            <div v-for="(item, index) in routing" :key="index" >
              <div @click="$router.replace({ path: item.route })" >
                <div class="area-shortcut">
                  <img 
                    v-if="item.title === 'ART AREA'"
                    class="background-button"
                    src="~/static/img/art-area-640x160.png" 
                    alt="cek"
                  >
                  <img 
                    v-if="item.title === 'ENTERTAINMENT AREA'"
                    class="background-button"
                    src="~/static/img/entertainment-area-640x160.png" 
                    alt="cek"
                  >
                  <img 
                    v-if="item.title === 'IDEAS AREA'"
                    class="background-button"
                    src="~/static/img/ideas-area-640x160.png" 
                    alt="cek"
                  >
                  <div class="button-text">
                    <span class="button-text sm:text-xxs lg:text-xl p-12">{{item.title}}</span>
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
import SvgLoader from './SvgLoader.vue'
export default {
  components: {
    SvgLoader
  },
  props: {
    currentRoute: {
			type: String,
			default() {
				return 'MAIN MAP'
			}
		},
    routing: {
			type: Array,
			default() {
				return {}
			}
		}
  },
  data() {
		return {
      initial: true,
			showModal: false,
		}
  },
  methods: {
    modalToggle() {
      this.showModal = !this.showModal
      this.initial = false
    }
  }
}
</script>

<style lang="scss" scoped>

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

#chevron-up {
  animation: rotate 800ms ease-in-out 0s 1 normal forwards;
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
    transform: translateY(-92%);
	}
	to {
    transform: translateY(0%);
	}
}

@keyframes fadeIn {
	from {
    transform: translateY(92%);
	}
	to {
    transform: translateY(0%);
	}
}


.background {
  top: 9%;
  right: 0;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  position: absolute;
}

#initial {
  top: 92%;
}

#map-collapse {
  top: 92%;
  animation: fadeOut 400ms ease-in-out 0s 1 normal forwards;
}

#map-expand {
  top: 0px;
  animation: fadeIn 400ms ease-in-out 0s 1 normal forwards;
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
.shortcut-modal {
  top: 9%;
  width: 100%;
  height: 93%;
  padding: 5%;
  position: absolute;
  align-items: flex-start;
  background: rgba(75, 45, 105, 0.5);
  .main-map-shortcut {
    width: 100%;
    height: 20%;
    display: flex;
    margin-bottom: 3%;
    border-width: 8px;
    background: #96C6CA;
    border-radius: 20px;
    align-items: center;
    border-color: #4499A0;
    justify-content: center;
    @media (max-width: 1023px) {
      border-width: 5px;
      border-radius: 10px;
    }
    .background-button {
      top: 8%;
      right: 0;
      width: 100%;
      overflow: hidden;
      object-fit: fill;
      border-radius: 10px;
    }
    .button-text {
      height: 20%;
      width: 100%;
      display: flex;
      position: absolute;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0px 0px 10px #000000);
    }
  }
  .main-map-shortcut:hover {
    cursor: pointer;
    filter: drop-shadow(0px 0px 10px #FFFFFF);
  }
  .area-shortcut {
    width: 100%;
    height: 30%;
    display: flex;
    margin-top: 3%;
    margin-bottom: 2%;
    background: #96C6CA;
    border-width: 8px;
    border-radius: 20px;
    align-items: center;
    border-color: #4499A0;
    justify-content: center;
    @media (max-width: 1023px) {
      border-width: 5px;
      border-radius: 10px;
    }
    .background-button {
      top: 8%;
      right: 0;
      width: 100%;
      overflow: hidden;
      object-fit: fill;
      border-radius: 10px;
    }
    .button-text {
      height: 20%;
      width: 100%;
      display: flex;
      position: absolute;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0px 0px 10px #000000);
    }
  }
  .area-shortcut:hover {
    cursor: pointer;
    filter: drop-shadow(0px 0px 10px #FFFFFF);
  }
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