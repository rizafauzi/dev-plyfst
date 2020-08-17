<template>
  <div>
    <div v-show="showMarketModal" @click="toggleMarketModal()" class="backdrop" />
    <WatchNow v-if="showMarketModal" id="popup" />
    <div >
      <div class="market-wrapper" v-bind:id="[showMarketModal ? 'expand' : 'collapse']" >
        <img 
          class="market-background"
          src="~/static/img/background-map-1440x900.png" 
          alt="cek"
        >
        <div class="market-container" >
          <div class="market-header">
            <div @click="toggleMarketModal()" >
              <BackButton />
            </div>
          </div>
          <div class="market-content">
            <div 
              v-for="(data, index) in dataState" 
              :key="`${index}`" 
              class="market-each"
              @click="$router.replace({ path: data.route })" 
            >
              <div class="market-image">
                <img 
                  v-if="data.title === 'FOOD & BEVERAGE'"
                  class="market-building"
                  src="~/static/img/fb-building.png" 
                  alt="cek"
                >
                <img 
                  v-if="data.title === 'MERCHANDISE'"
                  class="market-building"
                  src="~/static/img/merch-building.png" 
                  alt="cek"
                >
                <span class="sm:text-sm lg:text-lg xl:text-2xl">{{data.title}}</span>
              </div>
              <div class="market-description">
                <p class="sm:text-xs lg:text-sm xl:text-tiny">{{data.description}}</p>
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
          title: 'FOOD & BEVERAGE',
          route: '/entertainment-area/food-beverage',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
          id: 2,
          title: 'MERCHANDISE',
          route: '/entertainment-area/merchandise',
          description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
      ]
    }
  },
  props: {
    showMarketModal: {
			type: Boolean,
			default() {
				return false
			}
		},
    toggleMarketModal: {
			type: Function
		},
  },
  mounted() {
    this.toggleMarketModal()
  }
}
</script>

<style lang="scss" scoped>

#popup {
  z-index: 32;
}

.backdrop {
  top: 0px;
  left: 0px;
  z-index: 25;
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(75, 45, 105, 0.5);
}

.market-wrapper {
  width: 80%;
  z-index: 30;
  height: 100%;
  display: flex;
  position: absolute;
  background: #FFFFFF;
  flex-direction: column;
  .market-background {
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    object-fit: cover;
    position: absolute;
  }
  .market-container {
    width: 98%;
    height: 100%;
    margin-left: 2%;
    position: absolute;
    flex-direction: column;
  }
  .market-header {
    width: 100%;
    height: 10%;
    z-index: 35;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .market-content {
    width: 98%;
    height: 88%;
    display: flex;
    justify-content: center;
    .market-each {
      width: 45%;
      padding: 1%;
      height: 100%;
      display: flex;
      margin-right: 1%;
      border-radius: 15px;
      background: #4B2D69;
      flex-direction: column;
      .market-image {
        width: 100%;
        height: 70%;
        padding: 5%;
        display: flex;
        border-radius: 10px;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        background-image: radial-gradient(#862991, #1A0E59);
        .market-building {
          object-fit: contain;
          width: 80%;
          height: 80%
        }
      }
      .market-description {
        padding: 5%;
        height: 30%;
        display: flex;
        margin-top: 3%;
        text-align: justify;
        border-radius: 10px;
        background: #68567A;
        text-overflow: ellipsis; 
        align-items: flex-start;
        justify-content: flex-start;
      }
    }
  }
}

#expand.market-wrapper {
  top: 0;
  left: 20%;
  animation: fadeIn 400ms ease-in-out 0s 1 normal forwards;
}

#collapse.market-wrapper {
  top: 0;
  left: 100%;
  animation: fadeOut 400ms ease-in-out 0s 1 normal forwards;
}

.market-each:hover {
  cursor: pointer;
  -webkit-filter: drop-shadow(5px 5px 5px #FFFFFF);
  filter: drop-shadow(0px 0px 10px #FFFFFF);
}

.market-content::-webkit-scrollbar { 
  width: 0;
  height: 0;
  display: none;
}

p {
  color: #FFFFFF;
  font-weight: bold;
  line-height: 200%;
  font-style: normal;
  letter-spacing: 0.1em;
  font-family: 'Narasi Sans Light';
}

span {
  color: #ffffff;
  margin-top: 8%;
  font-weight: 800;
  line-height: 11px;
  font-style: normal;
  letter-spacing: 0.1em;
  font-family: 'Narasi Sans ExtraBold';
  filter: drop-shadow(0px 0px 3px #000000);
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

</style>