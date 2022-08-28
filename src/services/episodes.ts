import { gql } from '@apollo/client';

export const listEpisodes = gql`
	query listEpisodes($page: Int!) {
		data: episodes(page: $page) {
			info {
				count
				pages
			}
			results {
				id
				name
				episode
			}
		}
	}
`;
