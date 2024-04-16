<script setup lang="ts">
import { ref, onMounted } from "vue";
import { questions } from "~/utils/questions";

const currentQuestion = ref(0);
const playerScore = ref(0);
const robotScore = ref(0);
const playerAnswerIndex = ref<number | null>(null);
const robotAnswerIndex = ref<number | null>(null);
const timeLeft = ref(10); // 10 seconds per question
const gameEnded = ref(false);

// Simulate the robot's answer
function robotAnswer() {
  const currentQuestionOptions = questions[currentQuestion.value].options;
  robotAnswerIndex.value = Math.floor(Math.random() * currentQuestionOptions.length);
}


// Call this function when the player selects an answer
function selectAnswer(index: number) {
  playerAnswerIndex.value = index;
  checkAnswers();
}

// Check answers from both the player and the robot
function checkAnswers() {
  if (playerAnswerIndex.value === questions[currentQuestion.value].correctAnswer) {
    playerScore.value++;
  }
  if (robotAnswerIndex.value === questions[currentQuestion.value].correctAnswer) {
    robotScore.value++;
  }
  proceedToNextQuestion();
}

// Move to the next question or handle when a question is initially presented
function proceedToNextQuestion() {
  if (currentQuestion.value < questions.length - 1) {
    currentQuestion.value++;
    robotAnswer(); // Generate a new answer for the robot for the next question
    resetTimer(); // Optionally reset a timer if you have one for answering
  } else {
    endGame(); // If no more questions, end the game
  }
}

// Reset the timer for the next question
function resetTimer() {
  timeLeft.value = 10;
  const interval = setInterval(() => {
    timeLeft.value--;
    if (timeLeft.value === 0) {
      clearInterval(interval);
      checkAnswers();
    }
  }, 1000);
}

// End the game
function endGame() {
  gameEnded.value = true; // Set game ended state to true
}

// When the component is first mounted or when the game starts
onMounted(() => {
  robotAnswer(); // Initial robot answer for the first question
  resetTimer(); // Start the timer for the player to answer
});
</script>

<template>
    <div class="question-box">
        <!-- Display questions if the game has not ended -->
        <div v-if="!gameEnded">
      <h1>{{ questions[currentQuestion].text }}</h1>
      <div v-for="(option, index) in questions[currentQuestion].options" :key="index">
        <button class="question-box__options-button" @click="selectAnswer(index)">{{ option }}</button>
      </div>
      <p>Time left: {{ timeLeft }} seconds</p>
    </div>

    <div v-if="gameEnded">
      <h2>Game Over!</h2>
      <p>Player Score: {{ playerScore }}</p>
      <p>Robot Score: {{ robotScore }}</p>
    </div>
    </div>
  </template>

<style scoped lang="scss">
@import "../assets/css/main.scss";

.question-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__options-button {
    padding: 10px 10px;
    margin-top: 10px;
    background-color: $color-green;
    color: white;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: $color-light-blue;
    }
  }
}
</style>