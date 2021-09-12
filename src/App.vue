<template>
  <div class="container md:mx-auto">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  .users-wrapper{
    @apply p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5;
  }
  .card {
    @apply py-8 px-8 max-w-sm mx-auto bg-white w-full rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6;
  }
  .card-img{
    @apply block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0;
  }
  .card-img-def{
    @apply block mx-auto md:w-1/3 h-24 rounded-full sm:mx-0 sm:flex-shrink-0 bg-gray-200 w-1/2;
  }
  .post-btn {
    @apply px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2;
  }
  .post-wrapper{
    @apply m-auto mt-10 px-4 text-center w-9/12
  }
  .post-head{
    @apply font-semibold md:text-3xl text-purple-800 uppercase
  }
  .post-body{
    @apply mt-4 text-lg leading-relaxed font-light text-gray-500
  }

</style>