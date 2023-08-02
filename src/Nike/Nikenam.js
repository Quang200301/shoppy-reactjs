import React, { useEffect, useState } from 'react';
import { data } from '../Support/Data';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
const Nikenam = () => {
    const [nikenam, setNikenam] = useState(data);
    useEffect(() => {
        const categorynikenam = nikenam.filter((item) => item.category === "nikenam")
        setNikenam(categorynikenam);
    }, []);
    return (

        <div>
            <Container>
                <h4 className='productnike'>-NIKE BOY</h4>
                <Row>
                    {nikenam.map((item, key) => (
                        <Col md={3} key={key}><Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                                <Card.Title className='nameproduct'>{item.name}</Card.Title>
                                <Card.Text><img className='star' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/2153px-Star_icon_stylized.svg.png' />
                                    <img className='star' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/2153px-Star_icon_stylized.svg.png' />
                                    <img className='star' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/2153px-Star_icon_stylized.svg.png' />
                                    <img className='star' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/2153px-Star_icon_stylized.svg.png' />
                                </Card.Text>
                                <Card.Text>{item.price}</Card.Text>
                                <Link className='btn btn-danger' to={`/detail/${item.id}`}>View</Link>
                            </Card.Body>
                        </Card></Col>
                    ))}

                </Row>
            </Container>

        </div>
    );
};

export default Nikenam;