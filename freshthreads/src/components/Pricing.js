import React from 'react';
import '../styles/Pricing.css';

function Pricing() {
    return (
        <div className='pricing'>
            <div className='section'>
                <h1 className='sub'>SUBSCRIPTION</h1>
                <p>$35 Monthly Washed, folded, and dried</p>
                <p>Washed, folded, and dried</p>
            </div>
            <div className='section'>
                <h1 className='use'>PER-USE</h1>
                <p>$2/pound Competition:</p>
                <p>$1.49 - $2.69/lb</p>
            </div>
        </div>
    );
}

export default Pricing;