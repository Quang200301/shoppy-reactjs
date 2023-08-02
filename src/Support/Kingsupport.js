import React, { useEffect, useState } from 'react';
import Slider from './Slider';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import king from './king.css';
import Container from 'react-bootstrap/Container';
import { data } from './Data';
import Conten from './Conten';
import { Link } from 'react-router-dom';
const Kingsupport = () => {
    const [dataking, setDataking] = useState(data);
    const category=dataking.filter((item)=>item.category === "king");
    useEffect(() => {
        setDataking(data);
    },[]);
    
    return (
        <div>
            <Slider />
            <Conten />
            <Container>
                <h4 className='productnew'>-PRODUCT NEW</h4>
                <Row>
                    {category.map((item,key) => (
                        <Col md={3} key={key} ><Card style={{ width: '18rem' }}>
                            
                            <Card.Img variant="top" src={item.image} />
                            <Card.Title className='New'>New</Card.Title>
                            <Card.Body>
                                <Card.Title className='nameproduct'>{item.name}</Card.Title>
                                <Card.Text><img className='star' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/2153px-Star_icon_stylized.svg.png' />
                                    <img className='star' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/2153px-Star_icon_stylized.svg.png' />
                                    <img className='star' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/2153px-Star_icon_stylized.svg.png' />
                                    <img className='star' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/2153px-Star_icon_stylized.svg.png' />
                                </Card.Text>
                                <Card.Text>{item.price} </Card.Text>
                                <Link className="btn btn-danger"  to={`/detail/${item.id}`}>View</Link> 
                            </Card.Body>
                           
                        </Card></Col>
                       
                    ))}



                </Row>
            </Container>
        </div>
    );
};

export default Kingsupport;