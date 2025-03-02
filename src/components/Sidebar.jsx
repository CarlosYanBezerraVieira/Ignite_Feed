import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import {PencilLine} from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover}
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className={styles.profile}>
                <Avatar src="https://github.com/CarlosYanBezerraVieira.png"/>
                <strong>Carlos</strong>
                <span>Desenvolvedor mobile</span>
            </div>
            <footer className={styles.footer}>
                <a href='#'>
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}