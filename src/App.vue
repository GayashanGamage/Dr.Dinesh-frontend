<template>
  <div class="level-one-container">
    <h1>Dr. Dinesh Fernando</h1>
    <h3>Your personal couch for academics</h3>
  </div>
</template>

<script setup>
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.level-one-container {
  width: fit-content;
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
</style>
