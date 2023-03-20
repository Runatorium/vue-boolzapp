const { createApp } = Vue

createApp(
    {
        data() {
            return {
                activeUser: [],
                newmsg: "",
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
                                text:"",
                                tipo: "received",
                            }
                        ],
                    }
                ],
            } 
            
        },
        methods:{
           setActiveUser(user){
            this.activeUser = this.contacts.find(contacts => contacts.nome === user)
            },

            addmsg(){
                let newmsg = {
                    text: this.newtask,
                    tipo: "received",
                }
                /* this.contacts.messaggi.push(newmsg);
                newmsg = ""; */
            },
        }
    }
).mount('#app')