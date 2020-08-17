<template>
  <div 
    v-if="item.url !== ''" 
    class="container">
    <div class="blue-container">
      <div class="white-line">
        <p>{{ item.title }}</p>
        <div 
          class="description" 
          v-html="item.description"/>
          <!-- <nuxt-link to="/playfest-series/streaming">
          <div class="btn-container">
            <div class="btn">
              View More Details
            </div>
          </div>
        </nuxt-link> -->
      </div>
    </div>
    <div class="thumbnail-container">
      <!-- <img 
        :src="item.thumbnail" 
        alt="Playfest Series"> -->
      <iframe 
        :src="item.url" 
        frameborder="0"/>
    </div>
  </div>
</template>
<script>
export default {
	props: {
		item: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	mounted() {
		if(process.browser) {
			let width = document.querySelector('.thumbnail-container').offsetWidth
			let height = document.querySelector('.thumbnail-container').offsetHeight
			const element = document.querySelector('iframe')
			element.style.height = height+'px'
		}
	}
}
</script>
<style lang="scss" scoped>
.container {
	max-width: 1344px;
	margin: 0 auto ;
	padding: 0 4%;
	display: flex;
	@media (max-width: 1023px) {
		flex-direction: column-reverse;
		// margin-bottom: 24px;
	}
}
.blue-container {
	background: rgba(175, 227, 241, 0.75);
	border: 2px solid rgba(75, 45, 105, 0.65);
	width: 100%;
	flex: 1;
	display: flex;
	padding: 13px;
	min-height: 355px;
	.white-line {
		border: 2px solid #FFFFFF;
		box-shadow: 0px 1px 8px #FFFFFF;
		padding: 20px 0;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		p {
			font-weight: bold;
			font-size: 36px;
			line-height: 42px;
			text-align: center;
			letter-spacing: 0.1em;
			color: #4B2D69;
			text-transform: uppercase;
			margin-bottom: 20px;
		}
		.description {
			width: 80%;
			font-weight: 500;
			font-size: 16px;
			line-height: 150%;
			text-align: center;
			letter-spacing: 0.1em;
			color: #4B2D69;
			margin-bottom: 0;
			white-space: pre-line;
			@media (max-width: 1023px) {
				width: 90%;
				font-size: 12px;
			}
		}
		.btn-container {
			display: inline-block;
			background: #FF868D;
			border-radius: 40px;
			padding: 5px;
			.btn {
				border: 2px solid #FFFFFF;
				box-shadow: 0px 1px 8px #FFFFFF;
				padding: 15px;
				border-radius: 40px;
				font-weight: 900;
				font-size: 16px;
				line-height: 19px;
				text-align: center;
				letter-spacing: 0.1em;
				color: #FFFFFF;
			}
		}
	}
	@media (max-width: 1023px) {
		background: rgba(255, 134, 141, 0.65);
		min-height: 220px;
		.white-line {
			p {
				font-size: 16px;
				line-height: 19px;
			}
			.btn-container {
				.btn {
					padding: 10px;
					font-size: 12px;
					line-height: 14px;
				}
			}
		}
	}
}
.thumbnail-container {
	flex: 1;
	border: 2px solid rgba(75, 45, 105, 0.65);
	border-left: none;
	img {
		width: 100%;
		height: 100% !important;
		display: block;
		object-fit: cover;
	}
	iframe {
		min-height: 100%;
		width: 100%;
		display: block;
	}
	@media (max-width: 1023px) {
		border-left: 2px solid rgba(75, 45, 105, 0.65);
		border-bottom: none;
		img {
			width: 100%;
			height: auto;
			display: block;
			object-fit: cover;
		}
		iframe {
			min-height: 200px;
		}
	}
}
</style>