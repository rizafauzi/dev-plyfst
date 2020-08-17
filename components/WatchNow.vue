<template>
  <div @click="$router.replace({ path: `/entertainment-area/play-stage` })"  class="live-now-container">
    <div class="live-description">
      <p class="marquee">
        <span class="sm:text-xxs lg:text-xl">LIVE NOW: ISYANA SARASVATI ON PLAYSTAGE!!!</span>
      </p>
    </div>
    <div class="watch-now">
      <span class="sm:text-xxs lg:text-xl" >WATCH NOW</span>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.live-now-container {
  right: 2%;
  top: 2%;
  width: 45%;
  height: 50px;
  z-index: 15;
  display: flex;
  padding-left: 2%;
  overflow: hidden;
  position: absolute;
  align-items: center;
  border-radius: 25px;
  backdrop-filter: blur(5px);
  justify-content: flex-start;
  background: rgba(255, 255, 255, 0.4);
  @media (max-width: 1023px) {
    height: 8vh;
    padding-left: 2%;
  }
  .live-description {
    width: 60%;
    height: 100%;
    display: flex;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
  }
  .watch-now {
    top: 0%;
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

.live-now-container:hover {
  cursor: pointer;
}

#running-text {
  animation: runningtext 15s linear infinite normal forwards;
}

@keyframes runningtext {
  0% {
    margin-left: 0%;
  }
  10% {
    margin-left: 0%;
  }
  95% {
    margin-left: -90%;
  }
  100% {
    margin-left: -90%;
  }
}

span {
  color: #ffffff;
  font-weight: 800;
  font-style: normal;
  letter-spacing: 0.1em;
  font-family: 'Narasi Sans Bold';
}

.marquee span {
  display: inline-block;
  animation: marquee 15s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translate(-0%, 0);
  }
  10% {
    transform: translate(-0%, 0);
  }
  100% {
    transform: translate(-120%, 0);
  }
}
</style>