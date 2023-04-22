<template>
  <div class="__gradient-border top-0 w-full scale-75 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300 cursor-pointer">
     <div class="text-white bg-gray-700 hover:bg-gray-600 rounded-lg w-full p-5 ">
      <div class="flex space-x-3 mb-3">
        <img class="rounded-full h-8" :src="avatar" alt="">
        <div>
          <div class="text-gray-200">{{name}}</div>
          <div class="text-gray-300 text-sm">{{fromWhere}}</div>
        </div>
      </div>
      <div class="flex space-x-3">
          <svg class="h-10 w-10" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.375 17.5C10.9847 17.5 10.6102 17.5595 10.2375 17.6137C10.3582 17.2077 10.4825 16.7947 10.682 16.4237C10.8815 15.8847 11.193 15.4175 11.5027 14.9467C11.7617 14.4375 12.2185 14.0927 12.5545 13.657C12.9062 13.2335 13.3857 12.9517 13.7655 12.6C14.1382 12.2325 14.6265 12.0487 15.015 11.7897C15.421 11.557 15.7745 11.2997 16.1525 11.1772L17.0957 10.7887L17.9252 10.444L17.0765 7.0525L16.0317 7.3045C15.6975 7.3885 15.2897 7.4865 14.826 7.60375C14.3517 7.69125 13.846 7.931 13.2825 8.14975C12.726 8.39825 12.082 8.56625 11.4835 8.96525C10.8815 9.34675 10.1867 9.66525 9.57425 10.1762C8.981 10.703 8.26524 11.1597 7.73674 11.83C7.15925 12.4565 6.58875 13.1145 6.146 13.8635C5.63325 14.5775 5.28499 15.3615 4.91749 16.1367C4.58499 16.912 4.31724 17.7047 4.09849 18.4747C3.68374 20.0182 3.49824 21.4847 3.42649 22.7395C3.36699 23.996 3.40199 25.0407 3.47549 25.7967C3.50174 26.1537 3.55074 26.5002 3.58574 26.74L3.62949 27.034L3.67499 27.0235C3.98625 28.4775 4.70278 29.8136 5.74168 30.8773C6.78059 31.941 8.09942 32.6889 9.54561 33.0344C10.9918 33.3799 12.5063 33.309 13.9138 32.8297C15.3214 32.3504 16.5645 31.4825 17.4993 30.3262C18.4342 29.17 19.0226 27.7727 19.1965 26.296C19.3704 24.8193 19.1227 23.3236 18.482 21.9818C17.8413 20.64 16.8338 19.507 15.5761 18.7139C14.3184 17.9208 12.8619 17.4999 11.375 17.5ZM30.625 17.5C30.2347 17.5 29.8602 17.5595 29.4875 17.6137C29.6082 17.2077 29.7325 16.7947 29.932 16.4237C30.1315 15.8847 30.443 15.4175 30.7527 14.9467C31.0117 14.4375 31.4685 14.0927 31.8045 13.657C32.1562 13.2335 32.6357 12.9517 33.0155 12.6C33.3882 12.2325 33.8765 12.0487 34.265 11.7897C34.671 11.557 35.0245 11.2997 35.4025 11.1772L36.3457 10.7887L37.1752 10.444L36.3265 7.0525L35.2817 7.3045C34.9475 7.3885 34.5397 7.4865 34.076 7.60375C33.6017 7.69125 33.096 7.931 32.5325 8.14975C31.9777 8.4 31.332 8.56625 30.7335 8.967C30.1315 9.3485 29.4367 9.667 28.8242 10.178C28.231 10.7047 27.5152 11.1615 26.9867 11.83C26.4092 12.4565 25.8387 13.1145 25.396 13.8635C24.8832 14.5775 24.535 15.3615 24.1675 16.1367C23.835 16.912 23.5672 17.7047 23.3485 18.4747C22.9337 20.0182 22.7482 21.4847 22.6765 22.7395C22.617 23.996 22.652 25.0407 22.7255 25.7967C22.7517 26.1537 22.8007 26.5002 22.8357 26.74L22.8795 27.034L22.925 27.0235C23.2363 28.4775 23.9528 29.8136 24.9917 30.8773C26.0306 31.941 27.3494 32.6889 28.7956 33.0344C30.2418 33.3799 31.7563 33.309 33.1638 32.8297C34.5714 32.3504 35.8145 31.4825 36.7493 30.3262C37.6842 29.17 38.2726 27.7727 38.4465 26.296C38.6204 24.8193 38.3727 23.3236 37.732 21.9818C37.0913 20.64 36.0838 19.507 34.8261 18.7139C33.5684 17.9208 32.1119 17.4999 30.625 17.5Z" fill="#333333"/>
          </svg>
          <div class="w-72 text-gray-400 text-sm">
           {{ review }}
          </div>
      </div>
    </div>
  </div>
  </template>
<script>
export default {
    name: "StudentTestimonialCard",
    props:{
      avatar:{
        type: String,
        default: "https://process.filestackapi.com/cache=expiry:max/resize=width:72/lO27N9pOTYS0sH2Yxes9"
      },
      name:{
        type: String,
        default: "null"
      },
      fromWhere:{
        type: String,
        default: "null"
      },
      review:{
        type: String,
        default: "null"
      }
    },
    data () {
      return {}
    },
    mounted () {
    }
}
</script>
  
<style scoped>
.__box{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 200px;
  color: white;
  font-family: 'Raleway';
  font-size: 2.5rem;
}
.__gradient-border {
  --borderWidth: 3px;
  position: relative;
  border-radius: var(--borderWidth);
}
.__gradient-border:after {
  content: '';
  position: absolute;
  top: calc(-1 * var(--borderWidth));
  left: calc(-1 * var(--borderWidth));
  height: calc(100% + var(--borderWidth) * 2);
  width: calc(100% + var(--borderWidth) * 2);
  background: linear-gradient(60deg, #FFDB18, #131313, #B8E755);
  border-radius: calc(2 * var(--borderWidth));
  z-index: -1;
  animation: animatedgradient 3s ease alternate infinite;
  background-size: 300% 300%;
}


@keyframes animatedgradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>