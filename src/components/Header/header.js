import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'

import Typing from './../typing'
import mouseClick from '../../assets/White.png'
import resume from '../../assets/THIAGO_ARAUJO_RODRIGUES.docx'

function Header() {
    return (
        <div className="header-fixed header_position container">
            <Router>
                
                    <HashLink className='logo'>
                        <span><Typing></Typing></span>
                    </HashLink>
                <nav>
                    <NavHashLink to={"/#home"} smooth>
                        Inicio
                    </NavHashLink>
                    <NavHashLink to={"/#about"} smooth>
                        Sobre mim  
                    </NavHashLink>
                    <NavHashLink to={"/#projects"} smooth>
                        Projetos
                    </NavHashLink>
                    <NavHashLink to={"/#experiences"} smooth>
                        experiências
                    </NavHashLink>
                    <NavHashLink to={"/#form"} smooth>
                        Contato
                    </NavHashLink>
                    <a href={resume} download className='button'>
                        Curriculo
                    </a>
                </nav>
            </Router>
        </div>
    )
}

export default Header;