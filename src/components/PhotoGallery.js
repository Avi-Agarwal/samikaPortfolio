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
    photoStyleMobile,
    photoPreviewMobile,
    previewTextWrapperMobile,
    previewTitleMobile,
    subTitleMobile, previewTextMobile
} from '../styles';
import * as photoDirectory from '../assets/photoDirectory';
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import {isMobile} from 'react-device-detect';

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
        width: '80%',
        maxWidth: 1000,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    paperPreviewMobile: {
        backgroundColor: theme.palette.background.paper,
        square: false,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(1, 2, 1.5),
        width: '85%',
        maxWidth: 1000,
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
                            <img  src={piece.src} style={isMobile ? photoStyleMobile :  photoStyle} onClick={() => {handleOpen(); setPreview(piece)}} />
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
                    <div className={ isMobile ? classes.paperPreviewMobile :classes.paperPreview}>
                        <div style={photoPreviewWrapper}>
                            <img src={previewPiece.src} style={isMobile ? photoPreviewMobile : photoPreview} />
                        </div>
                        <div style={isMobile ? previewTextWrapperMobile: previewTextWrapper}>
                            <div id='preview-title' style={isMobile ? previewTitleMobile : previewTitle}>{previewPiece.name}</div>
                            <p id='preview-sub-title' style={isMobile ? subTitleMobile : subTitle}>{previewPiece.medium + ' - ' +  previewPiece.author}</p>
                            <p id='preview-description' style={isMobile ? previewTextMobile : previewText}>{previewPiece.description}</p>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
