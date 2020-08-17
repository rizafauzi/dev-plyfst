<template>
  <div class="container" >
    <img 
      class="background"
      src="~/static/img/entertainment-area-1920x1080.png" 
      alt="cek"
    >
    <WatchNow />

		<SideBar 
      :dataState="sideBar" 
      :handleAction="handleAction"
    />

		<PlayfestLogo />
    <div @click="$router.replace({ path: `/entertainment-area/karaoke-room` })">
      <PrimaryMapMarker class="area-title" id="karaoke"/>
    </div>

    <div @click="toggleModal()">
      <PrimaryMapMarker class="area-title" id="playstage"/>
    </div>

    <div @click="toggleMarketModal()">
      <PrimaryMapMarker class="area-title" id="the-market"/>
    </div>

    <!-- @click="$router.replace({ path: `/entertainment-area/cotg` })" -->
    <div @click="toggleCotgModal()">
      <PrimaryMapMarker class="area-title" id="cotg"/>
    </div>
    
    <NavigationModal 
      :routing="routing" 
      :currentRoute="currentRoute"
    />

    <PlayStageModal 
      :showModal="showModal" 
      :toggleModal="toggleModal"
    />
    
    <CotgModal 
      :showCotgModal="showCotgModal" 
      :toggleCotgModal="toggleCotgModal"
    />

    <TheMarketModal 
      :showMarketModal="showMarketModal" 
      :toggleMarketModal="toggleMarketModal"
    />

    <LiveChatModal 
      :showLiveChatModal="showLiveChatModal" 
      :toggleLiveChatModal="toggleLiveChatModal"
    />

    <RundownModal 
      :showRundownModal="showRundownModal" 
      :toggleRundownModal="toggleRundownModal"
    />

  </div>
</template>

<script>
import SideBar from '../../components/SideBar.vue'
import WatchNow from '../../components/WatchNow.vue'
import CotgModal from '../../components/CotgModal.vue'
import PlayfestLogo from '../../components/PlayfestLogo.vue'
import RundownModal from '../../components/RundownModal.vue'
import LiveChatModal from '../../components/LiveChatModal.vue'
import PlayStageModal from '../../components/PlayStageModal.vue'
import TheMarketModal from '../../components/TheMarketModal.vue'
import NavigationModal from '../../components/NavigationModal.vue'
import PrimaryMapMarker from '../../components/PrimaryMapMarker.vue'
export default {
  components: {
    SideBar,
    WatchNow,
    CotgModal,
    RundownModal,
    PlayfestLogo,
    LiveChatModal,
    TheMarketModal,
    PlayStageModal,
    NavigationModal,
    PrimaryMapMarker
  },
  data() {
		return {
      showModal: true,
      showCotgModal: true,
      showMarketModal: true,
      showRundownModal: true,
      showLiveChatModal: true,
      currentRoute: 'ENTERTAIMENT AREA',
      routing: [
        {title: 'IDEAS AREA', route: '/ideas-area'}, 
        {title: 'ART AREA', route: '/art-area'}
      ],
      sideBar: ['RUNDOWN', 'MAIN MAP', 'LIVE CHAT'],
		}
	},
  props: {
		items: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	methods: {
    handleAction(action) {
      switch(action) {
        case 'RUNDOWN':
          this.showRundownModal = !this.showRundownModal
          break;
        case 'MAIN MAP':
          this.$router.replace({  path: '/' })
          break;
        case 'LIVE CHAT':
          this.showLiveChatModal = !this.showLiveChatModal
          break;
      }
    },
		isDesktop() {
      if (process.browser) {
        if (window.innerWidth >= 1024) {
          return true
            }
        }
    },
    isMobile() {
      if (process.browser) {
        if (window.innerWidth <= 768) {
          return true
          }
      }
    },
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleCotgModal() {
      this.showCotgModal = !this.showCotgModal
    },
    toggleRundownModal() {
      this.showRundownModal = !this.showRundownModal
    },
    toggleMarketModal() {
      this.showMarketModal = !this.showMarketModal
    },
    toggleLiveChatModal() {
      this.showLiveChatModal = !this.showLiveChatModal
    },
    selectArtArea() {
      console.log('MASUK CUY')
    },
	}
}
</script>


<style lang="scss" scoped>
.container {
	max-width: 100%;
  height: 100vh;
  overflow: hidden;
  padding: 0 0% 0 0%;
  .background {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    position: fixed;
    overflow: hidden;
    object-fit: cover;
  }

	.columns {
		width: 100%;
    height: 100vh;
		display: flex;
    align-items: center;
    background: #ffffff;
    flex-direction: column;
    justify-content: center;
	}
	@media (max-width: 1023px) {
		padding: 0;
		.columns {
      display: absolute;
		}
	}
}

.area-title {
  display: flex;
  position: absolute;
  align-items: center;
  border-radius: 125px;
  flex-direction: column;
  justify-content: center;
}

.area-title:hover {
  cursor: pointer;
  filter: drop-shadow(0px 5px 10px #FFFFFF);
}

#karaoke.area-title {
  top: 32%;
  left: 27%;
  @media (max-width: 1023px) {
    top: 30%;
    left: 21%;
  }
}

#playstage.area-title {
  top: 15%;
  left: 42%;
  @media (max-width: 1023px) {
    top: 20%;
    left: 40%;
  }
}

#the-market.area-title {
  top: 50%;
  left: 48%;
}

#cotg.area-title {
  top: 42%;
  left: 72%;
}

span {
  font-size: 28px;
  color: #ffffff;
  font-weight: 800;
  line-height: 11px;
  font-style: normal;
  letter-spacing: 0.1em;
  font-family: 'Narasi Sans ExtraBold';
  @media (max-width: 1024px) {
    font-size: 20px;
  }
}

#event-by {
  font-size: 24px;
  font-family: 'Narasi Sans Light';
}

h2 {
  font-size: 18px;
  color: #4B2D69;
  font-weight: bold;
  line-height: 200%;
  font-style: normal;
  text-align: center;
  letter-spacing: 0.25em;
  font-family: 'Narasi Sans Bold';
  text-shadow: 0px 0px 2px rgba(255, 255, 255, 0.25), 0px 0px 20px #FFFFFF;
  @media (max-width: 1100px) {
    font-size: 14px;
  }
}

h3 {
  font-size: 16px;
  color: #4B2D69;
  font-weight: bold;
  line-height: 200%;
  font-style: normal;
  text-align: center;
  letter-spacing: 0.15em;
  font-family: 'Narasi Sans Light';
  text-shadow: 0px 0px 2px rgba(255, 255, 255, 0.25), 0px 0px 20px #FFFFFF;
  @media (max-width: 1024px) {
    font-size: 12px;
  }
}



</style>