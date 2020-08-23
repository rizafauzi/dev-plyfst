<template>
  <div class="container" >
    <img 
      class="background"
      src="~/static/img/play-cinema-indoor.jpg" 
      alt="cek"
    >
    <WatchNow />
    <div @click="$router.replace({  path: '/art-area' })">
      <BackButton />
    </div>

    <div class="current-playing">
      <iframe 
        class="iframe"
        :src="currentPlaying" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>

    <SideBar 
      :dataState="sideBar" 
      :handleAction="handleAction"
    />

    <NavigationModal 
      :routing="routing" 
      :currentRoute="currentRoute"
    />

    <ChatSession 
      :dataState="dataState"
      :addNewMessage="addNewMessage"
    />

    <OrientationModal 
      :showOrientationModal="showOrientationModal" 
      :toggleOrientationModal="toggleOrientationModal"
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
import ChatSession from '../../components/ChatSession.vue'
import RundownModal from '../../components/RundownModal.vue'
import NavigationModal from '../../components/NavigationModal.vue'
import OrientationModal from '../../components/OrientationModal.vue'
import BubbleChatButton from '../../components/BubbleChatButton.vue'
import PrimaryMapMarker from '../../components/PrimaryMapMarker.vue'
import dummyData from './state'
export default {
  components: {
    SideBar,
    WatchNow,
    BackButton,
    ChatSession,
    RundownModal,
    NavigationModal,
    OrientationModal,
    BubbleChatButton,
    PrimaryMapMarker,
  },
  data() {
		return {
      showRundownModal: true,
      showOrientationModal: true,
      currentRoute: 'CINEMA AREA',
      currentPlaying: this.$store.state.currentPlaying.url_video,
      routing: [
        {title: 'ENTERTAINMENT AREA', route: '/art-area'},
        {title: 'ENTERTAINMENT AREA', route: '/entertainment-area'},
        {title: 'IDEAS AREA', route: '/ideas-area'}, 
      ],
      sideBar: this.$store.getters['app/getDevice'] === 'DESKTOP' ? ['RUNDOWN', 'MAIN MAP'] : ['RUNDOWN', 'MAIN MAP', 'MODE'],
      dataState: dummyData
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
      case 'MODE':
          this.showOrientationModal = true
          break;
        case 'MAIN MAP':
          this.$router.replace({  path: '/home' })
          break;
      }
    },
    toggleRundownModal() {
      this.showRundownModal = !this.showRundownModal
    },
    toggleOrientationModal() {
      this.showOrientationModal = !this.showOrientationModal
    },
    addNewMessage(newMessage) {
      this.dataState.push(newMessage)
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
  .current-playing {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    height: 100vh;
    position: fixed;
    align-items: center;
    justify-content: center;
    .iframe {
      width: 34%;
      height: 35%;
      @media (max-width: 1024px) {
        width: 45%;
        height: 35%;
      }
    }
  }
}

#run-down {
  right: 2%;
  top: 65px;
}

#main-map {
  right: 2%;
  top: 200px;
}

#chat-bubble {
  right: 2%;
  top: 345px;
}
</style>