<script setup lang="ts">
import { ref } from "vue";
import type { Player } from "~/typings/types";

const selectedPlayer = ref<Player | null>(null);
const showGameStartButton = ref(false);
const showGameInterface = ref(false);
const showOptions = ref(true);
const showHeader = ref(true);

const players: Player[] = [
  {
    id: 1,
    name: "Player 1",
    image: "images/players/dog-1417208_1280-transparent.png",
  },
  {
    id: 2,
    name: "Player 2",
    image: "images/players/dog-1417208_1280-3-transparent.png",
  },
  {
    id: 3,
    name: "Player 3",
    image: "images/players/dog-1417208_1280-5-transparent.png",
  },
  {
    id: 4,
    name: "Player 4",
    image: "images/players/dog-1417208_1280-4-transparent.png",
  },
];

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
</script>

<template>
  <div class="index">
    <img
      class="index__background-image"
      src="../public/images/background/mountains-5689938_1280-withoutmoon.png"
      alt="background"
    />
    <NuxtLink to="/info" class="index__info">
      <img src="../public/images/icons/mountains-5689938_1280.png" alt="info icon" class="index__info-icon" />
    </NuxtLink>

    <h1 id="index__header" v-if="showHeader" class="index__header"><span>Let's Mind War!</span><span>Choose Your Player</span></h1>

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
        <div
          v-for="player in players"
          :key="player.id"
          class="index__option"
        >
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
      Game in progress...
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/css/index.scss";

.index {
  &__background-image {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  &__info {
    position: absolute;
    top: 5%;
    left: 6%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &:hover {
      transform: scale(0.9);
    }
    &-icon {
      width: 140px;
      height: 140px;
      object-fit: cover;
      @media (min-width: 1200px) {
        width: 200px;
        height: 200px;
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
      @media (min-width: 576px){
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
    padding: 10px 20px;
    margin-top: 20px;
    background-color: $color-green;
    color: white;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: $color-light-blue;
    }
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
  &__right-player {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(100%, -50%);
    transition: transform 0.5s ease;
  }
  &__right-player-box {
    width: 200px;
    height: 200px;
    background-color: white;
    text-align: center;
    line-height: 200px;
    font-size: 24px;
  }
  &__game-interface {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 300px;
    height: 200px;
  }
}
</style>
