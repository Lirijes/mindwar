<script setup lang="ts">
import { ref } from "vue";
import QuestionBox from "~/components/questionBox.vue";
import type { Player } from "~/typings/types";
import { players } from "~/utils/players";

const selectedPlayer = ref<Player | null>(null);
const showGameStartButton = ref(false);
const showGameInterface = ref(false);
const showOptions = ref(true);
const showHeader = ref(true);

const selectPlayer = (player: Player) => {
  selectedPlayer.value = player;
  showGameStartButton.value = true;
  showHeader.value = false;
};

const startGame = () => {
  showGameStartButton.value = false;
  showGameInterface.value = true;
  showOptions.value = false;
};

const resetGame = () => {
  selectedPlayer.value = null;
  showGameStartButton.value = false;
  showGameInterface.value = false;
  showOptions.value = true;
  showHeader.value = true;
};
</script>

<template>
  <div class="index">
    <img
      class="index__background-image"
      src="../public/images/background/mountains-5689938_1280-withoutmoon.png"
      alt="background"
    />
    <NuxtLink to="/" class="index__home" @click="resetGame">
      <img
        src="../public/images/icons/mountains-5689938_1280.png"
        alt="info icon"
        class="index__home-icon"
      />
    </NuxtLink>

    <NuxtLink to="/info" class="index__info"
      ><div><font-awesome-icon icon="fa-solid fa-info" /></div
    ></NuxtLink>

    <h1 id="index__header" v-if="showHeader" class="index__header">
      <span>Let's Mind War!</span><span>Choose Your Player</span>
    </h1>

    <!-- Selected Player -->
    <div v-if="selectedPlayer" class="index__selected-player">
      <img
        :src="selectedPlayer.image"
        alt="Selected Player"
        class="index__selected-player-image"
      />
    </div>
    <!-- Player Options and Start Game Button -->
    <div v-if="!showGameInterface">
      <button
        v-if="selectedPlayer"
        @click="startGame"
        class="index__start-game-button"
      >
        Start Game
      </button>

      <div class="index__options">
        <div v-for="player in players" :key="player.id" class="index__option">
          <img
            :src="`/${player.image}`"
            class="index__option-player"
            @click="selectPlayer(player)"
            alt="player image"
          />
        </div>
      </div>
    </div>
    <!-- Game started -->
    <div v-if="showGameInterface" class="index__game-interface">
      <QuestionBox />
      <button @click="resetGame" class="index__reset-button">Reset Game</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/css/main.scss";

.index {
  &__background-image {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
  }
  &__home {
    position: absolute;
    top: 9%;
    left: 8%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &:hover {
      transform: scale(0.9);
    }
    &-icon {
      width: 60px;
      height: 60px;
      object-fit: cover;
      @media (min-width: 1200px) {
        width: 90px;
        height: 90px;
      }
    }
  }
  &__info {
    position: absolute;
    top: 8.5%;
    right: 12%;
    color: white;
    font-size: 38px;
    &:hover {
      transform: scale(0.9);
    }
    @media (min-width: 1200px) {
      top: 10%;
      font-size: 46px;
    }
    &-icon {
      width: 150px;
      height: 50px;
      object-fit: cover;
      @media (min-width: 1200px) {
        width: 70px;
        height: 70px;
      }
    }
  }
  &__header {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    color: $color-black;
    font-size: 34px;
    text-align: center;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      @media (min-width: 576px) {
        font-size: 46px;
      }
      @media (min-width: 1300px) {
        font-size: 72px;
      }
    }
  }
  &__selected-player {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: $color-light-grey;
    &-image {
      width: 150px;
      height: 150px;
      object-fit: cover;
      margin-bottom: 20px;
      @media (min-width: 768px) {
        width: 200px;
        height: 200px;
      }
    }
  }
  &__start-game-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 30px;
  }
  &__options {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;

    @media (max-width: 576px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      bottom: 20px;
    }
  }
  &__option {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
    margin-bottom: 10px;
    margin-right: 30px;
    &:hover {
      transform: scale(0.9);
    }
    &-player {
      width: 100px;
      height: 100px;
      object-fit: cover;
      cursor: pointer;
      @media (min-width: 1200px) {
        width: 150px;
        height: 150px;
      }
    }
  }
  &__game-interface {
    position: absolute;
    top: 58%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background-color: $color-light-grey;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 250px;
    height: 75%;

    @media (min-width: 768px) {
      top: 50%;
      width: 400px;
    }
  }
}
</style>
