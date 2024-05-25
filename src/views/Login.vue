<template>
  <div class="level-one-container">
    <div class="level-two-container">
      <h3 class="page_head">Login</h3>
      <div class="level-three-container" @click="backHome">
        <span class="material-icons">arrow_back </span>
        <span>Back to home page</span>
      </div>
      <input type="text" placeholder="E-mail" class="user_input email" />
      <input
        type="password"
        placeholder="password"
        class="user_input password"
      />
      <button @click="login" class="login_button">Login</button>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";

name: "Login";

const login = () => {
  router.push("/members");
};
const backHome = () => {
  router.replace("/");
};
</script>

<style scoped>
.level-one-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.level-two-container {
  border: 1px solid black;
  padding: 30px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  width: 20vw;
  height: auto;
}
.level-three-container {
  display: flex;
  justify-content: start;
  align-items: center;
  width: fit-content;
  margin-left: 7px;
}
.level-three-container:hover {
  color: brown;
  cursor: pointer;
}
.user_input {
  padding: 6px;
  outline: none;
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
  margin: 10px;
  border-radius: 4px;
  border: 0px;
  font-weight: 200;
}
.login_button {
  padding: 8px;
  margin: 10px;
  border: 0px;
  background-color: #121481;
  color: #ffeae3;
  border-radius: 4px;
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
}
.login_button:hover {
  background-color: #ffeae3;
  color: #121481;
  border-radius: 4px;
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  border: 1px solid #121481;
  cursor: pointer;
}
.page_head {
  font-weight: 900;
  margin: 10px;
}
</style>
