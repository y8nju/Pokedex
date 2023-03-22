import React from 'react';
import styled from '@emotion/styled/macro';

import usePokemon from '../hooks/usePokemon';
import { ListResponse } from '../types';
import { formatNumbering } from '../utils';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
	margin-top: 24px;
`;

const ListItem = styled.li`
	position: relative;
	display: flex;
	align-items: center;
	box-shadow: 6px 4px 14px 5px rgba(0,0,0,0.21);
	border-radius: 12px;
	cursor: pointer;
	& + & {
	margin-top: 18px;
	}
`;

const List = styled.ul``;

const Image = styled.img``;

const Name = styled.p`
	padding: 0 0 0 12px;
	flex: 1 1 100%;
	color: #374151;
	text-transform: capitalize;
	font-size: 16px;
	font-weight: bold;
`;

const Index = styled.p`
	position: absolute;
	right: 16px;
	bottom: 16px;
	font-size: 24px;
	font-weight: bold;
	color: #D1D5DB;
`;

const LoadingWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: calc(100vh - 180px);
`;

const Loading = styled.img``;

const getImageUrl = (index: number): string =>
	`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`

const PokemonList: React.FC = () => {

	const {isLoading, isError, data} = usePokemon<ListResponse>();
	const navigate = useNavigate();

	return (
	<Container>
		{isLoading || isError ? (
			<LoadingWrapper>
				<Loading src="/assets/loading.gif" alt="loading" />
			</LoadingWrapper>
		): (
		<List>
			{data ? data?.data.results.map((pokemon, idx) => (
				<ListItem key={pokemon.name} onClick={() => navigate(`/${idx + 1}`)}>
					<Image src={getImageUrl(idx + 1)} />
					<Name>{pokemon.name}</Name>
					<Index>{formatNumbering(idx + 1)}</Index>
				</ListItem>
			)) : ''}
		</List>
		)}
	</Container>
	)
}

export default PokemonList;