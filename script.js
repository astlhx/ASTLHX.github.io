// 获取元素
const successEl = document.getElementById('success');
const dialogEl = document.getElementById('dialog');
const handsomeBtn = document.getElementById('handsome');
const notHandsomeBtn = document.getElementById('not-handsome');

// 点击次数记录
let clickCount = 0;

// 点击"帅"的逻辑
handsomeBtn.addEventListener('click', () => {
    dialogEl.classList.add('hidden');
    successEl.classList.remove('hidden');
    // 666显示时轻微抖动动画
    successEl.style.animation = 'bounce 0.5s ease';
});

// 点击"不帅"的逻辑
notHandsomeBtn.addEventListener('click', () => {
    clickCount++;
    
    // 缩放比例：更自然的递增/递减
    const handsomeScale = 1 + (clickCount * 0.25); // 每次放大25%
    const notHandsomeScale = Math.max(0.3, 1 - (clickCount * 0.18)); // 最小缩到0.3
    
    handsomeBtn.style.transform = `scale(${handsomeScale})`;
    notHandsomeBtn.style.transform = `scale(${notHandsomeScale})`;
    notHandsomeBtn.style.opacity = 1 - (clickCount * 0.15); // 逐渐透明
    
    // 点击5次后：不帅按钮消失，帅按钮占3/4屏幕
    if (clickCount >= 5) {
        notHandsomeBtn.style.display = 'none';
        // 帅按钮放大并居中
        handsomeBtn.style.transform = 'scale(4)';
        handsomeBtn.style.padding = '2rem 4rem';
        handsomeBtn.style.margin = '0 auto';
    }
});

// 添加666的抖动动画
document.head.insertAdjacentHTML('beforeend', `
    <style>
        @keyframes bounce {
            0%, 100% { transform: scale(1); }
            20% { transform: scale(1.1); }
            40% { transform: scale(0.9); }
            60% { transform: scale(1.05); }
            80% { transform: scale(0.95); }
        }
    </style>
`);
