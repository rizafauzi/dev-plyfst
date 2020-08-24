<template>
  <div class="container" >
    <!-- <img 
      class="art-area-building"
      src="~/static/img/art-area.png" 
    > -->
    <img 
      class="background"
      src="~/static/img/main-map-1920x1080.png" 
    >

		<WatchNow />

		<SideBar 
      :dataState="sideBar" 
      :handleAction="handleAction"
    />

    <LiveChatModal 
      :showLiveChatModal="showLiveChatModal" 
      :toggleLiveChatModal="toggleLiveChatModal"
    />

		<PlayfestLogo />

    <RundownModal 
      :showRundownModal="showRundownModal" 
      :toggleRundownModal="toggleRundownModal"
    />

    <LoginModal />
    
		<nuxt-link to="/art-area">
      <LocationTag :areaTitle="'ART AREA'" id="art-area"/>
		</nuxt-link>
    
    <nuxt-link to="/entertainment-area">
      <LocationTag :areaTitle="'ENTERTAINMENT AREA'" id="entertainment-area"/>
    </nuxt-link>

    <nuxt-link to="/ideas-area">
      <LocationTag :areaTitle="'IDEAS AREA'" id="ideas-area"/>
    </nuxt-link>
    
  </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'
import WatchNow from '../components/WatchNow.vue'
import LoginModal from '../components/LoginModal.vue'
import LocationTag from '../components/LocationTag.vue'
import PlayfestLogo from '../components/PlayfestLogo.vue'
import RundownModal from '../components/RundownModal.vue'
import LiveChatModal from '../components/LiveChatModal.vue'
import BubbleChatButton from '../components/BubbleChatButton.vue'
import PrimaryMapMarker from '../components/PrimaryMapMarker.vue'
export default {
  components: {
    SideBar,
    WatchNow,
    LoginModal,
    LocationTag,
		PlayfestLogo,
    RundownModal,
    LiveChatModal,
		PrimaryMapMarker,
		BubbleChatButton,
  },
  data() {
    return {
      showRundownModal: true,
      showLiveChatModal: true,
      sideBar: ['RUNDOWN', 'LIVE CHAT'],
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
    toggleLiveChatModal() {
      this.showLiveChatModal = !this.showLiveChatModal
    },
    toggleRundownModal() {
      this.showRundownModal = !this.showRundownModal
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
    z-index: 1;
    position: relative;
    width: 100%;
    height: 100vh;
    /* position: fixed; */
    /* overflow: hidden; */
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
  top: 32%;
  left: 13%;
}

#entertainment-area {
  top: 15%;
  left: 35%;
}

#ideas-area {
  top: 38%;
  left: 60%;
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