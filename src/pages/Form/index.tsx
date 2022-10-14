import React, { useEffect, useState, ChangeEvent, useContext } from 'react';
import axios from 'axios';
import { v4 } from "uuid"

import * as S from './styles';
import { ToastContext } from '../../context';
import { Button } from './Button';
import { Input } from '../../components/Input';
interface State {
    id: number,
    sigla: string,
    nome: string,
    regiao: {
        id: number,
        sigla: string,
        nome: string
    }
}

interface City {
    id: number
    nome: string
    microrregiao: {
        id: number
        nome: string
        mesorregiao: {
            id: number
            nome: string
            UF: {
                id: number
                sigla: string
                nome: string
                regiao: {
                    id: number
                    sigla: string
                    nome: string
                }
            }
        }
    }
}

export const Form = () => {
	const { handleTost } = useContext(ToastContext);
	const [states, setStates] = useState<State[]>([]);
	const [selectedUf, setSelectedUf] = useState('0');
	const [citys, setCitys] = useState<City[]>([]);

	// FORMULÁRIO
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [trend, setTrend] = useState('');
	const [description, setDescription] = useState('');
	const [state, setState] = useState('');
	const [city, setCity] = useState('');
	const [error, setError] = useState(false);

	async function getStateApiIBGE() {
		const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

		try {
			const resp = await axios.get<State[]>(url);
			setStates(resp.data);
		} catch (err) {
			console.error(err);
		}
	}

	async function getCityIBGE() {
		const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`;

		if (selectedUf === '0') {
			return;
		}

		try {
			const resp = await axios.get<City[]>(url);
			setCitys(resp.data);
		} catch (err) {
			console.log(err);
		}
	}

	function handleSetUfAndCity(event: ChangeEvent<HTMLSelectElement>) {
		const uf = event.target.value;
		setSelectedUf(uf);
		setState(uf);
	}

	function validationForm() {
		return (
			(state.length > 0) &&
            (city.length > 0) &&
            (name.length > 0) &&
            (email.length > 0) &&
            (phone.length > 0) &&
            (trend.length > 0) &&
            (description.length > 0) &&
            (state.length > 0) &&
            (city.length > 0)
		);
	}

	async function handleSendForm() {
		const showError = !validationForm();
		const data = {
			state,
			city,
			name,
			email,
			phone,
			trend,
			description
		};
		if (showError) {
			setError(showError);
			handleTost('error', 'Preencha os campos obrigatórios');
			return;
		}
		handleTost('success', 'Enviado com sucesso');
	}

	useEffect(() => {
		getStateApiIBGE();
	}, []);

	useEffect(() => {
		getCityIBGE();
	}, [selectedUf]);

	return (
		<S.Container>
			<S.ContentInput>
				<S.Label>Nome</S.Label>
				<Input
					type="text"
					value={name}
						//@ts-ignore
					onChange={text => setName(text.target.value)}
					error={error}
					required
				/>
			</S.ContentInput>

			<S.ContentInput>
				<S.Label>E-mail</S.Label>
				<Input
					type="email"
					value={email}	//@ts-ignore
					onChange={text => setEmail(text.target.value)}
					error={error}
					required
				/>
			</S.ContentInput>

			<S.ContentInput>
				<S.Label>Telefone</S.Label>
				<Input
					type="tel"
					value={phone}	//@ts-ignore
					onChange={text => setPhone(text.target.value)}
					error={error}
					required
				/>
			</S.ContentInput>
			<S.ContainerRadio>
				<S.Label maxWidth={220} marginRight={0}>Você é associado da ABQM?</S.Label>
				<S.ContentRadio>
					<input type="radio" value="true" name="associate" id="associateYes" />
					<S.Label>Sim</S.Label>
				</S.ContentRadio>
				<S.ContentRadio>
					<input type="radio" value="false" name="associate" id="associateNo" />
					<S.Label>Não</S.Label>
				</S.ContentRadio>
			</S.ContainerRadio>
			<S.ContentState>
				<S.ContentSelect>
					<S.Label>Estado</S.Label>
					<select
						name="Estados"
						onChange={handleSetUfAndCity}
						style={{
							backgroundColor: '#FFF'
						}}
					>
						{selectedUf !== '0' ? null : <option value="0">Selecione uma UF</option>}
						{states.map(state => (
							<option
								key={v4()}
								value={state.sigla}
							>
								{`${state.sigla} - ${state.nome}`}
							</option>
						))}
					</select>
				</S.ContentSelect>
				<S.ContentSelect marginRight={10}>
					<S.Label>Cidades</S.Label>
					<select
						name="Cidades"
						onChange={(event: ChangeEvent<HTMLSelectElement>) => {
							setCity(event.target.value);
						}}
						style={{
							backgroundColor: '#FFF'
						}}
					>
						<option value="">
							{`${selectedUf !== '0' ? 'Selecione uma cidade' : ''}`}
						</option>
						{citys.map(city => (
							<option
								key={v4()}
								value={city.nome}
							>
								{`${city.nome}`}
							</option>
						))}
					</select>
					{ !((state.length > 0) && (city.length > 0)) && error && <S.IconWarning />}
				</S.ContentSelect>
			</S.ContentState>
			<S.ContentInput>
				<S.Label>Assunto</S.Label>
				<Input
					type="tel"
					value={trend}
					error={error}	//@ts-ignore
					onChange={text => setTrend(text.target.value)}
					required
				/>
			</S.ContentInput>
			<S.ContentInput>
				<S.Label>Descrição</S.Label>
				<textarea
					id="w3review"
					name="w3review"
					rows={20}
					cols={200}
					onChange={text => setDescription(text.target.value)}
				>
				</textarea>
			</S.ContentInput>
			<S.ContainerButton>
				<Button
					label="Anexos"
					type="file"
					id="file"
					name="file"
				/>
				<Button
					label="Enviar"
					type="submit"
					onClick={() => handleSendForm()}
				/>
			</S.ContainerButton>
		</S.Container>
	);
};