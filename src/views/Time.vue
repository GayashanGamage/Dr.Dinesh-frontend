<template>
  <div class="level-one-container">
    <h1 class="page-title">Select avilable time..</h1>
    <div class="level-one-sub-container" @click="goBack">
      <span class="material-icons">arrow_back</span>
      <span>select another service</span>
    </div>
    <div class="level-two-container">
      <div class="level-three-container date-container">
        <div
          class="level-four-container"
          v-for="item in bookingDate"
          :key="item"
          @click="showTime(item)"
        >
          <p class="option date">{{ new Date(item["date"]).getDate() }}</p>
          <p class="option day">
            {{ getday(new Date(item["date"]).getDay()) }}
          </p>
          <p class="option month">
            {{ getmonth(new Date(item["date"]).getMonth()) }}
          </p>
          <div class="level-three-container avilability">
            <p>{{ item["avilable"].length }} avilable</p>
          </div>
        </div>
      </div>
      <div class="level-three-container selected-time">
        <span>Selected date : {{ selectedDate }} </span>
        <span>Selected time : {{ selectedTime }}</span>
      </div>
      <div class="level-three-container time">
        <div
          class="level-four-container time-slots"
          v-for="item in times"
          :key="item"
          @click="selecteTime(item)"
        >
          <p class="time-slot-content">
            {{ new Date(item).getHours() }}: 00 -
            {{ new Date(item).getHours() + 1 }}: 00
          </p>
        </div>
      </div>
      <div class="level-three-container confirm-button">
        <button class="next-button" id="next-button">Next</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import { onMounted, ref, watch } from "vue";
name: "Time";

const times = ref([]);
const selectedDate = ref(null);
const selectedTime = ref(null);

const bookingDate = {
  one: {
    date: "2020-1-12",
    avilable: ["2020-1-12-01:00", "2020-1-12-02:00"],
  },
  two: {
    date: "2020-1-13",
    avilable: [
      "2020-1-13-13:00",
      "2020-1-13-14:00",
      "2020-1-13-16:00",
      "2020-1-13-17:00",
    ],
  },
  three: {
    date: "2020-1-14",
    avilable: ["2020-1-14-15:00", "2020-1-14-17:00"],
  },
  four: {
    date: "2020-1-12",
    avilable: ["2020-1-12-01:00", "2020-1-12-02:00"],
  },
  five: {
    date: "2020-1-13",
    avilable: ["2020-1-13-13:00", "2020-1-13-14:00", "2020-1-13-21:00"],
  },
  six: {
    date: "2020-1-14",
    avilable: ["2020-1-14-15:00"],
  },
  seven: {
    date: "2020-1-16",
    avilable: ["2020-1-13-13:00", "2020-1-13-14:00", "2020-1-13-21:00"],
  },
  eight: {
    date: "2020-1-17",
    avilable: [],
  },
};

const goBack = () => {
  router.replace("/service");
};
var now = new Date("2024-12-31");

const getday = (num) => {
  var days = ["Sun", "Mon", "Tue", "Wed", "Thi", "Fri", "Sat"];
  return days[num];
};

const getmonth = (num) => {
  var month = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "jully",
    "augest",
    "september",
    "october",
    "november",
    "december",
  ];
  return month[num];
};
const showTime = (time) => {
  // console.log(time["avilable"]);
  times.value = time["avilable"];
  selectedDate.value = time["date"];
  selectedTime.value = null;
};
onMounted(() => {
  times.value = bookingDate["one"]["avilable"];
});
const selecteTime = (abc) => {
  selectedTime.value = new Date(abc).getHours();
};
watch(selectedTime, (newTime, oldTime) => {
  if (newTime === null) {
    document.getElementById("next-button").disabled = true;
  } else {
    document.getElementById("next-button").disabled = false;
  }
});
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
  /* border: 1px solid black; */
  border-radius: 4px;
  display: grid;
  width: 60%;
  height: 60vh;
  grid-template-columns: 7fr 3fr;
  grid-template-rows: 10fr 2fr;
  grid-template-areas:
    "date time"
    "selecte-time button";
}
.date-container {
  grid-area: date;
  display: flex;
  flex-wrap: wrap;
}
.time {
  grid-area: time;
}
.confirm-button {
  grid-area: button;
  margin: 10px;
}
.next-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.selected-time {
  grid-area: selecte-time;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin: 10px;
  border-radius: 4px;
}
.level-four-container {
  border: 1px solid black;
  border-radius: 10px;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  margin: 10px;
}
.option {
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.avilability {
  background-color: cadetblue;
  color: aliceblue;
  padding: 5px 10px;
  border-radius: 0 0 6px 6px;
}
.not-avilability {
  background-color: crimson;
  color: aliceblue;
  padding: 5px 10px;
  border-radius: 0 0 6px 6px;
}
.date {
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 50px;
}
.day {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 4px;
}
.month {
  font-weight: 200;
}
.time-slots {
  border-radius: 4px;
}
.time-slot-content {
  font-size: 1.5rem;
}
</style>
