<template>
  <div class="create">
    <CreateComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import CreateComponent from '@/components/Create.vue'

export default {
  name: 'Create',
  components: {
    CreateComponent
  }
}
</script>
