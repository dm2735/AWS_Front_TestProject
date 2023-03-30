/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import React from 'react';
import Moment from 'react-moment';
import { useInterval } from "use-interval";
import { useState } from 'react';


const todoDate = css`
    display: flex;
    align-items: flex-start;
    height: 100%;
    font-size: 20px;
    line-height: 15px;
`;

const todoDateTime = css`
    display: flex;
    align-items: flex-end;
    font-size: 11px;
`;


const Timer = () => {
    const [nowTime,setNowTime]=useState(Date.now())
    const [nowDay,setNowDay] = useState(Date.now())

    useInterval(()=>{
        setNowDay(Date.now())
        setNowTime(Date.now())
    },1000)


    return (
       <>
        <div css={todoDate}>
            <Moment format={"MMMM Do YYYY"}>{nowDay}</Moment>
        </div>
        <div css={todoDateTime}> 
            <Moment format={"HH:mm:ss"} >{nowTime}</Moment>
        </div>
    </> 
    );
};

export default Timer;