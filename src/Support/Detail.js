import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { data } from './Data';
import detail from './detail.css';

const Detail = () => {
  const [detail, setDetail] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Find the item with the matching id from the data array
    const selectedItem = data.find(item => item.id === parseInt(id));
    setDetail(selectedItem);
  }, [id]);

  const handleClose = () => {
    setDetail(null);
    navigate('/');
  };

  return (
    <div>
      {detail ? (
        <Modal show={detail} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {detail.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="detail__img" src={detail.image} />
          <p className='price'>{detail.price} </p>
          
        </Modal.Body>
        <p className='close'>
        <Modal.Footer>
          <Button className='close' variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
        </p>
      </Modal>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;
