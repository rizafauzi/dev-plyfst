<template>
  <div id="chat-bubble" class="navigation-button" >
    <svg 
      id="icon"
      xmlns="http://www.w3.org/2000/svg" 
      xmlns:xlink="http://www.w3.org/1999/xlink" 
      width="512" 
      height="512" 
      preserveAspectRatio="xMidYMid meet" 
      viewBox="0 0 512 512" 
      style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);">
      <path fill="#FFFFFF" d="M448.205 392.507c30.519-27.2 47.8-63.455 47.8-101.078c0-39.984-18.718-77.378-52.707-105.3C410.218 158.963 366.432 144 320 144s-90.218 14.963-123.293 42.131C162.718 214.051 144 251.445 144 291.429s18.718 77.378 52.707 105.3c33.075 27.168 76.861 42.13 123.293 42.13c6.187 0 12.412-.273 18.585-.816l10.546 9.141A199.849 199.849 0 0 0 480 496h16v-34.057l-4.686-4.685a199.17 199.17 0 0 1-43.109-64.751zM370.089 423l-21.161-18.341l-7.056.865A180.275 180.275 0 0 1 320 406.857c-79.4 0-144-51.781-144-115.428S240.6 176 320 176s144 51.781 144 115.429c0 31.71-15.82 61.314-44.546 83.358l-9.215 7.071l4.252 12.035a231.287 231.287 0 0 0 37.882 67.817A167.839 167.839 0 0 1 370.089 423z"/>
      <path fill="#FFFFFF" d="M60.185 317.476a220.491 220.491 0 0 0 34.808-63.023l4.22-11.975l-9.207-7.066C62.918 214.626 48 186.728 48 156.857C48 96.833 109.009 48 184 48c55.168 0 102.767 26.43 124.077 64.3c3.957-.192 7.931-.3 11.923-.3q12.027 0 23.834 1.167c-8.235-21.335-22.537-40.811-42.2-56.961C270.072 30.279 228.3 16 184 16S97.928 30.279 66.364 56.206C33.886 82.885 16 118.63 16 156.857c0 35.8 16.352 70.295 45.25 96.243a188.4 188.4 0 0 1-40.563 60.729L16 318.515V352h16a190.643 190.643 0 0 0 85.231-20.125a157.3 157.3 0 0 1-5.071-33.645a158.729 158.729 0 0 1-51.975 19.246z"/>
      <rect x="0" y="0" width="512" height="512" fill="rgba(0, 0, 0, 0)" />
    </svg>
    <img 
      class="base-button"
      src="~/static/img/base-button.png" 
      alt="cek"
    >
    <span class="sm:text-xxs lg:text-tiny xl:text-xl 2xl:text-2xl">LIVE CHAT</span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.navigation-button {
  width: 9%;
  display: flex;
  margin-top: 5%;
  margin-right: 2%;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  @media (max-width: 1023px) {
    width: 8%;
    margin-top: -9%;
  }
  @media (min-width: 2000px) {
    width: 6%;
  }
  .base-button {
    width: 70%;
    padding-bottom: 10%;
    -webkit-filter: drop-shadow(5px 5px 5px #FFFFFF);
    filter: drop-shadow(0px 5px 10px #FFFFFF);
  }
  #icon {
    width: 50%;
    height: 5%;
    z-index: 1;
    bottom: 20px;
    padding-top: 10px;
    margin-bottom: -30%;
    -webkit-filter: drop-shadow(5px 5px 5px #FFFFFF);
    filter: drop-shadow(0px 5px 10px #FFFFFF);
  }
}

span {
  /* font-size: 16px; */
  color: #ffffff;
  font-weight: 800;
  line-height: 11px;
  font-style: normal;
  letter-spacing: 0.1em;
  font-family: 'Narasi Sans Bold';
  @media (max-width: 1024px) {
    font-size: 12px;
  }
}
</style>