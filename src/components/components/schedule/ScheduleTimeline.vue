<template>
  <div class="schedule-timeline mb-6">
    <h2 class="section-title">行程安排</h2>
    <div class="timeline-container">
      <div v-for="(timeSlot, index) in schedule" :key="index" class="timeline-item">
        <div class="timeline-time">
          <div class="time-label">{{ timeSlot.time }}</div>
          <div class="timeline-line" v-if="index !== schedule.length - 1"></div>
        </div>
        <div class="timeline-content">
          <div v-for="(place, placeIndex) in timeSlot.places" :key="placeIndex" class="place-item">
            <div class="place-name">{{ place }}</div>
            <div v-if="timeSlot.details && timeSlot.details[placeIndex]" class="place-details">
              {{ timeSlot.details[placeIndex] }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    schedule: {
      type: Array,
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

.timeline-item {
  display: flex;
  margin-bottom: 1.25rem;
}

.timeline-time {
  width: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 0.75rem;
}

.time-label {
  padding: 0.25rem 0.5rem;
  background-color: #dbeafe;
  color: #1e40af;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.timeline-line {
  flex: 1;
  width: 2px;
  background-color: #dbeafe;
  margin-left: 10px;
}

.timeline-content {
  flex: 1;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  padding: 1rem;
  border: 1px solid #f3f4f6;
}

.place-item {
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px dashed #e2e8f0;
}

.place-item:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.place-name {
  color: #1f2937;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.place-details {
  font-size: 0.875rem;
  color: #4b5563;
}
</style> 