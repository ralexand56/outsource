function findCat(arr = ["cat", "dogcat", "cats", "dog", "catsdog"]) {
  let concatList = [];

  arr.forEach((x) => {
    if (checkWord(x, arr)) {
      concatList.push(x);
    }
  });
  return concatList;
}

function checkWord(str = "", arr = []) {
  let isConcat = false;

  for (let i = 0; i < str.length; i++) {
    const prefix = str.slice(0, i + 1);
    const suffix = str.slice(i + 1, str.length);

    console.log(prefix, suffix);
    if (arr.indexOf(prefix) > -1 && arr.indexOf(suffix) > -1) {
      isConcat = true;
    }
  }
  return isConcat;
}

console.log(findCat());
