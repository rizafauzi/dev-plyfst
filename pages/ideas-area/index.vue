<template>
  <div class="container" >
    <img 
      class="background"
      src="~/static/img/ideas-area-1440x900.png" 
      alt="image"
    >
    <WatchNow />

		<SideBar 
      :dataState="sideBar" 
      :handleAction="handleAction"
    />

		<PlayfestLogo />

    <RundownModal 
      :showRundownModal="showRundownModal" 
      :toggleRundownModal="toggleRundownModal"
    />

    <div @click="onSelectNetwork()">
      <PrimaryMapMarker class="area-title" id="network-lounge"/>
    </div>

    <div  @click="$router.replace({ path: `/ideas-area/talkshow` })">
      <PrimaryMapMarker class="area-title" id="talkshow"/>
    </div>
    
    <div  @click="$router.replace({ path: `/ideas-area/workshop` })">
      <PrimaryMapMarker class="area-title" id="workshop"/>
    </div>

    <div @click="$router.replace({ path: `/ideas-area/conference-room` })">
      <PrimaryMapMarker class="area-title" id="conference"/>
    </div>

    <NavigationModal 
      :routing="routing" 
      :currentRoute="currentRoute"
    />

    <LiveChatModal 
      :dataState="dataState"
      :addNewMessage="addNewMessage"
      :toggleRegisterModal="toggleRegisterModal"
      :showLiveChatModal="showLiveChatModal" 
      :toggleLiveChatModal="toggleLiveChatModal"
    />

    <NetworkModal 
      :showNetworkModal="showNetworkModal" 
      :toggleNetworkModal="toggleNetworkModal"
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
import RegisterModal from '../../components/RegisterModal.vue'
import RundownModal from '../../components/RundownModal.vue'
import PlayfestLogo from '../../components/PlayfestLogo.vue'
import NetworkModal from '../../components/NetworkModal.vue'
import LiveChatModal from '../../components/LiveChatModal.vue'
import NavigationModal from '../../components/NavigationModal.vue'
import PrimaryMapMarker from '../../components/PrimaryMapMarker.vue'
import dummyData from './state'
export default {
  components: {
    SideBar,
    WatchNow,
    RegisterModal,
    RundownModal,
    NetworkModal,
    PlayfestLogo,
    LiveChatModal,
    NavigationModal,
    PrimaryMapMarker
  },
  data() {
		return {
      networkUrl: '',
      talkshowUrl: '',
      workshopUrl: '',
      conferenceUrl: '',
      showModal: false,
      dataState: dummyData,
      showRegisterModal: true,
      showNetworkModal: true,
      showRegisterModal: true,
      showRundownModal: true,
      showLiveChatModal: true,
      currentRoute: 'IDEAS AREA',
      routing: [
        {title: 'OFFICIAL ENTERTAINMENT AREA PARTNER', route: '/entertainment-area'}, 
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
  async fetch() {
    let dataNetwork = await this.$axios.get("/network-lounge");
    this.networkUrl = dataNetwork.data.url_video
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
    onSelectNetwork() {
      this.$store.dispatch('currentPlaying/setNetwork', this.networkUrl)
      this.toggleNetworkModal()
    },
    reloadPage() {
      window.location.reload()
    },
    toggleRegisterModal() {
      this.showRegisterModal = !this.showRegisterModal
    },
    toggleNetworkModal() {
      this.showNetworkModal = !this.showNetworkModal
    },
    toggleRundownModal() {
      this.showRundownModal = !this.showRundownModal
    },
    toggleLiveChatModal() {
      this.showLiveChatModal = !this.showLiveChatModal
    },
    addNewMessage(newMessage) {
      this.dataState.push(newMessage)
      this.$forceUpdate()
    }
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

#network-lounge.area-title {
  top: 26%;
  left: 27%;
  @media (max-width: 1024px) {
    top: 30%;
    left: 21%;
  }
}

#talkshow.area-title {
  top: 14%;
  left: 40%;
  @media (max-width: 1024px) {
    top: 20%;
    left: 40%;
  }
}

#workshop.area-title {
  top: 50%;
  left: 49%;
}

#conference.area-title {
  top: 13%;
  left: 71%;
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