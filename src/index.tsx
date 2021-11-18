import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createServer,Model} from 'miragejs'

createServer({

  models:{
    Transaction:Model,
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


