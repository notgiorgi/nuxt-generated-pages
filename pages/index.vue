<template>
  <div class="container">
    <ul>
      <li>
        <nuxt-link to="/MasterPage/1">MP1</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/MasterPage/2">MP2</nuxt-link>
      </li>

      <li>
        <nuxt-link to="/MasterPage/4">MP4</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
