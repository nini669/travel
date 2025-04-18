<template>
    <div class="empty-page">
      <div class="place-image mb-6">
    <h2 class="section-title">首尔地图</h2>
    <div class="image-container">
      <img :src="image" alt="景点图片">
    </div>
  </div>
  <div class="place-image mb-6">
    <h2 class="section-title">釜山地图</h2>
    <div class="image-container">
      <img :src="image1" alt="景点图片">
    </div>
  </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
    },
    data() {
      return {
        image: require('@/assets/images/seoul.png'),
        image1: require('@/assets/images/fuShang.png'),
      };
    },
  }
  </script>
  
  <style scoped>
  .empty-page {
    min-height: calc(100vh - 120px);
    display: flex;
    /* align-items: center; */
    justify-content: center;
    padding: 1rem;
    margin-top: 60px;
    flex-direction: column;
    margin-bottom: 60px;
  }
  section-title {
    font-size: 1.125rem;
    font-weight: 500;
    color: #1f2937;
    margin-bottom: 1rem;
}

.image-container {
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.image-container img {
  width: 80%;
    /* height: 15rem; */
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center top;
   object-position: center top;
  margin: 12px;
}
  </style> 
