<template>
  <div class="home-wrap">
    <div v-if="animeContent">
      <AnimeContent :animeContent='animeContent' @toggle-favorite="receiveEmit" @click="goToDetails()"/>
    </div>
    <div class="home-wrap loader" v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AnimeContent from './AnimeContent.vue';

export default {
  name: 'MyHome',
  components: {
    AnimeContent
  },
  computed: {
    ...mapGetters('authModule', ['getToken', 'getAnimeContent']),
    token() {
      return this.getToken;
    },
    animeContent() {
      return this.getAnimeContent;
    },
  },
  methods: {
    ...mapActions('authModule', ['generateToken', 'fetchAnimeContent']),
    receiveEmit() {
      this.fetchAnimeContent()
    },
    goToDetails(){
        this.$router.push({ name: 'AnimeContentDetails' , params: { id: this.getAnimeContent.id }})
    }
  },
  async created() {
    if(!this.animeContent) {
      await this.generateToken();
      const token = this.token; // Access the token after it's been set
      if (token) {
        await this.fetchAnimeContent();
      }
    }
  },
};
</script>

<style scoped>
.home-wrap {
  display: flex;
  width: 80%;
  margin: auto;
  justify-content: center;
    align-items: center;
  /* flex-direction: column; */
}
.loader {
  justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>
