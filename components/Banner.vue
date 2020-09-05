<template>
  <div 
    class="banner-container">
    <div
      v-show="this.$route.name === 'index'"  
      class="wrapper">
      <nuxt-link to="/playfest-series">
        <div class="btn-container">
          <div class="btn">
            See More
          </div>
        </div>
      </nuxt-link>
    </div>
    <div
      v-show="items.url && this.$route.name === 'playfest-series'"  
      class="wrapper">
      <nuxt-link to="/playfest-series/streaming">
        <div class="btn-container">
          <div class="btn">
            Watch Now
          </div>
        </div>
      </nuxt-link>
    </div>
    <img 
      v-if="!isMobile()"
      :src="items.bannerDesktop ? items.bannerDesktop : '/banner.png'"
      alt="Banner Playfest Series" 
      @click="goToStreaming()">
    <img 
      v-else
      :src="items.bannerMobile ? items.bannerMobile : '/banner.png'"
      alt="Banner Playfest Series" 
      @click="goToStreaming()">
  </div>
</template>
<script>
export default {
	props: {
		items: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	methods: {
		goToStreaming() {
			if(this.$route.name === 'playfest-series' && this.items.url !== '') {
				this.$router.replace({
					path: '/playfest-series/streaming'
				})
			}
		}
	}
}
</script>
<style lang="scss" scoped>
.banner-container {
	height: 300px;
	width: 100%;
	position: relative;
	cursor: pointer;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	@media (max-width: 768px) {
		height: 175px;
		width: 100%;
	}
}
.wrapper {
	width: 100%;
	height: 100%;
	left: 50%;
    transform: translateX(-50%);
	max-width: 1344px;
	margin: 0 auto;
	position: absolute;
}
.btn-container {
	display: inline-block;
	background: #FF868D;
	border-radius: 40px;
	padding: 5px;
	position: absolute;
	right: 25%;
	bottom: 25%;
	.btn {
		border: 2px solid #FFFFFF;
		box-shadow: 0px 1px 8px #FFFFFF;
		padding: 10px 30px;
		border-radius: 40px;
		font-weight: 900;
		font-size: 16px;
		line-height: 19px;
		text-align: center;
		letter-spacing: 0.1em;
		color: #FFFFFF;
	}
	@media (max-width: 768px) {
		// right: unset;
		right: 33%;
		bottom: 20%;
		.btn {
			padding: 5px 15px;
			font-size: 10px;
			line-height: 14px;
		}
	}
}
</style>