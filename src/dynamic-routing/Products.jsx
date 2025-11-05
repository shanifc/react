import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {


    const myproducts = [
        { id: '1', name: 'laptop' },
        { id: '2', name: 'phone' },
        { id: '3', name: 'watch' },
        { id: '4', name: 'speeker' }
    ]

    return (
        <div>
            <h2>Product list</h2>
            <ul>
                {myproducts.map(p => (
                    <li key={p.id}>
                        <Link to={`/products/${p.id}`}>{p.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Products
