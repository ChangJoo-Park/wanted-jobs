<template>
  <div>
    <h1>{{ item.company.name}}</h1>
    <div>
      <span v-for="(tag, index) in item.tags" :key="index">{{ tag.title }}&nbsp;</span>
    </div>
    <div v-html="item.detail.requirements"></div>
    <div v-html="item.detail.preferred_points"></div>
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
