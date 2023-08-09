import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { BsInfoCircle } from "react-icons/bs";
import '../style/popup.css';
import {useState} from "react";
import InstallableVersionData from "./InstallableVersionData";

const PopupVersionInfo = (props) => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                fullScreen={false}
                open={props.open}
                onClose={handleClose}
                PaperProps={{ style: {
                        minHeight: '70%',
                        minWidth: '80%',
                        backgroundColor: '#e9ecf2'
                    }}}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title" style={{ fontSize: '2rem' }}>
                    <span className="info">{"Installable Versionstack"}</span>
                    <span className="title">{props.title}</span>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText
                        style={{ fontSize: '1rem'}}>
                        <InstallableVersionData id={props.id}
                            blobSas={props.blobSas} versionIdentifier={props.versionIdentifier}
                            fileLength={props.fileLength} md5Hash={props.md5Hash}
                            versionDate={props.versionDate} fullV={props.fullV}/>
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{ margin: '0 1vw 1.5vh 0'}}>
                    <Button style={{ fontSize: '1.2rem' }} autoFocus onClick={props.setFalse}>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default PopupVersionInfo;