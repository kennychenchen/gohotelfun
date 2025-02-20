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
