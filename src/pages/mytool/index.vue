<template>
  <div class="tools">
    <div class="header">
      <span>小工具</span>
    </div>

    <div class="tools-main">

      <div class="joy-stick-bg">
        <div class="joy-stick"></div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: 'tools'
      }
    }
  }
</script>

<style>
  .tools {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .header {
    font-size: 24px;
  }

  .tools-main {
    display: flex;
  }

  .joy-stick-bg {
    width: 100px;
    height: 100px;
    background-color: #efefef;
    border-radius: 100%;
    top: 300px;
    left: 100px;
  }

  .joy-stick {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: #af0808;
  }
</style>