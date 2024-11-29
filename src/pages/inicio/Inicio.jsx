import punho from "../../assets/punho.png"
import reading from "../../assets/reading.png"
import libras from "../../assets/libras.png"
import Livros from "../../assets/todes.png"
import fa from "../../assets/family.png"
import ain from './inicio.module.scss'
export default function inicio(){
    return(
        <div class={ain.prime}>
        <div>
            <img class={ain.Livros} src={Livros} alt="" />
        </div>
        <section class={ain.sections}>
            <h1 class={ain.h1daqui}>Por que devo doar?</h1>
            <section class={ain.sectione}>
            <div class={ain.divsao}>
                <img className={ain.faa} src={fa} alt="" />
                <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
            </div>

            <div class={ain.divsao}>
                <img className={ain.faa} src={reading} alt="" />
                <p> Estimula o hábito da leitura e o aprendizado contínuo.</p>
            </div>

            <div class={ain.divsao}>
                <img className={ain.faa} src={punho} alt="" />
                <p> Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
            </div>
            <div class={ain.divsao}>
                <img className={ain.faa} src={libras} alt="" />
                <p> Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
            </div>
            </section>
           
        </section>
        </div>
        
    )
   
}