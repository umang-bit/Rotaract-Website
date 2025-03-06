import React, { useState } from 'react';
import './Title.css';
import DateDropdown from './DateDropdown';

export default function Title() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='title'>
            <div className='shift-center'>
                <strong>EVENTS</strong>
            </div>
                <div className='shift-right'>
                <div className='Event'>
                    <div className='label'>Event
                    <div className="dropdown">
                        <select className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
                            Event
                        </select>
                        {isOpen && (
                            <div className="dropdown-content">
                                <a href="#link1">SAPNA</a>
                                <a href="#link2">Rota-Olympics</a>
                                <a href="#link3">Down Syndrome Medical Camp</a>
                            </div>
                        )}
                    </div>
                    </div>
                    <div className='date'>
                        <div className='label2'>Date</div>
                        <div className='date-dropdown'>
                            <DateDropdown />
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    );
}

