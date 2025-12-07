<template class="bg-slate-950">
  <div @contextmenu.prevent>
    <NuxtPage />
  </div>
</template>
<style>
html {
  scroll-behavior: smooth;
  scroll-padding-top: 120px;
  background-color: #020617;
}
img {
  -webkit-user-drag: none;
  user-select: none;
  pointer-events: none;
}
</style>
