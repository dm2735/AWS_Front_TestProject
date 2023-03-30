/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainAside from '../../components/Aside/MainAside/MainAside';
import Home from '../Home/Home';
import Todo from '../Todo/Todo';
import { Motion } from "framer-motion"

const container = css`
    position: relative;
    margin: 50px auto;
    border: 2px solid #dbdbdb;
    width: 600px;
    height: 800px;
    background-color: white;
    overflow: hidden;
`;

const Container = () => {
    return (
            <div css={container}>
                <MainAside />
                    <Routes>
                        <Route path="/" Component={Home} />
                        <Route path="/todo" Component={Todo} />
                    </Routes>   
            </div>
        
    );
};

export default Container;