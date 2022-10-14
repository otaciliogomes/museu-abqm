import React, { useEffect } from 'react';
import * as S from './styles';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
    error: boolean
    value: any
}

export const Input = ({ error = false, value,...rest }: InputProps) => {
	useEffect(() => {

	}, [error, value]);
	return (
		<S.Container>
			<input {...rest} />
			{error && value?.length === 0  && <S.IconWarning />}
		</S.Container>
	);
};