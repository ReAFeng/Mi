var tabs = document.getElementById("tabs").getElementsByTagName("li");
var lists = document.getElementById("lists").getElementsByTagName("ul");
var link = document.getElementsByClassName("link")[0];
var siteCategory = document.getElementsByClassName("site-category");

link.onmouseover = function () {
    siteCategory.style.display = "block";
}

for(var i = 0; i < tabs.length; i++) {
    tabs[i].onclick = showlist;
}

function showlist() {
    for(var i = 0; i < tabs.length; i++) {
        if(tabs[i] == this){
            tabs[i].className = "active";
            lists[i].className = "clearfix active";
        }else{
           tabs[i].className = ""; 
           lists[i].className = "clearfix";
        }
    }
}

var scekillNav = document.getElementById("scekillNav")
window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop ||  window.pageYOffset || document.body.scrollTop;;
    if(scrollTop >= 260) {
        // seckill-navfixed
        scekillNav.className = "seckill-nav seckill-navfixed"
    }else {
        scekillNav.className = "seckill-nav"
    }
}