<template>
  <div class="tools">
    <div class="header">
      <span>小工具</span>
    </div>

    <div class="tools-main">

      <div class="joy-stick-bg">
        <div class="joy-stick"></div>
      </div>

      <div class="blue">
        <div class="white">
          <div class="red"></div>
        </div>
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
    margin-top: 50%;
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

  .blue {
    height: 200px;
    width: 200px;
    background-color: rgb(0, 36, 125);
    position: relative;
    border-radius: 50%;
  }

  .white {
    height: 130px;
    width: 130px;
    background-color: #fff;
      position: absolute;
    top: 35px;
    left: 35px;
    border-radius: 50%;
  }

  .red {
    height: 70px;
    width: 70px;
    background-color: rgb(206, 17, 38);
    position: absolute;
    top: 30px;
    left: 30px;
    border-radius: 50%;
  }
</style>