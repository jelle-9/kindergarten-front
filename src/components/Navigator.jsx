import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Navigator(props) {
    
    const liste = props.liste;
   // const elemente = props.elemente;
  return (
    <Accordion>
        <ListGroup>
            <ListGroup.Item action href="#link1">
                Dashbord
            </ListGroup.Item>
        </ListGroup>

        <Accordion.Item >
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
                <ul>
                    <li>Jamal</li>
                    <li>Evgeny</li>
                    <li>Angelina</li>
                    <li>Ousmane</li>
                </ul>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="b">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
                <ListGroup.Item action href="#link2">
                    Link 2
                </ListGroup.Item>
            </Accordion.Body>
        </Accordion.Item>

        {/*
            props.elemente.map((element, index) => (
                console.log(element)
            ))

                
                <Accordion.Item eventKey={index}>
                    <Accordion.Header>{element}</Accordion.Header>
                    <Accordion.Body>
                      
                    </Accordion.Body>
                </Accordion.Item>
                
            ))
               
            liste.Entries
            liste.fromEntries(
                Object.entries(liste).map(([Key, value]) => (
                console.log(key);
            )
        )
             */

        Object.entries(liste).forEach(([key, value]) => (  
            
            <Accordion.Item eventKey={key}>
                    <Accordion.Header>{key}</Accordion.Header>
                    <Accordion.Body>
                       {/*console.log(`Key: ${key}`)
                        console.log(`Values: ${value.join(', ')}`);
                       */}
                    </Accordion.Body>
            </Accordion.Item>
        ))

    }
 
        

        <Accordion.Item eventKey="2">
           <Accordion.Header>Accordion Item #2</Accordion.Header>
        </Accordion.Item>
    </Accordion>
  )
}
