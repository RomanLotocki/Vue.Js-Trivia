<template>
    <TestComponent />
</template>

<script>
// @ is an alias to /src
import TestComponent from '@/components/TestComponent.vue'

export default {
  name: 'TestView',
  components: {
    TestComponent,
  }
}
</script>