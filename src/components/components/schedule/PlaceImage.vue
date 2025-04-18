<template>
  <div class="place-image mb-6">
    <h2 class="section-title">景点预览</h2>
    <div class="image-container">
      <img :src="image" alt="景点图片">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.section-title {
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
  width: 100%;
  height: 12rem;
  object-fit: cover;
  object-position: center top;
}
</style> 