import Accordion from 'react-bootstrap/Accordion';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Cards from './Cards';



function Tabsnavigator() {
    
  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
            <Col sm={4}>
                <Accordion>
                    <ListGroup>
                        <ListGroup.Item action href="#link1">
                            Link 1
                        </ListGroup.Item>
                    </ListGroup>

                    <Accordion.Item eventKey="0">
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

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            <ListGroup.Item action href="#link2">
                                Link 2
                            </ListGroup.Item>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                    </Accordion.Item>
                </Accordion>
            
            </Col>

            <Col sm={8}>
                <Tab.Content>
                    <Tab.Pane eventKey="#link1">
                        Kinder 
                        <Cards />	

                    </Tab.Pane>

                    <Tab.Pane eventKey="#link2">
                        
                        Tab pane content 2
                    
                    </Tab.Pane>
                </Tab.Content>
            </Col>
        </Row>
    </Tab.Container>
  );
}

export default Tabsnavigator;