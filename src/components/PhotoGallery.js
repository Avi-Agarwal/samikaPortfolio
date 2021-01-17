import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { findItemLength } from '../utils/gridUtils';
import {photoStyle} from "../styles";
import * as photoDirectory from '../assets/photoDirectory';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function PhotoGallery() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                {photoDirectory.photoDirectory
                    .map((piece, index) => (
                        <Grid item xs={findItemLength(index)} style={{position: "relative"}}>
                            <img  src={piece.src} style={photoStyle} />
                        </Grid>
                ))}
            </Grid>
        </div>
    );
}
