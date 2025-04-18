<template>
  <div class="notes-info mb-6">
    <h2 class="section-title">备注信息</h2>
    <div class="notes-container">
      <div v-if="notes.shopping" class="note-section shopping-notes">
        <div class="note-header">
          <i class="fas fa-shopping-bag"></i>
          <span>购物清单</span>
        </div>
        <div class="note-content">{{ notes.shopping }}</div>
      </div>
      <div v-if="notes.food" class="note-section food-notes">
        <div class="note-header">
          <i class="fas fa-utensils"></i>
          <span>美食推荐</span>
        </div>
        <div class="note-content">{{ notes.food }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    notes: {
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

.notes-container {
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  padding: 1rem;
  border: 1px solid #f3f4f6;
}

.note-section {
  margin-bottom: 1rem;
}

.note-section:last-child {
  margin-bottom: 0;
}

.note-header {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.note-header i {
  color: #3b82f6;
  margin-right: 0.5rem;
}

.note-header span {
  font-weight: 500;
  color: #1f2937;
}

.note-content {
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.6;
}
</style> 