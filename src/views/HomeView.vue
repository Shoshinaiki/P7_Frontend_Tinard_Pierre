<template>
<div class>
   <div class="home">
      <div v-for="post in posts" :key="post.id" class="users">
        <p>Créé par : {{post.author}} le : {{post.createdAt}}</p>
        <p>Titre: {{post.titre}}</p>
        <p>{{post.text}}</p>
        <div><button @click="deletePost(post.id)" class="button_delete" type="submit">Supprimer</button></div>
      </div>
    </div>
</div>
</template>

<script>
import postService from "../services/post.service"

export default {
  name: 'HomeView',
   data(){
        return{
           posts: []
        }
    },
    computed: {
      currentUser() {
        return this.$store.state.auth.user;
      },
    },
    mounted() {
      if (!this.currentUser) {
        this.$router.push("/login");
      }
      postService.getAllPost() 
      .then((response) => {
        this.posts = response.data;
      })
    },
    methods: {
    deletePost(id) {
      postService.deletePost(id)
      .then(() => {
        postService.getAllPost() 
        .then((response) => {
        this.posts = response.data;
        })
      })
    },
  },
}
</script>

<style>

</style>