<template>
  <div class="admin">
    <div v-for="user in users" :key="user.userId" class="users">
      <div class="label"><label for="email">e-mail:</label></div>
      <div class="userEmail"><p>{{user.email}}</p></div>
      <div><button :disable ="user.id = this.currentUser.userId" @click="deleteUser(user.id)" class="button_delete" type="submit">Supprimer</button></div>
    </div>
  </div>
</template>

<script>
import userService from "../services/user.service"
export default {
  name: 'AdminView',
   data(){
        return{
           users: []
        }
    },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/inscription");
    }
    if (this.currentUser.role != true) {
      alert("vous n'êtes pas administrateur")
      this.$router.push("/")
    }
  userService.getAllUsers() 
      .then((response) => {
        this.users = response.data;
      })

  },
  methods: {
    deleteUser(id) {
      userService.deleteUsersById(id)
      .then(() => {
        userService.getAllUsers() 
        .then((response) => {
        this.users = response.data;
        })
      })
    },
  },
}
</script>

<style lang="scss">

.admin {
  display: flex;
  flex-direction: column;
  background-color: #FFD7D7;
  border-radius: 15px;
  border: solid 1px #4E5166;
  box-shadow: 10px 5px 5px #4E5166;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}

.users {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 1.5rem 1rem 1.5rem;
  height: 3rem;
  width: auto;
}

.label {
  width: auto;
}

.button_delete {
  padding: 0.5rem;
  border-radius: 10px;
  background-color: #FD2D01;
  border: 1px solid #4E5166;
  color: black;
  font-weight: bold;
}

@media all and (max-width: 1150px) {
  .admin {
    width: 30rem;
  }
}

@media all and (max-width: 1090px) {
  .users {
    height: 1.5rem;
  }
}

@media all and (max-width: 750px) {
  .admin {
    width: 25rem;
  }
}

@media all and (max-width: 450px) {
  .admin {
    display: flex;
    flex-direction: column;
    height: 25rem;
    width: 20rem;
  }
  .users {
    display: flex;
    flex-wrap: wrap;
    align-items: normal;
    margin: 1.5rem;
    width: auto;
  }
  p {
    padding: 0;
  }
  .label {
    margin-bottom: 1rem;
  }
  #email {
    display: flex;
    margin-left: 0;
  }
  .button_delete {
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    border-radius: 10px;
    border: 1px solid #4E5166;
  }
}
</style>