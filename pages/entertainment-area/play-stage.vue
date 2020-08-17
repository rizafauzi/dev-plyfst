<template>
  <div class="container" >
    <img 
      class="background"
      src="~/static/img/play-stage-indoor.png" 
      alt="cek"
    >
    <!-- <WatchNow /> -->
    <div @click="$router.replace({  path: '/entertainment-area' })">
      <BackButton />
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
      :disableLiveNow="true"
      :showRundownModal="showRundownModal" 
      :toggleRundownModal="toggleRundownModal"
    />

    <StreamingModal />
  </div>
</template>

<script>
import SideBar from '../../components/SideBar.vue'
import WatchNow from '../../components/WatchNow.vue'
import BackButton from '../../components/BackButton.vue'
import ChatSession from '../../components/ChatSession.vue'
import RundownModal from '../../components/RundownModal.vue'
import StreamingModal from '../../components/StreamingModal.vue'
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
    StreamingModal,
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
      routing: [
        {title: 'ENTERTAINMENT AREA', route: '/art-area'},
        {title: 'ENTERTAINMENT AREA', route: '/entertainment-area'},
        {title: 'IDEAS AREA', route: '/ideas-area'}, 
      ],
      sideBar: ['RUNDOWN', 'MAIN MAP', 'MODE'],
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
          this.$router.replace({  path: '/' })
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
}
</style>