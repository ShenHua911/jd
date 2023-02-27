let keyword = document.querySelector('.keyword');//获取输入框
let serchHelper = document.querySelector('.serch-Helper');//获取搜索下拉列表

// 定义数组，存储搜索的内容
let searchArr = ['小米手机','华为手机','苹果手机','小米电视','小米平板','苹果12','苹果13','苹果14','苹果手表','1.8床','桂泽辉1','桂泽辉2','桂泽辉3','桂泽辉4','桂泽辉5','桂泽辉6','桂泽辉7','桂泽辉8','桂泽辉9','桂泽辉10','桂泽辉11','桂泽辉12','桂泽辉13','桂泽辉14'];

// 输入框绑定内容
keyword.oninput = function(){
    serchHelper.innerHTML = '';
    // 清除旧内容
    for(let i = 0; i < searchArr.length; i++){
        if(searchArr[i].indexOf(keyword.value)!= -1){
            // 数组里面的数据通过点击获得用户的内容并给出相似内容
            serchHelper.innerHTML += '<p>'+searchArr[i]+'</p>';
            // 使用"+="获取数组不是替换而是逐个添加
            serchHelper[i==13]
            serchHelper.style.display = 'block';
        }
    }
}

keyword.onblur = function(){
    serchHelper.style.display = 'none';
}

// 购物车隐藏效果
let settleup = document.querySelector('.settleup');//获取购物车
let settleupCar = document.querySelector('.settleup-car');//获取隐藏部分

settleup.onmouseover = function(){
    
     settleupCar.style.display = 'block';


}

settleup.onmouseout = function(){
    settleupCar.style.display = 'none';
}



// 实现轮播图切换-------------------------

let img = document.querySelector('.img');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slide = document.querySelector('.slide');
let lis = document.querySelectorAll('.banner-btn li');

// 获取数组
let imgArr = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg'];

let count = 0;

// 定义函数切换路径
function cutImg(){
    img.src = './images/' + imgArr[count];

    for(let i =0; i < lis.length;i++){
        lis[i].className = ''; 
    }
    
    lis[count].className = 'active';
    // 激活效果给到点到的li圆点上
}

// 设置定时器,每隔三秒自动切换
let timer = setInterval(function(){
    count++;
    if(count > imgArr.length - 1){
        count = 0;
    }
    cutImg();
},3000)

// 轮播图点击下一张
next.onclick = function(){
    count++;
    if(count >imgArr.length - 1){
        count = 0;
    }
    cutImg();
}

// 轮播图点击上一张
prev.onclick = function(){
    count--;
    if(count < 0){
        count = imgArr.length - 1;
    }
    cutImg();
}

// 划入图片中,停止轮播图切换
slide.onmouseover = function() {
    clearInterval(timer);
}

// 移除图片外,开始轮播图切换
slide.onmouseout = function(){
    timer = setInterval(function(){
        count++;
        if(count > imgArr.length - 1){
            count = 0;
        }
        cutImg();
        
    },3000);
}

// 给li绑定点击事件(白色圆点)
for(let i = 0; i < lis.length;i++){
    lis[i].onmouseover = () => {
        count = i;
        cutImg();
    }
}

// 切换图=======================
let bannerslidethree = document.querySelector('.banner-slide-three');
let imagsprev = document.querySelector('.imgs-list-prev');
let imagsnext = document.querySelector('.imgs-list-next');



bannerslidethree.onmouseover =function(){
    imagsprev.style.display = 'block';
    imagsnext.style.display = 'block';
}

bannerslidethree.onmouseout =function(){
    imagsprev.style.display = 'none';
    imagsnext.style.display = 'none';
}