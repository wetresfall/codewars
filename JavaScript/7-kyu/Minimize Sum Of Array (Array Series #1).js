// https://www.codewars.com/kata/5a523566b3bfa84c2e00010b

let minSum = arr =>
  arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0);
