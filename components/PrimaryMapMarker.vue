<template>
  <div>
      <div class="location-icon sm:-mb-3 sm:w-12 sm:h-12 md:-mb-5 md:w-24 md:h-24 ">
        <svg
          v-if="isDesktop()"
          xmlns="http://www.w3.org/2000/svg" 
          xmlns:xlink="http://www.w3.org/1999/xlink" 
          width="1200" height="1200" 
          preserveAspectRatio="xMidYMid meet" 
          viewBox="-450 -400 2100 2100" 
          style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);">
          <path fill="#4B2D69" d="M600 0C350.178 0 147.656 202.521 147.656 452.344c0 83.547 16.353 169.837 63.281 232.031L600 1200l389.062-515.625c42.625-56.49 63.281-156.356 63.281-232.031C1052.344 202.521 849.822 0 600 0zm0 261.987c105.116 0 190.356 85.241 190.356 190.356C790.356 557.46 705.116 642.7 600 642.7s-190.356-85.24-190.356-190.356S494.884 261.987 600 261.987z" />
          <rect x="0" y="0" width="1200" height="1200" fill="rgba(0, 0, 0, 0)" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg" 
          xmlns:xlink="http://www.w3.org/1999/xlink" 
          width="1200" height="1200" 
          preserveAspectRatio="xMidYMid meet" 
          viewBox="-650 -500 2500 2500" 
          style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);">
          <path fill="#4B2D69" d="M600 0C350.178 0 147.656 202.521 147.656 452.344c0 83.547 16.353 169.837 63.281 232.031L600 1200l389.062-515.625c42.625-56.49 63.281-156.356 63.281-232.031C1052.344 202.521 849.822 0 600 0zm0 261.987c105.116 0 190.356 85.241 190.356 190.356C790.356 557.46 705.116 642.7 600 642.7s-190.356-85.24-190.356-190.356S494.884 261.987 600 261.987z" />
          <rect x="0" y="0" width="1200" height="1200" fill="rgba(0, 0, 0, 0)" />
        </svg>
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
  display: flex;
  border-radius: 100px;
  align-items: center;
  background: #ffffff;
  justify-content: center;
}
</style>