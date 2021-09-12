<template>
    
    <div class="card" v-for="data in dataLength" v-bind:key="data">
      <div class="card-img-def"></div>
      <div class="text-center space-y-2 sm:text-left text-sm w-full">
        <div class="w-full">
          <p class="text-lg h-full mb-2 bg-gray-300">&nbsp;</p>
          <p class="h-full mb-2 bg-gray-200">&nbsp;</p>
          <p class="h-full bg-gray-200">&nbsp;</p>
        </div>
      </div>
    </div>

</template>

<script>
export default {
    name: 'user-card-skeleton',
    data() {
        return {
            dataLength: 9
        }
    } 
}
</script>
