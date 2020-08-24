<template>
  <div class="playfest-logo-container">
    <div class="event-content" >
      <!-- <span id="event-by" >an event by</span> -->
      <h2 class="sm:text-xxs lg:text-tiny xl:text-xl 2xl:text-2xl">Sponsored by</h2>
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
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.playfest-logo-container {
  top: 2%;
  left: 1%;
  width: 25%;
  z-index: 5;
  padding: 20px;
  display: flex;
  position: absolute;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-start;
  .event-content {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-bottom: 10px;
    .narasi-logo {
      width: 40%;
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