import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { findItemLength } from '../utils/gridUtils';
import {
    photoPreview,
    photoPreviewWrapper,
    photoStyle,
    previewText,
    previewTitle,
    subTitle,
    previewTextWrapper,
} from '../styles';
import * as photoDirectory from '../assets/photoDirectory';
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import { isMobile } from 'react-device-detect';

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
        padding: isMobile ? theme.spacing(1, 2, 1.5) : theme.spacing(2, 4, 3),
        width: isMobile ? '90vw' : '80%',
        maxWidth: isMobile ? '90vw' : 1000,
        display: 'flex',
        flexDirection: 'row',
         maxHeight: '90vh',
         minWidth: isMobile ? null : 1000,
         flexWrap: isMobile ? 'wrap' : null
    },
    paperPreviewMobile: {
        backgroundColor: theme.palette.background.paper,
        square: false,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(1, 2, 1.5),
        width: '90%',
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
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
                        <div style={photoPreviewWrapper}>
                            <img src={previewPiece.src} style={photoPreview} />
                        </div>
                        <div style={previewTextWrapper}>
                            <div id="preview-title" style={previewTitle}>{previewPiece.name}</div>
                            <p id="preview-sub-title" style={subTitle}>{previewPiece.medium + ' - ' +  previewPiece.author}</p>
                            <p id="preview-description" style={previewText}>{previewPiece.description}</p>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
