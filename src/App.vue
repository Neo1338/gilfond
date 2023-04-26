<template>
  <header>
    <h1>Жилфонд</h1>
    <div class="user-name">Пользователь</div>
  </header>

  <RouterView />
</template>

<script>
  import { RouterView } from 'vue-router';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'App',
    components: {
      RouterView,
    },
  });
</script>

<style lang="scss" scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    h1 {
      font-weight: 700;
      font-size: 32px;
      line-height: 39px;
      color: var(--vt-c-red);
    }
    .user-name {
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: var(--vt-c-title);
      cursor: pointer;
    }
  }
</style>
