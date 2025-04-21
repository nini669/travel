<template>
  <div class="nav-bar">
    <div class="nav-container">
      <div class="nav-title">小韩七日游</div>
      <!-- <div class="nav-actions">
        <i class="fas fa-share-alt"></i>
        <i class="fas fa-ellipsis-v"></i>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #dbeafe;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
}

.nav-title {
  font-size: 1.125rem;
  font-weight: 500;
  color: #1f2937;
}

.nav-actions {
  display: flex;
  align-items: center;
}

.nav-actions i {
  color: #4b5563;
  margin-left: 0.75rem;
}
</style> 