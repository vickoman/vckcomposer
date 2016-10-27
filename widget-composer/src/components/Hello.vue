<template>
  <div class="widget-editor" id="widgetEditor">
      <!--Header -->
      <header class="header" >
          <router-link to="/next"><div class="header__title">Widget Editor</div></router-link>
        </header>
      <!-- Widget Editor Workspace -->
      <div class="workspace">
      </div>
      <!-- Footer -->
      <footer class="footer">Footer - FPO</footer>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
