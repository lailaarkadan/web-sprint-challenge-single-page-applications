import React from "react";


const Form =(props) => {
    const {values, change, submit , disabled, errors } = props;
    
  
    const onChange = evt => {
        const { name,  value, checked, type } = evt.target
        const newValue = type === 'checkbox' ? checked : value;
        change(name, newValue)
    }

        const onSubmit = evt => {
            evt.preventDefault()
            submit()
        }

return (
   
   <form onSubmit={onSubmit}>
    <div>
      <h1>Build Your Own Pizza!</h1>
      
    
      <label> Choice of Size

        <select
        value={values.size}
        onChange={onChange}
        name='size'
    >
        <option value=''>---Select Size---</option>
        <option value='small'>Small</option>
        <option value='medium'>Medium</option>
        <option value='large'>Large</option>
       
    </select>  
    
      </label> 

      <h2> Choice of sauce</h2>
       <label> Original Red
            <input
                        type='radio'
                        name="sauce"
                        value="red"
                        checked={values.sauce === 'red'}
                        onChange={onChange}
                    />
                </label>
                

                <label> Pesto
            <input
                        type='radio'
                        name="sauce"
                        value="pesto"
                        checked={values.sauce === 'pesto'}
                        onChange={onChange}
                    />
                </label>
                

                <label> Garlic Ranch
            <input
                        type='radio'
                        name="sauce"
                        value="garlic ranch"
                        checked={values.sauce === 'garlic ranch'}
                        onChange={onChange}
                    />
                </label>
                  
        
    
      <h2> Add Toppings </h2>
      <label>Pepperoni 
      <input
        type = "checkbox" 
        name="pepperoni" 
        checked={values.pepperoni} 
        onChange={onChange}   
      />
      </label> 

      <label>Black Olives
      <input
        type = "checkbox" 
        name="olives" 
        checked={values.olives} 
        onChange={onChange}    
      />
      </label> 

      <label>Artichoke Hearts
      <input
        type = "checkbox" 
        name="artichoke" 
        checked={values.artichoke} 
        onChange={onChange}    
      />
      </label> 


      <label>Mushrooms
      <input
        type = "checkbox" 
        name="mushrooms" 
        checked={values.musshrooms} 
        onChange={onChange}    
      />
      </label> 

      <label>Spinach
      <input
        type = "checkbox" 
        name="spinach" 
        checked={values.spinach} 
        onChange={onChange}    
      />
      </label> 

      <label>Sun Dried Tomatoes 
      <input
       type = "checkbox" 
       name="tomatoes" 
       checked={values.tomatoes} 
       onChange={onChange}     
      />
      </label> 


      <h2>Gluten Free Crust</h2>
      <label> Choice of Substitute
      <input
       type = "checkbox" 
       name="crust" 
       checked={values.crust} 
       onChange={onChange}    
      />
      </label> 
      <h2>Special Instructions</h2>
      <label> Anything else you'd like to add?
          <input
          type='text'
          name='instructions'
          placeholder="Input special instructions here."
          value={values.instructions}
          onChange={onChange}
      />
          </label>
 
         <button className='submitOrder' disabled={disabled}>Submit Order</button>
    </div>
  </form>
)
}

export default Form;