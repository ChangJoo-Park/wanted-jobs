<template>
  <div class="home">
    프론트엔드
    <listing :jobs="jobs" />
  </div>
</template>

<script>
import jobs from '../data/frontendjobs.json'
import Listing from '@/components/Listing.vue'

export default {
  name: 'home',
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
