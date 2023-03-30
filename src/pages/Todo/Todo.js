/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { useState } from 'react';
import { useRef } from 'react';
import * as S from './style';
import AddTodo from '../../components/Todo/AddTodo';
import TodoList from '../../components/TodoList/TodoList';
import PromptModal from '../../components/Todo/Modal/PromptModal/PromptModal'

const Todo = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [modifyTodo, setModifyTodo] = useState({
        id: 0,
        content: ''
    });

    const [input, setInput] = useState({
        id: 0,
        content: ''
    });
    const [todoList, setTodoList] = useState([]);
    const todoId = useRef(1);

const onChange = (e) => {
    setInput({
        ...input,
        content: e.target.value
    });
}

const onKeyUp = (e) => {
    if(e.keyCode === 13) {
        onAdd();
    }
}

const onAdd = () => {
    const todo = {
        ...input,
        id: todoId.current++
    }
    setTodoList([...todoList, todo]);
    setInput({
        ...input, 
        content: ''
    });
}

const onRemove = (id) => {
    setTodoList(todoList.filter(
        todo => {
            return todo.id !== id;
        }
    ))
}

const updateTodo = (modifyTodo) => {
    setTodoList(
        todoList.map(
            todo => {
                if(todo.id === modifyTodo.id) {
                    todo.content = modifyTodo.content;
                }
                return todo;
            }
        )
    )
}

const openModal = (id) => {
    setModifyTodo(todoList.filter(
        todo => todo.id === id
    )[0]);

    setIsOpen(true);
}
    return (
    <>
        
         <main css={S.mainContainer}>
            <header css={S.mainHeader}>
                <h1 css={S.mainTitle}>ToDo</h1>
                <AddTodo onChange={onChange} onKeyUp={onKeyUp} value={input.content} onAdd={onAdd}/>
            </header>
            <ul css={S.contentList}>
                {todoList.map(
                    todo => {
                        return (
                            <TodoList todo={todo} openModal={openModal} onRemove={onRemove}/>
                        );
                    }
                )}
            </ul>
        </main>
    {isOpen ? (<PromptModal title={'Edit Todo'} todo={modifyTodo} setIsOpen={setIsOpen} updateTodo={updateTodo} />) : ''}
    </>
    );
};

export default Todo;