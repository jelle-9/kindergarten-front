import React, { useState } from 'react'
import { Col, Tab, Row } from 'react-bootstrap'
import Navigator from '../components/Navigator'

export default function Mainlayout() {
    
   const  element = ["Kinder", "Eltern", "Mitarbeiter", "Standort", "Gruppe"]

   const verwaltungsListe = {
    "Kinder": ["Übersicht", "Kind Bearbeiten", "Kind Löschen"],
    "Eltern": ["Übersicht", "Eltern Bearbeiten", "Eltern Löschen"]
   }
   
  return (
   <Tab.Container id="list-group-tabs-example">
        <Row>
            <Col sm={4}>
                <Navigator elemente={element}
                
                liste={verwaltungsListe}
                />

            </Col>
        </Row>
   </Tab.Container>
  )
}
