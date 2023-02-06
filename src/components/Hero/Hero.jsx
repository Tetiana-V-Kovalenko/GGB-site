import css from './Hero.module.scss'
export const Hero = () => {

    return <section className={css.Hero_section}>
        <div className={css.Hero_container}>  
        <h1 className={css.Hero_title}>
            ПрАТ «ГОЛДЕН ГЕЙТ БІЗНЕС»
        </h1>
            <p className={css.Hero_subtitle}>Оптова торгівля деревиною, будівельними матеріалами та санітарно-технічним обладнанням
            </p>
            <p className={css.Hero_name}>
                Директор Максяков М.Ю.
            </p></div>

    </section>
}
export default Hero