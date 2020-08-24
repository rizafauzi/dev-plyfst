<template>
  <div>
    <div v-if="showCinemaModal" @click="toggleCinemaModal()" class="backdrop" />
    <WatchNow v-if="showCinemaModal" id="popup" />
    <div >
      <div class="cinema-wrapper" v-bind:id="[showCinemaModal ? 'expand' : 'collapse']" >
        <img 
          class="cinema-background"
          src="~/static/img/background-map-1440x900.png" 
          alt="image"
        >
        <div class="cinema-container" >
          <div class="cinema-header">
            <div @click="toggleCinemaModal()" >
              <BackButton />
            </div>
          </div>
          <div class="cinema-content">
            <div 
              class="cinema-each"
              @click="onSelect(data.url_video)" 
              v-for="(data, index) in dataState" 
              :key="`${index}`" 
            >
              <div class="cinema-image">
                <img 
                  class="cinema-image-detail"
                  :src="data.url_image" 
                  alt="image"
                >
              </div>
              <div class="cinema-description">
                <p class="sm:text-xs lg:text-sm xl:text-tiny">{{ data.description.length > 250 ? `${data.description.slice(0, 250)}...` : data.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WatchNow from './WatchNow.vue'
import BackButton from './BackButton.vue'

export default {
  components: {
    WatchNow,
    BackButton
  },
  data() {
    return {
      dataState: [
        { url_image: '', url_video: '', description: '' }, 
        { url_image: '', url_video: '', description: '' }, 
        { url_image: '', url_video: '', description: '' }]
    }
  },
  props: {
    showCinemaModal: {
			type: Boolean,
			default() {
				return false
			}
		},
    toggleCinemaModal: {
			type: Function
    },
  },
  async fetch() {
    let { data } = await this.$axios.get("/play-cinema");
    this.dataState = data
  },
  methods: {
    onSelect(url) {
      this.$store.dispatch('currentPlaying/setPlaycinema', url)
      this.$router.replace({ path: `/art-area/play-cinema` })
    }
  },
  mounted() {
    this.toggleCinemaModal()
  }
}
</script>

<style lang="scss" scoped>

#popup {
  z-index: 32;
}

.backdrop {
  top: 0px;
  left: 0px;
  z-index: 25;
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(75, 45, 105, 0.5);
}

.cinema-wrapper {
  width: 80%;
  z-index: 30;
  height: 100%;
  display: flex;
  position: absolute;
  background: #FFFFFF;
  flex-direction: column;
  .cinema-background {
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    object-fit: cover;
    position: absolute;
  }
  .cinema-container {
    width: 98%;
    height: 100%;
    margin-left: 2%;
    position: absolute;
    flex-direction: column;
  }
  .cinema-header {
    width: 100%;
    height: 10%;
    z-index: 35;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .cinema-content {
    width: 98%;
    height: 88%;
    display: flex;
    justify-content: space-between;
    .cinema-each {
      width: 32%;
      padding: 1%;
      height: 100%;
      display: flex;
      margin-right: 2%;
      border-radius: 15px;
      background: #4B2D69;
      flex-direction: column;
      .cinema-image {
        width: 100%;
        height: 70%;
        display: flex;
        border-radius: 10px;
        background: #FFFFFF;
        .cinema-image-detail {
          border-radius: 10px;
          width: 100%;
          overflow: hidden;
          object-fit: cover;
        }
      }
      .cinema-description {
        padding: 3%;
        height: 30%;
        display: flex;
        margin-top: 3%;
        text-align: justify;
        border-radius: 10px;
        background: #439AA0;
        text-overflow: ellipsis; 
        align-items: flex-start;
        justify-content: flex-start;
      }
    }
  }
}

#expand.cinema-wrapper {
  top: 0;
  left: 20%;
  animation: fadeIn 400ms ease-in-out 0s 1 normal forwards;
}

#collapse.cinema-wrapper {
  top: 0;
  left: 100%;
  animation: fadeOut 400ms ease-in-out 0s 1 normal forwards;
}

.cinema-each:hover {
  cursor: pointer;
  -webkit-filter: drop-shadow(5px 5px 5px #FFFFFF);
  filter: drop-shadow(0px 0px 10px #FFFFFF);
}

.cinema-content::-webkit-scrollbar { 
  width: 0;
  height: 0;
  display: none;
}

p {
  color: #FFFFFF;
  font-weight: bold;
  line-height: 170%;
  font-style: normal;
  letter-spacing: 0.1em;
  font-family: 'Narasi Sans Light';
}


@keyframes fadeOut {
	from {
    transform: translateX(0%);
    opacity: 1;
	}
	to {
    transform: translateX(100%);
    opacity: 1;
	}
}

@keyframes fadeIn {
	from {
    transform: translateX(100%);
    opacity: 1;
	}
	to {
    transform: translateX(0%);
    opacity: 1;
	}
}

</style>