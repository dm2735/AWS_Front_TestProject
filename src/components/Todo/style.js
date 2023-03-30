import React from 'react';
import { css } from '@emotion/react';

export const todoInputContainer = css`
    position: relative;
    display: flex;
    align-items: flex-end;
    margin-top: 3px;
    border-bottom: 1px solid #dbdbdb;
    padding-right: 50px;
    width: 70%;
    height: 40px;
`;

export const listIcon = css`
    font-size: 20px;
    margin: 8px;
`;

export const todoInput = css`
    padding: 0 70px;
    width: 100%;
    height: 100%;
    transition: padding 0.5s ease;
    border: none;
    outline: none;
    &:focus{
        padding: 5px 10px;
        background-color: #fafafa;
        transition: background-color 5000s;
        -webkit-text-fill-color: #121212 !important;
    }
`;

export const addTodoButton = css`
    position: absolute;
    transform: translateY(-58%);
    top: 50%;
    right: 0px;
    border: none;
    padding: 5px 20px;
    height: 100%;
    font-weight: 600;
    cursor: pointer;

    background-color: white;

    &:hover{
        background-color: #fafafa;
    }
`;