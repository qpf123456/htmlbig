
					
					  // 1. 获取所有按钮元素， btns得到的是伪数组
					  var btns = document.getElementsByTagName('button');
					  for (var i = 0; i < btns.length; i++) { // 里面的每一个元素btns[i]
					    btns[i].onclick = function () {
					      for (var i = 0; i < btns.length; i++) { // (1) 先把所有的按钮背景颜色去掉
					        btns[i].style.backgroundColor = '';
					      }
					      this.style.backgroundColor = 'orange'; // (2) 然后设置当前的元素背景颜色
					    }
					  }
				
			