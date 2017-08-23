
var textNum = document.getElementById('text');
var rangeNum = document.getElementById('range');
var btnSub = document.getElementById('btnSub');
var btnAdd = document.getElementById('btnAdd');
var playerShow = document.getElementById('playerShow');
var ClickSettings = document.getElementById('ClickSettings');
var allPlayer;
var player = "";
var gotoNext = document.getElementById('gotoNext');

rangeNum.onchange = function rangeChange() {
    textNum.value = rangeNum.value;
};
textNum.onblur = function textChange() {
    if (textNum.value < 6) {
        alert('人数少于6人不能开始游戏!');
        textNum.value = 6;
    } else if (textNum.value > 18) {
        alert('人数多于18位不能进行游戏!');
        textNum.value = 18;
    }
    else {
        rangeNum.value = textNum.value;
    }
};
btnSub.onclick = function btnSub() {
    textNum.value--;
    if (textNum.value < 6) {
        alert("人数少于6人不能开始游戏!");
        textNum.value = 6;
    } else {
        rangeNum.value = textNum.value;
    }
};
btnAdd.onclick = function btnAdd() {
    textNum.value++;
    if (textNum.value > 18) {
        alert("人数多于18位不能进行游戏!");
        textNum.value = 18;
    } else {
        rangeNum.value = textNum.value;
    }
};


ClickSettings.onclick = function ClickSettings() {
    player = "";
    var killer = [];
    var person = [];
    if (textNum.value >= 6 && textNum.value <= 8) {
        killer.length = 1;
    } else if (textNum.value >= 9 && textNum.value <= 11) {
        killer.length = 2;
    } else if (textNum.value >= 12 && textNum.value <= 15) {
        killer.length = 3;
    } else if (textNum.value >= 16 && textNum.value <= 18) {
        killer.length = 4;
    } else {
        alert('人数不满足条件，请重新设置人数!');
    }

    for (var i = 0; i < killer.length; i++) {
        killer[i] = "杀手";
        console.log(killer[i]);
    }
    console.log(killer);
    for (var j = 0; j < textNum.value - killer.length; j++) {
        person[j] = "平民";
        console.log(person[j]);
    }

    var all = killer.concat(person);

    function randomSort(a, b) {
        return Math.random() > .5 ? -1 : 1;
    }

    all.sort(randomSort);
    console.log(all);
    for (var m = 0; m < all.length; m++) {
        if (all[m] == '杀手') {
            player += "<li><span></span>" + (m + 1) + "号" + "&nbsp;&nbsp;" + all[m] + "</li>";
        } else {
            player += "<li><i></i>" + (m + 1) + "号" + "&nbsp;&nbsp;" + all[m] + "</li>";
        }
        console.log(player);
        playerShow.innerHTML = player;
    }
    allPlayer = JSON.stringify(all);
    sessionStorage.all = allPlayer;
};



gotoNext.onclick = function gotoNext() {
    if (allPlayer != null) {
        window.location.href = "show.html";
    } else {
        alert("请点击设置身份!");
    }
};
