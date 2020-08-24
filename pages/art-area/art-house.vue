<template>
  <div class="container" >
    <img 
      class="background"
      src="~/static/img/aurora-background.png" 
      alt="image"
    >
    <WatchNow />
    <div @click="$router.replace({  path: '/art-area' })">
      <BackButton />
    </div>

    <div class="carousel">
      <div class="slide">
        <div class="slide-image">
          <img 
            class="image-contain"
            src="~/static/img/aurora-background.png" 
          >
        </div>
        <div class="slide-story">
          <div class="slide-title">
            <span>
              Project Name by Creator Name
            </span>
          </div>
          <div class="slide-description">
            <p class="sm:text-xs lg:text-sm xl:text-tiny">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <NavigationModal 
      :routing="routing" 
      :currentRoute="currentRoute"
    />
  </div>
</template>

<script>
import SideBar from '../../components/SideBar.vue'
import WatchNow from '../../components/WatchNow.vue'
import BackButton from '../../components/BackButton.vue'
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
      currentRoute: 'ART HOUSE',
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

.carousel {
  top: 10%;
  left: 5%;
  width: 90%;
  height: 80%;
  position: absolute;
  background: #4A2D69;
  display: flex;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .slide {
    width: 90%;
    height: 95%;
    display: flex;
    border-radius: 15px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .slide-image {
      width: 55%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .image-contain {
        width: 100%;
        height: 100%;
        display: flex;
        object-fit: cover;
        border-radius: 10px;
      }
    }
    .slide-story {
      width: 45%;
      height: 100%;
      display: flex;
      margin-left: 1%;
      border-radius: 10px;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      .slide-title {
        width: 100%;
        height: 15%;
        padding: 2%;
        display: flex;
        margin-bottom: 2%;
        border-radius: 10px;
        background: #68567A;
        align-items: center;
      }
      .slide-description {
        width: 100%;
        height: 85%;
        padding: 4%;
        border-radius: 10px;
        background: #68567A;
      }
    }
  }
}

span {
  font-size: 16px;
  color: #FFFFFF;
  font-weight: bold;
  line-height: 200%;
  font-style: normal;
  text-align: initial;
  letter-spacing: 0.1em;
  font-family: 'Narasi Sans Bold';
  @media (max-width: 1024px) {
    font-size: 12px;
  }
}

p {
  color: #FFFFFF;
  font-weight: bold;
  line-height: 200%;
  font-style: normal;
  letter-spacing: 0.1em;
  font-family: 'Narasi Sans Light';
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