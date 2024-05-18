<template>
    <div>
        <div class="anime-cont" v-if="animeContent">
        <div class="main-img-wrap">
            <div class="img-container">
                <img class="main-img" :src="animeContent.mainImage" alt="Main Image">
                <div class="logowrap">
                    <img class="logo-img" :src="animeContent.logo" alt="Main Image">
                    <span class="anime-title"><small>{{ animeContent.title }}</small></span>
                    <button class="reload-btn" @click.stop="toggleFavorite">Refresh</button>
                </div>
                
            </div>
        </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AnimeContent',
    props: {
        animeContent: Object
    },
    mounted() {
        // console.log(this.$route.name);
    },
    methods: {
        toggleFavorite() {
            this.$emit('toggle-favorite');
        },
    }
  };
  </script>
<style scoped>
.anime-cont {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    cursor: pointer;
}
.main-img {
    /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
    border-radius: 12px;
    width: 100%;
    max-width: 100%;
    height: 500px;
    min-height: 500px;
    /* width: 353px;
    max-width: 353px;
    height: 500px;
    max-height: 500px; */
    object-fit: cover;
    /* padding: 10px; */
    animation: fadein 2s;
}
.main-img-wrap {
    display: flex;
    /* border: 1px solid lightslategray; */
    padding: 8px;
    align-items: center;
    justify-content: center;
}
.img-container {
    display: block;
    width: 327px;
    max-width: 327px;
    /* height: 500px;
    min-height: 500px; */
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 12px;
    padding: 12px;
    /* height: 32%;
    max-height: 32%; */

}
.logowrap {
    display: flex;
    margin-top: 5px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.logo-img {
    width: 32px;
    height: 32px;
    border: 1px solid lightgray;
    border-radius: 9px;
}
.anime-title {
    display: flex;
    margin-right: 6px;
    font-weight: 600;
}

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes fadein {
  from { opacity: 0}
  to   { opacity: 1}
}

</style>
  