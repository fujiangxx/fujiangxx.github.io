/*
* @Author: Fujiang
* @Date:   2017-08-15 23:18:43
* @Last Modified by:   Fujiang
* @Last Modified time: 2017-09-12 10:28:07
*/
// window.onload=function(){
// 	//nav的下拉框内容
// 	let navright=document.getElementsByClassName("navright")[0];
// 	let navrightt=navright.getElementsByClassName("navrightt")[0];
// 	let navrighttli=navrightt.getElementsByTagName("li");
// 	let navrighttan=document.getElementsByClassName("navrighttan");
//   let navrirhtan1=document.querySelectorAll(".navrirhtan1");
// 	// navrighttan[0].style.height=0;
// 	for(let i=1;i<navrighttli.length;i++){
//        let childCount=navrirhtan1[i-1].childElementCount;
//         console.log(childCount)
// 	    navrighttli[i].onmouseenter=function(){
       
//         navrighttli[i].style.borderBottom=" 4px solid rgba(221,88,88,1)";
//         navrighttan[i-1].style.height=`${41*childCount}px`;
//         navrighttan[i-1].style.borderBottom="1px solid #e0e0e0";

//   }
//       navrighttli[i].onmouseleave=function(){
//       	 navrighttli[i].style.borderBottom=" 4px solid rgba(221,88,88,0)";
//          navrighttan[i-1].style.height=0;
//          navrighttan[i-1].style.borderBottom="0px solid #e0e0e0";
//   } 	
// 	}
//   //banner效果
//   //
//   //banner按轮播点变换
//   //
//   let bannerimg=document.getElementsByClassName("bannerimg")[0];
//   let bannerimgg=bannerimg.getElementsByClassName("bannerimgg")[0];
//   let bannerimggli=bannerimgg.getElementsByTagName("li");
//   let lunbo=document.getElementsByClassName("lunbo")[0];
//   let lunboul=lunbo.getElementsByClassName("lunboul")[0];
//   let lunboli=lunboul.getElementsByTagName("li");
//   let moren=document.getElementsByClassName("moren")[0];
//   let nume=0;
//   let t;
//   for(let i=0;i<lunboli.length;i++){
//       lunboli[i].onclick=function(){
  	
//         lunboli[nume].classList.remove("moren");
//         lunboli[i].classList.add("moren");
//         bannerimggli[nume].style.display="none";
//         bannerimggli[i].style.display='block';
//         nume=i;
//   	}
//   }

//   //banner自动轮播
//    t=setInterval(fn,5000)
//    function fn(){
//       nume++;
//       if(nume==lunboli.length){
//       	nume=0
//       }
//       for(let i=0;i<lunboli.length;i++){
//       	 lunboli[i].classList.remove("moren");
//       	 bannerimggli[i].style.display="none";
//       }
//        lunboli[nume].classList.add("moren");
//        bannerimggli[nume].style.display="block";


//   }

//   // banner右箭头
//   // 
//   let jiantouright=document.getElementsByClassName("jiantouright");
//   jiantouright[0].onclick=fn;

//   //banner左箭头
  
//   // let jiantouleft=document.getElementsByClassName("jiantouleft");
//   // jiantouleft[0].onclick=fn1;
//   // function fn1(){
//   // 	nume--;
//   // 	if(nume==-1){
//   // 		nume=lunboli.length-1;
//   // 	}
//   // 	for(let i=0;i<lunboli.length;i++){
//   // 		lunboli[i].classList.remove("moren");
//   // 		bannerimggli[i].style.display="none";
//   // 	}
//   // 	lunboli[nume].classList.add("moren");
//   //   bannerimggli[nume].style.display="block";
//   // }
//    let jiantouleft=document.getElementsByClassName("jiantouleft")[0];

	

// 	jiantouleft.onclick=fn1;
	
