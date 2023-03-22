import React from 'react';
import styled from '@emotion/styled/macro';

import { Ability, Color } from '../types';
import { mapColorToHex } from '../utils';
import useAbilities from '../hooks/useAbilities';


interface Props {
	abilities: Array<Ability>;
	color?: Color;
}

const Container = styled.div`
	margin-top: 32px;
`;

const Title = styled.h4<{ color: string }>`
	margin: 0;
	padding: 0;
	font-size: 20px;
	font-weight: bold;
	color: ${({ color }) => color};
`;

const ListItem = styled.li`
	display: flex;
`;

const List = styled.ul`
	margin: 20px 0 0 0;
	padding: 0;
	list-style: none;
	${ListItem} + ${ListItem} {
	margin-top: 12px;
	}
`;

const Label = styled.span`
	flex: 1 0 30%;
	text-transform: capitalize;
	color: #374151;
	font-size: 12px;
	font-weight: bold;
`;

const Desc = styled.span`
	flex: 1 0 70%;
	font-weight: 400;
	font-size: 12px;
	color: #374151;
	word-wrap: break-word;
`;

const Abilities: React.FC<Props> = ({ abilities, color }) => {

	const result = useAbilities(abilities);
	console.log(result);

	return (<Container>
		<Title color={mapColorToHex(color?.name)}>Abilities</Title>
		<List>
			{
				result.map(({data}, idx) => (
					data ? (<ListItem key={idx}>
						<Label>{data.data.name}</Label>
						<Desc>{data.data.effect_entries[0].effect}</Desc>
					</ListItem>) : ''
				))
			}
		</List>
	</Container>)
}
export default Abilities;