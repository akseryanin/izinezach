import React, {useState} from 'react';
import Button from "@material-ui/core/Button";

export default function AdminDeleteUser() {

    // HERE нужно понять как мы юзера выбираем

    const [deleteConfirm, setDeleteConfirm] = useState(false);

    function deleteUser(){
        const data = {action: 'admin-delete-user'};
        console.log(data);
        // HERE нужен запрос на сервер
    }

    return (
        <div>
            <p>How we will search deletable user?</p>
            {!deleteConfirm && <Button variant="contained" color="secondary" onClick={() => {
                setDeleteConfirm(!deleteConfirm)
            }}>
                Delete user
            </Button>}
            {deleteConfirm && <div>
                <h3>ARE YOU SURE?</h3>
                <Button variant="contained" color="secondary" onClick={deleteUser}>
                    Confirm delete
                </Button>
                <Button variant="contained" color="primary" onClick={() => {
                    setDeleteConfirm(!deleteConfirm)
                }}>
                    Cancel
                </Button>
            </div>}
        </div>
    );
}