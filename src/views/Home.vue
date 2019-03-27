<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button>Logout</button>
  </div>
</template>

<script>

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {

  }
}
</script>
