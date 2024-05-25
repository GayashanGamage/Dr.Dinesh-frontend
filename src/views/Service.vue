<template>
  <!-- this is handle entire page layout -->
  <div class="level-one-contaniner">
    <!-- this is handle content of the tabmenu + title -->
    <div class="level-two-container">
      <!-- this is title -->
      <h2 class="page-title">select your need...</h2>
      <!-- this handle entire tabmenu -->
      <div class="level-three-container">
        <div
          class="level-three-sub-container sub-one option-tab active"
          id="button-one"
          @click="showDetails('button-one', 'one')"
        >
          <h3 class="service_title_sidebar">service one</h3>
        </div>
        <div
          class="level-three-sub-container sub-two option-tab"
          id="button-two"
          @click="showDetails('button-two', 'two')"
        >
          <h3 class="service_title_sidebar">service two</h3>
        </div>
        <div
          class="level-three-sub-container sub-three option-tab"
          id="button-three"
          @click="showDetails('button-three', 'three')"
        >
          <h3 class="service_title_sidebar">service three</h3>
        </div>
        <div
          class="level-three-sub-container sub-four option-tab"
          id="button-four"
          @click="showDetails('button-four', 'four')"
        >
          <h3 class="service_title_sidebar">service four</h3>
        </div>
        <!-- this is handle entire details of the tabbuttons interactively -->
        <div class="level-three-sub-container sub-five">
          <div class="tab-content" id="one">
            <h3 class="service_title">service one</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              culpa magnam voluptatum accusantium ullam vitae corrupti dolorem.
              Praesentium, provident voluptatem!
            </p>
            <ol>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem ipsum dolor sit.</li>
            </ol>
            <button class="book_button" @click="selectTime">Book Time</button>
          </div>
          <div class="tab-content" id="two">
            <h3 class="service_title">service two</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              mollitia iste nesciunt autem porro, ipsa ipsam nostrum quis
              officia, accusantium, sapiente facere unde voluptate ratione saepe
              at esse aperiam maxime quaerat eligendi sequi eveniet! Quaerat
              impedit nulla debitis ut consectetur?
            </p>
            <ol>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem ipsum dolor sit.</li>
            </ol>
            <button class="book_button" @click="selectTime">Book Time</button>
          </div>
          <div class="tab-content" id="three">
            <h3 class="service_title">service three</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, a
              quisquam. Harum quo provident corporis placeat debitis veritatis
              vero qui animi eum! Quibusdam magni distinctio sit qui ducimus?
            </p>
            <ol>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ol>
            <button class="book_button" @click="selectTime">Book Time</button>
          </div>
          <div class="tab-content" id="four">
            <h3 class="service_title">service four</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur dicta omnis labore tenetur fugiat doloribus atque at
              ad, ut quas sapiente facilis
            </p>
            <ol>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ol>
            <button class="book_button" @click="selectTime">Book Time</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";

name: "Service";

const showDetails = (button_name, tabName) => {
  var allTabContent = document.getElementsByClassName("tab-content");
  for (let i = 0; i < allTabContent.length; i++) {
    allTabContent[i].style.display = "none";
  }

  var allButton = document.getElementsByClassName("option-tab");
  for (let i = 0; i < allButton.length; i++) {
    allButton[i].classList.remove("active");
  }

  document.getElementById(button_name).classList.add("active");
  document.getElementById(tabName).style.display = "block";
};

const selectTime = () => {
  router.push("/service/time");
};
</script>

<style scoped>
.level-one-contaniner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.level-two-container {
  width: 50vw;
  height: 50vh;
  /* border: 1px solid black; */
}
.level-three-container {
  border: 1px solid black;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "service1 description"
    "service2 description"
    "service3 description"
    "service4 description";
}
.option-tab {
  display: flex;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}
.tab-content {
  margin: 30px;
}
.book_button {
  float: inline-end;
  padding: 10px 40px;
  background-color: #121481;
  color: #ffeae3;
  outline: none;
  border: none;
  border-radius: 4px;
  font-weight: 600;
}
.book_button:hover {
  color: #121481;
  background-color: #ffeae3;
  border: 1px solid #121481;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
}
.sub-one {
  grid-area: service1;
}
.sub-two {
  grid-area: service2;
}
.sub-three {
  grid-area: service3;
}
.sub-four {
  grid-area: service4;
}
.sub-five {
  grid-area: description;
}
#two,
#three,
#four {
  display: none;
}
.service_title {
  font-size: 1.3rem;
  margin-bottom: 20px;
  font-weight: 600;
  color: black;
  letter-spacing: normal;
}
.service_title_sidebar {
  font-size: 1.3rem;
  letter-spacing: normal;
  font-weight: 600;
  margin-left: 30px;
}
.page-title {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 20px;
}
.active {
  background-color: #121481;
  color: #ffeae3;
}
</style>
