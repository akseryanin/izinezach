import React, {useState} from 'react';
import Button from "@material-ui/core/Button";

export default function TextSearch() {

    // HERE нужно понять реализацию
    const [searchText,setSearchText] = useState('');

    function searchClick() {
        const data = {action: 'search-text', text: searchText}
        console.log(data);
    }

    return (
        <div>
            TextSearch
            <p>How we will realise this?</p>
            <div><textarea value={searchText} onChange={(e) => {
                setSearchText(e.target.value)
            }}/>
            </div>
            <Button variant="contained" color="primary" onClick={searchClick}>Search</Button>
        </div>
    );
}