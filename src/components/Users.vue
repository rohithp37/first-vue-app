<template>
  <div class="users-wrapper mb-5" v-if="showData">
    <user-card
      v-for="user in usersData"
      v-bind:user="user"
      v-bind:key="user.id"
    ></user-card>
  </div>
  <div class="users-wrapper" v-else>
    <user-card-skeleton></user-card-skeleton>
  </div>
</template>

<script>
import UserCard from './UserCard.vue';
import UserCardSkeleton from './UserCardSkeleton.vue';
import { getDataRequest } from '../data-services/data-service';
export default {
  name: 'Users',
  components: {
    UserCard,
    UserCardSkeleton
  },
  data() {
    return {
      usersData: [],
      showData: false
    }
  },
  beforeMount() {
    getDataRequest('users').then((res) => {
      this.usersData = res.data
      setTimeout(() => {
        this.showData = true
      }, 1000);
    })
  },
}
</script>
