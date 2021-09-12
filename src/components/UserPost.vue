<template>
  <div class="post-wrapper" v-if="showData">
    <h2 class="post-head">
        {{ postData.title }}
    </h2>
    <p class="post-body">
        {{ postData.body }}
    </p>
    <button class="mt-5 post-btn" @click="this.$router.push('/')">Go Back</button>
  </div>
  <div class="post-wrapper" v-else>
    <h2 class="post-head bg-gray-300 h-full w-8/12 m-auto">&nbsp;</h2>
    <p class="bg-gray-200 h-full m-auto w-7/12 mt-4">&nbsp;</p>
    <p class="bg-gray-200 h-full w-full mt-4">&nbsp;</p>
    <p class="bg-gray-200 h-full m-auto w-4/12 mt-4">&nbsp;</p>
  </div>
</template>

<script>
import { getDataRequest } from '../data-services/data-service';
export default {
  name: 'user-post',
  data() {
    return {
      postData: {},
      showData: false
    }
  },
  beforeCreate() {
    let id = this.$route.params.id
    getDataRequest(`posts/${id}`).then((res) => {
      this.postData = res.data;
      setTimeout(() => {
          this.showData = true;
      }, 1000);
    })
  }
}
</script>
