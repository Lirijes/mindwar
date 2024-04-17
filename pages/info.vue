<template>
  <div class="info">
    <!-- <img
      class="info__background-image"
      src="../public/images/background/dea78d61-beed-4d92-94e2-e8302d12aa89.jpg"
      alt="background image"
    /> -->
    <NuxtLink to="/" class="info__home">
      <font-awesome-icon icon="fa-solid fa-circle-arrow-left" />
    </NuxtLink>

    <div class="info__grid">
      <div class="info__grid-box">
        <h5>How to Play</h5>
        <p>
          Welcome to Mind War! Test your knowledge and compete against a virtual
          opponent in this quiz game. The game involves selecting a player
          character and facing off against a robot in a quiz format. Players
          answer a series of questions within a set time limit. The game keeps
          track of scores for both the player and the robot, and progresses
          through a shuffled set of questions. The game interface updates
          dynamically based on user interactions and the game state. First,
          select a player character from the options provided. Once you have
          chosen a player, click the "Start Game" button to begin. The game will
          present a series of multiple-choice questions. Click on the answer you
          believe is correct. If you answer correctly, you will earn a point.
          The game will continue until all questions have been answered. At the
          end of the game, the player with the most points wins. The game will
          display the final score and a message indicating the winner.
        </p>
      </div>
      <div class="info__grid-box">
        <h5>Login to My Account</h5>
        <p>
          Login currently not working. Please check back later.
        </p>
      </div>
      <div class="info__grid-box info__grid-box-wide">
        <h5>About Me as the Creator of this Website</h5>
        <p>
            Hello! I’m Liri, a dedicated web developer with a robust focus on .NET technologies. 
            After studying web development, I've specialized in creating robust and scalable web applications using .NET frameworks alongside languages like C# and JavaScript. 
            My passion lies in building efficient, secure, and intuitive digital solutions that serve real-world business needs.
            I am particularly drawn to the continuous evolution of technology and am always eager to integrate the latest advancements in the .NET and Javascript into my projects. 
            My goal is to leverage these technologies to enhance user experiences and streamline business operations.
            <br>
            <br>Let’s connect and explore how we can create impactful solutions together!
            <br>If you’d like to discuss projects or opportunities, feel free to email me at: lirije11@hotmail.com
            <br>
            <br>Best,
            <br>Liri
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.info {
  position: relative;
  min-height: 100vh;
  overflow-y: auto; 

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: url('../public/images/background/mountains-5689938_1280-withoutmoon.png') repeat;
    background-size: 100% auto;
  }
  &__home {
    position: absolute;
    top: 2%;
    left: 8%;
    color: white;
    font-size: 48px;
    &:hover {
      transform: scale(0.9);
    }
    @media (min-width: 576px) {
      top: 4%;
      font-size: 56px;
    }
    icon {
      width: 140px;
      height: 140px;
      object-fit: cover;
      @media (min-width: 1200px) {
        width: 200px;
        height: 200px;
      }
    }
  }
  &__grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    margin: 200px auto; 
    width: 70%;
    @media (min-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
    }
    &-box {
      padding: 20px;
      background-color: rgba(0, 0, 0, 0.9);
      border-radius: 10px;
      color: white;
      font-size: 12px;
      @media (min-width: 1200px) {
        font-size: 14px;
      }
      &-wide {
        grid-column: span 2;
      }
    }
  }
}
</style>
