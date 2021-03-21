// Задание 1. Переключатель цветов
// Есть массив цветов в hex-формате и кнопки Start и Stop.
// <button type="button" data-action="start">Start</button>
// <button type="button" data-action="stop">Stop</button>
// const colors = [
//   'red',
//   'green',
//   'violet',
//   'gray',
//   'blue',
//   'yellow',
// ];
// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.
//  Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
// Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.
// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };
//
const colors = ["red", "green", "violet", "gray", "blue", "yellow"];

let start = $("button[data-action=start]");
let stop = $("button[data-action=stop]");

const randomIntegerFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
let change = () => {
  start.attr('disabled', 'disabled')
  let colorChange = setInterval(() =>
    $("body").css("background", colors[randomIntegerFromInterval(0, colors.length)]), 500)
  stop.on("click", () => {
    clearInterval(colorChange)
    start.removeAttr("disabled")
  });
}

start.on("click", () => change());

