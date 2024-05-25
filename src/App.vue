<template>
  <div class="level-one-container">
    <div class="level-two-container menu">
      <Menu></Menu>
    </div>
    <div class="level-two-container content">
      <h1>Dr. Dinesh Fernando</h1>
      <h3>Your personal couch for academics</h3>
      <div class="level-three-container action-button">
        <button class="apointment-button">Book an Apointment</button>
      </div>
    </div>
    <div class="level-two-container footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script setup>
import Footer from "./components/Footer.vue";
import Menu from "./components/Menu.vue";

name: "App";
</script>

<style>
* {
  margin: 0;
  font-size: 14px;
}
html {
  font-family: "Poppins", sans-serif;
}
body {
  background-color: burlywood;
  height: 100vh;
}
.level-one-container {
  /* border: 1px solid black; */
  display: grid;
  width: 99.6%;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 500px 180px;
  grid-template-areas:
    "menu"
    "content"
    "footer";
}
.menu {
  grid-area: menu;
}
.content {
  grid-area: content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.footer {
  grid-area: footer;
}
h1 {
  font-size: 4rem;
  font-weight: 900;
}
h3 {
  font-weight: 300;
  font-size: 2rem;
  letter-spacing: 2.8px;
}
.apointment-button {
  margin: 10px 0px;
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  padding: 10px 20px;
  outline: none;
}
</style>
