<template>
  <div class="container" >
    <img 
      v-if="device === 'DESKTOP' || device === 'MOBILE' "
      class="background"
      src="~/static/img/MAIN-DESKTOP.png"
    >
    <img 
      v-else-if="device === 'TABLET'"
      class="background"
      src="~/static/img/MAIN-TABLET.png"
    >

		<WatchNow />

		<SideBar 
      :dataState="sideBar" 
      :handleAction="handleAction"
    />

    <LiveChatModal 
      :dataState="dataState"
      :addNewMessage="addNewMessage"
      :toggleRegisterModal="toggleRegisterModal"
      :showLiveChatModal="showLiveChatModal" 
      :toggleLiveChatModal="toggleLiveChatModal"
    />

		<PlayfestLogo />

    <RundownModal 
      :showRundownModal="showRundownModal" 
      :toggleRundownModal="toggleRundownModal"
    />

    <RegisterModal 
      :reloadPage="reloadPage"
      :showRegisterModal="showRegisterModal" 
      :toggleRegisterModal="toggleRegisterModal"
    />
    
		<nuxt-link to="/art-area">
      <LocationTag :areaTitle="'ART AREA'" id="art-area"/>
		</nuxt-link>
    
    <nuxt-link to="/entertainment-area">
      <LocationTag :areaTitle="'OFFICIAL ENTERTAINMENT AREA PARTNER'" id="entertainment-area"/>
    </nuxt-link>

    <nuxt-link to="/ideas-area">
      <LocationTag :areaTitle="'IDEAS AREA'" id="ideas-area"/>
    </nuxt-link>
    
  </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'
import WatchNow from '../components/WatchNow.vue'
import LocationTag from '../components/LocationTag.vue'
import PlayfestLogo from '../components/PlayfestLogo.vue'
import RundownModal from '../components/RundownModal.vue'
import RegisterModal from '../components/RegisterModal.vue'
import LiveChatModal from '../components/LiveChatModal.vue'
import BubbleChatButton from '../components/BubbleChatButton.vue'
import PrimaryMapMarker from '../components/PrimaryMapMarker.vue'
import dummyData from './state'
export default {
  components: {
    SideBar,
    WatchNow,
    LocationTag,
		PlayfestLogo,
    RundownModal,
    RegisterModal,
    LiveChatModal,
		PrimaryMapMarker,
		BubbleChatButton,
  },
  data() {
    return {
      dataState: dummyData,
      showRegisterModal: true,
      showRundownModal: true,
      showLiveChatModal: true,
      sideBar: ['RUNDOWN', 'LIVE CHAT'],
      device: this.$store.getters['app/getDevice']
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
        case 'LIVE CHAT':
          this.showLiveChatModal = !this.showLiveChatModal
          break;
      }
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
    toggleLiveChatModal() {
      this.showLiveChatModal = !this.showLiveChatModal
    },
    addNewMessage(newMessage) {
      this.dataState.push(newMessage)
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
    })
    // const orientation = window.screen.orientation.type
    // if (orientation === "portrait-primary") {
    //     let inHeight = window.innerWidth * 0.01;
    //     let inWidth = window.innerWidth * 0.01;
    //     document.documentElement.style.setProperty('--vh', `${vh}px`);
    //     document.documentElement.style.setProperty('--vh', `${vh}px`);
    //   } else if (orientation === "landscape-primary") {
    //     let inHeight = window.innerHeight * 0.01;
    //     let inWidth = window.innerHeight * 0.01;
    //     document.documentElement.style.setProperty('--vh', `${vh}px`);
    //   }
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
    z-index: 1;
    position: relative;
    width: 100%;
    height: 100vh;
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

#art-area {
  top: 45%;
  left: 20%;

}

#entertainment-area {
  top: 20%;
  left: 35%;
}

#ideas-area {
  top: 45%;
  left: 70%;
}

span {
  font-size: 16px;
  color: #ffffff;
  font-weight: 800;
  line-height: 11px;
  font-style: normal;
  letter-spacing: 0.1em;
  font-family: 'Narasi Sans Bold';
  @media (max-width: 1024px) {
    font-size: 12px;
  }
}

h2 {
  color: #4B2D69;
  font-weight: bold;
  line-height: 200%;
  font-style: normal;
  text-align: center;
  letter-spacing: 0.25em;
  font-family: 'Narasi Sans Bold';
  text-shadow: 0px 0px 2px rgba(255, 255, 255, 0.25), 0px 0px 20px #FFFFFF;
}

h3 {
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