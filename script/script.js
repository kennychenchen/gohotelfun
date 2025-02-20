function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('current-time').textContent = timeString;
    // 获取当前年份
    const currentYear = now.getFullYear(); 
    // 找到版权信息元素并更新年份
    const copyrightElement = document.querySelector('footer p');
    if (copyrightElement) {
        copyrightElement.textContent = `© ${currentYear} gohotel.fun`;
    }
}
// 每秒更新一次时间
setInterval(updateTime, 1000);
// 页面加载时立即更新一次时间
updateTime();
