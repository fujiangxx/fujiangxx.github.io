


window.onload=function(){
	//bannerleft
	let bannerleftt=document.getElementsByName("bannerleftt");
	
	let lidea=document.getElementsByClassName("lidea");
	let bannerlefttan=document.getElementsByClassName("bannerlefttan");
    for(let i=0;i<lidea.length;i++){
    	lidea[i].onmouseenter=function(){
           bannerlefttan[i].style.display="block"; 
    	}
    	lidea[i].onmouseleave=function(){
           bannerlefttan[i].style.display="none"; 
    	}
    }
    //bannerright
    let banner=document.getElementsByClassName("banner")[0];
    let bannerli=banner.getElementsByTagName("li");
    let lunbo=document.getElementsByClassName("lunbo")[0];
	let lunbolis=lunbo.getElementsByTagName("li");
	let moren=document.getElementsByClassName("moren");
	let nume=0;
	let t;
	for(let i=0;i<lunbolis.length;i++){
        lunbolis[i].onclick=function(){
           lunbolis[nume].classList.remove("moren");
           lunbolis[i].classList.add("moren");
           bannerli[nume].style.display="none";
           bannerli[i].style.display="block";
           nume=i;
        }
	}
	//自动轮播
	t=setInterval(fn,4000);
	function fn(){
		nume++;
		if(nume==lunbolis.length){
			nume=0;
		}
		for(let i=0;i<lunbolis.length;i++){
			bannerli[i].style.display="none";
			lunbolis[i].classList.remove("moren");
		}
			bannerli[nume].style.display="block";
			lunbolis[nume].classList.add("moren");
	}
    //悬停
    //
    banner.onmouseenter=function(){
    	clearInterval(t);
    }
    banner.onmouseleave=function(){
    	t=setInterval(fn,4000);
    }
    let mytaobaomesu=document.getElementsByClassName("mytaobaomesu")[0];
  let mytaobaotan=document.getElementsByClassName("mytaobaotan")[0];
  mytaobaomesu.onmouseenter=function(){
    mytaobaotan.style.display="block";
  }
  mytaobaomesu.onmouseleave=function(){
    mytaobaotan.style.display="none";
  }
}