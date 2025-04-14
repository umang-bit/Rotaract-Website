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
                  
                    </div>

                </div>
            
            </div>
        </div>
    );
}

