/*
* @Author: Fujiang
* @Date:   2017-08-28 22:29:31
* @Last Modified by:   Fujiang
* @Last Modified time: 2017-09-03 16:14:12
*/
window.onload = function(){
	let canvas=document.querySelector("canvas");
	let mask=document.querySelector(".mask");
	let lineplay=new palette(canvas,mask);
	let clipObj=document.querySelector(".clip");
	// let ploygon=document.querySelector(".icon-duobianxing");
	// let memagon=document.querySelector(".icon-duojiaoxing");
	let lefttool=document.querySelector(".lefttool");
	// let labelleft=lefttool.getElementsByTagName("label");
	let label=document.querySelector('label');
	let tools=document.querySelectorAll('.tools');
	let style=document.querySelectorAll('.style');
    let eraser=document.querySelector('.eraser');   
	let inputs=document.querySelectorAll("input");
    tools.forEach(element=>{
		element.onclick=function(){
			let active=document.querySelector('label[active=true]');
			active.setAttribute('active',false);
			this.setAttribute('active',true);
			if(this.id=='pencil'){
				lineplay.pencil();

			}
			else if(this.id=='eraser1'){
				lineplay.eraser(eraser,40,40);
			}else if(this.id=='ploygon'){
				lineplay.ployNum=prompt('请输入边数',5)
		        lineplay.draw(this.id);
			}else if(this.id=='memagon'){
				lineplay.ployJNum=prompt('请输入角数',5)
				lineplay.draw(this.id);
			}else if(this.id=='version'){
				lineplay.version();
				// console.log(lineplay.version)
			}else if(this.id=='clips'){
				lineplay.clip(clipObj);
			}else{
				lineplay.draw(this.id)
			}
		}
	})
 
    style.forEach((element)=>{
    	element.onclick=function(){
    		let active1=document.querySelector('.lefttool>label[active=true]');
    		
    		active1.setAttribute('active',false);
    		this.setAttribute('active',true);
    		lineplay.style=this.id;
    	}
    })

    inputs.forEach((element,index)=>{
    	element.onchange=function(){
    		if(index==0){
    			lineplay.fillStyle=this.value;
    		}
    		else if(index==1){
    			lineplay.strokeStyle=this.value;
    			console.log(lineplay.strokeStyle)
    			console.log(this.value)
    		}
    	}
    })
	
    // labelleft[3].onclick = function(){
    // 	lineplay.draw("line");
    // }
    // labelleft[2].onclick = function(){
    // 	lineplay.draw("imaline");
    // }
    // labelleft[4].onclick = function(){
    // 	lineplay.draw("rectangle");
    // }
    // labelleft[6].onclick = function(){
    // 	lineplay.ployNum=prompt('请输入边数',5)
    // 	lineplay.draw("ploygon");
    // }
    // labelleft[5].onclick = function(){
        
    // 	lineplay.draw("circle");
    // }
    // labelleft[7].onclick = function(){
    // 	lineplay.ployJNum=prompt('请输入角数',5)
    // 	lineplay.draw("memagon");
    // }
    // labelleft[9].onclick = function(){
    // 	lineplay.clip(clipObj);
    // }
     
     //反回
     let ret=document.querySelector("#ret");
     console.log(ret);
     ret.onclick=function(){
     	lineplay.ret();
     }

}