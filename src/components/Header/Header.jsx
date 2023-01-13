import React from "react"
import styles from './header.module.css'
import todoLogo from '../../assets/todoLogo.svg'
import { AiFillPlusCircle } from 'react-icons/ai'


function Header() {
    return (
        <header className={styles.header}>
            <img src={todoLogo} alt="logo" />

            <form className={styles.newTaskForm}>
                <input type="text" placeholder="add a new task" />
                <button>
                    Create
                    <AiFillPlusCircle size={20} />
                </button>
            </form>
        </header>
    )
}

export default Header