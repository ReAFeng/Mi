// 轮播图
var auto = document.getElementById("autochange"),
  arrImg = ["808804e4f58a25704f60bdc5b5e75cfd.jpg", "5084e471aa2554867cd1c9bf333a83e4.webp", "a5ebb3ecd10ba5b5f1fa25125d034492.webp", "175b22f0032803f8bdbd94590c8c6629.webp", "5.jpg"],
  timer,
  index = 0,
  aAll = document.getElementsByClassName("swiper-pagination-bullet"),
  prevBtn = document.getElementsByClassName("prev")[0],
  nextBtn = document.getElementsByClassName("next")[0];

// 自动轮播

auto.onmouseover = function () {
  clearInterval(timer);
}
auto.onmouseout = function () {
  autoChange();
}

autoChange();
function autoChange() {
  timer = setInterval(() => {
    index++;
    if (index >= arrImg.length) {
      index = 0;
    }
    for (var i = 0; i < arrImg.length; i++) {
      if (i != index) {
        aAll[i].classList.remove("swiper-pagination");
      }
    }
    auto.src = "images/home/" + arrImg[index];
    aAll[index].classList.add("swiper-pagination");
  }, 3000)
}

prev();
function prev() {
  prevBtn.onclick = function () {
    clearInterval(timer);
    if (index <= 0) {
      index = arrImg.length;
    }
    index--;
    for (var i = 0; i < arrImg.length; i++) {
      if (i != index) {
        aAll[i].classList.remove("swiper-pagination");
      }
    }
    aAll[index].classList.add("swiper-pagination");
    auto.src = "images/home/" + arrImg[index];
    autoChange();
  }
}

next();
function next() {
  nextBtn.onclick = function () {
    index++;
    clearInterval(timer);
    if (index >= arrImg.length) {
      index = 0;
    }
    for (var i = 0; i < arrImg.length; i++) {
      if (i != index) {
        aAll[i].classList.remove("swiper-pagination");
      }
    }
    aAll[index].classList.add("swiper-pagination");
    auto.src = "images/home/" + arrImg[index];
    autoChange();
  }
}

// 点击按钮修改轮播图与按钮类名
changeImg();
function changeImg() {
  for (var i = 0; i < aAll.length; i++) {
    aAll[i].index = i;
    aAll[i].onclick = function () {
      clearInterval(timer);
      for (var i = 0; i < aAll.length; i++) {
        if (this.index != i) {
          aAll[i].classList.remove("swiper-pagination");
        }
      }
      index = this.index;
      aAll[index].classList.add("swiper-pagination");
      auto.src = "images/home/" + arrImg[index];
      autoChange();
    }
  }
}