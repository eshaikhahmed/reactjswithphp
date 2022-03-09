import axios from 'axios';
import React, { Component } from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';


class DostiCategories extends Component {
    constructor(props){ 
        super(props);
        this.state = {
            'categories': []
        };
    }
    componentDidMount() {
        console.log("componentDidMount ");
        var postData = {
            method: 'POST',
            credentials: 'same-origin',
            // mode: 'same-origin',
            mode: 'no-cors',
            headers: {
            'Accept':       'application/json',
            'Content-Type': 'application/json'
            // 'X-CSRFToken':  cookie.load('csrftoken')
            }
        };

        var productsUrl = "http://localhost/DostiMart/welcome.json";

        axios.get(productsUrl)
        .then(response => {
            var categories = response.data.subcategories["2"];
            console.log(categories);
            this.setState({'categories':categories});
        }).catch(error => {
            console.log("welcome");
            console.log(error);
        })
      
    }

    render(){

    
    return (
    <Container>
        <Row>
             
            {   this.state.categories.map(block => 
                    <Col xs={6} md={4} key={block.s_id}>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://dostimart.com/dostiadmin/" + block.s_image} />
                            <Card.Body>
                                <Card.Title>{block.s_name}</Card.Title>
                                
                            </Card.Body>
                        </Card>
        
                    </Col>
                )
            }
        </Row>
    </Container>
  )
    }
}

export default DostiCategories;
