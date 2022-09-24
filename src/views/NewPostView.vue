<template>
    <div class="NewPost">
      <h1>Créer un post</h1>
      <div class="info"><p>Veuillez remplir tout les champs et valider :</p></div>
      <form @submit.prevent="createPost">
        <div>
          <label for="titre">Titre</label>
          <input type="text" id="titre" v-model="this.titre" name="titre" placeholder="titre" required>
          <textarea name="texte" id="text" cols="30" rows="10" required placeholder="content" v-model="this.content"></textarea>
           <button type="submit" class="button_validate">Poster</button> 
        </div>
      </form>
    </div>
</template>

<script>
import postService from "../services/post.service"
export default {
  name: 'NewPostView',
  data(){
        return{
            titre: "",
            content: "",
        }
    },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  },
    
  methods: {
    createPost() { 
      let data = {
        titre: this.titre,
        text: this.content,
        author: this.currentUser.lastName
      }
      postService.createPost(data)
      .then(() => {
        this.$router.push("/")
      })
    }
  },
}
</script>

<style lang="scss" scoped>
 .container {
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 5px #FD2001;
    border-radius: 15px;
    border: solid 1px #4E5166;
    box-shadow: 10px 5px 5px #4e5166;
    height: 35rem;
    margin-left: auto;
    margin-right: auto;
    width: 30rem;
  }

  .button_create, .button_modify, .button_delete {
    margin: 1.5rem;
    padding: 0.5rem;
    border-radius: 10px;
    border: 1px solid #FFD707;
  }

 @media all and (max-width: 1550px) {
  .container {
    height: 32rem;
  }
}

@media all and (max-width: 1000px) {
  
  .container {
    height: 25rem;
  }

  .infos {
    margin: 2rem;
  }
}

  @media all and (max-width: 515px) {
  .container {
    width: 20rem;
  }

  .button_delete, .button_modify {
    display: flex;
    margin-left: 6rem;
    border-radius: 10px;
    border: 1px solid #FFD707;
  }
}
</style>