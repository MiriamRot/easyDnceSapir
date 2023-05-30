import * as React from 'react';
import Logo from "../assets/easyDance.png"

import css from './history/history.css';


export default function ResultsModal() {

    return (
        <>
            <div className='results' >
                <div style={{textAlign:'start', marginLeft:20, color:'black'}}>x</div>
                <div className=''> רקדת נהדר!!!!  רמת הדיוק שלך היא: 67%</div>    
                <img src={Logo} alt="logo"></img>  </div>
        </>

    );
}


