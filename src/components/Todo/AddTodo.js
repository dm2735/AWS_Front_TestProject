/** @jsxImportSource @emotion/react */
import React from 'react';
import * as S from './style';
import { BsList } from 'react-icons/bs';
import { BiPlus } from 'react-icons/bi';

const AddTodo = ({ onChange, onKeyUp, value, onAdd }) => {
    return (
        <div css={S.todoInputContainer}>
        <i css={S.listIcon}><BsList/></i>
        <input type="text" css={S.todoInput} placeholder="Please enter todo..." onChange={onChange} onKeyUp={onKeyUp} value={value} />
        <button css ={S.addTodoButton} onClick={onAdd}><BiPlus/></button>
    </div>
    );
};

export default AddTodo;