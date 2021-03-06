
import {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormComponent from './FormComponent'

const Main=()=>{
      const [val,setText]=useState([])
      const [data,setData]=useState([])
      const [example,setExample]=useState([
            {
            "name":"userName",
            "label":"User Name",
            "fieldType":"TextBox"
            },
            {
            "name":"City",
            "label":"City",
            "DataSource":["Bangalore", "Mysore", "Kolkata", "Delhi"],
            "fieldType":"RadioButton"
            },
            {
            "name":"Gender",
            "label":"Gender",
            "fieldType":"DropDown",
              "DataSource":["Male", "Female"]
            }
            ])
      const [placeholder,setPlaceholder]=useState([
           {
            "name":"userName",
            "label":"User Name",
            "DataSource":["Bangalore", "Mysore", "Kolkata", "Delhi"],
            "fieldType":"RadioButton"
            }])
      const addHandler=async()=>{
         try{
             const obj = JSON.parse(val);
            if(typeof obj !=='object'){
                  alert('Not Valid Json Format')
                  return 
            }
            setData(obj)

            }
            catch(err){
                  console.log(err.message)
                  alert(err.message)
            }

      }
	
	return(
         <div className="col-md-10 mx-auto p-5">
       <h1>Example Json Data </h1>
       <p>{JSON.stringify(example)}</p>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Enter Valid Json</Form.Label>
                         <Form.Control as="textarea" 
                          onChange={(e)=>setText(e.target.value)} value={val}
                          placeholder="Valid Json "
                         rows={10} />
                         </Form.Group>

           <Button variant="secondary" disabled={val.length>0 ?false:true} onClick={addHandler}>Evaluate</Button>
           <div className="col-md-8 mx-auto" >
             <Form>

           { data.length>0 && data.map((ele,index)=>
                     
                            <FormComponent key={index} value={ele}/>
                      

                       )}
                       </Form>
                       </div>
   		 </div>


		)
}


export default Main