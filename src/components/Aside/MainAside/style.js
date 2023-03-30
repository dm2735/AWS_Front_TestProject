import { css } from "@emotion/react";

export const style = css`
    position: absolute;
    top: 50;
    left: 0;
    z-index: 99;
    width: 300px;
    height: 800px;
    box-shadow: 1px 0px 5px 1px black;
    background-color:white ;
    transition: left 1s ease;
`;

export const hiddenStyle = css`
    position: absolute;
    top: 50;
    left: -300px;
    z-index: 99;
    width: 300px;
    box-shadow: 1px 0px 5px 1px black;
    height: 800px;

    background-color:white;
    color: none;
    transition: left 1s ease;
`;

export const asideIcon = css`
position: absolute;
transform: translateY(-50%);
top: 50%;
right: -13px;

display: flex;
justify-content: center;
align-items: center;

border: none;
border-top-right-radius: 20px;
border-bottom-right-radius: 20px;
padding: 0;
width: 13px;
height: 60px;

box-shadow: 1px 0px 2px 1px black;
background-color: #454545;
color: white;
cursor: pointer;
`;
