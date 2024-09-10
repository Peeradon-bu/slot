const reel1 = document.getElementById("reel1");
const reel2 = document.getElementById("reel2");
const reel3 = document.getElementById("reel3");
const resultText = document.getElementById("result");
const spinButton = document.getElementById("spin-button");

const symbols = ["🍒", "🍋", "🍊", "🍉", "⭐", "🔔"];

spinButton.addEventListener("click", function() {
    // เริ่มแอนิเมชัน
    reel1.classList.add("spin");
    reel2.classList.add("spin");
    reel3.classList.add("spin");

    // ช้าลง 1 วินาทีให้แอนิเมชันเสร็จสิ้น
    setTimeout(() => {
        const result1 = getRandomSymbol();
        const result2 = getRandomSymbol();
        const result3 = getRandomSymbol();
        
        reel1.textContent = result1;
        reel2.textContent = result2;
        reel3.textContent = result3;

        checkResult(result1, result2, result3);
        
        // ลบแอนิเมชันหลังจากแสดงผล
        reel1.classList.remove("spin");
        reel2.classList.remove("spin");
        reel3.classList.remove("spin");
    }, 1000); // 1000ms (1s) คือระยะเวลาแอนิเมชัน
});

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function checkResult(r1, r2, r3) {
    if (r1 === r2 && r2 === r3) {
        resultText.textContent = "🎉 You Win! 🎉";
    } else {
        resultText.textContent = "Try Again!";
    }
}