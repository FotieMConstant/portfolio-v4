<template>
  <div class="">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
<style>
.__border-green-linear-600{
  background: linear-gradient(90deg, #eff329 0%, #27AE60 100%);
padding: 2px;
box-sizing: border-box;
}
.__text-green-linear-600{
  background: linear-gradient(to left, #27AE60, #EFF329ed);
   -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.__bg-green-linear-600{
  background: linear-gradient(90deg, #eff329 0%, #27AE60 100%);
}
body{
  @apply bg-gray-900 text-white h-screen sm:px-10 px-6 py-6 w-fit;
} 
</style>
