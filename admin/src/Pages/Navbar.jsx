import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <Link to= '/' >Prodcut-Home</Link>
                </li>
                <li>
                    <Link to= '/p' >Product-Cart</Link>
                </li>
            </ul>

        </div>
    )
}
