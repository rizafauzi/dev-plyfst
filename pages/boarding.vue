<template>
  <div class="container" >
    <img 
      class="background"
      src="~/static/img/aurora-background.png" 
    >
    <div class="current-playing">
      <iframe 
        class="iframe"
        src="https://www.youtube.com/embed/p7TeLAGk8wk" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen />
    </div>

    <nuxt-link to="/home">
      <div class="getin-container">
        <h2 class="sm:text-tiny lg:text-xl xl:text-2xl 2xl:text-2xl" id="getin">Skip Video</h2>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
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
    object-fit: cover;
  }
  .current-playing {
    top: 4;
    left: 0;
    right: 0;
    z-index: 5;
    bottom: 0;
    width: 100%;
    display: flex;
    height: 100vh;
    position: fixed;
    align-items: center;
    justify-content: center;
    .iframe {
      width: 60%;
      height: 60%;
      filter: drop-shadow(0px 0px 5px #FFFFFF);
      @media (max-width: 1024px) {
        width: 80%;
        height: 60%;
        filter: drop-shadow(0px 0px 3px #FFFFFF);
      }
      @media (max-width: 1000px) {
        width: 60%;
        height: 60%;
        filter: drop-shadow(0px 0px 3px #FFFFFF);
      }
    }
  }
  .getin-container {
    bottom: 6%;
    right: 4%;
    width: 20%;
    padding: 1%;
    z-index: 20;
    display: flex;
    position: absolute;
    border-radius: 50px;
    align-items: center;
    background: #AFE3F1;
    justify-content: center;
  }
	@media (max-width: 1023px) {
		padding: 0;
		.columns {
      display: absolute;
		}
	}
}

.getin-container:hover {
  cursor: pointer;
  filter: drop-shadow(0px 0px 10px #FFFFFF);
}

span {
  font-size: 20px;
  color: #4B2D69;
  font-weight: 800;
  line-height: 11px;
  font-style: normal;
  letter-spacing: 0.1em;
  font-family: 'Narasi Sans Bold';
}

h2 {
  /* font-size: 18px; */
  color: #4B2D69;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  letter-spacing: 0.1em;
  font-family: 'Narasi Sans Bold';
}

</style>