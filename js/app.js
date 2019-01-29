window.app = {
	
	/**
	 * 后端服务发布的url地址
	 */
	serverUrl: "http://localhost:8089",
	
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
	
	showToast:function(msg, type){
		plus.nativeUI.toast(msg, {icon: "image/"+type+".png", verticalAlign:"center"} )
	}
	
}
