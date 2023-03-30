/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { motion, useAnimationControls } from "framer-motion"

const helloTodo =css`
    margin: 350px 170px;
    font-size: 50px;
`;

const Home = () => {

  return (
    <div css={helloTodo}>Hello Todo</div>
  );
}
export default Home;