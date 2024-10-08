import { Link } from 'react-router-dom';
import style from './singin.module.css';

export default function SingIn() {
    return <>

        <div className={style.wrapper}>
            <div className={style.wrapper_close_btn}>
                <button className={style.close}><image className={style.cross}></image></button>
            </div>

            <h1>Войти в систему</h1>
            <div className={style.data_entry}>
                <input type="text" placeholder='Email/Телефон' />
                <input type="password" placeholder='Пароль' />
            </div>
            <label>
                <input className={style.checkbox} type="checkbox" />
                Запомнить пароль
            </label>
            <h2>Восстановить</h2>

            <div className={style.singin_singup}>
                <button><Link to={'/home'}>Войти</Link></button>
                <button>Зарегистрироваться</button>
            </div>


        </div >

    </>
}