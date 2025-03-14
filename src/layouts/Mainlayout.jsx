import React, { useState } from 'react'
import { Col, Tab, Row } from 'react-bootstrap'
import Navigator from '../components/Navigator'
import KinderListe from '../components/KinderListe'
import ElternListe from '../components/ElternListe'
import MitarbeiterListe from '../components/MitarbeiterListe'
import StandortListe from '../components/StandortListe'
import GruppeListe from '../components/GruppeListe'
import Formular from '../components/Formular'


export default function Mainlayout() {
    
   const verwaltungsListe = {
    "Kinder": ["Übersicht", "Kind Löschen"],
    "Eltern": ["Übersicht", "Eltern Bearbeiten", "Eltern Löschen"],
    "Mitarbeiter": ["Übersicht", "Mitarbeiter Bearbeiten", "Mitarbeiter Löschen"],
    "Standort": ["Übersicht", "Standort Bearbeiten", "Standort Löschen"],
    "Gruppe": ["Übersicht", "Gruppe Bearbeiten", "Gruppe Löschen"],
    "Neues Mitglied erstellen": ["Kind", "Eltern", "Mitarbeiter", "Standort", "Gruppe"]
   }

   const links = []
   
  return (
   <Tab.Container id="list-group-tabs-example">
        <Row>
            <Col sm={4}>
            
                <Navigator  liste={verwaltungsListe}/>

            </Col>
            <Col sm={8}>
                <Tab.Content>

                    <Tab.Pane eventKey="#Kinder">
                        
                        <KinderListe />
                
                    </Tab.Pane>

                    <Tab.Pane eventKey="#Eltern">

                        <ElternListe />

                    </Tab.Pane>

                    <Tab.Pane eventKey="#Mitarbeiter">

                        <MitarbeiterListe />

                    </Tab.Pane>

                    <Tab.Pane eventKey="#Standort">

                        <StandortListe />

                    </Tab.Pane>

                    <Tab.Pane eventKey="#Gruppe">

                        <GruppeListe />

                    </Tab.Pane>

                    <Tab.Pane eventKey="#Neues Mitglied erstellen">

                        <Formular />

                    </Tab.Pane>

                </Tab.Content>
            </Col>
        </Row>
   </Tab.Container>
  )
} 