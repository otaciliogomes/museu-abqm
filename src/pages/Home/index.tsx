import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Categories } from '../Catogories';	//@ts-ignore
import { Cavalo } from '../Cavalo';
import { Form } from '../Form';
import { History } from '../History';
import { MoodSports } from '../MoodSports';
import { Presidents, PresidentType } from '../Presidents';
import { Timeline } from '../Timeline';	//@ts-ignore
import VideoBG from '../../assets/video/video-bg.mp4';
import Logo from '../../assets/images/logo.png';
import { api } from '../../services';
import { endpoints } from '../../services/env';

import { Menu } from '../../components/Menu';
import { NavigationBar } from '../../components/NavigationBar';

import * as S from './styles';
import { useTost } from '../../context';
import axios from 'axios';
import { ResponseItems } from '../../interface';

export const Home = () => {
	const handleTost = useTost()
	const [showMenu, setShowMenu] = useState(false);
	const [loading, setLoading] = useState(true);
	const [errorLoadingData, setErrorLoadingData] = useState(false);
	const [modules, setModules] = useState([]);
	const [presidentList, setPresidentList] = useState<PresidentType[]>([]);
	const [quartoDeMilhaHistory, setQuartoDeMilhaHistory] = useState<ResponseItems>({} as ResponseItems);
	const [dataTimeLine, setDataTimeLine] = useState<PresidentType[]>([]);
	const [dataMoodSport, setDataMoodSport] = useState<PresidentType[]>([]);
	const [dataHistory, setDataHistory] = useState<PresidentType[]>([])
	const [dataCategories, setDataCategories] = useState<PresidentType[]>([])

	function handleShowMenu() {
		setShowMenu(!showMenu);
	}

	async function getModules() {
		try {
			setTimeout(async () => {
				const response = await api.get(endpoints.MUSEUABQM);
				await getModuleItens(response.data[0].module_id);
				setLoading(false);
			}, 500)
		} catch (error) {
			setErrorLoadingData(true)
			console.error(error);
		}

	}

	async function getModuleItens(id: number) {
		try {
			const response = await api.get(`${endpoints.ITENSMODULE}/${id}`);

			await getPresidents(response.data);
			await getQuartoDeMilhaHistory(response.data);
			await getTimeLine(response.data);
			await getMoodSport(response.data);
			await getHistory(response.data);
			await getCategories(response.data);
		} catch (error) {
			console.error(error);
			handleTost('error', "Erro ao carregar itens")
		}
	}

	async function getPresidents(data: any) {
		const titleData = "Ex-Presidentes";
		const [presidentModuleId] = data
			?.filter((item: any) =>
				item?.title?.toLocaleUpperCase() === titleData.toLocaleUpperCase()
			);

		try {
			const response = await api.get(`${endpoints.ITENSLIST}/${presidentModuleId?.id}`);
			setPresidentList(response.data);
		} catch (error) {
			console.error(error);
			handleTost('error', "Erro ao carregar Ex-Presidente")
		}
	}

	async function getQuartoDeMilhaHistory(data: any) {
		const titleData = "Conhe??a o Quarto de Milha";
		const [presidentModuleId] = data
			?.filter((item: any) =>
				item?.title?.toLocaleUpperCase() === titleData.toLocaleUpperCase()
			);

		try {
			const response = await api.get(`${endpoints.ITENSLIST}/${presidentModuleId?.id}`);
			setQuartoDeMilhaHistory(response.data[0]);
		} catch (error) {
			console.error(error);
			handleTost('error', "Erro ao carregar Conhe??a o Quarto de Milha")
		}
	}

	async function getTimeLine(data: any) {
		const titleData = "Linha do Tempo";
		const [presidentModuleId] = data
			?.filter((item: any) =>
				item?.title?.toLocaleUpperCase() === titleData.toLocaleUpperCase()
			);

		try {
			const response = await api.get(`${endpoints.ITENSLIST}/${presidentModuleId?.id}`);
			setDataTimeLine(response.data);
		} catch (error) {
			console.error(error);
			handleTost('error', "Erro ao carregar Linha do Tempo")
		}
	}

	async function getMoodSport(data: any) {
		const titleData = "Modalidades Esportivas";
		const [presidentModuleId] = data
			?.filter((item: any) =>
				item?.title?.toLocaleUpperCase() === titleData.toLocaleUpperCase()
			);

		try {
			const response = await api.get(`${endpoints.ITENSLIST}/${presidentModuleId?.id}`);
			setDataMoodSport(response.data);
		} catch (error) {
			console.error(error);
			handleTost('error', "Erro ao carregar Modalidades Esportivas")
		}
	}

	async function getHistory(data: any) {
		const titleData = "Acervos Hist??ricos";
		const [presidentModuleId] = data
			?.filter((item: any) =>
				item?.title?.toLocaleUpperCase() === titleData.toLocaleUpperCase()
			);

		try {
			const response = await api.get(`${endpoints.returnMenus}/${presidentModuleId?.id}`);
			setDataHistory(response.data);
		} catch (error) {
			handleTost('error', "Erro ao carregar acervo hist??rico")
		}
	}

	async function getCategories(data: any) {
		const titleData = "Galerias";
		const [presidentModuleId] = data
			?.filter((item: any) =>
				item?.title?.toLocaleUpperCase() === titleData.toLocaleUpperCase()
			);

		try {
			const response = await api.get(`${endpoints.ITENSLIST}/${presidentModuleId?.id}`);
			setDataCategories(response.data);
		} catch (error) {
			console.error(error)
			handleTost('error', "Erro ao carregar categorias")
		}
	}

	useEffect(() => {
		getModules();
	}, []);

	return (
		<S.Container>
			{loading ? (
				<S.ContentLoading>
					<video autoPlay muted loop id="myVideo">
						<source src={VideoBG} type="video/mp4" />
					</video>
					<img src={Logo} alt="Logo quarto de milha" />
					<h1>{errorLoadingData ? "Erro ao tentar carregar dos dados, tente mais tarde." : "Carregando ..."}</h1>
				</S.ContentLoading>
			) : (
				<>
					<video autoPlay muted loop id="myVideo">
						<source src={VideoBG} type="video/mp4" />
					</video>
					<main>
						<Menu handleShowMenu={handleShowMenu} />
						<div className="vh-100">
							<Header logo />
							<Categories dataCategories={dataCategories} />
						</div>
						<div className="vh-100">
							<Header
								title="Conhe??a o quarto de milha"
								subtitle={quartoDeMilhaHistory.resume}
							/>
							<Cavalo cavalo={quartoDeMilhaHistory} />
						</div>
						<div className="vh-100">
							<Header
								title="Linha do tempo"
							/>
							<Timeline dataTimeLine={dataTimeLine} />
						</div>
						<div className="vh-100">
							<Header
								title="Modalidades Esportivas"
								subtitle="Por sua versatilidade, o cavalo Quarto de Milha proporciona aos competidores a pr??tica de v??rias modalidades
                    esportivas, com muita qualidade e competitividade. Atualmente, a ABQM oficializa competi????es em, aproximadamente,
                    400 categorias, distribu??das em 23 modalidades."
							/>
							<MoodSports data={dataMoodSport} />
						</div>
						<div className="vh-100">
							<Header
								title="Galeria dos ex-presidentes"
								subtitle="
                    Esse espa??o ?? uma homenagem aos que lideraram a Associa????o desde sua funda????o e dedicaram 
                    seu tempo e suas vidas ?? valoriza????o e dissemina????o da ra??a no Brasil.
                "
							/>
							<Presidents presidentList={presidentList} />
						</div>
						<div className="vh-100">
							<Header
								title="Acervo hist??rico"
								subtitle="
                   Aqui ?? o espa??o de todos os quartistas que fizeram hist??ria. Lembran??as e rel??quias compartilhadas
                   por todos que ajudaram a tomar a ra??a refer??ncia no pa??s.
                "
							/>
							<History dataHistory={dataHistory} />
						</div>
						<div className="vh-100">
							<Header
								title="Como colaborar"
								subtitle="
                    Colabore com o acervo do Museu Virtual Quarto de Milha. Encaminhe fotos e v??deos de momentos que marcaram
                    sua hist??ria com a ra??a: imagens de objetos, como fivelas, chaveiros, trof??us, equipamentos, acess??rios e etc. Para enviar seus arquivos, preencha os campos abaixo:
                "
							/>
							<Form />
						</div>
					</main>
					<NavigationBar hidden={showMenu} />
				</>
			)}
		</S.Container>

	);
};