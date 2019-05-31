<template>
  <a :href="`https://www.wanted.co.kr/wd/${item.id}`" target="_blank" class="job-item">
    <h1>{{ item.company.name}} <small>- {{ item.address.location }}</small></h1>
    <div v-if="details">
      <div>
        <span v-for="(tag, index) in item.tags" :key="index">{{ tag.title }}&nbsp;</span>
      </div>
      <h4>소개</h4>
      <div style="white-space: pre-wrap;" v-html="item.detail.intro"></div>
      <h4>자격요건</h4>
      <div style="white-space: pre-wrap;" v-html="item.detail.requirements"></div>
      <h4>우대사항</h4>
      <div style="white-space: pre-wrap;" v-html="item.detail.preferred_points"></div>
      <h4>혜택 및 복지</h4>
      <div style="white-space: pre-wrap;" v-html="item.detail.benefits"></div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    details: {
      type: Boolean,
      required: false,
      default: () => false
    }
  }
}
</script>

<style>
.job-item {
  display: block;
  border: 1px solid black;
  margin-bottom: 1rem;
  padding: 1rem;
  text-decoration: none;
  color: black;
}
.job-item:hover {
  text-decoration: underline;
}
</style>
