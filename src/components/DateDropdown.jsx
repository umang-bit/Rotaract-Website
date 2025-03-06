import React, { useState } from 'react';

export default function DateDropdown() {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const years = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i);

    return (
        <div>
            <select value={day} onChange={(e) => setDay(e.target.value)}>
                <option value="">Day</option>
                {days.map(d => (
                    <option key={d} value={d}>{d}</option>
                ))}
            </select>

            <select value={month} onChange={(e) => setMonth(e.target.value)}>
                <option value="">Month</option>
                {months.map((m, index) => (
                    <option key={index} value={m}>{m}</option>
                ))}
            </select>

            <select value={year} onChange={(e) => setYear(e.target.value)}>
                <option value="">Year</option>
                {years.map(y => (
                    <option key={y} value={y}>{y}</option>
                ))}
            </select>
        </div>
    );
}
