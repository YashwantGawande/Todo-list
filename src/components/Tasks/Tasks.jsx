import styles from './tasks.module.css'
//something here
function Tasks(){
    return(
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Create task</p>
                    <span>10</span>
                </div>
                <div>
                    <p className={styles.textPurple}>Completed</p>
                    <span></span>
                </div>
            </header>
            <div className={styles.list}>
                <Task />
            </div>
        </section>
    )
}

export default Tasks