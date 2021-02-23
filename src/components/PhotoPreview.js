import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {photoPreview} from "../styles";


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        square: false,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


const PhotoPreview = (open, handleClose, piece) => {
    const classes = useStyles();

    return open ? (
        <Modal
            aria-labelledby='transition-modal-title'
            aria-describedby='transition-modal-description'
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <div className={classes.paper}>
                    <img src={piece.src} style={photoPreview}/>
                    <h2 id='transition-modal-title'>{piece.name}</h2>
                    <h2 id='transition-modal-title'>{piece.author + ' ' + piece.medium}</h2>
                    <p id='transition-modal-description'>{piece.description}</p>
                </div>
            </Fade>
        </Modal>
    ) : null;

}

export default PhotoPreview;
