/** @jsxImportSource @emotion/react */
import React from 'react';
import * as S from './style.js';
import { BiPen } from 'react-icons/bi';
import { TiTrash } from 'react-icons/ti';
import TodoListButton from './TodoListButton/TodoListButton.js';
import Timer from './Timer/Timer.js';

const TodoList = ({ todo, openModal, onRemove }) => {
    return (
        <li css={S.contentContainer} key={todo.id}>
            <div css={S.contentHeader}>
                <Timer />
            </div>
            <div css={S.contentMain}>{todo.content}</div>
            <div css={S.contentFooter}>
                <TodoListButton onClick={() => openModal(todo.id)}><BiPen /></TodoListButton>
                <TodoListButton onClick={() => onRemove(todo.id)}><TiTrash /></TodoListButton>
            </div>
        </li>
    );
};

export default TodoList;