import s from './LivrosDoados.module.scss'
import red from '../../assets/livrored.png'
import { useState,useEffect } from 'react'
import axios from 'axios'


export default function livrosDoados(){
    
    const [livros,setLivros] = useState([])

    const puxarLivros = async() =>{
            const resposta = await axios.get ("https://desafio-apii1.onrender.com/livros")
            setLivros(resposta.data)
    }
    
    useEffect (()=>{
        /*alert("useEffect executou")*/
        puxarLivros()
    },[])

    return(
        
        <section className={s.livrosDoados}>
            <h1 className={s.livroh1}>Livros Doados</h1>
           <section className={s.containerlivros}>
           {livros.map((item)=>(
                <section className={s.Livrosregistrados}>
                    <img src={item.image_url} alt="" />
                    <h3>{item.titulo}</h3>
                    <p>{item.autor}</p>
                    <p>{item.categoria}</p>
                </section>
            ))}
            </section> 
        </section>
        
        
           
      /*  <section className={s.livrosDoados}>
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
        */
    )
}