<template>
  <div class="date-tabs">
    <div class="date-tabs-container">
      <div 
        v-for="(date, index) in dates" 
        :key="index"
        :class="['date-tab', currentDateIndex === index ? 'active' : '']"
        @click="$emit('update:currentDate', index)"
      >
        <div class="weekday" :class="currentDateIndex === index ? 'active' : ''">{{ date.weekday }}</div>
        <div class="day">{{ date.day }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dates: {
      type: Array,
      required: true
    },
    currentDateIndex: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
.date-tabs {
  background-color: #eff6ff;
  padding: 1rem;
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none;
}

.date-tabs::-webkit-scrollbar {
  display: none;
}

.date-tabs-container {
  display: flex;
}

.date-tab {
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 0.5rem 0.8rem;
  margin: 0 0.25rem;
  text-align: center;
  transition: all 0.2s;
  background-color: white;
}

.date-tab.active {
  background-color: #3b82f6;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.weekday {
  font-size: 0.75rem;
  color: #6b7280;
}

.weekday.active {
  color: #dbeafe;
}

.day {
  font-weight: 500;
}
</style> 