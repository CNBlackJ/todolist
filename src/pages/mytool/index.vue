<template>
  <div class="tools">
    <div class="header">
      <span>小工具</span>
    </div>

    <div class="joystick">

      <div class="blue">
        <div class="white">
          <div class="red" @tap="btnTap" @touchmove="move" @touchend="moveEnd"></div>
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
    },
    methods: {
      btnTap () {
        console.log('tap...')
      },
      move (e) {
        console.log(e.touches[0].clientX, e.touches[0].clientY)
      },
      moveEnd () {
        console.log('moving end.')
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

  .joystick {
    margin-top: 50%;
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