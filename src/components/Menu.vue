<template>
  <div class="c-level-one-container">
    <button class="loging_button">Login</button>
  </div>
</template>

<script setup>
name: "Menu";
</script>

<style scoped>
.c-level-one-container {
  /* border: 1px solid blue; */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
}
.loging_button {
  font-family: "Poppins", sans-serif;
  padding: 10px 35px;
  margin: 0 20px;
  background-color: #121481;
  color: #ffeae3;
  border: none;
  border-radius: 4px;
}
.loging_button:hover {
  background-color: #ffeae3;
  color: #121481;
  border: 1px solid #121481;
  border-radius: 4px;
}
</style>
