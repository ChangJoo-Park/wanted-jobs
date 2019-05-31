<template>
  <div class="home">
    iOS
    <listing :jobs="jobs" />
  </div>
</template>

<script>
import jobs from '../data/iosjobs.json'
import Listing from '@/components/Listing.vue'

export default {
  name: 'ios',
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
