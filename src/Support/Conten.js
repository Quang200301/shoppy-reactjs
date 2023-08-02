import React from 'react';
import king from './king.css';
const Conten = () => {
    return (
        <div className='conten'>
            <div>
                <h2>CAM KẾT CHÍNH HÃNG</h2>
                <p>100 % Authentic</p>
                <p>Cam kết sản phẩm chính hãng từ Châu Âu, Châu Mỹ...</p>
            </div>
            <div>
                <img className='car' src='https://cdn-icons-png.flaticon.com/128/1023/1023757.png'/>
                <h2>GIAO HÀNG HỎA TỐC</h2>
                <p>Express delivery</p>
                <p>SHIP hỏa tốc 1h nhận hàng trong nội thành HCM</p>
            </div>
            <div>
            <img className='car' src='https://cdn-icons-png.flaticon.com/128/3014/3014736.png'/>
               <h2> HỖ TRỢ 24/24</h2>
               <p>Supporting 24/24</p>
               <p>Gọi ngay</p>
            </div>
        </div>
    );
};

export default Conten;