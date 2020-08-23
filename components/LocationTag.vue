<template>
  <div class="area-title w-auto h-auto" id="art-area">
   <div class="location-icon sm:-mb-3 sm:w-12 sm:h-12 md:-mb-5 md:w-24 md:h-24 ">
      <img 
        class="icon-marker"
        src="~/static/icon/marker.png" 
        alt="cek"
      >
    </div>
    <div class="location-tag sm:mb-1 md:mb-2 sm:pl-4 sm:pr-4 sm:p-1 md:pr-6 md:pl-6">
      <h2 class="sm:text-sm lg:text-lg xl:text-xl">{{areaTitle}}</h2>
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
</template>

<script>
export default {
  props: {
    areaTitle: {
			type: String,
			default() {
				return 'NARASI AREA'
			}
		}
  }
}
</script>

<style lang="scss" scoped>
.area-title {
  z-index: 10;
  display: flex;
  opacity: 0.8;
  position: absolute;
  align-items: center;
  border-radius: 100px;
  flex-direction: column;
  justify-content: center;
  .location-icon {
    height: 90px;
    width: 90px;
    display: flex;
    border-radius: 100px;
    align-items: center;
    background: #ffffff;
    justify-content: center;
    .icon-marker {
      opacity: 1;
      width: 50%;
      height: 50%;
      object-fit: contain;
    }
  }
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

.area-title:hover {
  opacity: 1;
  cursor: pointer;
  -webkit-filter: drop-shadow(5px 5px 5px #FFFFFF);
  filter: drop-shadow(0px 5px 20px #FFFFFF);
}

</style>