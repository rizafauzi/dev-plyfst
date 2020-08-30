<template>
  <div>
    <div class="location-icon">
      <img 
        class="icon-marker"
        src="~/static/icon/marker.png" 
        alt="image"
      >
    </div>
  </div>
</template>

<script>
export default {
  methods: {
		isDesktop() {
      if (process.browser) {
        if (window.innerWidth >= 1024) {
          return true
        }
      }
    },
    isMobile() {
      if (process.browser) {
          if (window.innerWidth <= 1023) {
            return true
        }
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.location-icon {
  height: 90px;
  width: 90px;
  opacity: 0.7;
  display: flex;
  border-radius: 100px;
  align-items: center;
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
    opacity: 1;
    width: 50%;
    height: 50%;
    object-fit: contain;
  }
}

.location-icon:hover {
  opacity: 1;
  cursor: pointer;
  filter: drop-shadow(0px 5px 10px #FFFFFF);
}
</style>