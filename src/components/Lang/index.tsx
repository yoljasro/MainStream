import React, { useState } from 'react'
import styles from  './index.module.sass'

export const Lang = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('ru');
    const handleChange = (e: any) => {
        const value = e.target.value;
        setSelectedLanguage(value);
    };

    return (
        <div className={styles.lang}>           
            <select value={selectedLanguage} onChange={handleChange}>
                <option value="ru">Ru</option>
                <option value="uz">Uz</option>
                <option value="en">Eng</option>
            </select>
            {/* <div className={`indicator ${selectedLanguage === 'ru' ? '' : 'active'}`}></div> */}
        </div>
    )
}

