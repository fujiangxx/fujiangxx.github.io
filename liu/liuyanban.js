/*
* @Author: Fujiang
* @Date:   2017-08-21 17:48:28
* @Last Modified by:   Fujiang
* @Last Modified time: 2017-08-22 13:16:11
*/
window.onload=function(){
	let  tip=document.querySelector('.tip>span');
	let  textarea=document.querySelector("textarea");
	let  submit=document.querySelector(".submit");
	let  inpu=document.querySelector("input");
	let  h2h=document.querySelector("h2");
	// console.log(inpu)
	// console.log(submit)
	// console.log(textarea)
	let  max=textarea.maxLength;
	// console.log(max)
	textarea.onkeyup=function(){

		let val=this.value;
		// console.log(val);
		tip.innerText=`${max - val.length}`;//剩余字数
	}
	// textarea.onkeydown=function(e){
	// 	if(e.shiftKey&&e.keyCode==13){
	// 		let val=this.value;
	// 		// console.log(val)
	// 		this.value='';
	// 		let h2h=inpu.value?inpu.value:"古云";
	// 		inpu.value='';
	// 		let lis=document.createElement("li");
	// 		lis.innerHTML=`
	// 		<img src="500562440.jpg" alt="">
	// 		<H3>${h2h}</H3>
	// 		<inpu>${val}</inpu>
	// 		`;
 //            submit.insertBefore(lis,submit.childNodes[0]);
	// 	}
	// }
   let giveup=document.querySelector(".geivup");
   let success=document.querySelector(".success");
     	console.log(textarea)
   success.onclick=textarea.onkeydown=function(e){

   	if(e.type=='click'){
   		fn.call(textarea);
   	}else if(e.type=='keydown'){
   		if(e.shiftKey&&e.keyCode==13){
   			fn.call(textarea);
   		}
   	}
   }
   function fn(){
   	  		let val=this.value;

			this.value='';
			let h2h=inpu.value?inpu.value:"古云";
			inpu.value='';
			let lis=document.createElement("li");
			lis.innerHTML=`
			<img src="500562440.jpg" alt="">
			<H3>${h2h}</H3>
			<inpu>${val}</inpu>
			`;
            submit.insertBefore(lis,submit.childNodes[0]);
   }


   //    success.onclick=function(){
   // 	   let val=textarea.value;
			// // console.log(val)
			// textarea.value='';
			// let h2h=inpu.value?inpu.value:"古云";
			// inpu.value='';
			// let lis=document.createElement("li");
			// lis.innerHTML=`
			// <img src="500562440.jpg" alt="">

			// <h3>${h2h}</h3>
			// <inpu>${val}</inpu>
			// `;
   //          submit.insertBefore(lis,submit.childNodes[0]);
   //    }
      // giveup.onclick=function(){
      // 	 inpu.value='';
      //    textarea.value='';
      // }
}
