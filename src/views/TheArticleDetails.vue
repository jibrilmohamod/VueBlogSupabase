<template>
 <main>
  <section id="single-post-wrapper" class="my-8">
   <div class="max-w-6xl mx-auto">
    <div class="single-post-info md:my-5 md:w-3/4 w-full mx-auto">
     <h1 class="text-4xl font-bold text-gray-900 md:mx-0 mx-6">
      {{ article.attributes.title }}
     </h1>

     <div class="author-info flex mt-3 md:mx-0 md:mb-0 mx-6 mb-6">
      <div class="w-auto">
       <div class="w-10 h-10 rounded-full overflow-hidden">
        <img
         :src="`http://localhost:1337${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`"
         class="object-cover w-10 h-10"
         alt="author pic"
        />
       </div>
      </div>
      <div class="w-full text-xs pl-4 pt-px">
       <div class="text-gray-600">
        <a href="author.html" class="text-black hover:underline">{{
         article.attributes.author.data.attributes.name
        }}</a>
        in
        <a href="category-page.html" class="text-black hover:underline">
         {{ article.attributes.category.data.attributes.name }}
        </a>
       </div>
       <div class="text-gray-600">
        <span>{{ fDate(article.attributes.createdAt) }}</span> -
        <span> 6 min read </span>
       </div>
      </div>
     </div>
    </div>

    <!-- article cover -->
    <div class="single-post-cover md:rounded overflow-hidden shadow-2xl mb-12">
     <img
      style="height: 700px"
      :src="`http://localhost:1337${article.attributes.cover.data.attributes.url}`"
      class="object-cover w-full"
      alt="single post cover"
     />
    </div>
    <!-- end of article cover -->

    <div class="single-post-detail flex flex-wrap mt-3">
     <div class="md:w-32 w-full ml-auto p-3 text-center">
      <h3 class="text-sm font-light uppercase mb-4">
       <span class="md:block inline">Share</span>
       <span class="md:block inline">With</span>
       <span class="md:block inline">Your</span>
       <span class="md:block inline">Friends</span>
      </h3>
      <ul class="flex flex-wrap items-center justify-center">
       <li
        class="block inline-block md:w-full w-auto md:mx-0 mx-1 flex items-center justify-center"
       >
        <a
         href="#"
         class="mb-2 border border-gray-300 text-2xl text-gray-800 transition-3 rounded hover:shadow-xl flex items-center justify-center inline-block w-12 h-12"
         ><i class="fa fa-facebook"></i
        ></a>
       </li>
       <li
        class="block inline-block md:w-full w-auto md:mx-0 mx-1 flex items-center justify-center"
       >
        <a
         href="#"
         class="mb-2 border border-gray-300 text-2xl text-gray-800 transition-3 rounded hover:shadow-xl flex items-center justify-center inline-block w-12 h-12"
         ><i class="fa fa-twitter"></i
        ></a>
       </li>
       <li
        class="block inline-block md:w-full w-auto md:mx-0 mx-1 flex items-center justify-center"
       >
        <a
         href="#"
         class="mb-2 border border-gray-300 text-2xl text-gray-800 transition-3 rounded hover:shadow-xl flex items-center justify-center inline-block w-12 h-12"
         ><i class="fa fa-instagram"></i
        ></a>
       </li>
       <li
        class="block inline-block md:w-full w-auto md:mx-0 mx-1 flex items-center justify-center"
       >
        <a
         href="#"
         class="mb-2 border border-gray-300 text-2xl text-gray-800 transition-3 rounded hover:shadow-xl flex items-center justify-center inline-block w-12 h-12"
         ><i class="fa fa-whatsapp"></i
        ></a>
       </li>
      </ul>
     </div>
     <div class="md:w-2/3 w-full mr-auto md:p-3 p-6">
      <div class="sub-heading text-xl font-semibold leading-normal">
       <p>
        {{ article.attributes.description }}
       </p>
      </div>
      <div
       class="single-post-content mt-5 text-xl leading-normal text-gray-900"
      >
       <v-md-editor></v-md-editor>

       <markdown :source="article.attributes.blocks[0].body"> </markdown>

       <img
        :src="`http://localhost:1337${article.attributes.blocks[2].file.data.attributes.formats.medium.url}`"
       />
      </div>

      <div class="single-post-tags mt-12">
       <ul>
        <li class="inline-block">
         <a
          href="category-page.html"
          class="inline-block border border-gray-300 px-3 transition-3 rounded hover:border-gray-500"
          >fashion</a
         >
        </li>
        <li class="inline-block">
         <a
          href="category-page.html"
          class="inline-block border border-gray-300 px-3 transition-3 rounded hover:border-gray-500"
          >news</a
         >
        </li>
        <li class="inline-block">
         <a
          href="category-page.html"
          class="inline-block border border-gray-300 px-3 transition-3 rounded hover:border-gray-500"
          >lifestyle</a
         >
        </li>
        <li class="inline-block">
         <a
          href="category-page.html"
          class="inline-block border border-gray-300 px-3 transition-3 rounded hover:border-gray-500"
          >work</a
         >
        </li>
       </ul>
      </div>
     </div>
    </div>
   </div>
  </section>
 </main>
</template>
<script setup>
 import axios from "axios"

 import { computed, ref } from "vue"
 import { useRoute } from "vue-router"
 const route = useRoute()

 const currentSlug = route.params.slug
 let edit = ref(false)
 const editmode = () => {
  edit.value = !edit.value
 }

 let articles = ref(null)

 let article = computed(() => {
  return articles.value.find(
   (article) => article.attributes.slug === currentSlug
  )
 })

 const fDate = (date) => {
  let d = new Date(date)
  const options = {
   weekday: "long",
   year: "numeric",
   month: "long",
   day: "numeric",
  }
  return d.toLocaleDateString("en-GB", options)
 }

 //  let markdown = computed(() => {
 //   return article.value.attributes.blocks[0].body
 //  })

 //  console.log(markdown)

 const getArticles = async () => {
  const { data } = await axios.get(
   "http://localhost:1337/api/articles?populate=deep"
  )
  articles.value = data.data
 }

 getArticles()
</script>
