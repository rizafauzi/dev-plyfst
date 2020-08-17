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
    

		<nuxt-link to="/art-area">
			<div class="area-title w-auto h-auto" id="art-area">
				<PrimaryMapMarker />
				<div class="location-tag sm:mb-1 md:mb-2 sm:pl-4 sm:pr-4 sm:p-1 md:pr-6 md:pl-6">
					<h2 class="sm:text-sm lg:text-lg xl:text-xl">ART AREA</h2>
				</div>
				<div class="area-description sm:p-1 sm:pl-5 sm:pr-5 md:pr-10 md:p-2 md:pl-10">
					<h3 class="sm:text-xs lg:text-base xl:text-lg">Sponsored by </h3>
					<img 
						class="logo-narasi"
						src="~/static/logo/narasi-brandmark-primary-violet.png" 
						alt="cek"
					>
				</div>
			</div>
		</nuxt-link>
    
    <nuxt-link to="/entertainment-area">
      <div class="area-title w-auto h-auto" id="entertainment-area">
        <PrimaryMapMarker />
        <div class="location-tag sm:mb-1 md:mb-2 sm:pl-4 sm:pr-4 sm:p-1 md:pr-6 md:pl-6">
          <h2 class="sm:text-sm lg:text-lg xl:text-xl">ENTERTAINMENT AREA</h2>
        </div>
        <div class="area-description sm:p-1 sm:pl-5 sm:pr-5 md:pr-10 md:p-2 md:pl-10">
          <h3 class="sm:text-xs lg:text-base xl:text-lg">Sponsored by</h3>
          <img 
            class="logo-narasi"
            src="~/static/logo/narasi-brandmark-primary-violet.png" 
            alt="cek"
          >
        </div>
      </div>
    </nuxt-link>

		<nuxt-link to="/ideas-area">
			<div class="area-title w-auto  h-auto" id="ideas-area">
				<PrimaryMapMarker />
				<div class="location-tag sm:mb-1 md:mb-2 sm:pl-4 sm:pr-4 sm:p-1 md:pr-6 md:pl-6">
					<h2 class="sm:text-sm lg:text-lg xl:text-xl">IDEAS AREA</h2>
				</div>
				<div class="area-description sm:p-1 sm:pl-5 sm:pr-5 md:pr-10 md:p-2 md:pl-10">
					<h3 class="sm:text-xs lg:text-base xl:text-lg">Sponsored by</h3>
					<img 
						class="logo-narasi"
						src="~/static/logo/narasi-brandmark-primary-violet.png" 
						alt="cek"
					>
				</div>
			</div>
		</nuxt-link>
    
  </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'
import WatchNow from '../components/WatchNow.vue'
import PlayfestLogo from '../components/PlayfestLogo.vue'
import LiveChatModal from '../components/LiveChatModal.vue'
import RundownModal from '../components/RundownModal.vue'
import BubbleChatButton from '../components/BubbleChatButton.vue'
import PrimaryMapMarker from '../components/PrimaryMapMarker.vue'
export default {
  components: {
    SideBar,
		WatchNow,
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
  .art-area-building {
    left: 6%;
    top: 30%;
    z-index: 5;
    width: 40%;
    /* height: 100vh; */
    position: absolute;
    /* overflow: hidden; */
    object-fit: contain;
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

.art-area-building:hover {
  cursor: pointer;
  filter: drop-shadow(0px 5px 20px #FFFFFF);
}

.live-now-container {
  right: 2%;
  top: 20px;
  width: 45%;
  height: 50px;
  padding: 20px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: center;
  border-radius: 25px;
  justify-content: flex-start;
  background: rgba(255, 255, 255, 0.4);
  :hover {
    cursor: pointer;
  }
  .watch-now {
    top: 0%;
    left: 60%;
    right: 0%;
    bottom: 0%;
    width: 40%;
    display: flex;
    position: absolute;
    align-items: center;
    background: #FF868D;
    justify-content: center;
    border-radius: 0px 20px 20px 40px;
  }
}

.area-title {
  /* width: 32%; */
  /* height: 250px; */
  z-index: 10;
  display: flex;
  position: absolute;
  align-items: center;
  border-radius: 100px;
  flex-direction: column;
  justify-content: center;
  .location-tag {
    display: flex;
    position: relative;
    border-radius: 25px;
    align-items: center;
    background: #ffffff;
    justify-content: center;
  }
  .area-description {
    display: flex;
    position: relative;
    border-radius: 40px;
    align-items: center;
    background: #ffffff;
    justify-content: center;
    .logo-narasi {
      width: 12vh;
      margin-left: 10px;
    }
  }
}

.area-title:hover {
  cursor: pointer;
  -webkit-filter: drop-shadow(5px 5px 5px #FFFFFF);
  filter: drop-shadow(0px 5px 20px #FFFFFF);
}

#art-area.area-title {
  top: 32%;
  left: 13%;
}

#entertainment-area.area-title {
  top: 15%;
  left: 35%;
}

#ideas-area.area-title {
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

#particular:hover {
  cursor: pointer;
  filter: drop-shadow(0px 0px 30px #FFFFFF);
}

area {
  display: block;
  background: #FFFFFF;
}

#cekii {
  background: #FF868D;
}

</style>