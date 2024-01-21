<template>
  <div>
    <OrRadioGroup v-model="test" disabled size="small">
      <OrRadio :label="1" border>备选项1</OrRadio>
      <OrRadio :label="2" border>备选项2</OrRadio>
    </OrRadioGroup>
    <!-- <test1></test1> -->
  </div>
</template>

<script setup lang="ts">
import { OrRadio, OrRadioGroup } from '@or-ui/components'
import { ref } from 'vue'

const test = ref<number>(1)
</script>

<style></style>
