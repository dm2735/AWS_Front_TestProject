/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { Navigation } from "react-minimal-side-navigation/lib";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import * as S from './style'
import { HiHome } from 'react-icons/hi';
import { GrTest } from 'react-icons/gr';
import { BsCardChecklist } from 'react-icons/bs';
import { BiListCheck } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { FaUsers } from 'react-icons/fa';
import { css } from "@emotion/react";
import { BsList } from 'react-icons/bs';



const MainAside = () => {
    

    const navigate = useNavigate();

    const [showAside, setShowAside] = useState(true);
      
    const toggleAside = () => {
        setShowAside(!showAside);
    };

    return (
        <>
        <div css={showAside ? S.hiddenStyle : S.style} onClick={toggleAside}>
        <aside >
            <Navigation
            activeItemId="/"
            onSelect={({itemId}) => {
                navigate(itemId);
            }}
            items={[
             {
                title: "Home",
                itemId: '/', 
                elemBefore: () => <HiHome/>
             },

             {
                title: "TodoList",
                itemId: '/todo',
                elemBefore: () => <BsCardChecklist/>
             }
            ]}
          />
        </aside>
        <div css={S.asideIcon} onClick={toggleAside}>▶</div>
        </div>
        </>
    );
};

export default MainAside;