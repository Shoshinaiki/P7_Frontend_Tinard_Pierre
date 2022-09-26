<template>
    <div class="NewPost">
      <h1 class="postH1">Créer un post</h1>
      <div class="info"><p>Veuillez remplir tout les champs et valider :</p></div>
      <form @submit.prevent="createPost">
        <div class="dataPost">
          <label for="titre">Titre</label>
          <input type="text" id="titre" v-model="this.titre" name="titre" placeholder="titre" required>
          <textarea name="texte" id="text" cols="30" rows="10" required placeholder="content" v-model="this.content"></textarea>
          <input type="file" ref="file" @change="onFileSelected" required/>
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
            file: ""
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
     const data = new FormData();
      data.append('file', this.file, this.file.name);
      data.append('titre', this.titre);
      data.append('text', this.content);
      data.append('author', this.currentUser.lastName);
      postService.createPost(data)
      .then(() => {
        this.$router.push("/")
      })
    },
    onFileSelected() {
            const file = this.$refs.file.files[0];
            this.file = file;
    }
  },
}
</script>

<style lang="scss" scoped>
 .NewPost {
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

  .postH1 {
    margin: 2rem;
  }

  .info {
    margin-bottom: 0;
  }

  .dataPost {
    display: flex;
    flex-direction: column;
    margin: 1rem 3rem;
  }

  #titre {
    margin: 1rem;
  }

  .button_validate {
    margin: 2rem;
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
  
  .NewPost {
    height: 25rem;
  }

  .postH1 {
    margin: 0.5rem;
  }


  .infos {
    margin: 2rem;
  }
}

  @media all and (max-width: 515px) {
  .NewPost {
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