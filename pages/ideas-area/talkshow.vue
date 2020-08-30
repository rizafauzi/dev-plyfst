<template>
  <div class="container" >
    <img 
      class="background"
      src="~/static/img/talkshow-indoor.jpg" 
      alt="image"
    >
    <WatchNow />
    <div @click="$router.replace({  path: '/ideas-area' })">
      <BackButton />
    </div>

    <CurrentPlaying :currentPlaying="talkshowUrl"/>

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
import CurrentPlaying from '../../components/CurrentPlaying.vue'
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
    CurrentPlaying,
    NavigationModal,
    OrientationModal,
    BubbleChatButton,
    PrimaryMapMarker,
  },
  data() {
		return {
      talkshowUrl: '',
      showRundownModal: true,
      showOrientationModal: true,
      currentRoute: 'TALKSHOW ROOM',
      // currentPlaying: this.$store.state.currentPlaying.url_talkshow,
      routing: [
        {title: 'OFFICIAL ENTERTAINMENT AREA PARTNER', route: '/art-area'},
        {title: 'OFFICIAL ENTERTAINMENT AREA PARTNER', route: '/entertainment-area'},
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
  async fetch() {
    let dataTalkshow = await this.$axios.get("/talkshow")
    this.talkshowUrl = dataTalkshow.data.url_video
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
		isDesktop() {
        if (process.browser) {
            if (window.innerWidth >= 1024) {
                return true
            }
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
    isMobile() {
      if (process.browser) {
          if (window.innerWidth <= 768) {
              return true
          }
      }
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