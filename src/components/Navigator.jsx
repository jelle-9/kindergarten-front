import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';


export default function Navigator(props) {

    const liste = props.liste;
   // const elemente = props.elemente;
  return (
//    { <Accordion>
//         <ListGroup>
//             <ListGroup.Item action href="#link1">
//                 Dashbord
//             </ListGroup.Item>
//         </ListGroup>

//         {
//             Object.entries(liste).map(([key, values], index) => (
//                 <Accordion.Item eventKey={index}>
//                     <Accordion.Header>{key}</Accordion.Header>
//                     <Accordion.Body>
                        
//                         {
//                         /* Elemente, die in key befinden. */
//                         values.map(value => (
//                             <ListGroup.Item action href="#link2">
//                                 {value}
//                             </ListGroup.Item>
//                         ))
                        
//                         }
                            
//                     </Accordion.Body>
//                 </Accordion.Item>
//             ))
        
//         }

//     </Accordion>}

    <ListGroup>
        <ListGroup.Item action href="#link1">
            Dashbord
        </ListGroup.Item>

        {
            Object.entries(liste).map(([key, values], index) => (
                <ListGroup.Item action href={key}>
                   {key}
                </ListGroup.Item>
            ))
        
       }

    </ListGroup>
    
  )
}
