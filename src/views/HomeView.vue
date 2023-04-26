<template>
  <main>
    <div class="left-block">
      <div class="title">Поиск сотрудников</div>
      <InputItem />
      <div class="title">Результаты</div>

      <div class="result">
        <p class="text" v-if="findCount === 0 && !noFound && !isError">начните поиск</p>
        <p class="text" v-if="noFound && !isError">ничего не найдено</p>
        <p class="text _error" v-if="isError">Ошибка сервера, попробуйте позже...</p>
        <CardItem
          :select="user.selected"
          v-for="user in findUsers"
          :key="user.id"
          @click="selectUser(user.id)"
          :title="user.name"
          :email="user.email"
        />
      </div>
    </div>
    <OptionItem />
  </main>
</template>

<script>
  import { defineComponent } from 'vue';
  import InputItem from '@/components/InputItem.vue';
  import CardItem from '@/components/CardItem.vue';
  import OptionItem from '@/components/OptionItem.vue';
  import { mapActions, mapGetters } from 'vuex';

  export default defineComponent({
    name: 'Home',
    components: {
      InputItem,
      CardItem,
      OptionItem,
    },
    computed: mapGetters(['isError', 'getSelectID', 'allUsers', 'isSelect', 'findCount', 'noFound', 'findUsers']),
    methods: mapActions(['selectUser', 'getAllUsers']),
    mounted() {
      this.getAllUsers();
    },
  });
</script>

<style lang="scss" scoped>
  main {
    margin-top: 30px;
    background: var(--vt-c-bg-gray);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    min-height: 575px;
    position: relative;
    display: flex;
    .left-block {
      width: 285px;
      border-right: 1px solid #e0e0e0;
      padding: 25px 25px 25px 20px;
      > :first-child {
        margin-top: 0;
      }
      .result {
        margin-top: 10px;
      }
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
