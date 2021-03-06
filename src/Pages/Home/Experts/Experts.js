import React from 'react';
import './Experts.css';
import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.jpg';
import Expert from './../Expert/Expert';

const experts = [
    { id: 1, name: 'Brad', img: expert1 },
    { id: 2, name: 'Lax', img: expert2 },
    { id: 3, name: 'whinch', img: expert3 },
    { id: 4, name: 'dake', img: expert4 },
    { id: 5, name: 'uxak', img: expert5 },
    { id: 6, name: 'pitaa', img: expert6 }
]

const Experts = () => {
    return (
        <div id="experts" className="container">
            <h1 className="text-primary mt-5">Our experts</h1>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.id} expert={expert}
                    />)
                }
            </div>

        </div>
    );
};

export default Experts;