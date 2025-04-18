<template>
  <div class="transportation-info mb-6">
    <h2 class="section-title">交通信息</h2>
    <div class="transport-container">
      <div v-for="(transport, index) in transportation" :key="index" class="transport-item">
        <div class="transport-content">
          <div class="transport-icon">
            <i :class="['fas', getTransportIcon(transport.type)]"></i>
          </div>
          <div class="transport-details">
            <div class="transport-route">{{ transport.route }}</div>
            <div class="transport-time">{{ transport.time }}</div>
            <div v-if="transport.note" class="transport-note">{{ transport.note }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { transportIcons } from '@/data/travelData.js'

export default {
  props: {
    transportation: {
      type: Array,
      required: true
    }
  },
  methods: {
    getTransportIcon(type) {
      return transportIcons[type] || 'fa-route'
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

.transport-container {
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  padding: 1rem;
  border: 1px solid #f3f4f6;
}

.transport-item {
  margin-bottom: 0.75rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #f1f5f9;
}

.transport-item:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.transport-content {
  display: flex;
  align-items: flex-start;
}

.transport-icon {
  margin-right: 0.75rem;
}

.transport-icon i {
  color: #3b82f6;
}

.transport-details {
  flex: 1;
}

.transport-route {
  font-weight: 500;
  color: #1f2937;
  margin-bottom: 0.25rem;
}

.transport-time {
  font-size: 0.875rem;
  color: #4b5563;
}

.transport-note {
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 0.25rem;
}
</style> 