// 	function fn1(){
//       nume--;
//       if(nume==-1){
//       	nume=bannerimggli.length-1;
//       }
//       for(let i=0;i<bannerimggli.length;i++){
//       	bannerimggli[i].style.display="none";
//       	lunboli[i].classList.remove("moren");

//       }
//       	bannerimggli[nume].style.display="block";
//       	lunboli[nume].classList.add("moren");
// 	}
//   // 自动悬停
//    bannerimg.onmouseenter=function(){
//     	clearInterval(t);
//     }
//     bannerimg.onmouseleave=function(){
//     	t=setInterval(fn,5000);
//     }
// }
$(function(){


  //  //nav的下拉框内容
  

  $(".navrightt>li").hover(function(){
      let index=$(this).index();
      // console.log(index)
      var navinum=$(this).children('.navrighttan').children('.navrirhtan1').children().length;
      // console.log(navinum)
      $(this).css({borderBottom:"4px solid rgba(221,88,88,1)"});
      $(this).children('.navrighttan').css({height:`${41*navinum}`,borderBottom:"1px solid #e0e0e0"});

      
  },function(){
     let index=$(this).index();
      $(this).css({borderBottom:"4px solid rgba(221,88,88,0)"});
      $(this).children('.navrighttan').css({height:"0",borderBottom:"0px solid #e0e0e0"});
  })
 // let navright=document.getElementsByClassName("navright")[0];
 // let navrightt=navright.getElementsByClassName("navrightt")[0];
 // let navrighttli=navrightt.getElementsByTagName("li");
 // let navrighttan=document.getElementsByClassName("navrighttan");
 //  let navrirhtan1=document.querySelectorAll(".navrirhtan1");
 // // navrighttan[0].style.height=0;
 // for(let i=1;i<navrighttli.length;i++){
 //       let childCount=navrirhtan1[i-1].childElementCount;
 //        // console.log(childCount)
 //     navrighttli[i].onmouseenter=function(){
       
 //        navrighttli[i].style.borderBottom=" 4px solid rgba(221,88,88,1)";
 //        navrighttan[i-1].style.height=`${41*childCount}px`;
 //        navrighttan[i-1].style.borderBottom="1px solid #e0e0e0";

 //  }
 //      navrighttli[i].onmouseleave=function(){
 //        navrighttli[i].style.borderBottom=" 4px solid rgba(221,88,88,0)";
 //         navrighttan[i-1].style.height=0;
 //         navrighttan[i-1].style.borderBottom="0px solid #e0e0e0";
 //  }  
 // }

  //banner效果
//   //
  //banner按轮播点变换
   // var nume=0;
  $(".lunboul li").each(function(index,obj){
   
    $(this).click(function(){
      $(this).addClass("moren").siblings().removeClass("moren");
      $(".bannerimgg li").eq(index).css({display:"block"}).siblings().css({display:"none"})
    })
  })

//   //banner自动轮播
//   
     var t;
     var num=0;
      t=setInterval(fn,4000);
      function fn(){
         num++;
         if(num==$(".bannerimgg li").length-1){
          num=0;
         }
       $(".lunboul li").eq(num).addClass("moren").siblings().removeClass("moren");
      $(".bannerimgg li").eq(num).css({display:"block"}).siblings().css({display:"none"})
      }
  // 自动悬停
  $(".banner").hover(function(){
         clearInterval(t);
  },function(){
          t=setInterval(fn,5000);
  })

//   // banner右箭头
//   jiantouright[0].onclick=fn;
  $(".jiantouright").on("click",fn);
//   //banner左箭头
  $(".jiantouleft").on("click",fn1);
  function fn1(){
    num--;
    if(num==-1){
      num=$(".bannerimgg li").length-1;
    }
    $(".lunboul li").eq(num).addClass("moren").siblings().removeClass("moren");
    $(".bannerimgg li").eq(num).css({display:"block"}).siblings().css({display:"none"})
  }


})