import React from 'react'

export const ProductCard = ({ title, description, images, price }) => {

    return (
        <div className='flex p-3 border m-2 rounded-lg shadow-lg shadow-gray-300'>
            <h3>{title}</h3>
        </div>
    )
}
