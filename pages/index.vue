<script setup lang="ts">
</script>

<template>
    <div class="index">
        <NuxtLink to="/gamemode" class="index__background">
            <h1 class="index__background-title">Join the mind war</h1>
            <img class="index__background-image" src="../public/cat-8474233_1280.webp" alt="background">
        </NuxtLink>
    </div>
</template>

<style scoped lang="scss">
@import '../assets/css/index.scss';

.index {
    background-color: $color-dark-grey;
    &__background {
        position: relative;
        display: flex;
        justify-content: center;
        text-decoration: none;

        &-title {
            position: absolute;
            color: $color-light-blue;
            font-size: 64px;
            text-align: center;
            margin-top: 2rem;
        }

        &-image{
        }
    }
}
</style>