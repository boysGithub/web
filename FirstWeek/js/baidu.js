var btn = document.getElementById("input");
var sc = document.getElementById("sc");
/*搜索框被点击改变样式*/
btn.addEventListener("focus",function(){
	sc.style.border="1px solid #4791ff";
},true);
/*搜索框失去焦点样式还原*/
btn.addEventListener("blur",function(){
	sc.style.border="1px solid #b6b6b6";
});

/*获取屏幕高度*/
var height = window.innerHeight;
var metu = document.getElementById("metu");
metu.style.height = height+"px";
var ul = metu.getElementsByTagName("ul");
ul[0].style.height = (height-2)+"px";



