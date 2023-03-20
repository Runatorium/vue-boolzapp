const { createApp } = Vue

createApp(
    {
        data() {
            return {
                activeUser: [],
                newmsg: "",
                ricercaUtente:"",
                utentiTrovati: [],
                timer: 1000,
                contacts: [
                    {
                        nome: "michele",
                        img: "./img/avatar_3.jpg",
                        status: true,
                        messaggi:[
                            {
                                text:"piero",
                                tipo: "sent",
                            },
                            {
                                text:"prova",
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
                                text:"",
                                tipo: "sent",
                            },
                            {
                                text:"prova2",
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
                                text:"",
                                tipo: "sent",
                            },
                            {
                                text:"prova 2",
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
           setActiveUser(index){
            this.activeUser = this.contacts[index]
            },
            /*
            findUser(){
                this.utentiTrovati = this.contacts.filter(contacts => contacts.name == this.ricercaUtente)
                console.log(this.utentiTrovati);
            },*/
            addmsg(){
                let newmsg = {
                    text: this.newmsg,
                    tipo: "sent",
                }
                console.log(this.activeUser.messaggi);
                this.activeUser.messaggi.push(newmsg);
                setTimeout(this.myfunction, 1000);
                newmsg = "";
            },
            myfunction(){
                let nuovomsg = {
                    text: "ok",
                    tipo: "received",
                }
                console.log(this.activeUser.messaggi);
                this.activeUser.messaggi.push(nuovomsg);
            },

            
            
        }
        
    }
).mount('#app')