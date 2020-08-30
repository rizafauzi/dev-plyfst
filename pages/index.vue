<template>
  <div class="container" >
    <img 
      class="background"
      src="~/static/img/aurora-background.png" 
    >

		<div class="playfest-logo-container">
    <div class="event-content" >
      <!-- <span id="event-by" >an event by</span> -->
      <h2 class="sm:text-xxs lg:text-tiny xl:text-xl 2xl:text-2xl">an event by </h2>
      <img 
        class="narasi-logo"
        src="~/static/logo/narasi-brandmark-primary-yellow.png" 
        alt="image"
      >
    </div>
    <img 
      class="playfest-logo"
      src="~/static/logo/playfest.png" 
      alt="image"
    >
    <div class="getin-container">
      <nuxt-link to="/boarding">
        <h2 class="sm:text-tiny lg:text-xl xl:text-2xl 2xl:text-2xl" id="getin">GET IN</h2>
      </nuxt-link>
    </div>
  </div>
    
  </div>
</template>

<script>
export default {}
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
  .playfest-logo-container {
    top: 40%;
    left: 30%;
    width: 40%;
    z-index: 5;
    padding: 20px;
    display: flex;
    position: absolute;
    align-items: flex-end;
    flex-direction: column;
    justify-content: flex-start;
    @media (max-width: 1023px) {
      left: 10%;
      width: 80%;
    }
    .event-content {
      width: 100%;
      display: flex;
      margin-bottom: 5%;
      flex-direction: row;
      justify-content: center;
      .narasi-logo {
        width: 35%;
        object-fit: contain;
        margin-left: 10px;
        margin-top: -20px;
      }
    }
    .playfest-logo {
      width: 100%;
      display: flex;
    }
  }
  .getin-container {
    width: 100%;
    padding: 2%;
    display: flex;
    margin-top: 10%;
    align-items: center;
    justify-content: center;
  }
	@media (max-width: 1023px) {
		padding: 0;
		.columns {
      display: absolute;
		}
	}
}

#getin:hover {
  cursor: pointer;
  filter: drop-shadow(0px 0px 10px #FFFFFF);
}

span {
  font-size: 20px;
  color: #ffffff;
  font-weight: 800;
  line-height: 11px;
  font-style: normal;
  letter-spacing: 0.1em;
  font-family: 'Narasi Sans Bold';
}

h2 {
  /* font-size: 18px; */
  color: #ffffff;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  letter-spacing: 0.1em;
  font-family: 'Narasi Sans Bold';
}

</style>