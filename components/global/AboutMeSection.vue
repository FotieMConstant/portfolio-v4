<template>
    <div class="mt-4">
      <div class="md:flex md:justify-between mb-8">
        <h1 class="text-3xl font-bold tracking-wide text-white lg:text-5xl __text-green-linear-600">Explore More</h1>
        <div class="text-base text-gray-400 md:w-6/12">I'm Fotie. widely known as fotiecodes,  an open source enthusiast, software developer, mentor and SaaS founder based in Ankara, Turkey. I'm passionate about creating software solutions that are scalable and accessible to all, and i am dedicated to building innovative SaaS products that empower businesses to work smarter, not harder.</div>
      </div>
        <div class="">
        <div class="-m-1 flex flex-wrap md:-m-2">
      <div class="flex w-1/2 flex-wrap">
        <div class="w-1/2 p-1 md:p-2 __img_hover">
          <div class="__img_cover h-full">
            <img
              alt="gallery"
              class="block h-full w-full rounded-xl object-cover object-center"
              src="~/assets/img/SBRL5991-min.jpg" />
          </div>
        </div>
        <div class="w-1/2 p-1 md:p-2 __img_hover">
          <div class="__img_cover h-full">
            <img
              alt="gallery"
              class="block h-full w-full rounded-xl object-cover object-center"
              src="~/assets/img/SBRL6019-min.jpg" />
          </div>
        </div>
        <div class="w-full p-1 md:p-2 __img_hover">
          <div class="__img_cover h-full">
            <img
              alt="gallery"
              class="block h-full w-full rounded-xl object-cover object-center"
              src="~/assets/img/SBRL6005-min.jpg" />
          </div>
        </div>
      </div>
      <div class="flex w-1/2 flex-wrap">
        <div class="w-full p-1 md:p-2 __img_hover">
          <div class="__img_cover h-full">
            <img
              alt="gallery"
              class="block h-full w-full rounded-xl object-cover object-center"
              src="~/assets/img/SBRL6012-min.jpg" />
          </div>
        </div>
        <div class="w-1/2 p-1 md:p-2 __img_hover">
          <div class="__img_cover h-full">
            <img
              alt="gallery"
              class="block h-full w-full rounded-xl object-cover object-center"
              src="~/assets/img/SBRL6021-min.jpg" />
            </div>
        </div>
        <div class="w-1/2 p-1 md:p-2 __img_hover">
          <div class="__img_cover h-full">
            <img
              alt="gallery"
              class="block h-full w-full rounded-xl object-cover object-center"
              src="~/assets/img/SBRL6017-min.jpg" />
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  </template>
<script>
export default {
    name: "AboutMeSection",
    data () {
      return {}
    },
    mounted () {
    }
}
</script>
  
<style scoped>
.__img_hover .__img_cover {
  overflow: hidden;
  @apply rounded-lg;
}
.__img_hover img {
  backface-visibility: hidden;
  transition: transform 0.5s ease-in-out;
  @apply cursor-pointer;
}
.__img_hover:hover img {
  transform: scale(1.05);
}

</style>