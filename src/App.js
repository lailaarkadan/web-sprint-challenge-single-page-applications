import React, { useState, useEffect } from 'react'; 
import * as yup from 'yup'
import axios from 'axios'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Form from './Components/Form';
import schema from './validation/formSchema';
import styled from 'styled-components';

const Title = styled.h1`
font-size: 2em;
    
     width: 80%;
     margin: 0 auto;
     color: #4f0744;
     font-family: 'Exo', sans-serif;
     padding: 50px;
     font-size: 65px;
`;


const initialValues = {
  name:'',
  size: '',
  sauce: '',
  pepperoni: false,
  olives: false,
  artichoke: false,
  mushrooms: false,
  spinach: false,
  tomatoes: false,
  crust: false,
  instructions: '',
}

const initialErrors = {
  name:'',
  size: '',
  sauce: '',
  pepperoni: false,
  olives: false,
  artichoke: false,
  mushrooms: false,
  spinach: false,
  tomatoes: false,
  crust: false,
  instructions: '',

}

const initialDisabled = true

const App = () => {
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState(initialErrors)

  const [disabled, setDisabled] = useState(initialDisabled);
  

  
    const postOrder= newOrder => {
        axios.post('https://reqres.in/api/orders', newOrder)
            .then(res => {
                setFormValues([res.data]);
            }).catch(err => {
            console.error(err)
        }).finally(()=>{
            setFormValues(initialValues)
        })
    }
  const validate = (name, value) => {
      yup.reach(schema, name)
          .validate(value)
          .then(() => setFormErrors({ ...formErrors, [name]: '' }))
          .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = ( name, value) => {
      validate(name, value);
      setFormValues({
          ...formValues,
          [name]: value
      })
  }


  const formSubmit = () => {
    const newOrder = {
      name: formValues.name,
      size: formValues.size,
      sauce: formValues.sauce,
      pepperoni: formValues.pepperoni,
      olives: formValues.olives,
      artichoke: formValues.artichoke,
      mushrooms: formValues.artichoke,
      spinach: formValues.spinach,
      tomatoes: formValues.tomatoes,
      crust: formValues.crust,
      instructions: formValues.instructions.trim(),
       
    }
    postOrder(newOrder)
}

useEffect(() => {
  schema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])

  return (
    <Router>
    <div className="App">
      <nav>
        <Title className="header">Lambda Eats</Title>
        <Route path='/'> 
        <Link to='/'>Home</Link>
        </Route>
        <div>
        <Link to='/pizza' id='order-pizza'>Order Pizza</Link>
      </div>
      </nav>
  
      <Switch>
        
        <Route path='/pizza' >
          <Form 
          values={formValues}
          change={inputChange}
           submit={formSubmit}
            errors={formErrors}
             disabled={disabled}
            />

        </Route>
      </Switch>

    </div>
    </Router>
  );
}
export default App;
