<script setup lang="ts">
// No script needed for simple navbar
</script>

<template>
  <div class="navbar p-8 shimmer-effect hover:-translate-y-1 hover:shadow-button-hover active:-translate-y-0.5 bg-neutral text-neutral-content border border-lg border-black shadow-2xl rounded-t-box">
    <!-- Left -->
    <div class="navbar-start">
      <NuxtLink
        to="/" class="btn btn-ghost m-4 p-4 text-[32px]
      font-extrabold  mb-2 tracking-tight"
      >
        Shitfly
      </NuxtLink>
    </div>
    <!-- Right -->
    <div class="navbar-end space-x-2">
      <NuxtLink to="/login" class="btn btn-primary  ">
        Register / Login
      </NuxtLink>
    </div>
  </div>
</template>
