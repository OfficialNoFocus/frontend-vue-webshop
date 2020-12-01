<template>
  <div class="home">
    <Frontpage/>
  </div>
</template>

<script>
// @ is an alias to /src
import Frontpage from '@/components/Frontpage.vue'

export default {
  name: 'Home',
  components: {
    Frontpage
  }
}
</script>
