import s from './QueroDoar.module.scss'
import Vector from '../../assets/Vector.png'
export default function queroDoar(){
    return(
        <section className={s.Doar}>
            <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
            <section className={s.cardinho}>
                <section className={s.imager}>
                <img src={Vector} alt="" /> <h3>Informações do Livro</h3>
                </section>

                    <section className={s.dcard}>
                     
                        <input className={s.inputy} type="text" placeholder='Titulo' />
                        <input className={s.inputy} type="text" placeholder='Categoria'/>
                        <input className={s.inputy} type="text" placeholder='Autor'/>
                        <input className={s.inputy} type="text" placeholder='Link da Imagem'/>
            
                        <section className={s.vazio}></section>
                        <button className={s.butau}>Doar</button>
                    </section>
            </section>
            
        </section>
    )
}