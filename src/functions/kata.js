function alphabetPosition(text) {
  let str = "";
  for (let i of text.toLowerCase()) {
    console.log(i.charCodeAt(i));
    if (i.charCodeAt(i) >= 97 && i.charCodeAt(i) <= 122) {
      str += i.charCodeAt(i) - 96 + " ";
    }
  }
  return str.trim();
}

function alphabetPosition2(text) {
  const arr = [];
  const map = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  for (let a of text.toLowerCase()) {
    if (map[a]) {
      arr.push(map[a]);
    }
  }
  return arr.join(" ");
}

function alphabetPosition3(text) {
  const map = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  return text
    .toLowerCase()
    .split("")
    .filter((a) => a in map)
    .map((a) => map[a])
    .join(" ");
}

function alphabetPosition4(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return text
    .toLowerCase()
    .split("")
    .filter((a) => alphabet.includes(a))
    .map((a) => alphabet.indexOf(a) + 1)
    .join(" ");
}

function formatDuration(seconds, output = [], periods = [365, 24, 60, 60], labels = ["year", "day", "hour", "minute", "second"]) {
  if (!seconds && !output.length) return "now"
  if (!periods.length) {
    const label = labels.shift()
    let str = output.length?" and " : ''
    str += !seconds? "" : seconds === 1?`${seconds} ${label}`: `${seconds} ${label}s`
    return output.join(",") + str
  }
  const prod = periods.reduce((accum, elem) => accum * elem, 1);
  const multiples = Math.floor(seconds / prod)
  const label = labels.shift()
  const new_seconds = seconds % prod
  periods.shift();
  console.log(new_seconds % prod);
  //          not the first   not done        next mod is not zero (doesn't work)
  let start = output.length? !periods.length? new_seconds % prod ? " and ": "" : " " : '' 
  let end = multiples>1? "s" : ''
  multiples? output.push(`${start}${multiples} ${label}${end}`): null;
  return formatDuration(new_seconds, output, periods, labels);
}
console.log(formatDuration(120));
//https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
