<script setup lang="ts">
import { ref } from "vue";
import { Dayjs } from "dayjs";
import { message } from "ant-design-vue";

defineProps<{ msg: string }>();

const count = ref(0);
const value = ref<Dayjs>();

const onPanelChange = (value: Dayjs, mode: string) => {
  message.info(`${value}, ${mode}`);
  console.log(value, mode);
};

const handleCalendarChange = (value: Dayjs | string) => {
  message.info(`${value}`);
  console.log(value);
};
</script>

<template>
  <a-affix>
    <h1>{{ msg }}</h1>
  </a-affix>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <a-button type="primary" @click="count++">count is: {{ count }}</a-button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>

  <div
    :style="{
      width: '300px',
      border: '1px solid #d9d9d9',
      borderRadius: '4px',
      margin: '0 auto',
    }"
  >
    <a-calendar
      v-model:value="value"
      :fullscreen="false"
      @panelChange="onPanelChange"
      @change="handleCalendarChange"
    />
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
