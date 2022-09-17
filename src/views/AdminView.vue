<template>
  <div class="h1Users"><h1>Utilisateurs connectés</h1></div>
    <div class="admin">
      <div v-for="user in users" :key="user.userId" class="users">
        <div class="label"><label for="email">e-mail:  </label></div>
        <div><p>{{user.email}}</p></div>
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
    align-content: space-around;
    align-items: center;
    border-radius: 15px;
    border: solid 1px #4E5166;
    box-shadow: 10px 5px 5px #4E5166;
    padding: 1rem;
    margin: 2rem;
    height: 3rem;
    width: auto;
  }

  #email {
    margin-left: 2rem;
  }

  .button_delete {
    margin-left: 1.5rem;
    padding: 0.5rem;
    border-radius: 10px;
    border: 1px solid #FFD707;
  }
  
  @media all and (max-width: 515px) {
  .admin {
    display: flex;
    flex-direction: column;
    width: 20rem;
  }

 .users {
    align-items: normal;
    margin: 1rem;
    height: 4rem;
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