window.app = {
	
	/**
	 * 后端服务发布的url地址
	 */
	serverUrl: "http://192.168.31.248:8089",
	
	/**
	 * 
	 * 判断传入的 str 是否为空为未定义
	 * @param {Object} str
	 */
	isNotNull: function(str){
		if(str != null && str !="" && str!= undefined){
			return true;
		}
		return false; 
	},
	
	/**
	 * 封装消息提示框，这里使用 h5+ 的方法
	 * @param {Object} msg
	 * @param {Object} type
	 */
	showToast:function(msg, type){
		plus.nativeUI.toast(msg, {icon: "image/"+type+".png", verticalAlign:"center"} )
	},
	
	
	/**
	 * 保存成功登陆后，从后端传递过来的 VO 对象， 即保存全局对象
	 * @param {Object} user
	 */
	setUserGlobalInfo: function(user) {
		// 将 user 对象转化成一个字符串
		var userInfoStr =  JSON.stringify(user);
		
		plus.storage.setItem("userInfo", userInfoStr);
	},
	
	/**
	 * 通过key 来返回对应的全局对象，
	 */
	getUserGlobalInfo: function() {
		var userInfoStr = plus.storage.getItem("userInfo");
		return JSON.parse(userInfoStr);
	}
	
}
