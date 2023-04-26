<template>
  <div class="info-block" :class="{ empty: !isSelect }">
    <div class="info-inner" v-if="isSelect && getSelectID > -1">
      <div class="img-left">
        <img src="../assets/img/empty-info.png" />
      </div>
      <div class="info-block">
        <div class="title">{{ allUsers[getSelectID].name }}</div>
        <p><b>email:</b> {{ allUsers[getSelectID].email }}</p>
        <p><b>phone:</b> {{ allUsers[getSelectID].phone }}</p>
        <div class="title">О себе:</div>
        <p>Работает в компании {{ allUsers[getSelectID].company.name }}</p>
      </div>
    </div>
    <div class="empty" v-else>Выберите сотрудника, чтобы посмотреть его профиль</div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';
  import { mapGetters } from 'vuex';

  export default defineComponent({
    name: 'OptionItem',
    computed: mapGetters(['isSelect', 'getSelectID', 'allUsers']),
  });
</script>

<style lang="scss" scoped>
  .info-block {
    &.empty {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    width: 100%;
    position: relative;
    padding: 30px;

    .info-inner {
      display: flex;
      justify-content: flex-start;
      .img-left {
        max-width: 430px;
        width: 430px;
        margin-bottom: 30px;
        img {
          width: 100%;
        }
      }
      .info-block {
        display: block;
        margin-left: 60px;
        padding: 0;
        width: 440px;
        p:last-child {
          line-height: 17px;
        }
      }
      .title:first-child {
        margin: 0;
        margin-bottom: 10px;
        color: var(--vt-c-black);
      }
      .title {
        margin-top: 20px;
        margin-bottom: 25px;
      }
      p {
        margin-bottom: 10px;
        b {
          font-weight: 600;
          color: var(--vt-c-title);
        }
      }
    }
    .empty {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media screen and (max-width: 1370px) {
    main {
      .info-block {
        width: 100%;
        position: relative;
        padding: 30px;
        .info-inner {
          display: block;
          .info-block {
            display: block;
            margin-left: 0px;
            padding-left: 0;
            width: 100%;
          }
        }
      }
    }
  }
</style>
