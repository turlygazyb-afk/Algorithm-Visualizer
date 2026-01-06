// Global variables
let array = [];
const container = document.getElementById("container");
const ARRAY_SIZE = 20;

// Generate a new random array
function generateArray() {
  array = [];
  for (let i = 0; i < ARRAY_SIZE; i++) {
    array.push(Math.floor(Math.random() * 80) + 20);
  }
  drawArray(array);
}

// Draw the array as vertical bars
function drawArray(arr) {
  container.innerHTML = "";
  arr.forEach(value => {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = value + "px";
    container.appendChild(bar);
  });
}

// Bubble Sort visualization
async function bubbleSort() {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(j, j + 1);
        drawArray(array);
        await sleep(300);
      }
    }
  }
}

// Selection Sort visualization
async function selectionSort() {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      swap(i, minIndex);
      drawArray(array);
      await sleep(300);
    }
  }
}

// Swap two elements in the array
function swap(i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// Delay function for animation
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Initial setup
generateArray();
