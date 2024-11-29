import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Inicio from "../../pages/inicio/Inicio"
import LivrosDoados from "../../pages/livrosDuados/LivrosDoados"
import QueroDoar from "../../pages/queroDoar/QueroDoar"
import s from './header.module.scss'
import Logo from "../../assets/2702154 1logo.png" 
import search from "../../assets/search.png"  
export default function Header(){
    return(
        <BrowserRouter>
        <header>
          <section> <img class={s.logo} src={Logo} alt="LogoLivro" /><h1>Livros Vai na Web</h1></section> 
           <nav> <ul><li><Link class ={s.link} to='/'>Início</Link></li>
            <li><Link class ={s.link} to='/livrosDoados'>Livros doados</Link></li>
            <li><Link class ={s.link} to='/querodoar'>Quero Doar</Link></li></ul></nav>
            <section class={s.barraDePesquisa}><input type="search" placeholder="oque você procura?" />
            <button><img class={s.search} src={search} alt="ButãoDePesquisa" /></button></section>
        </header>
        <Routes><Route path='/' element={<Inicio/>}/>
        <Route path='/livrosDoados' element={<LivrosDoados/>}/>
        <Route path='/querodoar' element={<QueroDoar/>}/></Routes>
        </BrowserRouter>
    )
}
