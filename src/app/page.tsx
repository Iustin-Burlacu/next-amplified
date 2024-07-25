"use client"
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
    const [counter, setCounter] = useState(0);

    const onClickHandler = (type: string) => {
        if(type === '+') {
            setCounter(counter + 1);
        } else if(type === '-') {
            setCounter(counter - 1);
        }
    }

    return (
        <div className={styles.main}>
          Hello World
            <div className={styles.divButton}>
                <button className={styles.button} onClick={() => onClickHandler('+')}> +</button>
                {counter}
                <button className={styles.button} onClick={() => onClickHandler('-')}> -</button>
            </div>
        </div>
    );
}
