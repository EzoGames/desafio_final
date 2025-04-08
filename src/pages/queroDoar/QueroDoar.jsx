import s from './QueroDoar.module.scss'
import Vector from '../../assets/Vector.png'
import axios from 'axios'
import { useState } from 'react'
export default function queroDoar(){

    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [image_url, setImage_url] = useState("")

    const capturaTitulo = (e) => {
        setTitulo(e.target.value)
    }
    const capturaCategoria = (e) => {
        setCategoria(e.target.value)
    }
    const capturaAutor = (e) => {
        setAutor(e.target.value)
    }
    const capturaImage_url = (e) => {
        setImage_url(e.target.value)
    }

    const enviarDados = async() => {
        const dadosPEnviar = {
            titulo,
            categoria,
            autor,
            image_url
        }

        await axios.post("https://desafio-apii1.onrender.com/doar", dadosPEnviar)
    
        alert("Enviado com sucesso!!!!!")
    }

    return(
        <section className={s.Doar}>
            <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
            <section className={s.cardinho}onSubmit={(e) => e.preventDefault()}>
                <section className={s.imager}>
                <img src={Vector} alt="" /> <h3>Informações do Livro</h3>
                </section>

                    <section className={s.dcard}>
                     
                        <input className={s.inputy} type="text" placeholder='Titulo' onChange={capturaTitulo}/>
                        <input className={s.inputy} type="text" placeholder='Categoria' onChange={capturaCategoria}/>
                        <input className={s.inputy} type="text" placeholder='Autor' onChange={capturaAutor}/>
                        <input className={s.inputy} type="text" placeholder='Link da Imagem' onChange={capturaImage_url}/>

                        <section className={s.vazio}></section>
                        <button onClick={enviarDados} className={s.butau}>Doar</button>
                    </section>
            </section>
            
        </section>
    )
}