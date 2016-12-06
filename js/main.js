// window.onload = function() {
// 	var basic = document.getElementsByClassName('basic_video_pattern');
// 	for(var i = 0; i < basic.length; i++) {
// 		basic[i].index = i;
// 		basic[i].onclick = function() {
// 			window.location.href = 'video-free.html';
// 		}
// 	}

// 	//播放页左下方的按钮切换
//     $('#class_info li').click(function() {
//         $(this).addClass('current');
//         $(this).siblings().removeClass('current');
//         var val = $(this).val();
//         if(val == 1) {
//             $('.class_spec').show();
//             $('.know_point').hide();
//             $('.stu_comments').hide();
//         } else if (val == 2) {
//             $('.class_spec').hide();
//             $('.know_point').show();
//             $('.stu_comments').hide();
//         } else {
//             $('.class_spec').hide();
//             $('.know_point').hide();
//             $('.stu_comments').show();
//         }
//     })

// }
// var searchInput = document.getElementById('search_input_index');
// var oInput = document.getElementsByName('search_input')[0];
// var myTab = document.getElementById('mytab');
// var searchInputShow = document.getElementsByClassName('search_input')[0];
// searchInput.onclick = function() {
	
// 	var timer = null;
// 	myTab.style.display = 'none';
// 	this.style.display = 'none';
// 	searchInputShow.style.display = 'inline-block';
// 	timer = setInterval(function() {
// 		var width_input = oInput.offsetWidth;
// 		width_input = width_input + 10;
// 		width_input >= 500 && clearInterval(timer);
// 		oInput.style.width = width_input + 'px';
// 	}, 3)
// 	oInput.focus();
// }

// oInput.addEventListener("blur", function( event ) {
// 	var timer = null;
// 	timer = setInterval(function() {
// 		var width_input = oInput.offsetWidth;
// 		width_input = width_input - 10;
// 		oInput.style.width = width_input + 'px';
// 		if (width_input <= 22) {
// 			clearInterval(timer);
// 			searchInputShow.style.display = 'none';
// 			myTab.style.display = 'block';
// 			searchInput.style.display = 'inline-block';
// 		}
// 	}, 3)

	
// }, true);

// //导航条按钮切换
// $("#mytab a").click(function(e) {
//     var aaa = $(this).attr("name");
//     window.location.href=aaa + '.html';
//     e.preventDefault();
//     $(this).tab("show");
// })
// // 首页
// $(function() {
//     var container = $('#container');
//     var list = $('#list');
//     var buttons = $('#buttons span');
//     var prev = $('#prev');
//     var next = $('#next');
//     var index = 1;
//     var len = 5;
//     var interval = 3000;
//     var timer;


//     function animate(offset) {
//         var left = parseInt(list.css('left')) + offset;
//         if (offset > 0) {
//             offset = '+=' + offset;
//         } else {
//             offset = '-=' + Math.abs(offset);
//         }
//         list.animate({
//             'left': offset
//         }, 247, function() {
//             if (left > -200) {
//                 list.css('left', -494 * len);
//             }
//             if (left < (-494 * len)) {
//                 list.css('left', -494);
//             }
//         });
//     }

//     function showButton() {
//         buttons.eq(index - 1).addClass('on').siblings().removeClass('on');
//     }

//     function play() {
//         timer = setTimeout(function() {
//             next.trigger('click');
//             play();
//         }, interval);
//     }

//     function stop() {
//         clearTimeout(timer);
//     }

//     next.bind('click', function() {
//         if (list.is(':animated')) {
//             return;
//         }
//         if (index == 5) {
//             index = 1;
//         } else {
//             index += 1;
//         }
//         animate(-494);
//         showButton();
//     });

//     prev.bind('click', function() {
//         if (list.is(':animated')) {
//             return;
//         }
//         if (index == 1) {
//             index = 5;
//         } else {
//             index -= 1;
//         }
//         animate(494);
//         showButton();
//     });

//     buttons.each(function() {
//         $(this).bind('click', function() {
//             if (list.is(':animated') || $(this).attr('class') == 'on') {
//                 return;
//             }
//             var myIndex = parseInt($(this).attr('index'));
//             var offset = -494 * (myIndex - index);

//             animate(offset);
//             index = myIndex;
//             showButton();
//         })
//     });

//     container.hover(stop, play);

//     play();

// });
