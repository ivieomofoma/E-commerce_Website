import React from 'react'
import'./DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="decriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="decriptionbox-description">
            <p>An e-commerce website is an online plateform that facilitate buying and selling of products or services over the internet. it serves as a virtual marketplace where busineses and individuals showcases their products, interact with customers, and conduct tranctions without the need for a physicalpresence. E-commerce websites have gained immense popularity due to their convient accessibility, and the global reach they offer </p>
            <p>
                E-commerce websites typically display products or services and detailed descriptions, images, prices, and any available information(e.g., sizes, colours). Each product usally has it own dedicated page with relevant information.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox