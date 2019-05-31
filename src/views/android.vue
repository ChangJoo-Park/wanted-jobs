<template>
  <div class="home">
    Android
    <listing :jobs="jobs" />
  </div>
</template>

<script>
import jobs from '../data/androidjobs.json'
import Listing from '@/components/Listing.vue'

console.log(jobs)
export default {
  name: 'android',
  components: {
    Listing
  },
  data () {
    return {
      jobs
    }
  }
}
</script>
