import React from 'react';
import EnterButtons from "../../components/EnterButtons";
import './index.css';


export default function MainPage() {
    return <div>
        <div className='buttonsContainer'>
            <EnterButtons />
        </div>
        <div className='someContent'>
            HomePage
        </div>
    </div>
}