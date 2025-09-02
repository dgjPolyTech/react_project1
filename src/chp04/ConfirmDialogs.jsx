import React from "react";
import ConfirmDialog from "./ConfirmDialog";
import Button from "./Button";

function ConfirmDialogs(props) {
    return(
        <div>
            <ConfirmDialog></ConfirmDialog>
            <ConfirmDialog></ConfirmDialog>
            <ConfirmDialog></ConfirmDialog>
        </div>
    )
}

export default ConfirmDialogs;