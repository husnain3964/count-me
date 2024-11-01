let count = document.querySelector(".countt");

num = 0;
let countMe = () => {
  count.innerHTML = num;
  num++;
};
let decrease = () => {
  count.innerHTML = num;
  num--;
};
let reset = () => {
    num=0;
  count.innerHTML = num;
};
