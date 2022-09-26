<template>
  <div class="h1Users"><h1>Utilisateurs non admin</h1></div>
    <div class="admin">
      <div v-for="user in users" :key="user.userId" class="users">
        <div v-if="user.id != this.currentUser.userId" class="label"><label for="email">e-mail:</label></div>
        <div v-if="user.id != this.currentUser.userId" class="userEmail"><p>{{user.email}}</p></div>
        <div v-if="user.id != this.currentUser.userId"><button @click="deleteUser(user.id)" class="button_delete" type="submit">Supprimer</button></div>
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
    border-radius: 15px;
    border: solid 1px #4E5166;
    box-shadow: 10px 5px 5px #4E5166;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    width: 30rem;
  }

  .h1Users {
    margin: 2rem;
  }

  .users {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1.5rem 3rem 1.5rem 1.5rem;
    height: 3rem;
    width: auto;
  }

  .label {
    width: auto;
  }

  .button_delete {
    padding: 0.5rem;
    border-radius: 10px;
    border: 1px solid #FFD707;
  }
  @media all and (max-width: 1090px) {
    .users {
      height: 1.5rem;
    }
  }

  @media all and (max-width: 515px) {
  .admin {
    display: flex;
    flex-direction: column;
    width: 20rem;
  }

 .users {
    align-items: normal;
    margin: 1.5rem;
    width: auto;
  }

  .label {
    display: flex;
  }

  #email {
    display: flex;
    margin-left: 0;
  }

  .button_delete {
    display: flex;
    margin: 2rem -8rem;
    border-radius: 10px;
    border: 1px solid #FFD707;
  }
}
</style>