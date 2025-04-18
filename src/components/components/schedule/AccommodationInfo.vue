<template>
  <div class="accommodation-info mb-6">
    <h2 class="section-title">住宿信息</h2>
    <div class="hotel-container">
      <div class="hotel-icon">
        <i class="fas fa-hotel"></i>
      </div>
      <div class="hotel-details">
        <div class="hotel-name">{{ accommodation.name }}</div>
        <div v-if="accommodation.address" class="hotel-address">
          {{ accommodation.address }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    accommodation: {
      type: Object,
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

.hotel-container {
  display: flex;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  padding: 1rem;
  border: 1px solid #f3f4f6;
}

.hotel-icon {
  margin-right: 1rem;
}

.hotel-icon i {
  color: #3b82f6;
  font-size: 1rem;
}

.hotel-details {
  flex: 1;
}

.hotel-name {
  font-weight: 500;
  color: #1f2937;
  margin-bottom: 0.25rem;
}

.hotel-address {
  font-size: 0.875rem;
  color: #4b5563;
}
</style> 