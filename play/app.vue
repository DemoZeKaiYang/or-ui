<template>
  <or-button icon="back" plain disabled type="primary"
    ><i class="or-icon-back"></i
  ></or-button>
  <or-button disabled type="success">123123</or-button>
  <or-button disabled circle @click="testFunction">123</or-button>
</template>

<script setup lang="ts">
import { OrButton, Icon } from '@or-ui/components'

const testFunction = () => {
  console.log(1)
}
</script>

<style></style>
