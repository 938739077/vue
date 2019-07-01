






new Vue({
	el:"#spp",
	data:{
		aaa:true,
		bbb:{
			ccc:true,
			ddd:"eee",
		}
	},
	computed:{
		classObj:function(){
			return {
				//base:true,
				disp:this.aaa && this.bbb.ccc,
				hasE:this.aaa && this.bbb.ddd == "eee",
			}
		}
	}
})


new Vue({
	el:"#app",
	data:{
		isActivative:true,
		hasError:true,
	}
})