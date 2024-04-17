<script setup lang="ts">
import { ref, onMounted } from "vue";
import { questions } from "~/utils/questions";
import type { Question } from "~/typings/types";

const currentQuestion = ref(0);
const selectedQuestions = ref<Question[]>([]);
const playerScore = ref(0);
const robotScore = ref(0);
const playerAnswerIndex = ref<number | null>(null);
const robotAnswerIndex = ref<number | null>(null);
const timeLeft = ref(15);
const gameEnded = ref(false);
let startTime: number;

const selectQuestions = () => {
  const shuffled = questions.sort(() => 0.5 - Math.random());
  selectedQuestions.value = shuffled.slice(0, 6);
};

// Simulate the robot's answer
function robotAnswer() {
  const currentQuestionOptions = questions[currentQuestion.value].options;
  robotAnswerIndex.value = Math.floor(
    Math.random() * currentQuestionOptions.length
  );
}

// Call this function when the player selects an answer
function selectAnswer(index: number) {
  playerAnswerIndex.value = index;
  checkAnswers();
}

// Check answers from both the player and the robot
function checkAnswers() {
  if (
    playerAnswerIndex.value === questions[currentQuestion.value].correctAnswer
  ) {
    playerScore.value++;
  }
  if (
    robotAnswerIndex.value === questions[currentQuestion.value].correctAnswer
  ) {
    robotScore.value++;
  }
  proceedToNextQuestion();
}

// Move to the next question or handle when a question is initially presented
function proceedToNextQuestion() {
  if (currentQuestion.value < selectedQuestions.value.length - 1) {
    currentQuestion.value++;
    robotAnswer();
    resetTimer();
  } else {
    endGame();
  }
}

// Reset the timer for the next question
function resetTimer() {
  startTime = performance.now();
  function timerLoop(currentTime: number) {
    const elapsedTime = Math.floor((currentTime - startTime) / 1000);
    timeLeft.value = 15 - elapsedTime;
    if (timeLeft.value > 0) {
      requestAnimationFrame(timerLoop);
    } else {
      timeLeft.value = 0;
      checkAnswers();
    }
  }
  requestAnimationFrame(timerLoop);
}

// End the game
function endGame() {
  gameEnded.value = true;
}

onMounted(() => {
  robotAnswer();
  resetTimer();
  selectQuestions();
});
</script>

<template>
  <div class="question-box">
    <!-- Display questions if the game has not ended -->
    <div v-if="!gameEnded">
      <h1 v-if="selectedQuestions.length > 0">
        {{ selectedQuestions[currentQuestion].text }}
      </h1>
      <div
        v-for="(option, index) in selectedQuestions[currentQuestion]?.options"
        :key="index"
      >
        <button
          class="question-box__options-button"
          @click="selectAnswer(index)"
        >
          {{ option }}
        </button>
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
