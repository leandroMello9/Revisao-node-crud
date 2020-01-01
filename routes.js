import express from 'express';
const tech = [];
;
const Routes = express.Router();


Routes.get('/', (req, res) => {
    return res.json({techList: tech})
})
Routes.post('/newTech', (req, res) => {
    const { name }= req.body;
    const obj = {
        name
    }
   
    if(!name) {
        return res.json({error: 'Name is not defined'})
    }
    tech.push(obj);
    res.json({techList: tech})
})
Routes.delete(`/newTech/:index`, (req, res) => {
   const {index} = req.params;
    
  
    const newList = tech.splice(index, 1);
    if (newList.length === 0 ) {
        return res.json({error: 'Array is not index'})
    }
    
    
    return res.json({techList: newList})
})
Routes.put(`/newTech/:index`, (req, res) => {
   const {index} = req.params;
   const {name} = req.body;
   const obj = {
    name
   }
  
  
    
    tech[index] = obj;

    return res.json({ techList: tech})
})
export default  Routes;