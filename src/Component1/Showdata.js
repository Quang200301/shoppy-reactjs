import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Swal from 'sweetalert2';
import show from './show.css';
import { Link } from 'react-router-dom';
const Showdata = () => {
    const [show, setShow] = useState([]);
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const data = await axios.get('https://645e542e8d08100293fcd90e.mockapi.io/webxedap')
            setShow(data.data)
            console.log(show);
        } catch (error) {

        }
    }
    function deleteItem(id) {
        fetch(`https://645e542e8d08100293fcd90e.mockapi.io/webxedap/${id}`, {
          method: "DELETE",
        })
          .then((result) => {
            result.json().then((resp) => {
              Swal.fire("Thành công", "xóa sản phẩm thành công", "success");
              console.warn(resp);
              getData();
            });
          })
          .catch((error) => {
            console.error("Error deleting user:", error);
          });
      }
    return (
        <div>
            <Container>
                <Row>
                <Link className='btn btn-danger' to={`/add`}>Add+</Link>
                    {show.map((item, key) => (
                        <Col className='nikeitem' md={3} key={key}><Card style={{ width: '18rem', gap: '50px' }}>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                                <Card.Title className='nameproduct'>{item.name}</Card.Title>
                                <Card.Text><img className='star' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/2153px-Star_icon_stylized.svg.png' />
                                    <img className='star' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/2153px-Star_icon_stylized.svg.png' />
                                    <img className='star' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/2153px-Star_icon_stylized.svg.png' />
                                    <img className='star' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/2153px-Star_icon_stylized.svg.png' />
                                </Card.Text>
                                <Card.Text>{item.price}</Card.Text>
                                <Card.Text className='action'>
                                <Link className="btn btn-danger"  to={`/edit/${item.id}`}>Edit*</Link>
                                <button  className="btn btn-danger"onClick={()=>deleteItem(item.id)}>Delete</button> 
                                </Card.Text>
                                
                            </Card.Body>
                        </Card></Col>
                    ))}

                </Row>
            </Container>
        </div>
    );
};

export default Showdata;