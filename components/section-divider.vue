<template>
    <div class="flex text-2xl font-bold mt-6">
        <div class="flex">
            <div class="__text-green-linear-600 font-monospace">{{number}}</div>
            <div>{{title}}</div>
        </div>
        <div class="h-[1.5px] __bg-green-linear-600 my-auto ml-2 w-8/12" />
    </div>
  </template>
  <script>
  export default {
      name: "section-divider",
      props:{
        number:{
          type: String,
          default: "null"
        },
        title:{
          type: String,
          default: "null"
        },
        
      },
      data () {
        return {}
      },
      mounted () {
      }
  }
  </script>
  <style>
  </style>
  