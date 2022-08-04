<template>
 <header class="">
  <nav class="w-full py-4 bg-emerald-500 shadow">
   <div
    class="w-full container mx-auto flex flex-wrap items-center justify-between"
   >
    <nav>
     <ul
      class="flex items-center justify-between font-bold text-sm text-white uppercase no-underline"
     >
      <li>
       <router-link
        :to="{ name: 'register' }"
        class="hover:text-gray-200 hover:underline px-4"
        href="#"
        >Register</router-link
       >
      </li>
      <li>
       <a class="hover:text-gray-200 hover:underline px-4" href="#">About</a>
      </li>
     </ul>
    </nav>

    <div class="flex items-center text-lg no-underline text-white pr-6">
     <a class="" href="#">
      <i class="fab fa-facebook"></i>
     </a>
     <a class="pl-6" href="#">
      <i class="fab fa-instagram"></i>
     </a>
     <a class="pl-6" href="#">
      <i class="fab fa-twitter"></i>
     </a>
     <a class="pl-6" href="#">
      <i class="fab fa-linkedin"></i>
     </a>
    </div>
   </div>
  </nav>
  <header
   class="w-full container mx-auto"
   v-if="['home', 'article'].includes($route.name)"
  >
   <div class="flex flex-col items-center py-12">
    <router-link
     to="/"
     class="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl"
     href="#"
    >
     Vue Blog
    </router-link>
    <p class="text-lg text-gray-600">Lorem Ipsum Dolor Sit Amet</p>
   </div>
  </header>

  <!-- Topic Nav -->
  <nav
   class="w-full py-4 border-t border-b bg-gray-100"
   x-data="{ open: false }"
   v-if="['home'].includes($route.name)"
  >
   <div class="block sm:hidden">
    <a
     href="#"
     class="block md:hidden text-base font-bold uppercase text-center flex justify-center items-center"
     @click="open = !open"
    >
     Topics
     <i
      :class="open ? 'fa-chevron-down' : 'fa-chevron-up'"
      class="fas ml-2"
     ></i>
    </a>
   </div>
   <div
    :class="open ? 'block' : 'hidden'"
    class="w-full flex-grow sm:flex sm:items-center sm:w-auto"
   >
    <div
     class="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2"
    >
     <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">Technology</a>
     <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">Automotive</a>
     <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">Finance</a>
     <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">Politics</a>
     <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">Culture</a>
     <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">Sports</a>
    </div>
   </div>
  </nav>
 </header>
</template>

<script setup>
 import { ref } from "vue"

 let open = ref(false)
</script>

<style lang="scss" scoped></style>
