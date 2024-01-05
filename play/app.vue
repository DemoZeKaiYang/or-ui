<template>
  <or-link disabled>默认链接</or-link>&nbsp;
  <or-link type="primary" disabled>默认链接</or-link>&nbsp;
  <or-link type="success" disabled>成功链接</or-link>&nbsp;
  <or-link type="warning" disabled>警告链接</or-link>&nbsp;
  <or-link type="danger" disabled> 危险链接</or-link>&nbsp;
  <or-link type="info" disabled>信息链接</or-link>
  <br />
  <or-link :underline="false">默认链接</or-link>&nbsp;
  <or-link type="primary" :underline="false">默认链接</or-link>&nbsp;
  <or-link type="success" :underline="false">成功链接</or-link>&nbsp;
  <or-link type="warning" :underline="false">警告链接</or-link>&nbsp;
  <or-link type="danger" :underline="false"> 危险链接</or-link>&nbsp;
  <or-link type="info" :underline="false">信息链接</or-link>
  <br />
  <or-link>默认链接</or-link>&nbsp;
  <or-link type="primary">默认链接</or-link>&nbsp;
  <or-link type="success">成功链接</or-link>&nbsp;
  <or-link type="warning">警告链接</or-link>&nbsp;
  <or-link type="danger"> 危险链接</or-link>&nbsp;
  <or-link type="info">信息链接</or-link>

  <br />
  <or-link href="http://www.baidu.com">默认链接</or-link>&nbsp;
  <or-link type="primary" href="http://www.baidu.com">默认链接</or-link>&nbsp;
  <or-link type="success" href="http://www.baidu.com">成功链接</or-link>&nbsp;
  <or-link type="warning" href="http://www.baidu.com">警告链接</or-link>&nbsp;
  <or-link type="danger" href="http://www.baidu.com"> 危险链接</or-link>&nbsp;
  <or-link type="info" href="http://www.baidu.com">信息链接</or-link>
</template>

<script setup lang="ts">
import { OrButton, OrIcon } from '@or-ui/components'
</script>

<style></style>
