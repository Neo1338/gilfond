<template>
  <div class="cell" :class="{ _select: select }">
    <div class="picture">
      <img :src="imgpath" v-if="imgpath" />
      <img src="../assets/img/empty-cell.png" v-else />
    </div>
    <div class="info">
      <div class="title">{{ title }}</div>
      <div class="email">{{ email }}</div>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'CardItem',
    props: {
      title: String,
      email: String,
      select: Boolean,
      imgpath: String,
    },
  });
</script>

<style lang="scss" scoped>
  .cell {
    width: 240px;
    height: 70px;
    background: var(--vt-c-white);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-bottom: 18px;
    display: flex;
    position: relative;
    overflow: hidden;
    :hover {
      cursor: pointer;
    }
    &._select {
      background: var(--vt-c-cell);
      border: 1px solid var(--vt-c-cell);
      :hover {
        cursor: default;
      }
    }
    .picture {
      min-width: 70px;
      border-right: 1px solid var(--vt-c-cell);
      background: var(--vt-c-white);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .info {
      padding-left: 15px;
      padding-top: 15px;
    }
    .title {
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: var(--vt-c-title);
      margin: 0;
      width: 140px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .email {
      width: 140px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
</style>
