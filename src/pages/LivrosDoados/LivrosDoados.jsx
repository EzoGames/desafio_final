import s from './LivrosDoados.module.scss'
import red from '../../assets/livrored.png'
export default function livrosDoados(){
    return(
        <section className={s.livrosDoados}>
            <h1 className={s.livroh1}>Livros Doados</h1>
           <section className={s.containerlivros}><section className={s.imagem}>
                <img className={s.imagu} src={red} alt="" />
                <section className={s.palavrinhas}>
                <p>O protagonista</p>
                <p>Susanne Andrade</p>
                <p>Ficção</p>
                </section>
            </section></section> 
        </section>
        
    )
}