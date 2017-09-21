/*
* @Author: Fujiang
* @Date:   2017-08-13 12:08:44
* @Last Modified by:   Fujiang
* @Last Modified time: 2017-08-13 14:57:39
*/

window.onload=function(){
	let mytaobaomesu=document.getElementsByClassName("mytaobaomesu")[0];
	let mytaobaotan=document.getElementsByClassName("mytaobaotan")[0];
	mytaobaomesu.onmouseenter=function(){
		mytaobaotan.style.display="block";
	}
	mytaobaomesu.onmouseleave=function(){
		mytaobaotan.style.display="none";
	}
}