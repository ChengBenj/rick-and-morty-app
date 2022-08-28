import { gql } from '@apollo/client';

export const listCharacters = gql`
	query listCharacters($page: Int!) {
		data: characters(page: $page) {
			info {
				count
				pages
			}
			characters: results {
				id
				name
				image
			}
		}
	}
`;

export const getCharacterById = gql`
	query getCharacterById($id: ID!) {
		character(id: $id) {
			id
			name
			status
			species
			type
			image
			gender
			origin {
				id
				name
				type
				dimension
			}
			location {
				id
				name
				type
				dimension
			}
			episode {
				id
				name
				air_date
				episode
			}
		}
	}
`;
