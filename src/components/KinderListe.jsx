import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';

export default function KinderListe() {
    const [kinder, setKinder] = useState([]);
    useEffect(() => {
        loadKinder();
    }, [])
    const loadKinder = async() => {
        const result = await axios.get("http://localhost:8080/getAllKinder");
        setKinder(result.data);
    }
    
  return (
    <Row>
        {
            kinder.map((kind, index) => (
                <Col key={index} sm={4} md={3} lg={3} className='my-2'>
                    <Card key = {kind.kindId} style={{ width: '10rem' }}>
                        <Card.Img variant="top" src="resources\images.jpg" alt="Upps!" />
                        <Card.Body>
                            <Card.Title style={{fontSize: '15px', textAlign: 'center', fontWeight: 'bold'}}> {kind.kindVorname} <br /> {kind.kindNachname} </Card.Title>
                            { <Card.Text style={{fontSize: '10px', whiteSpace: 'pre-line', textAlign: 'center'}}>
                                {kind.kindGeburtsdatum} {'\n'}
                                {kind.besonderheiten} {'\n'}
                            
                            </Card.Text> }
                            <Button style={{width: '7rem', height: '2rem', textAlign: 'center'}} >Bearbeiten</Button>
                        </Card.Body>
                    </Card>
                </Col>
          
                // <div key={kind.id}>
                //     <h1>{kind.kindVorname}</h1>
                //     <h1>{kind.kindNachname}</h1>
                //     <h1>{kind.kindGeburtsdatum}</h1>
                //     <h1>{kind.besonderheiten}</h1>
                //     <h1>{(kind.anwesenheiten).map(anwesend => (<h2>{anwesend.awDatum}</h2>))}</h1>
                //     <h1>{kind.betreuer}</h1>
                // </div>
            ))
        }



    </Row>
    
  )
}
