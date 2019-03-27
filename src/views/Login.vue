<template>
  <div class="login">
    <h1>Login</h1>
    <input type="text" placeholder="Email">
    <br>
    <input type="password" placeholder="Senha">
    <br>
    <div class="btn-login">
      <button>Login</button>
    </div>
    <p>
      Você não tem conta?
      <router-link to="/sign-up">crie uma conta</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.login {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}

button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4caf50;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
