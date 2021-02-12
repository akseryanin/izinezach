import React from 'react';
import EnterButtons from "../components/EnterButtons";
import SignUpForm from "../components/SignUpForm";

export default function SignUpPage() {
    return <div>
        <div className='buttonsContainer'>
            <EnterButtons/>
        </div>
        <div>maybe add some image</div>
        <div className='registerForm'>
            <SignUpForm/>
        </div>
    </div>
}