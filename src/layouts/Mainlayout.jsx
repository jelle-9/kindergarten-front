import React, { useState } from 'react'
import { Col, Tab, Row } from 'react-bootstrap'
import Navigator from '../components/Navigator'

export default function Mainlayout() {
    
   const verwaltungsListe = {
    "Kinder": ["Übersicht", "Kind Bearbeiten", "Kind Löschen"],
    "Eltern": ["Übersicht", "Eltern Bearbeiten", "Eltern Löschen"],
    "Mitarbeiter": ["Übersicht", "Mitarbeiter Bearbeiten", "Mitarbeiter Löschen"],
    "Standort": ["Übersicht", "Standort Bearbeiten", "Standort Löschen"],
    "Gruppe": ["Übersicht", "Gruppe Bearbeiten", "Gruppe Löschen"]
   }
   
  return (
   <Tab.Container id="list-group-tabs-example">
        <Row>
            <Col sm={4}>
                <Navigator  liste={verwaltungsListe}/>

            </Col>
        </Row>
   </Tab.Container>
  )
}
