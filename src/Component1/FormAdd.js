import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const FormAdd = () => {
    const navigate = useNavigate();
    const url = 'https://645e542e8d08100293fcd90e.mockapi.io/webxedap'
    const [data, setData] = useState({
        name: '',
        price: '',
        image: '',

    });
    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            name:data.name,
            price:data.price,
            image:data.image,
           
        })
        
        .then((resp) => {
              Swal.fire("Thành công", "Thêm sản phẩm thành công", "success");
              console.warn(resp);
            });
          
        navigate('/show');
    }
    function hadle(e) {
        const newdata = { ...data }
        newdata[e.target.id]=e.target.value
        setData(newdata)
    }
    return (
        <div>
            <form onSubmit={(e)=>submit(e)}>
                <input onChange={(e) => hadle(e)} id="name" value={data.name} placeholder='name' type='text'></input>
                <input onChange={(e) => hadle(e)} id="price" value={data.price} placeholder='price' type='text'></input>
                <input onChange={(e) => hadle(e)} id="image" value={data.image} placeholder='image' type='file'></input>
                <button>submit</button>
           </form>

        </div>
    );
};

export default FormAdd;