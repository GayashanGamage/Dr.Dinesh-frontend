<template>
  <div class="level-one-container">
    <h1 class="page-title">Select avilable time..</h1>
    <div class="level-one-sub-container" @click="goBack">
      <span class="material-icons">arrow_back</span>
      <span>select another service</span>
    </div>
    <div class="level-two-container">
      <div class="level-three-container date">data</div>
      <div class="level-three-container time">time</div>
      <div class="level-three-container confirm-button">button</div>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";

name: "Time";

const goBack = () => {
  router.replace("/service");
};
</script>

<style scoped>
.level-one-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.page-title {
  text-align: center;
  font-size: 1.8rem;
  width: 60%;
}
.level-one-sub-container {
  display: flex;
  align-items: center;
  width: 60%;
  text-align: start;
  margin: 10px 0px;
  cursor: pointer;
}
.level-two-container {
  border: 1px solid black;
  display: grid;
  width: 60%;
  height: 60vh;
  grid-template-columns: 6fr 4fr;
  grid-template-rows: 10fr 2fr;
  grid-template-areas:
    "date time"
    "date button";
}
.level-three-container {
  border: 1px solid black;
}
.date {
  grid-area: date;
}
.time {
  grid-area: time;
}
.confirm-button {
  grid-area: button;
}
</style>
