import React from 'react';
import { PlayArrow, AttachFile } from '@styled-icons/material';
import * as S from './styles';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    label: string
    icon?: string
}

export const Button = ({
	label,
	icon,
	...rest
}: ButtonProps) => {
	return (
			//@ts-ignore
		<S.Container {...rest}>
			<S.Content>
				<S.Label>{label}</S.Label>
				{
					label.toLocaleUpperCase() === 'ENVIAR'
						? <PlayArrow size={24} color="#000" />
						: (
							<S.Content>
								<AttachFile size={24} color="#000" />
								<input type="file" id="file" name={label}/>
							</S.Content>
						)
				}
			</S.Content>
		</S.Container>
	);
};
