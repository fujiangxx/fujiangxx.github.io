window.onload = function () {
	//侧导航事件
	let aside1 = document.getElementsByClassName('aside1');
	let cebian = document.getElementsByClassName('cebian');
	let moreshangpin = document.getElementsByClassName('moreshangpin');
	/*//方法一
	cebian[0].onmouseover = function  () {
		moreshangpin[0].style.display = 'block';
	}
	cebian[0].onmouseout = function  () {
		moreshangpin[0].style.display = 'none';
	}*/
	//方法二
	for (let i = 0; i < cebian.length; i++) {
		cebian[i].onmouseover = function  () {
		moreshangpin[i].style.display = 'block';
		}
		cebian[i].onmouseout = function  () {
		moreshangpin[i].style.display = 'none';
		}
	}
	
	//轮播点
	let imgboxs = document.getElementsByClassName('imgbox')[0];
	let imgboxli = imgboxs.getElementsByTagName('li');
	let bottombans = document.getElementsByClassName('bottomban')[0];
	let bottombanli = bottombans.getElementsByTagName('li');
	let t;
	let num = 0;

	/*for (let i = 0; i < bottombanli.length; i++) {
		bottombanli[i].onclick = function  () {
			for (let j = 0; j < imgboxli.length; j++) {
				imgboxli[j].classList.add('none');
				imgboxli[j].classList.remove('block');
				bottombanli[j].style.background = '#17171c';
			}
				imgboxli[i].classList.add('block');
				bottombanli[i].style.background = '#7c7c81';
		}
	}*/
	for (let i = 0; i < bottombanli.length; i++) {
		bottombanli[i].onclick = function  () {
			bottombanli[num].classList.remove('hot');
			this.classList.add("moren");
			this.classList.add('hot');
			imgboxli[num].style.display = 'none';
			imgboxli[i].style.display = 'block';
			num = i;
		}
	}
	//自动轮播
	t = setInterval(fn,5000);
	function fn () {
		num++;
		if (num == imgboxli.length) {
			num = 0;
		}
		for (let i = 0; i < imgboxli.length; i++) {
			imgboxli[i].style.display = 'none';
			bottombanli[i].classList.remove('hot');
		}
		bottombanli[num].classList.add('hot');
		imgboxli[num].style.display = 'block';
	}
	//右箭头
	let bannerrig = document.getElementsByClassName('bannerrig');
	imgboxs.onmouseover = function  () {
		clearInterval(t);
	}
	imgboxs.onmouseout = function  () {
		t = setInterval(fn,5000);
	}
	bannerrig[0].onclick = fn;
	//左箭头
	let bannerlef =document.getElementsByClassName('bannerlef');
	bannerlef[0].onclick = fn1;
	function fn1 () {
		num--;
		if (num == -1) {
			num = imgboxli.length - 1;
		}
		for (let i = 0; i < imgboxli.length; i++) {
			imgboxli[i].style.display = 'none';
			bottombanli[i].classList.remove('hot');
		}
		bottombanli[num].classList.add('hot');
		imgboxli[num].style.display = 'block';
	}
	//搜索框事件
	let sousuokuang = document.getElementsByClassName('sousuokuang');
	let xiaomimix = document.getElementsByClassName('xiaomimix');
	let rengongzhineng = document.getElementsByClassName('rengongzhineng');
	let all = document.getElementsByTagName('*');
	sousuokuang[0].onclick = function  () {
		xiaomimix[0].style.display = 'none';
		rengongzhineng[0].style.display = 'none';
	}
	all.onclick = function  () {
		xiaomimix[0].style.display = 'block';
		rengongzhineng[0].style.display = 'block';
	}
	
}