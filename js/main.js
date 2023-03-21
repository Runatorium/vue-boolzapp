const { createApp } = Vue

createApp(
    {
        data() {
            return {
                activeUser: {},
                showChatcnt: true,
                showContacts: true,
                newmsg: "",
                ricercaUtente:"",
                timer: 1000,
                utentiTrovati: [],
                contacts: [
                    {
                        nome: "michele",
                        img: "./img/avatar_3.jpg",
                        status: true,
                        messaggi:[
                            {
                                text:"asdasdasdasdasdasdadasdasduna asdasdasdasdasdasdadasdasduna frase abbastanza lunga asdasdasdasdasdasdadasdasduna ",
                                tipo: "sent",
                            },
                            {
                                text:"un'altra frase abbastanza lunga",
                                tipo: "received",
                            }
                        ],
                    },
                    {
                        nome: "Gianni",
                        img: "./img/avatar_4.jpg",
                        status: true,
                        messaggi:[
                            {
                                text:"ding dong",
                                tipo: "sent",
                            },
                            {
                                text:"nija anshi i",
                                tipo: "received",
                            }
                        ],
                    },
                    {
                        nome: "Gianna",
                        img: "./img/avatar_5.jpg",
                        status: true,
                        messaggi:[
                            {
                                text:"asd",
                                tipo: "sent",
                            },
                            {
                                text:"holy sigmar",
                                tipo: "received",
                            }
                        ],
                    },
                    {
                        nome: "Piero",
                        img: "./img/avatar_2.jpg",
                        status: true,
                        messaggi:[
                            {
                                text:"",
                                tipo: "sent",
                            },
                            {
                                text:"vex",
                                tipo: "received",
                            }
                        ],
                    }
                ],
            } 
            
        },
        
        methods:{
            showChatdata(){
                if(this.activeUser.lenght === 0){
                    this.showChatcnt = true;
                }else{
                    this.showChatcnt = false;
                }
            },
           setActiveUser(index){
            this.activeUser = this.contacts[index]
            },
            
            findUser(){
                if(this.ricercaUtente.lenght === 0){
                    this.showContacts = true;
                }else{
                    this.utentiTrovati = this.contacts.filter(contacts => contacts.nome?.includes(this.ricercaUtente))
                    this.showContacts = false;
                }
            },
            addmsg(){
                let newmsg = {
                    text: this.newmsg,
                    tipo: "sent",
                }
                console.log(this.activeUser.messaggi);
                this.activeUser.messaggi.push(newmsg);
                setTimeout(this.timingFunction, 1000);
                newmsg = "";
            },
            timingFunction(){
                let nuovomsg = {
                    text: "ok",
                    tipo: "received",
                }
                console.log(this.activeUser.messaggi);
                this.activeUser.messaggi.push(nuovomsg);
                newmsg = "";
            },
            
            deleteMsg(messaggio){
                this.activeUser.messaggi.splice(messaggio, 1);
                console.log(this.activeUser.messaggi, "messaggi");
            },
        }     
    }
).mount('#app')
