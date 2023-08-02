import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import sale from './sale.css';
import { Link } from 'react-router-dom';
import { data } from '../Support/Data';
import Container from 'react-bootstrap/Container';
const Sale = () => {
    const [datasale, setSale] = useState(data);
    const categorysale = datasale.filter((item) => item.category === "sale");
    useEffect(() => {
        setSale(data);
    }, []);
    return (
        <div>
            <Container>
                <h4 className='productnew'>-PRODUCT SALE</h4>
                <Row>
                    {categorysale.map((item, key) => (
                        <Col md={3} key={key}><Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                                <Card.Title className='nameproduct'>{item.name}</Card.Title>
                                <Card.Text><img className='star' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/2153px-Star_icon_stylized.svg.png' />
                                    <img className='star' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/2153px-Star_icon_stylized.svg.png' />
                                    <img className='star' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/2153px-Star_icon_stylized.svg.png' />
                                    <img className='star' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/2153px-Star_icon_stylized.svg.png' />
                                </Card.Text>
                                <Card.Text>{item.price} </Card.Text>
                                <Card.Text className='discount'>{item.discount}</Card.Text>
                                <Link className="btn btn-danger"  to={`/detail/${item.id}`}>View</Link> 
                            </Card.Body>
                        </Card></Col>
                    ))}

                </Row>
            </Container>
        </div>
    );
};

export default Sale;