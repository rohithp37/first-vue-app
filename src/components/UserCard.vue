<template>
    
    <div class="card">
      <img class="card-img" src="./../assets/avatar.png" v-bind:alt="user.name">
      <div class="text-center space-y-2 sm:text-left text-sm">
        <div class="space-y-0.5">
          <p class="text-lg text-black font-semibold">
            {{ user.name }}
          </p>
          <p class="text-gray-500 font-normal">
            Username : {{ user.username }}
          </p>
          <p class="text-gray-500 font-normal">
            {{ user.email }}
          </p>
        </div>
        <button class="post-btn" @click="openPost(user.id)">View Posts</button>
      </div>
    </div>
    
</template>

<script>
export default {
    name: 'user-card',
    props: ['user'],
     methods: {
        openPost(id){
          this.$router.push(`/posts/${id}`);
        }
    }
    
}
</script>
