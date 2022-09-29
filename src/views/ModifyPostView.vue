<template>
  <div class="modifyPost">
      <div class="card">
        <div class="postTitle"><p>Titre: {{post.titre}}</p><div class="heartcontainer"><i class="fas fa-heart"></i></div></div>
        <img class="image" :src="post.imageUrl">
        <div class="postText"><p> {{post.text}}</p></div>
        <div class="context"><div class="postBy"><p>Créé par: {{post.author}}</p></div> <div class="postAt"></div></div>
        <br> <p>Modifier votre post</p> <br>
        <form @submit.prevent="modifyPost">
          <div class="dataPost">
            <label for="titre">Titre</label>
            <input type="text" id="titre" v-model="this.titre" name="titre" placeholder="titre" required>
            <textarea name="texte" id="text" cols="30" rows="10" required placeholder="content" v-model="this.content"></textarea>
            <input type="file" ref="file" @change="onFileSelected" required/>
            <button type="submit" class="button_validate">Poster</button> 
          </div>
      </form>
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
          data.append('file', this.file, this.file.name);
          data.append('titre', this.titre);
          data.append('text', this.content);
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
