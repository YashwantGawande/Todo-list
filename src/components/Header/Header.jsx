import React from "react"
import styles from './header.module.css'
import todoLogo from '../../assets/todoLogo.svg'
import { AiFillPlusCircle } from 'react-icons/ai'


function Header({ onAddTask }) {

    const [title, setTitle] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        onAddTask(title)
        setTitle('')
    }

    function onChangeTitle(event){
        setTitle(event.target.value)
    }


    return (
        <header className={styles.header}>
            <img src={todoLogo} alt="logo" />

            <form className={styles.newTaskForm} onSubmit={handleSubmit}>
                <input type="text" placeholder="add a new task" value={title} onChange={onChangeTitle}/>
                <button>
                    Create
                    <AiFillPlusCircle size={20} />
                </button>
            </form>
        </header>
    )
}

export default Header