<template>
  <div class="modifyPost">
      <div class="card">
        <div class="postTitle"><p>Titre: {{post.titre}}</p><div class="heartcontainer"><p>{{post.like}}</p></div></div>
        <img class="image" :src="post.imageUrl">
        <div class="postText"><p> {{post.text}}</p></div>
        <div class="context"><div class="postBy"><p>Créé par: {{post.author}}</p></div> <div class="postAt"></div></div>
        <div class="dataPost">
          <h1 class="postH1">Modifier votre post</h1>
          <p class="champ">Veuillez remplir tout les champs et valider :</p><br>
          <form @submit.prevent="modifyPost">
            <label for="title">Titre</label>
            <input v-model="this.titre" type="text" />
            <textarea name="texte" id="text" cols="30" rows="10" placeholder="content" v-model="this.content"></textarea>
            <input type="file" ref="file" @change="onFileSelected" />
            <button type="submit" class="button_validate">Poster</button> 
          </form>
        </div>
      </div>
  </div>
</template>

<script>
import postService from "../services/post.service"

export default {
  name: "ModifiyPostView",
   data(){
        return{
            titre: "",
            content: "",
            file: "",
            post: []
        }
    },
    computed: {
      currentUser() {
        return this.$store.state.auth.user;
      },
    },
    mounted() {
      let id = this.$route.query.id;
      if (!this.currentUser) {
        this.$router.push("/login");
      }
      postService.getPostById(id) 
      .then((response) => {
        this.post = response.data;
        console.log(this.post.createdAt);
      })
    },
    methods: {
      modifyPost() {
        let id = this.$route.query.id;
        const data = new FormData();
          if(this.file !="") {
            data.append('file', this.file, this.file.name);
          }
          if(this.titre != "") {
            data.append('titre', this.titre);
          }
          if(this.content !="") {
            data.append('text', this.content);
          }
          data.append('author', this.currentUser.lastName);
          postService.modifyPost(id, data)
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

.modifyPost {
  display: flex;
  flex-direction: column;
  margin: 1rem;
}

.card {
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

label {
  display: flex;
  justify-content: center;
  margin: 0;
}

textarea {
  display: flex;
  justify-content: center;
  margin: auto;
}

input {
  margin: 0.5rem;

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

.fas.fa-heart:hover {
  color: black;
  color: red;
}

.image {
  width: 100%;
  height: 25rem;
  border-radius: 10px;
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

  .dataPost {
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 5px #FD2001;
    border-radius: 15px;
    border: solid 1px #4E5166;
    box-shadow: 10px 5px 5px #4e5166;
    margin: 2rem;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    width: 62%;
  }

  .postH1 {
    margin: 2rem;
    font-size: 1.5rem;
  }

  .champ {
    margin: 0;
  }

  .modify {
    margin: 0;
  }

  .button_validate {
    margin: 2rem;
    padding: 1rem 2rem;
    border-radius: 10px;
    border: 1px solid #FFD707;
  }
</style>