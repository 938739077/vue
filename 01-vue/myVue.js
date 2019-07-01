









var res = new Vue({
    el:"#res",
    data:{
        fruit:[
            {
                id:1,
                name:"apple",
                price:500,
                count:0,
                discount:0.8,
            },
            {
                id:2,
                name:'tomto',
                price:300,
                count:0,
                discount:0.7,
            },
            {
                id:3,
              name:'origan',
              price:600,
              count:0,
              discount:0.9,
            }
        ]
    },
    methods:{
       totalPrice:function () {
           var totalP=0;
           for(var i=0;i < this.fruit.length;i++){
               totalP+=this.fruit[i].price*this.fruit[i].count*this.fruit[i].discount;
           }
           return totalP
       }
    }
})


var vm = new Vue({
    el:"#operate",
    data:{
        name:"Mickey Mouse",
        detil:"Mickey Mouse is a good mouse!!",
    },
    computed:{
        site:{
            //getter
            get:function () {
                return this.name + "  " + this.detil
            },
            //setter
            set:function (newValue) {
                var names = newValue.split(" ")
                this.name = names[0]
                this.detil = names[names.length-1]
            }
        }
    }
})
vm.site = "Mickey Mouse,Mickey Mouse is a good mouse!!";
document.write('name:'+vm.name);
document.write('<br>');
document.write('detil'+vm.detil);

new Vue({
    el:"#testif",
    data:{
        str:"AA",
    }
})

new Vue({
    el:"#random",
})

new Vue({
    el:"#iftest",
    data:{
        seen:true,
        look:false,
    }
})

new Vue({
    el:"#filter",
    data:{
        msg:"VUE is the best JAVASCRIPT iFrame",
    },
    filters:{
        capitalize:function (value) {
            if(!value)
                return ""
            value = value.toString()
            return value.charAt(0).toLocaleUpperCase() + value.slice(1)
        }
    },
    methods:{

    },
})



new Vue({
    el:"#reverse",
    data:{
        msg:"Hello World!!",
    },
    methods:{
        reverseMsg:function () {
            this.msg = this.msg.split('').reverse().join('')
        }
    }
})


new Vue({
    el:'#userinput',
    data:{
        usermsg:'ddddd',
    }
})


new Vue({
    el:"#app",
    data:{
        stulist:[
            {
                name:"MickeyMouse",
                detile:"mickeyMouse is a good mouse",
                attribute:"mouse",
            },
            {
                name:"TangDuck",
                detile:"TangDuck is a good duck",
                attribute:"duck",
            },
            {
                name:"viniBeer",
                detile:"viniBeer is a good beer",
                attribute:"beer",
            },
        ]
    }
});



