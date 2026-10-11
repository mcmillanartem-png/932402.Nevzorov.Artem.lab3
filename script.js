
let userName = prompt("Добро пожаловать в терминал футуролога! Введите ваше имя:", "Гость");

if (!userName || userName.trim() === "") {
    userName = "Исследователь";
}

alert(`Приветствуем, ${userName}! Система аналитики прогнозов активирована.`);

const growthForecasts = [18, 55, 4, 32, 5, 24];

console.log(`[Инициализация] Пользователь: ${userName}`);
console.log("Исходный массив прогнозов роста (%):", growthForecasts);

function findMax(arr) {
    if (arr.length === 0) return 0;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function filterHighGrowth(arr) {
    let high = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 20) {
            high.push(arr[i]);
        }
    }
    return high;
}

function analyzeLowGrowth(arr) {
    let lowCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 5) {
            lowCount++;
        }
    }
    let share = (lowCount / arr.length) * 100;
    return {
        count: lowCount,
        share: share.toFixed(1)
    };
}

// 4. Основные вычисления
const totalSum = calculateSum(growthForecasts);
const averageGrowth = (totalSum / growthForecasts.length).toFixed(1);

const highGrowthList = filterHighGrowth(growthForecasts);
const highGrowthCount = highGrowthList.length;

const maxGrowth = findMax(growthForecasts);
const lowStats = analyzeLowGrowth(growthForecasts);


alert(`Средний прогнозируемый рост – ${averageGrowth}%, ${highGrowthCount} прогнозов – высокие`);

console.log(`Количество низких прогнозов (<= 5%): ${lowStats.count}`);
console.log(`Доля низких прогнозов от общего числа: ${lowStats.share}%`);

if (maxGrowth > 50) {
    console.log(`Максимальный рост: ${maxGrowth}%. Некоторые прогнозы выглядят очень амбициозно!`);
}