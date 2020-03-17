export const debounce = (fn,time) => {
    let timer = null;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn()
      },time)
    }
}