import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { findItemLength } from '../utils/gridUtils';
import {photoPreview, photoStyle} from '../styles';
import PhotoPreview from "./PhotoPreview";
import * as photoDirectory from '../assets/photoDirectory';
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paperPreview: {
        backgroundColor: theme.palette.background.paper,
        square: false,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: '60%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    previewTextAlign: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    }
}));

export default function PhotoGallery() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [previewPiece, setPreview]  = React.useState(photoDirectory.photoDirectory[1]);
    const handleOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                {photoDirectory.photoDirectory
                    .map((piece, index) => (
                        <Grid item xs={findItemLength(index)} style={{position: 'relative'}}>
                            <img  src={piece.src} style={photoStyle} onClick={() => {handleOpen(); setPreview(piece)}} />
                        </Grid>
                ))}
            </Grid>
            {/*<PhotoPreview open={open} handleClose={handleClose} piece={previewPiece}/>*/}
            <Modal
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
                    <div className={classes.paperPreview}>
                        <img src={previewPiece.src} style={photoPreview}/>
                        <div className={classes.previewTextAlign}>
                            <h2 id="transition-modal-title">{previewPiece.name}</h2>
                            <h2 id="transition-modal-title">{previewPiece.author + ' ' + previewPiece.medium}</h2>
                            <p id="transition-modal-description">{previewPiece.description}</p>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}