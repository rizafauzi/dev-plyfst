<template>
  <div class="container" >
    <img 
      class="background"
      src="~/static/img/art-area-1920x1080.png" 
      alt="image"
    >
    <WatchNow />

		<SideBar 
      :dataState="sideBar" 
      :handleAction="handleAction"
    />

		<PlayfestLogo />

    <div @click="toggleCinemaModal()" class="area-title w-auto h-auto" id="play-cinema">
      <PrimaryMapMarker />
    </div>
    
    <div @click="$router.replace({ path: `/art-area/art-house` })" >
      <PrimaryMapMarker class="area-title w-auto h-auto" id="art-gallery"/>
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
import BackButton from '../../components/BackButton.vue'
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
      showCinemaModal: true,
      showRundownModal: true,
      showLiveChatModal: true,
      sideBar: ['RUNDOWN', 'MAIN MAP', 'LIVE CHAT'],
      currentRoute: 'ART AREA',
      routing: [
        {title: 'IDEAS AREA', route: '/ideas-area'}, 
        {title: 'ENTERTAINMENT AREA', route: '/entertainment-area'}
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
    toggleCinemaModal() {
      this.showCinemaModal = !this.showCinemaModal
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

/* #talkshow.area-title {
  top: 17%;
  left: 41%;
  @media (max-width: 1024px) {
    top: 20%;
    left: 40%;
  }
} */

#play-cinema.area-title {
  top: 48%;
  left: 48%;
}

#art-gallery.area-title {
  top: 20%;
  left: 55%;
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