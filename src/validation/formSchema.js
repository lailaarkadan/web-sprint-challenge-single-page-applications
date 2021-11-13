import * as yup from 'yup'

const schema = yup.object().shape({
    
    name: yup
        .string()
        .min(2, 'name must be at least 2 characters')
        .required('name is required.'),
    size: yup.string()
        .oneOf(['Small', 'Medium', 'Large'], 'Pizza size is required.')
        .required(' Pizza size is required.'),
     
    sauce: yup.string()
        .oneOf(['red', 'pesto', 'garlic ranch', 'noSauce'])
        .required(' Sauce is required.'),
   
    pepperoni: yup.boolean(),
    olives: yup.boolean(),
    artichoke: yup.boolean(),
    mushrooms: yup.boolean(),
    tomatoes: yup.boolean(),

    instructions: yup.string()
    })
        
    


export default schema;
