
	$(function () {
	//	从cookie中获取userinfo的信息,使用模板引擎获取到信息展示到侧边栏
	//
		if(location.pathname != "/dashboard/login"){
			//从cookie中获取userinfo的信息
			var userinfo = $.cookie("userinfo");
			userinfo = JSON.parse(userinfo);

			//使用模板引擎将获取到的信息展示到侧边栏
			var html = template("tpl", userinfo);
			$("#pro").html(html);
		}
	})