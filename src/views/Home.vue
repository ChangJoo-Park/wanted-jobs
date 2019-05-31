<template>
  <div class="home">
    <div class="container">
      <h1>필터</h1>
      <div>
        <div><label for="">복지</label></div>
        <input type="text" v-model="filters.benefits">
      </div>
      <div>
        <div><label for="">자격요건</label></div>
        <input type="text" v-model="filters.requirements" placeholder="vue, react">
      </div>
      <div>
        <div><label for="">우대사항</label></div>
        <input type="text" v-model="filters.preferred_points"  placeholder="vue, react">
      </div>
      <div>
        <label for="details">
          <input id="details" type="checkbox" v-model="showDetails">
          <strong>자세한 내용은 원티드 홈페이지에서 보는걸 추천합니다.</strong><br>
          하지만 꼭 여기서 보고싶으시면 체크하세요.
        </label>
      </div>
    </div>
    <div class="container">
      <div>
        <job v-for="job in filteredJobs" :key="job.id" :item="job" :details="showDetails"/>
      </div>
    </div>
  </div>
</template>

<script>
import jobs from '../data/frontendjobs-pure.json'
import Job from '@/components/Job.vue'

export default {
  name: 'home',
  components: {
    Job
  },
  data () {
    return {
      jobs,
      showDetails: false,
      filters: {
        benefits: '',
        requirements: '',
        preferred_points: ''
      }
    }
  },
  computed: {
    filteredJobs () {
      return this.jobs.filter(job => {
          return job.detail.requirements.toLowerCase().includes(this.filters.requirements.toLowerCase()) &&
            job.detail.preferred_points.toLowerCase().includes(this.filters.preferred_points.toLowerCase()) &&
            job.detail.benefits.toLowerCase().includes(this.filters.benefits.toLowerCase())
        })
    }
  }
}
</script>

<style>
html, body {
  box-sizing: border-box;
  word-break: keep-all;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

.container {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  margin-bottom: 1rem;
}
</style>
