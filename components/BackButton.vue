<template>
  <div class="back-container">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      xmlns:xlink="http://www.w3.org/1999/xlink" 
      width="24" height="24" 
      preserveAspectRatio="xMidYMid meet" 
      viewBox="0 0 24 24" 
      style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);">
      <path fill="#FFFFFF" d="M6.535 3H21a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6.535a1 1 0 0 1-.832-.445l-5.333-8a1 1 0 0 1 0-1.11l5.333-8A1 1 0 0 1 6.535 3zM13 10.586l-2.828-2.829l-1.415 1.415L11.586 12l-2.829 2.828l1.415 1.415L13 13.414l2.828 2.829l1.415-1.415L14.414 12l2.829-2.828l-1.415-1.415L13 10.586z" />
      <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" />
    </svg>
    <span class="sm:text-sm lg:text-lg xl:text-2xl">BACK</span>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.back-container {
  top: 2%;
  left: 2%;
  height: 6%;
  z-index: 5;
  display: flex;
  position: absolute;
  flex-direction: row;
  align-items: center;
  border-radius: 25px;
  justify-content: space-around;
  filter: drop-shadow(0px 0px 3px #000000);
}

.back-container:hover {
  cursor: pointer;
  -webkit-filter: drop-shadow(5px 5px 5px #FFFFFF);
  filter: drop-shadow(0px 0px 10px #FFFFFF);
}



span {
  color: #ffffff;
  margin-left: 10px;
  font-weight: 800;
  line-height: 11px;
  font-style: normal;
  letter-spacing: 0.1em;
  font-family: 'Narasi Sans ExtraBold';
  @media (max-width: 1024px) {
    font-size: 20px;
  }
}
</style>