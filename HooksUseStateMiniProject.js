//We can type and add that one and delete and strike using checkbox

import './App.css';


import {useState} from 'react';
import {v4 as uuid} from 'uuid';

function HooksUseStateMiniProject() {
    const [todo, setTodo]=useState();
    const [todoList, setTodoList]=useState([]);

    const onTodoInputChange=(e)=>{
        setTodo(e.target.value)


    }

    const onAddTodoClick=()=>{
        setTodoList([...todoList, {id: uuid(), todo: todo, iscompleted: false}])
        setTodo('');
    }

    const onClickToDelete=(id)=> {
        const UpdatedTodoList=todoList.filter(todo => todo.id !== id)
        setTodoList(UpdatedTodoList);
    }

    const onTodoListCheck=(id)=>{
        const UpdatedTodoList=todoList.map(todo => todo.id === id ? {...todo, iscompleted: !todo.iscompleted} : todo)
        console.log(UpdatedTodoList);
        setTodoList(UpdatedTodoList);

    }

    return(
        <>
        <div>
        <input value={todo} onChange={onTodoInputChange} placeholder="Add your wishlist here.." />
        <button onClick={onAddTodoClick}>ADD</button>
        </div>
        <div>
        {
            todoList && todoList.length>0 && todoList.map(todo => {
                return(
                    <div key={todo.id}>
                    <label>
                    <input onChange={() => onTodoListCheck(todo.id)} type='checkbox' />
                    <span className={todo.iscompleted ? 'strike-through' : ''}>{todo.todo}</span>
                    </label>
                    <button onClick={() => onClickToDelete(todo.id)}>Delete</button>
                    </div>
                );
            })
        }
        </div>

        </>

    );
}

export default HooksUseStateMiniProject;