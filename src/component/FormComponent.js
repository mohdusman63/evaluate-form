

import { Col, Row, Form,Button } from "react-bootstrap";


function FormComponent({value}) {
 return (
   <>
   
  <Row className="mb-3">
 
   {  value.fieldType==='TextBox' && <Form.Group as={Col} controlId="formGridEmail"><Form.Label>
     {value.label}</Form.Label>
           <Form.Control type="text" placeholder={value.name} />
         </Form.Group>}

 { value.fieldType==='RadioButton' &&<Form.Label as="legend" column sm={2}>
        {value.label}
      </Form.Label> }
           {value.fieldType==='RadioButton' && value.DataSource 
                              && value.DataSource.map((ele)=>{
                return(
                <>
                <Form.Group as={Row} className="mb-3">
                           <Col sm={10}>
                                <Form.Check
                                  type="radio"
                                  label={ele}
                                  name="formHorizontalRadios"
                                  id="formHorizontalRadios1"
                                />
                                   </Col>
                </Form.Group>

                  </>
                
              )
           })}

         
             {value.fieldType==='DropDown'&& <Form.Group as={Col} controlId="formGridState">
                <Form.Label>{value.label}</Form.Label>
                <Form.Select defaultValue="Choose...">
     
                {value.fieldType==='DropDown' && value.DataSource &&value.DataSource.map((ele)=>{
                 return(
                   <>
                 
              <option>{ele}</option>
            
          </>
     )
                })   }
                  </Form.Select>
          </Form.Group>} </Row>




     </>



  );
}

export default FormComponent;