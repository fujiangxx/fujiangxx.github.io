window.onload=function(){
	//banner 轮播
	let bannerpic=document.querySelector(".bannerpic");
	let bannerpiclis=bannerpic.getElementsByTagName("li");
	let lunboo=document.querySelector(".lunboo");
    // console.log(lunboo);
	let lunbolis=lunboo.getElementsByTagName("li");
	// console.log(lunbolis)
	let moren=document.querySelector(".moren");
	let num=0;
	let t;
	for(let i=0;i<lunbolis.length;i++){
		lunbolis[i].onclick=function(){
           lunbolis[num].classList.remove("moren");
           
           bannerpiclis[num].style.display="none";
           bannerpiclis[i].style.display="block";
           lunbolis[i].classList.add("moren");
           num=i;
		}
	}
    //banner 自动轮播
    t=setInterval(fn,4000);
    function fn(){
    	num++;
    	if(num==lunbolis.length){
    		num=0;
    	}
    	for(let i=0;i<lunbolis.length;i++){
    		// console.log(i)
           bannerpiclis[i].style.display="none";
           lunbolis[i].classList.remove("moren");
    	}
    	bannerpiclis[num].style.display="block";
    	lunbolis[num].classList.add("moren");
           
        
    }
    //鼠标悬停
    bannerpic.onmouseenter=function(){
    	clearInterval(t);
    }
    bannerpic.onmouseleave=function(){
    	t=setInterval(fn,4000);
    }
}