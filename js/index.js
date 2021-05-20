// 购物车
function cart() {
  var cartTrigger = document.getElementById("J_miniCartTrigger");
  var cartBtn = document.getElementById("J_miniCartBtn");
  var cartMenu = document.getElementById("J_miniCartMenu");
  cartBtn.onmouseover = function () {
    cartMenu.style.height = 100 + "px";
    cartTrigger.className = "topbar-cart topbar-cart-active";
  }
  cartMenu.onmouseover = function () {
    cartMenu.style.height = 100 + "px";
    cartTrigger.className = "topbar-cart topbar-cart-active";
  }
  cartBtn.onmouseout = function () {
    cartMenu.style.height = 0;
    cartTrigger.className = "topbar-cart";
  }
  cartMenu.onmouseout = function () {
    cartMenu.style.height = 0;
    cartTrigger.className = "topbar-cart";
  }
}
cart();

// 下载APP
function downApp() {
  var down = document.getElementById("J_siteDownloadApp");
  var sppcode = down.getElementsByClassName("sppcode")[0];
  down.onmouseover = function () {
    down.className = "topbar-download active";
    sppcode.style.height = 150 + "px";
  }
  down.onmouseout = function () {
    down.className = "topbar-download";
    sppcode.style.height = 0;
  }
}
downApp();

// headerList 头部导航
function headerList() {

  // var link = document.queryCommandValue("data-link");
  var link = document.getElementsByClassName("link");
  var navList = document.getElementsByClassName("header-nav-menu");

  for (var i = 1; i < link.length - 2; i++) {
    link[i].index = i;
    link[i].onmouseover = function () {
      for (var i = 0; i < navList.length; i++) {
        navList[this.index].style.display = "none";
      }
      navList[this.index].style.display = "block";
      navList[this.index].style.height = 200 + "px";
    }
    link[i].onmouseout = function () {
      navList[this.index].style.display = "none";
      navList[this.index].style.height = 0;
    }
    for (var j = 1; j < navList.length; j++) {
      navList[j].onmouseover = function () {
        this.style.display = "block";
        this.style.height = 200 + "px";
      }
      navList[j].onmouseout = function () {
        this.style.display = "none";
        this.style.height = 0;
      }
    }
  }
}
headerList();

// 搜索框边框变色
function searchInput() {

  var search = document.getElementById("search");
  let navItem = document.getElementsByClassName("nav-item");
  var searchForm = document.getElementById("J_searchForm");
  let J_keywordList = document.getElementById("J_keywordList");
  var searchUl = document.getElementsByClassName("result-list")[0];
  var search = document.getElementById("search");
  var searchDiv = document.querySelector(".header-search");
  var searchArr = ["小米11 Pro Max", "小米8", "小米8青春版", "黑鲨1S", "黑鲨2", "黑鲨2S", "小米11"];
  var arr = ["全部商品", "性价比手机", "高端手机", "老年机", "折叠屏手机", "平板手机"];
  var str = "";
  search.onfocus = function () {
    searchForm.className = "search-form search-form-focus";
    J_keywordList.className = "keyword-list";
    if (search.value != "" && !str) {
      searchUl.innerHTML = '<li><a href="#">您搜索的内容不存在</a></li>';;
    }
    if (search.value == "") {
      str = "";
      arr.forEach((items) => {
        str += '<li><a href="#">' + items + '</a></li>';
        searchUl.innerHTML = str;
      })
    }
    search.oninput = function () {
      str = "";
      if (search.value != "") {
        str = "";
        searchArr.forEach((item) => {
          let res = item.indexOf(search.value);
          if (res != -1) {
            str += '<li><a href="#">' + item + '</a></li>';
            searchUl.innerHTML = str;
          }
        });
      }
      if (search.value == "") {
        str = "";
        arr.forEach((items) => {
          str += '<li><a href="#">' + items + '</a></li>';
          searchUl.innerHTML = str;
        })
      }
      if (!str || !search) {
        searchUl.innerHTML = '<li><a href="#">您搜索的内容不存在</a></li>';;
      }
    }
  }

  searchUl.onmousedown = function (event) {
    event.preventDefault();
  }
  search.onblur = function () {
    searchForm.className = "search-form";
    J_keywordList.className = "keyword-list hide";
  }

  // 当移入到左侧的二级菜单时，使input失去焦点
  for (let i = 1; i < navItem.length - 2; i++) {
    navItem[i].onmouseover = function () {
      search.blur();
    }
  }
}
searchInput();

// 选项卡移入变色加二级菜单
function lists() {
  // 选项卡移入变色
  // 全部商品分类
  var category_item = document.querySelectorAll(".category-item"),
    children = document.querySelectorAll(".children");

  for (var i = 0; i < category_item.length; i++) {
    // 将这次循环到的i赋值给category_item[i]的index
    category_item[i].index = i;
    // 鼠标移入事件
    category_item[i].onmouseover = function () {
      // 遍历children，将其全部设为隐藏
      for (var i = 0; i < children.length; i++) {
        children[i].style.display = "none";
      }
      // 将引用的对象下标值设为category_item[i].index = i;
      // 当点击index = 1时触发此次事件
      children[this.index].style.display = "block";
      // 给该元素添加一个类
      category_item[this.index].classList.add("category-item-active");
    }
    // 鼠标移出事件
    category_item[i].onmouseout = function () {
      // 给该元素移除一个类
      category_item[this.index].classList.remove("category-item-active");
      // 鼠标移出时将下标等于index的对象设为隐藏
      children[this.index].style.display = "none";
    }
  }

}
lists();