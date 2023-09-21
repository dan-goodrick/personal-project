function alphabetPosition(text) {
  let str = ""
  for (let i of text.toLowerCase()) {
    console.log(i.charCodeAt(i))
    if (i.charCodeAt(i) >= 97 && i.charCodeAt(i) <=122) {
      str += i.charCodeAt(i)-96 + " "
    }
  }
  return str.trim()

  
  function alphabetPosition(text) {
    const arr = []
    const map = {"a": 1,"b": 2,"c": 3,"d": 4,"e": 5,"f": 6,"g": 7,"h": 8,"i": 9,"j": 10, "k": 11,"l": 12,"m": 13,"n": 14,"o": 15,"p": 16,"q": 17,"r": 18,"s": 19,"t": 20,"u": 21,"v": 22,"w": 23,"x": 24,"y": 25,"z": 26,}
    for (let a of text.toLowerCase()) {
      if (map[a]) {
        arr.push(map[a])
      }
    }
    return arr.join(" ")
  }

  function alphabetPosition(text) {
    const map = {"a": 1,"b": 2,"c": 3,"d": 4,"e": 5,"f": 6,"g": 7,"h": 8,"i": 9,"j": 10, "k": 11,"l": 12,"m": 13,"n": 14,"o": 15,"p": 16,"q": 17,"r": 18,"s": 19,"t": 20,"u": 21,"v": 22,"w": 23,"x": 24,"y": 25,"z": 26,}
    return text.toLowerCase().split("").filter((a)=> a in map).map(a=>map[a]).join(" ");
  }

  function alphabetPosition(text) {
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    return text.toLowerCase().split('').filter((a)=> alphabet.includes(a)).map((a) => alphabet.indexOf(a)+1).join(" ")
  }

  const flatten = (arr) => { 
    if (arr) {
      if (Arr)
    }
   }