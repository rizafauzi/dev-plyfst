<template>
  <div class="container" >

    <img 
      v-if="device === 'DESKTOP' || device === 'MOBILE' "
      class="background"
      src="~/static/img/ENTERTAINMENT-DESKTOP.png"
    >
    <img 
      v-else-if="device === 'TABLET'"
      class="background"
      src="~/static/img/ENTERTAINMENT-TABLET.png"
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
      :dataState="dataState"
      :addNewMessage="addNewMessage"
      :toggleRegisterModal="toggleRegisterModal"
      :showLiveChatModal="showLiveChatModal" 
      :toggleLiveChatModal="toggleLiveChatModal"
    />

    <RundownModal 
      :reloadPage="reloadPage"
      :showRundownModal="showRundownModal" 
      :toggleRundownModal="toggleRundownModal"
    />

    <RegisterModal 
      :reloadPage="reloadPage"
      :showRegisterModal="showRegisterModal" 
      :toggleRegisterModal="toggleRegisterModal"
    />

  </div>
</template>

<script>
import SideBar from '../../components/SideBar.vue'
import WatchNow from '../../components/WatchNow.vue'
import CotgModal from '../../components/CotgModal.vue'
import PlayfestLogo from '../../components/PlayfestLogo.vue'
import RundownModal from '../../components/RundownModal.vue'
import RegisterModal from '../../components/RegisterModal.vue'
import LiveChatModal from '../../components/LiveChatModal.vue'
import PlayStageModal from '../../components/PlayStageModal.vue'
import TheMarketModal from '../../components/TheMarketModal.vue'
import NavigationModal from '../../components/NavigationModal.vue'
import PrimaryMapMarker from '../../components/PrimaryMapMarker.vue'
import dummyData from './state'
export default {
  components: {
    SideBar,
    WatchNow,
    CotgModal,
    RundownModal,
    PlayfestLogo,
    RegisterModal,
    LiveChatModal,
    TheMarketModal,
    PlayStageModal,
    NavigationModal,
    PrimaryMapMarker
  },
  data() {
		return {
      karaokeUrl: '',
      showModal: true,
      showCotgModal: true,
      dataState: dummyData,
      showRegisterModal: true,
      showMarketModal: true,
      showRegisterModal: true,
      showRundownModal: true,
      showLiveChatModal: true,
      device: this.$store.getters['app/getDevice'],
      currentRoute: 'OFFICIAL ENTERTAINMENT AREA PARTNER',
      routing: [
        {title: 'IDEAS AREA', route: '/ideas-area'}, 
        {title: 'ART AREA', route: '/art-area'}
      ],
      sideBar: ['RUNDOWN', 'MAIN MAP', 'LIVE CHAT'],
		}
  },
  async fetch() {
    let { data } = await this.$axios.get("/karaoke");
    this.karaokeUrl = data.url_video
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
          this.$router.replace({  path: '/home' })
          break;
        case 'LIVE CHAT':
          this.showLiveChatModal = !this.showLiveChatModal
          break;
      }
    },
    addNewMessage(newMessage) {
      this.dataState.push(newMessage)
      this.$forceUpdate()
    },
    reloadPage() {
      window.location.reload()
    },
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleCotgModal() {
      this.showCotgModal = !this.showCotgModal
    },
    reloadPage() {
      window.location.reload()
    },
    toggleRegisterModal() {
      this.showRegisterModal = !this.showRegisterModal
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
  left: 26%;
  @media (max-width: 1023px) {
    top: 30%;
    left: 21%;
  }
}

#playstage.area-title {
  top: 13%;
  left: 49%;
}

#the-market.area-title {
  top: 50%;
  left: 48%;
}

#cotg.area-title {
  top: 27%;
  left: 70%;
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