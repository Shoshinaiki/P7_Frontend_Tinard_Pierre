<template>
  <div class="profil">
    <div class="infos">
      <h1 class="infoTitle">Informations personnelles</h1>
      <ul>
        <li><span>Nom: {{this.currentUser.lastName}}</span></li>
        <li><span>Prénom: {{this.currentUser.firstName}}</span></li>
        <li class="eMail"><span>E-mail: {{this.currentUser.email}}</span></li>
        <li><span>Admin: {{this.currentUser.role}}</span></li>
      </ul>
    </div>
    <div>
      <button type="button" @click="deleteUser" class="button_delete">Supprimer</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import userService from "../services/user.service"
export default {
  name: 'ProfilView',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  },
   methods: {
    deleteUser() {
      userService.deleteUsersById(this.currentUser.userId)
      .then(() => {
        this.$router.push("/login")
        this.$store.dispatch("auth/logout")
      })
    },
  },
}
</script>

<style lang="scss" scoped>

.profil {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #FFD7D7;
  border: 5px #FD2001;
  border-radius: 15px;
  border: solid 1px #4E5166;
  box-shadow: 10px 5px 5px #4e5166;
  height: 35rem;
  margin-left: auto;
  margin-right: auto;
  width: 30rem;
}

.infoTitle {
  margin-bottom: 2rem;
  font-size: 1.5rem;
}

ul ,li {
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  margin-left: auto;
  margin-right: auto;
}

li {
  display: flex;
  justify-content: flex-start;
  margin-left: 6.5rem;
}

span {
  display: flex;
  justify-content: flex-end;
}

.button_delete {
  margin: 1.5rem;
  padding: 0.5rem;
  border-radius: 10px;
  background-color: #FD2D01;
  border: 1px solid #4E5166;
  color: black;
  font-weight: bold;
}

@media all and (max-width: 1000px) {
  .profil {
    height: 25rem;
  }
  .infos {
    margin: 2rem;
  }
}

@media all and (max-width: 700px) {
  .profil {
    width: 25rem;
  }
  li {
    margin-left: 4rem;
  }
}

@media all and (max-width: 600px) {
  .profil {
    width: 20rem;
  }
  li {
    margin-left: 2rem;
  }
  .eMail {
    margin-left: 1.8rem;
  }
}

@media all and (max-width: 515px) {
  .profil {
    width: 15rem;
  }
  .button_delete {
    display: flex;
    margin-left: 5rem;
    border-radius: 10px;
    border: 1px solid #4E5166;
  }
  li {
    margin-left: 0.5rem;
  }
  .eMail {
    margin-left: 0.2rem;
  }
}

</style>