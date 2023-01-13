import styles from './task.module.css'
import { TbTrash } from 'react-icons/tb';

function Task(){
    return(
       <div className={styles.task}>
        <button className={styles.checkContainer}></button>
        <p></p>
        <button className={styles.deletButton}>
            <TbTrash size={20}/>
        </button>
       </div>
      
    )
}

export default Task 