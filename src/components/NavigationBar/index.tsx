import React from 'react';
import * as S from './style';
import LogoMenu from '../../assets/images/logo-menu.png';

type NavigationBarType = {
    hidden: boolean
}

export const NavigationBar = ({ hidden }: NavigationBarType) => {
	return (
		<S.Container display={hidden} >
			<img className="logo-menu" src={LogoMenu} alt="" />
			<div className="main-menu">
				<a href=''>TOUR VIRTUAL</a>
				<a href='#conheça-o-quarto-de-milha'>QUARTO DE MILHA</a>
				<a href="#linha-do-tempo">lINHA DO TEMPO</a>
				<a href="#modalidades-esportivas">MODALIDADES ESPORTIVAS</a>
				<a href="#galeria-dos-ex-presidentes">GALERIA DE EX-PRESIDENTES</a>
				<a href="#acervo-histórico">ACERVO HISTÓRICO</a>
				<a href="#linha-do-tempo">COMO COLABORAR</a>
				<a href="#como-colaborar">SALA DE IMPRENSA</a>
				<a>FICHA TÉCNICA</a>
			</div>
			<div className="footer-menu">
				<ul>
					<li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
					<li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
					<li className="facebook-item"><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
					<li>@ABQMOFICIAL</li>
				</ul>
			</div>
		</S.Container>
	);
};