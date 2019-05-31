<template>
  <div>
    <h1>{{ item.company.name}}</h1>
    <div>
      <span v-for="(tag, index) in item.tags" :key="index">{{ tag.title }}&nbsp;</span>
    </div>
    <h3>자격요건</h3>
    <div style="white-space: pre;" v-html="item.detail.requirements"></div>
    <h3>우대사항</h3>
    <div style="white-space: pre;" v-html="item.detail.preferred_points"></div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>
