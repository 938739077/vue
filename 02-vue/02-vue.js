

var myAdd = new Vue({
	el:"#add",
	data:{
		counter:0,
	}
})


var swit = new Vue({
	el:"#swit",
	data:{
		inputMsg:0,
		outputMsg:0,
	},
	methods:{

	},
	computed:{

	},
	watch:{
		inputMsg:function(value){
			this.inputMsg=value;
			this.outputMsg = this.inputMsg*1000;
		},
		outputMsg:function(value){
			this.outputMsg = value;
			this.inputMsg=this.outputMsg/1000;
		}
	}
})

swit.$watch("inputMsg" , function(oldNum , newNum){
	document.getElementById("info").innerHTML = "old Number "+oldNum+"--new Number " +newNum; 
})