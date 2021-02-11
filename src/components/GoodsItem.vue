<template>
  <div class="goods">
    <div class="cover">
      <img :src="goods.productCover" alt="" />
    </div>
    <div class="goods-desc">
      <span class="goods-name">{{ goods.productName }}</span>
      <p class="desc">{{ goods.desc }}</p>
      <span class="price">{{ goods.productPrice }}元起</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "goods-item",
  props: {
    goods: Object
  }
};
</script>

<style lang="scss" scoped>
.goods {
  width: 100%;
  overflow: hidden;
  background: #fff;
  &:hover {
    box-shadow: 0px 0px 10px #ddd;
  }
  .cover {
    width: 100%;
    height: auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .goods-desc {
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
  }
  .goods-name {
    font-size: 0.9rem;
    line-height: 1.5rem;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .desc {
    color: #888;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1.2rem;
    font-size: 0.8rem;
  }
  .price {
    color: #ff6700;
    font-size: 0.9rem;
    line-height: 1.5rem;
  }
}
</style>
