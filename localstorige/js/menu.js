 /*
* @Author: Fujiang
* @Date:   2017-08-22 16:12:41
* @Last Modified by:   Fujiang
* @Last Modified time: 2017-09-18 17:41:46
*/
window.onload=function(){
	// //添加
	let add=document.querySelector('.add');
	let tab=document.querySelector('tbody')
	let student=[
	  {'name':'古云', 'age':19,'sex':'男','phone':55748887141,'loaction':'四川成都'},
	  {'name':'古云', 'age':20,'sex':'男','phone':55748887141,'loaction':'四川成都'},
	  {'name':'古云', 'age':21,'sex':'女','phone':57488511185,'loaction':'四川成都'},
	  {'name':'古云', 'age':22,'sex':'男','phone':55748887141,'loaction':'四川成都'}
	]
	localStorage.student=JSON.stringify(student);//对象转化为字符串(JSON型)
	// console.log(localStorage.student);
	let data=JSON.parse(localStorage.student);
  console.log(data);
	data.forEach(value=>{
		tab.innerHTML+=`
		<tr>
				<td>${value.name}</td>
				<td>${value.age}</td>
				<td>${value.sex}</td>
				<td>${value.phone}</td>
				<td>${value.location}</td>
				<td><button class='delet'>删除</button></td>
			</tr>
			`
	})
	
	
	
    add.ondblclick=function(){
    	let tr=document.createElement("tr");
    	tr.innerHTML=`
        <td>古云</td>
				<td>21</td>
				<td>男</td>
				<td>17584586545</td>
				<td>四川成都</td>
				<td><button class='delet'>删除</button></td>

    	`;
    	console.log(tr)
    	tab.appendChild(tr)
    }
    //删除
   //修改
   //可编辑状态：当前单元格里面插入  input
   //   1.input  2.content->inout  3.当前单元格清空  4.input->td
      // 更新:表单失去焦点后  blur
      // input 内容保存newvalue
      // input removeChild
      // newvalue ->单元格
      // 
     
     let delet=document.querySelector(".delet");
     tab.ondblclick=function(e){
        let ele=e.target;
        if(ele.nodeName=='TD'&&ele.className!="delet"){
        	let  inputs=document.createElement("input");
            inputs.value=ele.innerText;
        	ele.innerText='';
        	ele.appendChild(inputs);
        	inputs.onblur=function(){
        		let neww=inputs.value;
        		ele.removeChild(inputs);
        		inputs=null;
        		ele.innerText=neww;
        	}
            
        }else if(ele.className='delet'){
        	let ml=ele.parentNode.parentNode;
        	tab.removeChild(ml);
        	ml=null;
        }
     }  
     
     //  let add=document.querySelector('button.add');
     //  console.log(add)
     //  let tab=document.querySelector('tbody');
     //  add.onclick=function(){
     //  	let tr=document.createElement('tr');
     //  	tr.innerHTML=`
     //       <td>古云</td>
		   // <td>21</td>
		   // <td>男</td>
		   // <td>17584586545</td>
		   // <td>四川成都</td>
		   // <td><button class='delet'>删除</button></td>
     //  	`;
     //    tab.appendChild(tr);
     //  }
      // let delet=document.querySelector('delet');
      // tab.onclick=function(e){
      // 	let  vrt=e.target;//事件委托
      // 	if(vrt.nodeName='TD'&&vrt.className!='delet'){
      // 		let gff=document.createElement('input');
      // 		gff.value=vrt.innerText;
      // 		vrt.innerText='';
      // 		vrt.appendChild(gff);
      // 		gff.onblur=function(){
      // 			let gtt=gff.value;
      // 			vrt.removeChild(gff);
      // 			gff=null;
      // 			vrt.innerHTML=gtt;

      // 		}
      // 	}else if(vrt.className='.delet'){
      // 		let xl=vrt.parentNode.parentNode;
      // 		tab.removeChild(xl);
      // 		xl=null;
      // 	}
      // } 
}