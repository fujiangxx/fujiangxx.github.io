/*
* @Author: Fujiang
* @Date:   2017-08-28 22:29:09
* @Last Modified by:   Fujiang
* @Last Modified time: 2017-09-22 11:20:47
*/
function palette(canvas,mask){
    this.canvas = canvas;
    this.ctx=this.canvas.getContext("2d");
    this.mask=mask;
    
    this.history=[];
    this.wid=this.canvas.width;
    this.hei=this.canvas.height;
    this.lineWidth=1;
    this.lineCap="butt";
    this.fillStyle="lightblue";
    this.strokeStyle="#666666";
    this.style="fill";
    this.ployNum;
    this.ployJNum;
    this.temp=null;
}
   
palette.prototype = {
	// 直线
	// line:function(){
	// 	let that=this;
	// 	let data=[];
	// 	this.canvas.onmousedown = function(e){
 //            let ox=e.offsetX,oy=e.offsetY;
            
 //            that.canvas.onmousemove = function(e){
 //              let cx=e.offsetX,cy=e.offsetY;
 //              that.ctx.lineWidth=that.lineWidth;
 //              that.ctx.clearRect(0, 0, that.wid, that.hei);
 //              if(that.history.length>0){
 //              	that.ctx.putImageData(that.history[that.history.length - 1],0,0);
 //              }
 //              that.init();
 //              that.ctx.beginPath();
 //              that.ctx.moveTo(ox,oy);
 //              that.ctx.lineTo(cx, cy);
 //              that.ctx.closePath();
 //              that.ctx.stroke();
             
 //            }
 //            that.canvas.onmouseup = function(){
 //            	// that.data.push(that.ctx.putImageData(that.data[data.length - 1],0,0));
 //            	that.history.push(that.ctx.getImageData(0, 0, that.wid, that.hei));
 //            	that.canvas.onmousemove = null;
 //            	that.canvas.onmouseup = null;
 //            }
	// 	}
	// },
	init:function(){
   	this.ctx.lineWidth=this.lineWdith;
    this.ctx.lineCap=this.lineCap;
    this.ctx.fillStyle=this.fillStyle;
    this.ctx.strokeStyle=this.strokeStyle;
    this.ctx.setLineDash([0,0]); 
    this.ctx.style=this.style;
    this.ctx.temp=this.temp;

   },
	line:function(ox,oy,cx,cy){
		this.ctx.beginPath();
		this.ctx.moveTo(ox,oy);
		this.ctx.lineTo(cx,cy);
		this.ctx.closePath();
    this.ctx.stroke();

	
	}, 
	//虚线
	// imaline:function(){
	// 	let that=this;
	// 	this.canvas.onmousedown = function(e){
	// 		let ox=e.offsetX,oy=e.offsetY;
 //            that.canvas.onmousemove = function(e){
 //            	let cx=e.offsetX,cy=e.offsetY;
 //            	that.ctx.lineWidth=that.lineWidth;
 //            	that.ctx.clearRect(0, 0, that.wid, that.hei);
 //            	if(that.history.length>0){
 //            		that.ctx.putImageData(that.history[that.history.length-1],0,0)
 //            	}
 //            	that.ctx.beginPath();
 //            	that.ctx.moveTo(ox,oy);
 //            	that.ctx.setLineDash([10,10]);
 //            	that.ctx.lineTo(cx,cy);
 //            	that.ctx.closePath();
 //            	that.ctx.stroke();
            	

 //            }
 //            that.canvas.onmouseup = function(){
 //                that.history.push(that.ctx.getImageData(0, 0, that.wid, that.hei));
 //            	that.canvas.onmousemove=null;
 //            	that.canvas.onmouseup=null;
 //            }
	// 	}
	// },
	// 
		imaline:function(ox,oy,cx,cy){
		        
            	this.ctx.beginPath();
            	
            	this.ctx.moveTo(ox,oy);
            	this.ctx.setLineDash([10,10]);
            	this.ctx.lineTo(cx,cy);
            	this.ctx.closePath();
            	this.ctx.stroke();
            	

            },
	//矩形
	// rectangle:function(){
	// 	let that=this;
	// 	this.canvas.onmousedown = function(e){
 //          let ox=e.offsetX,oy=e.offsetY;
 //          that.canvas.onmousemove = function(e){
 //              let cx=e.offsetX,cy=e.offsetY;
 //              let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cx-ox,2));
 //              let ang=Math.PI/2；
 //              that.ctx.clearRect(0, 0, that.wid, that.hei);
 //              if(that.history.length>0){
 //              	that.ctx.putImageData(that.history[that.history.length-1],0,0);
 //              }
 //              that.ctx.beginPath();
 //              that.ctx.moveTo(, y)
 //              // play(ox,oy,4,r);

 //          }
 //          // function play(x,y,sides,r){
 //          //    let ang=360/sides/180*Math.PI;
 //          //  that.ctx.clearRect(0,0,that.wid,that.hei);
 //          //  // if(that.history.length>0){
 //          //  //  		that.ctx.putImageData(that.history[that.history.length-1],0,0)
 //          //  //  	}
 //          //  that.ctx.beginPath();
 //          //  that.ctx.moveTo(x + r,y);
 //          //  for(let i=1;i<sides;i++){
 //   	      //   that.ctx.lineTo(x+r*Math.cos(ang*i),y+r*Math.sin(ang*i));
 //          //  }
 //          //  that.ctx.closePath();
 //          //  that.ctx.stroke();
 //          //   }
 //          that.canvas.onmouseup=function(){
 //          	 that.histroy.push(that.ctx.getImageData(0, 0, that.wid, that.hei));
	// 		that.canvas.onmousemove=null;
	// 		that.canvas.onmouseup=null;
	// 	}
         
         
	// 	}
	// },
	// 
	rectangle:function(ox,oy,cx,cy){
       
        this.ctx.beginPath();
        let cw=cx-ox;
        let ch=cy-oy;
        this.ctx.rect(ox, oy, cw, ch);
        this.ctx.closePath();
       


	},
	// 多边形
	// ploygon:function(sides){
 //        let that = this;
        
 //        this.canvas.onmousedown = function(e){
 //           let ox = e.offsetX,oy = e.offsetY;
 //           that.canvas.onmousemove = function(e){
 //           	let cx = e.offsetX,cy = e.offsetY;
 //           	let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
 //           	let ang=360/sides/180*Math.PI;
 //           	that.init();
 //             that.ctx.clearRect(0,0,that.wid,that.hei);
 //             if(that.history.length>0){
 //              	that.ctx.putImageData(that.history[that.history.length - 1],0,0);
 //              }
 //             that.ctx.beginPath();
 //             that.ctx.moveTo(ox + r,oy);
 //             for(let i=1;i<sides;i++){
 //   	          that.ctx.lineTo(ox+r*Math.cos(ang*i),oy+r*Math.sin(ang*i));
 //             }
 //             that.ctx.closePath();
 //             that.ctx[that.style]();
 //              }
 //                   that.canvas.onmouseup=function(){
 //          	         that.history.push(that.ctx.getImageData(0, 0, that.wid, that.hei));
	// 		         that.canvas.onmousemove=null;
	// 		         that.canvas.onmouseup=null;
	// 	         }
 //                 }
	//          },
    ploygon:function(ox,oy,cx,cy){
       
             let ang=360/this.ployNum/180*Math.PI;
             let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2))
             this.ctx.beginPath();
             this.ctx.moveTo(ox + r,oy);
             for(let i=1;i<this.ployNum;i++){
               this.ctx.lineTo(ox+r*Math.cos(ang*i),oy+r*Math.sin(ang*i));
             }
             this.ctx.closePath();
            
             
           }, 
           
	//圆
       circle:function(ox,oy,cx,cy){
		   

           
           
           	let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
           	
           	
           	
            
           	this.ctx.beginPath();
           	this.ctx.arc(ox, oy,r, 0, 2*Math.PI, false);
           	this.ctx.closePath();
          


           
          

	},
	//铅笔
	//
	// pencil:function(){
	// 	let that=this;
	// 	this.mask.onmousedown=function(e){
 //           let ox=e.offsetX,oy=e.offsetY;
 //            that.ctx.beginPath();
 //            that.ctx.moveTo(ox,oy);
 //            that.init();
 //           that.mask.onmousemove=function(e){
 //           	let cx=e.offsetX,cy=e.offsetY;
 //            if(that.history.length>0){
 //              that.ctx.putImageData(0, 0, that.mask.wid, that.mask.hei);
 //            }
 //           	that.ctx.lineTo(cx,cy);
 //           	// that.ctx.closePath();
 //           	that.ctx.stroke();
 //            that.ctx[that.style]();
            
 //           }
 //           	that.mask.onmouseup=function(){
 //            that.history.push(that.ctx.getImageData(0, 0, that.mask.wid, that.mask.hei));
	// 	        that.mask.onmousemove=null;
	// 	        // that.mask.onmouseup=null;
	//       }
         
	// 	}
	// },
  pencil:function(){
    let that=this;
    this.mask.onmousedown=function(e){
      let ox=e.offsetX,oy=e.offsetY;
      that.init();
      that.ctx.beginPath()
      that.ctx.moveTo(ox,oy)
      that.mask.onmousemove=function(e){
        let cx=e.offsetX;cy=e.offsetY;
        that.ctx.lineWidth=that.lineWidth;
        that.ctx.clearRect(0,0,that.wid,that.hei);
        if(that.history.length>0){
                  //将最后一条历史记录放入
                  that.ctx.putImageData(that.history[that.history.length-1],0,0);
                }
        that.ctx.lineTo(cx,cy);
//        that.ctx.closePath()
        that.ctx.stroke();
      }
      that.mask.onmouseup=function(){
            that.history.push(that.ctx.getImageData(0,0,that.canvas.width,that.canvas.height));
            this.onmousemove=null;
            this.onmouseup=null;
          }
    }
  },
	//多角形
	memagon:function(ox,oy,cx,cy){
          
         	let ang=360/(this.ployJNum*2)/180*Math.PI;
         	let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
         	let r1=r/2;
         	
         	
         	this.ctx.beginPath();
         	this.ctx.moveTo(ox+r,oy);
         	for(let i=1;i<this.ployJNum*2;i++){
         		if(i%2){
         			this.ctx.lineTo(ox+r1*Math.cos(i*ang),oy+r1*Math.sin(i*ang));
         		}else{
         			this.ctx.lineTo(ox+r*Math.cos(i*ang),oy+r*Math.sin(i*ang));
         		}

         	}
         	this.ctx.closePath();
         

       

	},

	//合并
	 draw:function(type){
        let that=this;
        this.mask.onmousedown = function(e){
        	let ox = e.offsetX,oy = e.offsetY;
        	that.mask.onmousemove = function(e){
        		let cx=e.offsetX,cy=e.offsetY;
        		that.ctx.clearRect(0, 0,that.wid ,that.hei);
     		 if(that.history.length>0){
        			that.ctx.putImageData(that.history[that.history.length-1],0,0)
        		}
            that.init();
            that.ctx[that.style]();
            that[type](ox,oy,cx,cy);
            
            
        	}
          
        	that.mask.onmouseup=function(){
         	  that.history.push(that.ctx.getImageData(0, 0, that.wid, that.hei));
		        that.mask.onmousemove=null;
		        that.mask.onmouseup=null;
	        }
        }
	},
   //橡皮擦
        
        eraser:function(obj,w,h){
        	let that=this;
        	this.mask.onmousedown = function(e){
        		obj.style.display="block";
            e.preventDefault();
        		that.mask.onmousemove = function(e){
                    let cx=e.offsetX,cy=e.offsetY;
                    let lefts=cx-w/2,tops=cy-h/2;
                    
                    if(tops<=0){
                      tops=0;
                    }
                    if(tops>=that.hei-h){
                       tops=that.hei-h;
                    }
                    if(lefts<=0){
                      lefts=0;
                    }
                    if(lefts>=that.wid-w){
                       lefts=that.wid-w;
                    }
                    obj.style.left=`${lefts}px`;
                    obj.style.top=`${tops}px`;
                    that.ctx.clearRect(lefts, tops, w, h);
        		}
        		that.mask.onmouseup=function(){
        			obj.style.display='none';
              that.history.push(that.ctx.getImageData(0,0,that.wid,that.hei));
        			that.mask.onmousemove=null;
        			that.mask.onmouseup=null;
        		}
        	}
           

        },
 
        // 
        // 
        // 文本
   version:function(){
     this.mask.onmousedown=function(e){
      let that=this;
      let ox=e.offsetX,oy=e.offsetY;
      let divs=document.createElement('div');
      divs.style.cssText=`
      width:80px;
      height:30px;
      border:1px solid red;
      position: absolute;
      top:${oy}px;
      left:${ox}px;
      `
      divs.contentEditable=true;
      this.mask.appendChild(divs);
      this.mask.onmousedown=null;
      let lefts,tops;
      divs.onmousedown=function(e){
        
        let ox=e.clientX,oy=e.clientY;
        let ol=divs.offsetLeft,ot=divs.offsetTop;
        that.mask.onmousemove=function(e){
          let cx=e.clientX,cy=e.clientY;
          lefts=cx-ox+ol;
          tops=cy-oy+ot;
          if(lefts<=0){
              lefts=0
            }
          if(lefts>=that.cx-ox+ol){
              lefts=that.cx-ox+ol
          }
          if(tops<=0){
            tops=0;
          }
          if(tops>=that.cy-oy+ot){
            tops=that.cy-oy+ot;
          }
          divs.style.left=`${lefts}px`;
          divs.style.top=`${tops}px`
        }
             divs.onmouseup=function(){
               that.mask.onmousemove=null;
               this.onmouseup=null;
             }
      
        }
      divs.onblur=function(){
        that.history.push(that.ctx.getImageData(0,0,that.wid,that.hei));
        let value=this.innerText;
        that.mask.removeChild(this)
        that.ctx.textAlign='center';
        that.ctx.fillText(value,lefts,tops)
        }
    }.bind(this)
},

  
    //截取
    //
    //
  // clip:function(clipObj){
  //   let that=this;

  //   this.mask.onmousedown=function(e){
  //     let ox=e.offsetX,oy=e.offsetY;
  //     let w,h,minx,miny
  //     that.mask.onmousemove=function(e){
  //       let cx=e.offsetX,cy=e.offsetY;
  //       minx=cx>ox?ox:cx
  //       miny=cy>oy?oy:cy
  //       w=Math.abs(cx-ox);
  //       h=Math.abs(cy-oy);
  //       clipObj.style.cssText=`
  //       display:block;        
  //       left:${minx}px;
  //       top:${miny}px;
  //       width:${w}px;
  //       height:${h}px;
  //       `;        
  //     }
      
  //     that.mask.onmouseup = function(){

  //       console.log(that.mask.onmousedown)
  //        that.temp=that.ctx.getImageData(minx,miny,w,h)
  //        that.ctx.clearRect(minx,miny,w,h)   
       
  //       that.history.push(that.ctx.getImageData(0,0,that.wid,that.hei))
       
  //       that.ctx.putImageData(that.temp,minx,miny)
       
  //       that.mask.onmousemove=null;
  //       that.mask.onmouseup=null;
  //        that.drag(minx,miny,w,h,clipObj)
  //     }
      
  //   }

  // }，
  // drag:function(minx,miny,w,h,clipobj){
  //   let that=this;
  //   //定义移入移出的手势
  //   this.mask.onmousemove=function(e){
  //     let ox=e.offsetX,oy=e.offsetY;
  //     if(ox>minx&&ox<minx+w&&oy>miny&&oy<miny+h){
  //       that.mask.style.cursor='move'
  //     }
  //     else{
  //       that.mask.style.cursor='default'
  //     }
  //   }
  //   //按下鼠标拖拽裁剪狂 
  //   this.mask.onmousedown=function(e){
  //     let ox=e.offsetX,oy=e.offsetY;
  //     that.mask.onmousemove=function(e){
  //       let cx=e.offsetX,cy=e.offsetY;
  //       let lefts=cx-ox+minx,tops=cy-oy+miny;
  //       //设置边距
  //               if(lefts<=0){
  //                 left=0;
  //               }
  //               if(lefts>=that.wid-w){
  //                 left=that.wid-w
  //               }
  //       if(tops<=0){
  //                 top=0;
  //               }
  //               if(tops>=that.hei-h){
  //                 top=that.hei-h;
  //               }
  //       clipobj.style.left=`${lefts}px`;
  //       clipobj.style.top=`${tops}px`
  //       //裁切的部分使其一直放置
  //       that.ctx.clearRect(0,0,that.wid,that.hei)
  //       //拖拽一次
  //       if(that.history.length>0){
  //         that.ctx.putImageData(that.history[that.history.length-1],0,0)
  //       }
  //       that.ctx.putImageData(that.temp,lefts,tops)
  //     }
  //     that.mask.onmouseup=function(){
  //       clipobj.style.display='none'
  //       that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch))
  //       that.temp=null;

  //       that.mask.onmousemove=null;
  //           that.mask.onmouseup=null;
            
  //     }
  //   }
  // }
    
    clip:function(clipObj){
         let that=this;
        
         this.mask.onmousedown = function(e){
          let ox=e.offsetX,oy=e.offsetY;
          let minX,minY,w,h;
          
                  that.mask.onmousemove = function(e){
                    let cx=e.offsetX,cy=e.offsetY;
                    w=Math.abs(cx-ox),h=Math.abs(cy-oy);
                    minX=cx>ox?ox:cx;
                    minY=cy>oy?oy:cy;
                    // console.log(clipObj)
                    clipObj.style.cssText=`
                      display:block;
                      left:${minX}px;top:${minY}px;
                      width:${w}px;height:${h}px;
                    `;//获取初始位置
                    
                  }
                  
            that.mask.onmouseup=function(){
            
                  that.temp=that.ctx.getImageData(minX,minY,w,h);
                  console.log(that.temp);
                  that.ctx.clearRect(minX, minY, w, h);
                  that.history.push(that.ctx.getImageData(0,0,that.wid,that.hei));
                  that.ctx.putImageData(that.temp,minX, minY);
            
                  that.mask.onmousemove=null;
                  that.mask.onmouseup=null;
                  that.drag(minX,minY,w,h,clipObj);
          }

         }
    },
          
  
    drag:function(minX,minY,w,h,clipObj){
      let that=this;
      //移入移出的手势
      this.mask.onmousemove = function(e){
           let cx=e.offsetX,cy=e.offsetY;
           if(cx>minX&&cx<minX+w&&cy>minY&&cy<minY+h){
            that.mask.style.cursor="move";
           }else{
            that.mask.style.cursor="default";
           }
      }
      //拖拽并剪切
      this.mask.onmousedown= function(e){
         let ox=e.offsetX,oy=e.offsetY;
         that.mask.onmousemove = function(e){
           let cx=e.offsetX,cy=e.offsetY;
           let lefts=cx-ox+minX,tops=cy-oy+minY;
           if(lefts<=0){
            lefts=0;
           }
           if(lefts>=that.wid-w){
            lefts=that.wid-w;
           }
           if(tops<=0){
            tops=0;
           }
           if(tops>=that.hei-h){
            tops=that.hei-h;
           }
           clipObj.style.left=`${lefts}px`;
           clipObj.style.top=`${tops}px`;   //让剪切的移动
           that.ctx.clearRect(0, 0, that.wid, that.hei);
           if(that.history.length>0){
            that.ctx.putImageData(that.history[that.history.length-1],0,0);
           }
           that.ctx.putImageData(that.temp,lefts,tops);
         }
         that.mask.onmouseup=function(){

            clipObj.style.display='none';
            that.history.push(that.ctx.getImageData(0,0,that.wid,that.hei));
            that.temp=null;
            that.mask.onmousemove=null;
            that.mask.onmouseup=null;
            
     
         }
      }
    },
    //反回
    //
    ret:function(){
    let Img=this.ctx.getImageData(0,0,this.wid,this.hei);
    let data=Img.data;
    
    for(let i=0; i<data.length;i+=4){
      data[i]=255-data[i];
      data[i+1]=255-data[i+1];
      data[i+2]=255-data[i+2];
    }
    this.ctx.putImageData(Img,0,0)
  }

}
