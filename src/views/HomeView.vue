<template>
  <div class="home">
    <div v-for="post in posts.slice().reverse()" :key="post.id" class="users">
      <div class="card">
        <div class="postTitle"><p>Titre: {{post.titre}}</p><div class="heartcontainer"><i class="fas fa-heart"></i></div></div>
        <img class="image" :src="post.imageUrl">
        <div class="postText"><p> {{post.text}}</p></div>
        <div class="context"><div class="postBy"><p>Créé par: {{post.author}}</p></div> <div class="postAt"><p> le : {{post.createdAt.split("T")[0] + " à " + post.createdAt.split("T")[1].split(".")[0]}}</p></div></div>
        <div class="buttonPost">
        <div><button @click="modifyPost(post.id)" class="button_modify" type="submit">Modifier</button></div>
        <div><button @click="deletePost(post.id)" class="button_delete" type="submit">Supprimer</button></div>
      </div>
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

<style lang="scss" scoped>

.home {
  display: flex;
  flex-direction: column;
  margin: 1rem;
}

.users {
  display: flex;
  flex-direction: column;
  height: auto;
  width: 62%;
  margin: 1rem auto;
  padding: 1rem;
}

.card {
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  border: solid 1px #4E5166;
  box-shadow: 5px 2px 2px #4e5166;
  width: 80%;
  padding: 1rem;
  gap: 0.5rem;
}

.context {
  display: flex;
  justify-content: space-between;
}

.postBy, .postAt, .postTitle  {
  display: flex;
  width: auto;
}

.postText {
  display: flex;
  justify-content: flex-start;
  border-radius: 15px;
  border: solid 1px #4E5166;
  box-shadow: 5px 1px 1px #4e5166;
  width: auto;
}

.postTitle {
   display: flex;
   justify-content: space-between;
   width: auto;
   margin: 0 3rem 0 0;
}

.heartcontainer{
    position: relative;
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.fas.fa-heart{
    opacity: 1;
    background-color: white;
    border: 5px;
}

.image {
  width: 100%;
  height: 25rem;
  object-fit: cover;
}

p {
  margin: 1rem;
}

.buttonPost {
  display: flex;
  justify-content: space-evenly;
}

.button_modify, .button_delete {
    display: flex;
    border-radius: 10px;
    border: 1px solid #FFD707;
    padding: 0.5rem;
    margin: 1rem;
  }

@media all and (max-width: 1000px) {
  
  .users {
    min-width: 55%;
  }

  .infos {
    margin: 2rem;
  }
}

  @media all and (max-width: 700px) {
  
  p {
    padding: 0.5rem;
  }

  .buttonPost {
    width: 16rem;
  }

  .button_modify {
    margin: 0 0.5rem;
  }

  .button_delete {
    margin: 0 6.8rem 1rem;
  }
}
</style>