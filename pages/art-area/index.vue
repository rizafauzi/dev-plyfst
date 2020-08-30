<template>
  <div class="container" >
    <img 
      v-if="device === 'DESKTOP' || device === 'MOBILE' "
      class="background"
      src="~/static/img/ART-DESKTOP.png"
    >
    <img 
      v-else-if="device === 'TABLET'"
      class="background"
      src="~/static/img/ART-TABLET.png"
    >
    <WatchNow />

		<SideBar 
      :dataState="sideBar" 
      :handleAction="handleAction"
    />

		<PlayfestLogo />

    <div @click="toggleCinemaModal()" class="area-title w-auto h-auto" id="play-cinema">
      <div class="area-description sm:p-1 sm:pl-5 sm:pr-5 md:pr-10 md:p-2 md:pl-10">
        <h3 class="sm:text-xs lg:text-base xl:text-lg">Sponsored by </h3>
        <img 
          class="logo-narasi"
          src="~/static/logo/narasi-brandmark-primary-violet.png" 
          alt="image"
        >
      </div>
      <div>
        <div class="location-icon">
          <img 
            class="icon-marker"
            src="~/static/icon/marker.png" 
            alt="image"
          >
        </div>
      </div>
    </div>
    
    <div 
      id="art-gallery"
      class="area-title w-auto h-auto" 
      @click="$router.replace({ path: `/art-area/art-house` })" 
    >
      <div>
        <div class="location-icon">
          <img 
            class="icon-marker"
            src="~/static/icon/marker.png" 
            alt="image"
          >
        </div>
      </div>
      <div class="area-description sm:p-1 sm:pl-5 sm:pr-5 md:pr-10 md:p-2 md:pl-10">
        <h3 class="sm:text-xs lg:text-base xl:text-lg">Sponsored by </h3>
        <img 
          class="logo-narasi"
          src="~/static/logo/narasi-brandmark-primary-violet.png" 
          alt="image"
        >
      </div>
    </div>
    
    <NavigationModal 
      :routing="routing" 
      :currentRoute="currentRoute"
    />

    <PlayCinemaModal 
      :showCinemaModal="showCinemaModal" 
      :toggleCinemaModal="toggleCinemaModal"
    />

    <LiveChatModal 
      :dataState="dataState"
      :toggleLoginModal="toggleLoginModal"
      :showLiveChatModal="showLiveChatModal" 
      :toggleLiveChatModal="toggleLiveChatModal"
    />

    <RundownModal 
      :showRundownModal="showRundownModal" 
      :toggleRundownModal="toggleRundownModal"
    />
    
    <LoginModal 
      :showLoginModal="showLoginModal" 
      :toggleLoginModal="toggleLoginModal"
    />

  </div>
</template>

<script>
import SideBar from '../../components/SideBar.vue'
import WatchNow from '../../components/WatchNow.vue'
import BackButton from '../../components/BackButton.vue'
import LoginModal from '../../components/LoginModal.vue'
import PlayfestLogo from '../../components/PlayfestLogo.vue'
import RundownModal from '../../components/RundownModal.vue'
import LiveChatModal from '../../components/LiveChatModal.vue'
import PlayCinemaModal from '../../components/PlayCinemaModal.vue'
import NavigationModal from '../../components/NavigationModal.vue'
import BubbleChatButton from '../../components/BubbleChatButton.vue'
import PrimaryMapMarker from '../../components/PrimaryMapMarker.vue'
import dummyData from './state'
export default {
  components: {
    SideBar,
    WatchNow,
    LoginModal,
    BackButton,
    RundownModal,
    PlayfestLogo,
    LiveChatModal,
    PlayCinemaModal,
    NavigationModal,
    BubbleChatButton,
    PrimaryMapMarker,
  },
  data() {
		return {
      dataState: dummyData,
      showLoginModal: false,
      showCinemaModal: true,
      showRundownModal: true,
      showLiveChatModal: true,
      showModal: this.$store.state.user.onLogin,
      device: this.$store.getters['app/getDevice'],
      sideBar: ['RUNDOWN', 'MAIN MAP', 'LIVE CHAT'],
      currentRoute: 'ART AREA',
      routing: [
        {title: 'IDEAS AREA', route: '/ideas-area'}, 
        {title: 'OFFICIAL ENTERTAINMENT AREA PARTNER', route: '/entertainment-area'}
      ],
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
          this.$router.replace({  path: '/home' })
          break;
        case 'LIVE CHAT':
          // this.toggleLoginModal()
          this.toggleLiveChatModal()
          break;
      }
    },
    toggleLoginModal() {
      this.showLoginModal = !this.showLoginModal
    },
    toggleCinemaModal() {
      this.showCinemaModal = !this.showCinemaModal
    },
    toggleRundownModal() {
      this.showRundownModal = !this.showRundownModal
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
  height: 100vh;
	max-width: 100%;
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
  opacity: 0.7;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: row;
  border-radius: 125px;
  justify-content: center;
  .location-icon {
    width: 90px;
    height: 90px;
    display: flex;
    align-items: center;
    border-radius: 100px;
    background: #ffffff;
    justify-content: center;
    @media (max-width: 1023px) {
      height: 65px;
      width: 65px;
    }
    @media (max-width: 1000px) {
      height: 40px;
      width: 40px;
    }
    .icon-marker {
      z-index: 100;
      opacity: 1;
      width: 50%;
      height: 50%;
      object-fit: contain;
    }
  }
  .area-description {
    margin: -30px;
    display: flex;
    position: relative;
    border-radius: 40px;
    align-items: center;
    background: #ffffff;
    justify-content: center;
    .logo-narasi {
      width: 10vh;
      margin-left: 10px;
    }
  }
}

.area-title:hover {
  opacity: 1;
  cursor: pointer;
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

/* #talkshow.area-title {
  top: 17%;
  left: 41%;
  @media (max-width: 1024px) {
    top: 20%;
    left: 40%;
  }
} */

#play-cinema.area-title {
  top: 45%;
  left: 38%;
}

#art-gallery.area-title {
  top: 20%;
  left: 50%;
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