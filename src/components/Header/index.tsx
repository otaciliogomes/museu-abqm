import React from 'react';
import * as St from './styled';
import SecondaryLogo from '../../assets/images/section-logo.png';
import Logo from '../../assets/images/logo.png';

interface HeaderProps {
  title?: string;
  subtitle?: string;
  logo?: boolean;
}

export function Header({ title, subtitle, logo }: HeaderProps) {
	const id = title?.toLocaleLowerCase()?.replaceAll(' ', '-');
	return (
		<St.Container id={id}>
			<St.Row>
				<St.Row>
					<St.WhiteLogo>
						<img src={SecondaryLogo} alt="" />
					</St.WhiteLogo>
					<St.Column>
						<St.Title>{title?.toLocaleUpperCase()}</St.Title>
						<St.SubTitle>{subtitle}</St.SubTitle>
					</St.Column>
				</St.Row>
			</St.Row>
			{logo && <img src={Logo} alt="Logo quarto de milha" />}
		</St.Container>
	);
}
