/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

export const contentContainer = css`
    margin: 10px;
    width: 225px;
    height: 225px;
    box-shadow: 0px 0px 5px 1px #dbdbdb;
    cursor: pointer;
    transition: box-shadow 0.3s ease;

    &:hover{
        box-shadow: 0px 0px 10px 1px #121212;
    }
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #dbdbdb;
        border-radius: 5px;
    }
`;

export const contentHeader= css`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f0f0f0;
    padding: 10px;
    padding-bottom: 5px;
    height: 20%;
`;

export const contentMain = css`
    padding: 10px;
    height: 65%;
    word-break: keep-all;
    line-height: 25px;
    word-wrap: break-word;
`;

export const contentFooter = css`
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    padding-top: 0;
    height: 15%;
`;

export const modifyButton = css`
    border: none;
    padding: 5px;
    background-color: white;
    &:hover{
        background-color: #fafafa;
    }
    &:active{
        background-color: #f0f0f0;
    }
`;

export const removeButton = css`
    border: none;
    padding: 5px;
    background-color: white;
    &:hover{
        background-color: #fafafa;
    }
    &:active{
        background-color: #f0f0f0;
    }
`;