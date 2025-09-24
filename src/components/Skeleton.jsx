import React from 'react'

// Skeleton is a React functional component
// It receives a prop called quantity, which tells how many skeleton cards to show
// If quantity is not provided, it defaults to 1
export default function Skeleton({ quantity = 1 }) {

    // The component returns a grid of skeleton cards
    return (
        // The grid classes make the layout responsive (1 column on small screens, 3 on medium, 4 on large)
        <div className='grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 p-4 m-4 gap-6'>
            {/* Create an array with 'quantity' items and map over it to render each skeleton card */}
            {[...Array(quantity)].map((_, index) => (
                // Each skeleton card is just a colored box with animation to look like loading content
                <div
                    key={index} // Always add a key when rendering lists in React
                    className="w-[250px]  h-[300px] rounded-xl bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse"
                ></div>
            ))}
        </div>
    )
}
