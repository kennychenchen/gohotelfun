function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('current-time').textContent = timeString;
}
// 每秒更新一次时间
setInterval(updateTime, 1000);
// 页面加载时立即更新一次时间
updateTime();
