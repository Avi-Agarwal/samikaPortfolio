import './index.css'
import React from "react";
import { isMobile } from 'react-device-detect';

export const titleStyle = {
    color: 'black',
    fontFamily: 'Segoe UI',
    fontWeight: 'bold',
    fontSize: 30,
    letterSpacing: 2
};

export const navPadding = {
    paddingLeft: isMobile ? '7%' : "60px",
    paddingRight: isMobile ? '7%' : "60px",
    paddingTop: isMobile ? '5%' : '20px',
    backgroundColor: 'white',
    margin: '0 auto',
    maxWidth: isMobile ? null : 1800,
};

export const navMobile = {
    paddingLeft: "7%",
    paddingRight: "7%",
    paddingTop: "5%",
    backgroundColor: 'white',
};

export const appWrapper = {
    width: '100%',
    margin: '0 auto',
    maxWidth: isMobile ? null : 1800,
    paddingLeft: isMobile ? '7%' : "60px",
    paddingRight: isMobile ? '7%' : "60px",
    overflow: 'hidden',
};

export const boxPaddingMobile = {
    width: '100%',
    paddingLeft: "7%",
    paddingRight: "7%",
    overflow: 'hidden'
};

export const navText = {
    color: 'black',
    fontFamily: 'Segoe UI',
    fontSize: 20
};

export const photoStyle = {
    height: isMobile ? '20vh' : '35vh',
    width: "100%",
    objectFit: 'cover'
};

export const photoStyleMobile = {
    height: '20vh',
    width: "100%",
    objectFit: 'cover'
};

export const iconPhoto = {
    height: 365,
    objectFit: 'contain',
    paddingRight: 80,
};

export const iconPhotoRight = {
    height: 365,
    objectFit: 'contain',
};

export const iconImage = {
    height: '100%',
    objectFit: 'contain',
    paddingRight: 120,
};

export const previewTextWrapper = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: isMobile ? null : '20px',
    paddingTop: isMobile ? '5%' : null ,
    paddingLeft: isMobile ? '5%' : null ,
    paddingRight: isMobile ? '5%' : null ,
    paddingBottom: isMobile ? '2%' : null ,
    flex: isMobile ? null : 1,
    overflowY: 'auto',
    minWidth: isMobile ? null : 300,
    width: isMobile ? '80vw' : null
}

export const previewTextWrapperMobile = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: '5%',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: '2%',
    overflowY: 'auto',
    width: '80vw',
}

export const blogTextAlign = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingLeft: '80px',
    alignItems: 'flex-start',
    overflow: 'hidden'
}

export const photoPreviewWrapper = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
};

export const aboutWrapper = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    height: 350,
    paddingRight: 30
};

export const aboutWrapper1 = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    height: 350
};

export const blogWrapper = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: isMobile ? 'center' : 'flex-start',
    flexWrap: 'wrap'
};

export const blogWrapperMobile = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexWrap: 'wrap'
};

export const columnWrapper = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingRight: 0
};

export const blogImage = {
    width: isMobile ? '85vw' : '460px',
    objectFit: 'contain',
    paddingRight: isMobile ? null :'80px',
};

export const blogImageMobile = {
    width: '80vw',
    objectFit: 'contain',
    paddingRight: '5vw',
};

export const aboutText = {
    fontFamily: 'Raleway',
    fontSize:    20,
    fontWeight: 'normal',
    overflow: 'hidden',
    textAlign: 'left',
    letterSpacing: 1,
};

export const aboutTitle = {
    fontFamily:'Segoe UI',
    fontWeight: 'normal',
    fontSize: 40,
    letterSpacing: 2,
    color: '#D65748',
    borderBottom: '1px solid #70707055',
    marginBottom: 20
};

export const blogText = {
    fontFamily: 'Raleway',
    fontSize:    20,
    fontWeight: 'normal',
    overflowY: 'auto',
    textAlign: 'left',
    letterSpacing: 0,
};

export const blogTitle = {
    fontFamily: 'Raleway',
    fontSize: isMobile ? '3vh' : 40,
    paddingTop: isMobile ? '1vh' : 0,
    fontWeight: 'bold',
    textAlign: isMobile ? 'left' : null,
    letterSpacing: 1
};

export const blogSubTitle = {
    fontFamily: 'Raleway',
    color: '#525252',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1
}

export const photoPreview = {
    height: isMobile ? '40vh' : 500,
    maxWidth: isMobile ? '80vw' : 400,
    objectFit: 'contain',
    paddingTop: isMobile ? '4%' : 20
};

export const photoPreviewMobile = {
    height: '40vh',
    maxWidth: '80vw',
    objectFit: 'contain',
    paddingTop: '4%'
};

export const barPhoto = {
    width: '100%',
    height: '100%',
    maxHeight: 600,
    objectFit: 'contain',
};

export const cardStyle = {
    width: '40%',
    maxWidth: 702,
    minWidth: 400,
    height: '80vh',
    maxHeight: 500,
    boxShadow: '11px 11px 11px #00000016',
    backgroundColor: 'white',
    overflow: 'auto',
};

export const wrapRow = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
}

export const contactHeader = {
    fontFamily: 'Arial',
    fontSize:    30,
    color: '#3B3B3B',
    fontWeight: 'bold',
    overflowY: 'hidden',
    letterSpacing: 0,
    paddingTop: 23,
    lineHeight: 1.1,
};

export const contactText = {
    fontFamily: 'Arial',
    fontSize:    30,
    color: '#414141',
    fontWeight: 'normal',
    overflowY: 'hidden',
    letterSpacing: 0,
    lineHeight: 1.1,
    paddingTop: 25
};

export const emailText = {
    fontFamily: 'Arial',
    fontSize:    '1.4em',
    color: '#00666A',
    fontWeight: 'normal',
    overflowY: 'hidden',
    letterSpacing: 0,
    lineHeight: 1.1,
};

export const subTitle = {
    fontFamily: 'Raleway',
    color: '#525252',
    fontSize: isMobile ? '2vh' : 20,
    fontWeight: 'bold',
    letterSpacing: 1
}

export const subTitleMobile = {
    fontFamily: 'Raleway',
    color: '#525252',
    fontSize: '2vh',
    fontWeight: 'bold',
    letterSpacing: 1
}

export const previewText = {
    fontFamily: 'Raleway',
    fontSize:    isMobile ? '2vh' :  18,
    fontWeight: 'normal',
    overflowY: 'auto',
    maxHeight: isMobile ? '24vh' : 380,
    letterSpacing: 0
};

export const previewTextMobile = {
    fontFamily: 'Raleway',
    fontSize:    '2vh',
    fontWeight: 'normal',
    overflowY: 'auto',
    maxHeight: '24vh',
    letterSpacing: 0
};

export const previewTitle = {
    fontFamily: 'Raleway',
    fontSize: isMobile ? '3vh' : 35,
    fontWeight: 'bold',
    letterSpacing: 1
};

export const previewTitleMobile = {
    fontFamily: 'Raleway',
    fontSize: '2.5vh',
    fontWeight: 'bold',
    letterSpacing: 1
};

export const aboutLine = {
    border: 0,
    clear: 'both',
    display:'block',
    width: '30%',
    textAlign: 'left',
    marginLeft: 0,
    backgroundColor:'#707070',
    height: '1px'
};

export const lineBreak = {
    height: '1px',
    borderWidth: 0,
    color: '#707070',
    backgroundColor: '#707070',
    opacity: '46%'
};
