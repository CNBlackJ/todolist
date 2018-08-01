<template>
  <div class="product-detail-container">
    <div class="product-detail-description">
      <p>在这里可以写下产品的相关特性，比如：</p>
      <p>1、安全可靠</p>
      <p>2、营养美味</p>
      <p>3、还有好多的好处</p>
    </div>
    <div class="product-detail-imgs">
      <img  class="product-detail-img"  v-for="i in imgList" :key="i" :src="'https://images-1255936829.cos.ap-guangzhou.myqcloud.com/images/prod_detail_' + i +'.png'" background-size="cover">
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: 'product detail description',
        imgList: [1, 2, 3, 4, 5, 6, 7]
      }
    }
  }
</script>

<style>
  .product-detail-container {
    display: flex;
    flex-direction: column;
  }

  .product-detail-description {
    padding: 10px;
    background-color: white;
    margin-top: 15px;
  }

  .product-detail-imgs {
    display: flex;
    flex-direction: column;
  }

  .product-detail-img {
    width: 100%;
  }
  
</style>