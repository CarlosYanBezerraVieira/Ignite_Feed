import styles from "./Header.module.css";

export function Header (){
    return (
        <header className={styles.header}>
            <img src="/Ignite-logo.svg" alt="Logotipo do Ignite" />
            <strong>Ignite Feed</strong>
        
        </header>
        )
}