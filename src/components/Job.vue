<template>
  <div>
    <h1>{{ item.company.name}}</h1>
    <div>
      <span v-for="(tag, index) in item.tags" :key="index">{{ tag.title }}&nbsp;</span>
    </div>
    <h3>소개</h3>
    <div style="white-space: pre;" v-html="item.detail.intro"></div>
    <h3>자격요건</h3>
    <div style="white-space: pre;" v-html="item.detail.requirements"></div>
    <h3>우대사항</h3>
    <div style="white-space: pre;" v-html="item.detail.preferred_points"></div>
    <h3>혜택 및 복지</h3>
    <div style="white-space: pre;" v-html="item.detail.benefits"></div>
    <a :href="`https://www.wanted.co.kr/wd/${item.id}`" target="_blank">원티드에서 보기</a>
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
