<template>
  <div class="content-area">
    <div v-if="currentDay" class="day-schedule">
      <schedule-timeline 
        v-if="currentDay.schedule && currentDay.schedule.length > 0"
        :schedule="currentDay.schedule">
      </schedule-timeline>
      
      <transportation-info 
        v-if="currentDay.transportation"
        :transportation="currentDay.transportation">
      </transportation-info>
      
      <accommodation-info 
        v-if="currentDay.accommodation"
        :accommodation="currentDay.accommodation">
      </accommodation-info>
      
      <notes-info 
        v-if="currentDay.notes"
        :notes="currentDay.notes">
      </notes-info>
      
      <place-image 
        v-if="currentDay.image"
        :image="currentDay.image">
      </place-image>
    </div>
    
    <div v-else class="no-data">
      <i class="fas fa-calendar-times"></i>
      <p>暂无行程数据</p>
    </div>
  </div>
</template>

<script>
import ScheduleTimeline from '@/components/components/schedule/ScheduleTimeline.vue'
import TransportationInfo from '@/components/components/schedule/TransportationInfo.vue'
import AccommodationInfo from '@/components/components/schedule/AccommodationInfo.vue'
import NotesInfo from '@/components/components/schedule/NotesInfo.vue'
import PlaceImage from '@/components/components/schedule/PlaceImage.vue'

export default {
  components: {
    ScheduleTimeline,
    TransportationInfo,
    AccommodationInfo,
    NotesInfo,
    PlaceImage
  },
  props: {
    currentDay: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.content-area {
  padding: 0rem 1rem 5rem 1rem;
}

.no-data {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 0;
}

.no-data i {
  color: #9ca3af;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.no-data p {
  color: #6b7280;
}
</style> 