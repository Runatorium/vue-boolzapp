const { createApp } = Vue

createApp(
    {
        data() {
            return {
                activeUser: [],
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

            
            
        }
        
    }
).mount('#app')
