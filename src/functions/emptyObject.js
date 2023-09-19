// makes an object with the same keys as object2Copy, but with null values
const emptyObject = (objectArr) => {
  let emptyObject = {};
  console.log("objectArr", objectArr);
  if (objectArr.length) {
    for (let key in objectArr[0]) {
      emptyObject[key] = null;
    }
  }
  console.log("emptyObject", emptyObject);
  return emptyObject;
};

export default emptyObject;
