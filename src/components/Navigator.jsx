import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';


export default function Navigator(props) {

    const liste = props.liste;

  return (
    <ListGroup>
        <ListGroup.Item action href="#link1">
            Dashbord
        </ListGroup.Item>

        {
            Object.entries(liste).map(([key, values], index) => (
                <ListGroup.Item key={index} action href={`#${key}`}>
                   {key}
                </ListGroup.Item>
            ))
        
       }

    </ListGroup>
    
  )
}
