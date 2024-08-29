import style from './home.module.css'

export default function Home() {
    return <>
        <main className={style.background}>
            <div className={style.content}>
                <div className={style.info}>
                    <h1>Демо-версия</h1>
                    <p>За 18 лет деятельности было реализовано более 500 крупных, а так же, не менее 2500 средних и малых проектов. Используя знания и накопленный опыт мы можем предложить </p>
                    <button className={style.try_btn}>Попробовать бесплатно<image className={style.arrow}></image></button>
                </div>
                <div className={style.image}></div>
            </div>

        </main>
    </>
}