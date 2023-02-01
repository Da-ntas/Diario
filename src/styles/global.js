import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html{
        height: 100vh;
    }
    :root{
        --background-light: linear-gradient(180deg, rgba(255, 251, 237, 0.92) 0%, #F1E5C7 91.67%);
        --background-dark: linear-gradient(180deg, #1B262C 0.01%, #112D4E 91.67%);
        --text-principal-light: #1B262C;
        --text-secundario-light: #425965;
        --text-principal-dark: #F7F6F2;
        --text-secundario-dark: rgba(247, 246, 242, 0.75);
        --border-light: #031625;
        --border-dark: #F7F6F2;
        --card-light: #F7F6F2;
        --card-dark: #425965;
        --button: #3F72AF;
        --placeholder-light: rgba(27, 38, 44, 0.50);
        --placeholder-dark: rgba(247, 246, 242, 0.50);
    }

    *{
        font-family: 'Permanent Marker', cursive, 'Roboto', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
        min-height: 100vh;
        background: var(${props => props.theme === 'light' ? "--background-light" : "--background-dark"});
        color: var(${props => props.theme === 'light' ? "--text-principal-light" : "--text-principal-dark"});
        font-size: 1rem;
        background-attachment: fixed;
    }

    // Layouts
    //
    
    .layout-wrapper,
    .layout-inner {
      display: flex;
      align-items: stretch;
      flex: 1 1 auto;
      width: 100%;
    }
    
    .layout-offcanvas .layout-wrapper,
    .layout-fixed-offcanvas .layout-wrapper {
      overflow: hidden;
    }
    
    .layout-inner {
      min-height: 100vh;
    }
    
    .layout-container,
    .layout-content,
    .layout-content > *,
    .layout-sidenav {
      min-height: 1px;
    }
    
    .layout-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1 1 auto;
      padding: 0;
    
      .layout-without-sidenav & {
        padding-right: 0 !important;
        padding-left: 0 !important;
      }
    }
    
    .layout-content {
      display: flex;
      align-items: stretch;
      flex: 1 1 auto;
      flex-direction: column;
      justify-content: space-between;
    }
    
    .layout-navbar,
    .layout-footer {
      flex: 0 0 auto;
    }
    
    .layout-navbar {
      position: relative;
      z-index: 2;
    
      .navbar {
        transform: translate3d(0, 0, 0);
      }
    }
    
    .layout-sidenav {
      position: relative;
      flex: 1 0 auto;
    
      .sidenav {
        transform: translate3d(0, 0, 0);
      }
    
      .sidenav-vertical {
        height: 100%;
      }
    }
    
    .layout-sidenav .sidenav-vertical,
    .layout-sidenav.sidenav-vertical {
      align-items: flex-start;
    }
    
    html:not(.layout-fixed):not(.layout-fixed-offcanvas) .layout-sidenav.sidenav-vertical {
      min-height: 100%;
    }
    
    // *******************************************************************************
    // * Layout 1
    
    .layout-1 {
      .layout-inner {
        flex-direction: column;
      }
    
      .layout-content {
        flex-basis: 100%;
        width: 0;
        min-width: 0;
        max-width: 100%;
      }
    }

    //card
    .card-full{
        background-color: var(${props => props.theme === 'light' ? "--card-light" : "--card-dark"});
        border: 1px solid var(${props => props.theme === 'light' ? "--border-light" : "--border-dark"});
        border-radius: 10px;
        width: 25%;
    }

    .card-header{
        font-size: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .card-header-emailbox {
        max-width: 100%;
        font-size: 1rem;
        border: 1px solid var(${props => props.theme === 'light' ? "--border-light" : "--border-dark"});
        padding: 0.5rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        border-radius: 10px;
        cursor: pointer;
    }

    .text-break{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .card-header-emailbox:hover{
        background: var(${props => props.theme === 'light' ? "--border-dark" : "--border-light"});;
    }

    .card-body{
    }

    .card-body > .text-sec {
        color: var(${props => props.theme === 'light' ? "--text-principal-light" : "--text-principal-dark"});
    }

    //input-line
    .input-line{
        background: none;
        color: var(${props => props.theme === 'light' ? "--text-principal-light" : "--text-principal-dark"});
        font-family: Roboto, Sans-serif;
    }
    
    .input-line:focus{
        background: none;
        color: var(${props => props.theme === 'light' ? "--text-principal-light" : "--text-principal-dark"});
        font-family: Roboto, Sans-serif;
    }

    .input-line::placeholder{
        color: var(${props => props.theme === 'light' ? "--placeholder-light" : "--placeholder-dark"})
    }


    //text
    .text-secondario{
      color: var(${props => props.theme === 'light' ? "--text-secundario-light" : "--text-secundario-dark"})
    }

    //button
    .btn{
      min-width: 8rem;
    }

    //sidebar
    .container-sidebar{
      
    }
    .sidebar{
      height: 100vh;
      width: 400px;
      position: fixed !important;
      border: none;
      border-radius: 0;
      left: 0;
      z-index: 8;
      background: var(${props => props.theme === 'light' ? "--background-light" : "--background-dark"});
    }
    .blured{
      min-height: 100vh;
      width: 100%;
      background: rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(4px);
      position: fixed !important;
      z-index: 7;
    }

    //media
    @media screen and (max-width: 1024px){
      .card-full{
          width: 75%;
          height: 100%;
      }
      .user-info{
        display: none !important; 
      }
      .sidebar{
        width: 40%;
      }
    }

    @media screen and (max-width: 769px){
      .sidebar{
        width: 100%;
        overflow: hidden;
      }
      .blured{
        display: none;
      }
    }

    .list-sidebar{
      list-style: none;
      font-size: 1.5rem;
      margin-top: 25px;

      display: flex;
      flex-direction: column;
      gap: 25px;
    }

    .item-sidebar{
      cursor: pointer;
      background-color: var(${props => props.theme === 'light' ? "--card-light" : "--card-dark"});
      padding: 10px 20px;
      border: 1px solid ${props => props.theme === 'light' ? "rgba(3, 22, 37, 0.2)" : "rgba(247, 246, 242, 0.2)"};
      border-radius: 10px;
    }

    .item-sidebar:hover{
      -webkit-filter: brightness(1.2);
      filter: brightness(1.2);
    }

    //diario-titulo
    .diario-titulo{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }    
`

export default GlobalStyle;