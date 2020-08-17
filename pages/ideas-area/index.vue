<template>
  <div class="container" >
    <img 
      class="background"
      src="~/static/img/ideas-area-1440x900.png" 
      alt="cek"
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

    <div @click="toggleNetworkModal()">

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
      :showLiveChatModal="showLiveChatModal" 
      :toggleLiveChatModal="toggleLiveChatModal"
    />

    <NetworkModal 
      :showNetworkModal="showNetworkModal" 
      :toggleNetworkModal="toggleNetworkModal"
    />
    
  </div>
</template>

<script>
import SideBar from '../../components/SideBar.vue'
import WatchNow from '../../components/WatchNow.vue'
import RundownModal from '../../components/RundownModal.vue'
import PlayfestLogo from '../../components/PlayfestLogo.vue'
import NetworkModal from '../../components/NetworkModal.vue'
import LiveChatModal from '../../components/LiveChatModal.vue'
import NavigationModal from '../../components/NavigationModal.vue'
import PrimaryMapMarker from '../../components/PrimaryMapMarker.vue'
export default {
  components: {
    SideBar,
    WatchNow,
    RundownModal,
    NetworkModal,
    PlayfestLogo,
    LiveChatModal,
    NavigationModal,
    PrimaryMapMarker
  },
  data() {
		return {
      showModal: false,
      showNetworkModal: true,
      showRundownModal: true,
      showLiveChatModal: true,
      currentRoute: 'IDEAS AREA',
      routing: [
        {title: 'ENTERTAINMENT AREA', route: '/entertainment-area'}, 
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
    toggleRundownModal() {
      this.showRundownModal = !this.showRundownModal
    },
    toggleLiveChatModal() {
      this.showLiveChatModal = !this.showLiveChatModal
    },
    toggleNetworkModal() {
      this.showNetworkModal = !this.showNetworkModal
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

.area-title:hover {
  cursor: pointer;
  -webkit-filter: drop-shadow(5px 5px 5px #FFFFFF);
  filter: drop-shadow(0px 5px 10px #FFFFFF);
}

#network-lounge.area-title {
  top: 28%;
  left: 27%;
  @media (max-width: 1024px) {
    top: 30%;
    left: 21%;
  }
}

#talkshow.area-title {
  top: 17%;
  left: 41%;
  @media (max-width: 1024px) {
    top: 20%;
    left: 40%;
  }
}

#workshop.area-title {
  top: 50%;
  left: 48%;
}

#conference.area-title {
  top: 17%;
  left: 75%;
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