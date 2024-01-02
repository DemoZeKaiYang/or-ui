<template>
  <OrButton type="primary" @click="testFunction" size="large" plain
    >我1231231231232<i class="or-icon-back"></i
  ></OrButton>
</template>

<script setup lang="ts">
import { OrButton, Icon } from '@or-ui/components'

const testFunction = () => {
  console.log(1)
}
</script>

<style></style>
