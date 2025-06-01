<script setup lang="ts">
import FooterApp from '~/components/app/FooterApp.vue'
import NavBar from '~/components/app/NavBar.vue'
</script>

<template>
  <div class="container mx-auto max-w-screen p-2 flex flex-col text-sand ">
    <header>
      <NavBar />
    </header>
    <main class="bg-[#f1f1f1]">
      <slot />
    </main>
    <footer>
      <FooterApp />
    </footer>
  </div>
</template>

<style>
.gradient-text {
  background: linear-gradient(135deg, #f11a7b, #982176);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.shimmer-effect::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s ease;
}
.shimmer-effect:hover::before {
  left: 100%;
}
.underline-effect {
  position: relative;
}
.underline-effect::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -2px;
  left: 50%;
  background: #f11a7b;
  transition: all 0.3s ease;
}
.underline-effect:hover::after {
  width: 100%;
  left: 0;
}
.slide-toast-enter-active,
.slide-toast-leave-active {
  transition:
    transform 0.3s,
    opacity 0.3s;
}
.slide-toast-enter-from,
.slide-toast-leave-to {
  transform: translateX(80px);
  opacity: 0;
}
.slide-toast-enter-to,
.slide-toast-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>
