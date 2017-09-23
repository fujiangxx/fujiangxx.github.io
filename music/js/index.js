/*
* @Author: Fujiang
* @Date:   2017-08-30 23:49:21
* @Last Modified by:   Fujiang
* @Last Modified time: 2017-09-23 21:28:43
*/
window.onload=function(){
	  let song=document.querySelector(".song");
	  let singer=document.querySelector(".singer");
	  let list=document.querySelector(".list");
	  let now=document.querySelector(".now");
	  let singbofan=document.querySelector(".singbofan");
	  let audio=document.querySelector("audio");
	  let next=document.querySelector(".next");
    let timemoving=document.querySelector(".timemoving");
    let timetotal=document.querySelector(".timetotal");
    let photo=document.querySelector(".singpicture>img");
    let scrollmove=document.querySelector(".scrollmove");
    let i=5;
    console.log(database[i])
	now.onclick=function(){
		if(audio.paused){

            audio.play();
		}else{
			audio.pause();
		}
		now.classList.toggle("play");
	}
    next.onclick = function(){
    	i++;
    	if(i>=database.length){
        	i=0;
        }
        render(database[i]);
        audio.play();
    }
    //快进
    // scrollmove
      
	//结束后下一首
	audio.onended=function(){
        i++;
        if(i>=database.length){
        	i=0;
        }
        return database[i];
	} 

	//播放时间
	audio.ontimeupdate = function(){
        
      
      let ct=time(audio.currentTime);
      
      let bili=audio.currentTime/audio.duration;
      
      scrollmove.style.width=`${bili*100}%`;
      timemoving.innerText=ct;
      database[i].lyrics.forEach((element,index)=>{
      	if(element.time==ct){
      		let x=index;
      		list.innerHTML='';
      		if(index<3){
      			index=0;
      		}else{
      			index-=3;
      		}
      		for(let j=index;j<database[i].lyrics.length;j++){
      			list.innerHTML += ` <li class='list${j}'>${database[i].lyrics[j].lyric}
      			</li>`;
      		}
      		let obj=document.querySelector(`.list${x}`);
      		obj.style.color='#0e9edf';
      	}
      })
      

	}
     render(database[i]);
	function render(data){
		
		song.innerText=data.songs;
		singer.innerText=data.name;
		audio.src=data.src;
		photo.src=data.photo;
		timemoving.innerText='00:00';
		timetotal.innerText=data.alltime;
		list.innerHTML=``;
        singbofan.innerText=`${data.songs}-${data.name}`;
        console.log(data.lyrics)
		for(let i=0;i<data.lyrics.length;i++){
			list.innerHTML+=`
			<li>${data.lyrics[i].lyric}</li>
			`
		}

  }
  //将时间转化为标准格式
  function time(data){
  	let m=Math.floor(data/60)>=10?Math.floor(data/60):`0${Math.floor(data/60)}`;
  	let s=Math.floor(data%60)>=10?Math.floor(data%60):`0${Math.floor(data%60)}`;
  	// console.log(s)
  	return `${m}:${s}`;
  }

  //控制音量
  //总长度为75px，布局布长度100难看
  //获取时间相关元素  onmousedown:e.pre ox-clientX  n=shengyin1.offsetWidth   onmousemove:cx
  //lefts=cx-ox+n;  让其不超出父元素     style.left让其移动              onmouseup 鼠标拿起
  
  let shengyinctrle=document.querySelector(".shengyinctrle");
  let shengyin1=document.querySelector(".shengyin1");
  let shengyin2=document.querySelector(".shengyin2");//anniu
  document.onmousedown=function(e){
    e.preventDefault();
         let ox=e.clientX;
         let wid=shengyin1.offsetLeft;
         document.onmousemove=function(e){
          let ax=e.clientX;
          let lefts=ax-ox+wid;
          if (lefts<0) {
            lefts=0;
          }
          let bili=lefts/(shengyinctrle.offsetWidth);
          if (bili>=1) {
            bili=1;
          }
          shengyin2.style.left=`${bili*100}%`;
          shengyin1.style.width=`${bili*100}%`;
          audio.volume=bili;
        }
        document.onmouseup=function(){
       document.onmousemove=null;
       document.onmouseup=null;
       }
  }
}