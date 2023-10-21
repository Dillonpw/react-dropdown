import { useState } from 'react';



export default function Button() {
    const [show, setShow] = useState(false);

    function handleNavClick() {
// add functionality to show/hide the dropdown
    }

    
    return (
        <button className='dropdown' onclick={handleNavClick}>Navigate</button>
    )
}