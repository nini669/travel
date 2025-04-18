<template>
    <div class="empty-page">
      <div class="empty-content">
        <i :class="['fas', icon, 'icon']"></i>
        <p class="message">{{ message }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      icon: {
        type: String,
        default: 'fa-file-alt'
      },
      message: {
        type: String,
        default: '页面开发中...'
      }
    }
  }
  </script>
  
  <style scoped>
  .empty-page {
    min-height: calc(100vh - 120px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    margin-top: 60px;
  }
  
  .empty-content {
    text-align: center;
  }
  
  .icon {
    font-size: 3rem;
    color: #9ca3af;
    margin-bottom: 1rem;
  }
  
  .message {
    color: #6b7280;
    font-size: 1rem;
  }
  </style> 