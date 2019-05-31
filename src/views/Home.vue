<template>
  <div class="home">
    <div>
      <h1>필터</h1>
      <div>
        <label for="">자격요건</label>
        <input type="text" v-model="filters.requirements">
      </div>
      <div>
        <label for="">우대사항</label>
        <input type="text" v-model="filters.preferred_points">
      </div>
    </div>
    <div>
      <div>
        <job v-for="job in filteredJobs" :key="job.id" :item="job" />
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
      filters: {
        requirements: '',
        preferred_points: ''
      }
    }
  },
  computed: {
    filteredJobs () {
      return this.jobs.filter(job => {
          return job.detail.requirements.toLowerCase().includes(this.filters.requirements.toLowerCase()) &&
            job.detail.preferred_points.toLowerCase().includes(this.filters.preferred_points.toLowerCase())
        })
    }
  }
}
</script>
