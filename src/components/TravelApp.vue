<template>
  <div class="travel-app">
    <nav-bar></nav-bar>

    <!-- 根据当前标签显示不同内容 -->
    <template v-if="currentTab === 'schedule'">
      <date-tabs 
        :dates="dates" 
        :currentDateIndex="currentDateIndex" 
        @update:currentDate="currentDateIndex = $event">
      </date-tabs>
      <schedule-content 
        :currentDay="currentDay">
      </schedule-content>
    </template>
    <Map v-if="currentTab === 'map'"></Map>
    <empty-page 
      v-if="currentTab === 'guide'"
      :icon="getEmptyPageIcon"
      :message="getEmptyPageMessage">
    </empty-page>

    <!-- 底部导航栏 -->
    <div class="tab-bar">
      <div 
        v-for="tab in tabs" 
        :key="tab.id"
        class="tab-item"
        :class="{ active: currentTab === tab.id }"
        @click="currentTab = tab.id"
      >
        <i :class="['fas', tab.icon]"></i>
        <span>{{ tab.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import DateTabs from './components/DateTabs.vue'
import ScheduleContent from './components/ScheduleContent.vue'
import EmptyPage from './components/EmptyPage.vue'
import { travelData } from '@/data/travelData.js'
import Map from "@/components/components/Map.vue"

export default {
  components: {
    NavBar,
    DateTabs,
    ScheduleContent,
    EmptyPage,
    Map 
  },
  data() {
    return {
      currentTab: 'schedule',
      currentDateIndex: 0,
      dates: [
        { day: '5月1日', weekday: '周三' },
        { day: '5月2日', weekday: '周四' },
        { day: '5月3日', weekday: '周五' },
        { day: '5月4日', weekday: '周六' },
        { day: '5月5日', weekday: '周日' },
        { day: '5月6日', weekday: '周一' },
        { day: '5月7日', weekday: '周二' }
      ],
      travelData,
      tabs: [
        { id: 'schedule', name: '行程', icon: 'fa-calendar-alt' },
        { id: 'map', name: '地图', icon: 'fa-map-marker-alt' },
        { id: 'guide', name: '攻略', icon: 'fa-suitcase' },
        // { id: 'profile', name: '我的', icon: 'fa-user' }
      ]
    }
  },
  computed: {
    currentDay() {
      return this.travelData[this.currentDateIndex]
    },
    getEmptyPageIcon() {
      const icons = {
        map: 'fa-map',
        guide: 'fa-book-open',
        profile: 'fa-user-circle'
      }
      return icons[this.currentTab] || 'fa-file-alt'
    },
    getEmptyPageMessage() {
      const messages = {
        map: '地图功能开发中...',
        guide: '旅游攻略整理中...',
        profile: '个人中心开发中...'
      }
      return messages[this.currentTab] || '页面开发中...'
    }
  }
}
</script>

<style scoped>
.travel-app {
  font-family: 'Noto Sans SC', sans-serif;
  background-color: #f8fafc;
  min-height: 100vh;
}

.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 0;
  z-index: 10;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
}

.tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 0.25rem 0;
}

.tab-item i {
  color: #6b7280;
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
}

.tab-item span {
  font-size: 0.75rem;
  color: #6b7280;
}

.tab-item.active i,
.tab-item.active span {
  color: #3b82f6;
}
</style> 