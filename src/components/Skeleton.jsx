import React from 'react'

export default function Skeleton({ quantity = 1 }) {

    return (
        <>
            {[...Array(quantity)].map((_, index) => (
                <div
                    className="w-[300px] h-[180px] rounded-xl bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse"
                ></div>
            ))}
        </>
    )
}
