
		// 鼠标指针经过左侧的li
			var flag = 0; // 
			var index = 0;
			$("#left li").mouseover(function() {
				flag = 1;
				index = $(this).index(); // 得到当前li的索引
				console.log(index);
				// 让右侧盒子相应索引的图片显示出来
				$("#content div").eq(index).show();
				// 将其他图片隐藏起来
				$("#content div").eq(index).siblings().hide();
		
			});
		
			$("#left li").mouseout(function() {
				flag = 0;
			});
		
			var timer = setInterval(function() {
				if (flag == 0) {
		
					index++;
					if (index > $("#left li").length) {
						index = 0;
					}
					console.log(index);
					$("#content div").eq(index).show();
					$("#content div").eq(index).siblings().hide();
		
				}
		
			}, 3000)
