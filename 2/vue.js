let app=Vue.createApp({
    data: function(){
        return {
        Main:true,
        Help:false,
        Login:false,
		Cart:false,
        }

    },
    methods:{
        swap1(){
            this.Main=true
            this.Help=false
            this.Login=false
			this.Cart=false
        },
        swap2(){
            this.Main=false
            this.Help=true
            this.Login=false
			this.Cart=false
        },
        swap3(){
            this.Main=false
            this.Help=false
            this.Login=true
			this.Cart=false
        },
		swap4(){
            this.Main=false
            this.Help=false
            this.Login=false
			this.Cart=true
        },
    }
});


let card=app.mount("#main")
