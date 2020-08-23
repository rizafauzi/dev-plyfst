<template>
  <div class="side-bar">
    <div v-for="(sidebar, index) in dataState" :key="index" >
      <div @click="handleAction(sidebar)" class="button-container" >
        <SvgLoader class="icon" :iconName="sidebar" />
        <img 
          class="base-button"
          src="~/static/img/base-button.png" 
          alt="cek"
        >
        <span class="sm:text-xxs lg:text-tiny xl:text-xl 2xl:text-2xl">{{sidebar}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import SvgLoader from './SvgLoader'
export default {
  components: {
    SvgLoader,
  },
  data() {
    return {
      showChatModal: false,
      device: this.$store.getters['app/getDevice']
    }
  },
  props: {
    dataState: {
      Type: Array,
      default() {
				return []
			}
    },
    handleAction: {
      Type: Function
    }
  },
  mounted() {
    this.handleAction()
  }
}
</script>

<style lang="scss" scoped>
.side-bar {
  top: 8%;
  right: 2%;
  width: 10%;
  z-index: 5;
  position: absolute;
  @media (max-width: 1023px) {
    top: 10%;
    width: 8%;
  }
  .button-container {
    width: 100%;
    height: 10%;
    display: flex;
    margin-top: 15%;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;
    @media (max-width: 1023px) {
      margin-top: -12%;
    }
    .base-button {
      width: 60%;
      padding-bottom: 10%;
      -webkit-filter: drop-shadow(5px 5px 5px #FFFFFF);
      filter: drop-shadow(0px 5px 10px #FFFFFF);
    }
    #icon {
      width: 45%;
      height: 5%;
      z-index: 1;
      bottom: 20px;
      padding-top: 10px;
      margin-bottom: -30%;
      -webkit-filter: drop-shadow(5px 5px 5px #FFFFFF);
      filter: drop-shadow(0px 5px 20px #FFFFFF);
    }
  }
}

.button-container:hover {
  cursor: pointer;
  -webkit-filter: drop-shadow(5px 5px 5px #FFFFFF);
  filter: drop-shadow(0px 0px 5px #FFFFFF);
  .icon {
    animation: bounce 1200ms cubic-bezier(0.62, 0.01, 0.33, 0.97) 100ms infinite normal forwards;
  }
}

span {
  color: #ffffff;
  font-weight: 800;
  text-align: center;
  line-height: 11px;
  font-style: normal;
  margin-left: -0%;
  letter-spacing: 0.1em;
  font-family: 'Narasi Sans Bold';
  filter: drop-shadow(0px 0px 4px #000000);
}

@keyframes bounce {
  0% {
    margin-left: -0px;
  }
  10% {
    margin-left: -50%;
  }
  20% {
    margin-left: -50%;
  }
  40% {
    margin-left: 0px;
  }
  60% {
    margin-left: -10%;
  }
  90% {
    margin-left: 0px;
  }
  100% {
    margin-left: 0px;
  }
}
</style>