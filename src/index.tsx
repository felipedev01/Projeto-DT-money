import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createServer,Model} from 'miragejs'

createServer({

  models:{
    Transaction:Model,
  },

  seeds(server){
    server.db.loadData({

      transactions:[
        {
          id:1,
          title:"Recebimento salário",
          amount:5000,
          category:"Venda",
          createdAt:new Date(),
          type:"deposit",
         
         
          
        },
        {
          id:2,
          title:"Aluguel",
          amount:2000,
          category:"Compra",
          createdAt:new Date(),
          type:"withDraw",
         
         
          
        }
      ]
    })
  },
   routes(){

    this.namespace = 'api'

    this.get('/transactions',()=>{

      return(
        this.schema.all('Transaction')
      )
    })
    this.post('/Transactions',(schema,request)=>{
      const data=JSON.parse(request.requestBody)

      return schema.create('Transaction',data)
    })
   }

})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


