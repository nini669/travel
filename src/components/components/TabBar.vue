<template>
  <div class="tab-bar">
    <div class="tab-item">
      <i class="fas fa-calendar-alt"></i>
      <span>行程</span>
    </div>
    <div class="tab-item">
      <i class="fas fa-map-marker-alt"></i>
      <span>地图</span>
    </div>
    <div class="tab-item">
      <i class="fas fa-suitcase"></i>
      <span>攻略</span>
    </div>
    <!-- <div class="tab-item">
      <i class="fas fa-user"></i>
      <span>我的</span>
    </div> -->
  </div>
</template>

<style scoped>
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
}

.tab-item i {
  color: #6b7280;
}

.tab-item:first-child i {
  color: #3b82f6;
}

.tab-item span {
  font-size: 0.75rem;
  margin-top: 0.25rem;
  color: #6b7280;
}

.tab-item:first-child span {
  color: #3b82f6;
}
</style> 