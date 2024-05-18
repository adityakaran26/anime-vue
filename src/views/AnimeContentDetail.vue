<template>
    <div class="anime-details-wrap">
        <div class="head-wrap"> 
            <span>Details </span>
            <button @click="goToHome()" class="reload-btn">Back </button>
        </div>
        <div class="anime-cont" v-if="animeContent">
        <div class="main-img-wrap">
            <div class="img-container-detail">
                <div class="detail-img-main">
                    <img class="main-img main-img-h" :src="animeContent.mainImage" alt="Main Image">
                </div>
                <div class="logowrap">
                    <img class="logo-img" :src="animeContent.logo" alt="Main Image">
                    <span class="anime-title"><small>{{ animeContent.title }}</small></span>
                </div>
                
            </div>
        </div>
        <p><b><small>{{ animeContent.subTitle }}</small></b></p>
        <img class="main-img-thumb" :src="animeContent.thumbNailImage" alt="Main Image">
        <div class="content-wrap" v-html="animeContent.text"></div>
        </div>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  export default {
    name: 'AnimeContentDetails',
    data() {
        return {
            id: this.$route.params.id
        }
    },
    async mounted() {
        let data = this.$route.params;
        this.id = data.id;
        // i am passing the id from the parent to make call to the api with specific id to get specific data //
        // but api is not accepting id as a paramerter //
        console.log("data is", data.id);
        
        if(!this.animeContent) {
            await this.generateToken();
            const token = this.token; // Access the token after it's been set
            if (token) {

            //PLESE NOTE - here the fetchAnimeContent() api should accept the id as an optional parameter and return data only related to that id //
            // behaviour of the api is different so implemented the as it is  //

            await this.fetchAnimeContent(); 
            }
        }
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
        toggleFavorite() {
            this.$emit('toggle-favorite');
        },
        goToHome() {
            this.$router.push({ name: 'MyHome'})
        }
    }
  };
  </script>
<style scoped>
.anime-details-wrap {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    width: 85%;
    margin: auto;

}
.main-img, .main-img-thumb  {
    border-radius: 12px;
    width: 100%;
    max-width: 100%;
    height: auto;
    object-fit: contain;
    animation: fadein 2s;
}
.main-img-h {
    min-height: 500px;
}
.main-img-wrap {
    display: flex;
    padding: 8px;
    align-items: center;
    justify-content: center;
}
.img-container-detail {
    display: block;
    width: 100%;
    max-width: 100%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 12px;
    padding: 12px;

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
.reload-btn {
    background: #fff;
    border: 1px solid lightgray;
    padding: 3px 7px;
    border-radius: 4px;
    cursor: pointer;

}
.detail-img-main {
    width: 100%;
    max-width: 100%;
    display: block;
}
.content-wrap {
    font-size: 14px;
}

@media screen and (min-width: 1024px) {
    .main-img, .main-img-thumb{
        height: 500px;
        min-height: 500px;
        object-fit: cover;
    
    }
}

@keyframes fadein {
  from { opacity: 0}
  to   { opacity: 1}
}

</style>
  