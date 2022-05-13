Array.prototype.myFilter = function (callback, setThis = this) {
    const filterArr = [];

    for (let i = 0; i < setThis.length; i++) {
        if (callback(setThis[i], i, setThis)) {
            filterArr.push(setThis[i])
        };
    };

    return filterArr;
};
  
const ARRAY_TO_FILTER = [1, 10, 200, 3000, 4000].myFilter(function (element, index, arr) { return element > 500; });

function createDebounceFunction (callback, time) {
  let timeout = null;

  return (...args) => {
    window.clearTimeout(timeout);

    timeout = window.setTimeout(() => {
      callback.apply(null, args);
    }, time);
  };
}

const log100 = () => console.log(100);
const debounceLog100 = createDebounceFunction(log100, 1000);

debounceLog100();
setTimeout(debounceLog100, 200);
setTimeout(debounceLog100, 400); 