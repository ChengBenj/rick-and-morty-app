export {};

declare global {
	type Character = {
		id?: number;
		name?: string;
		status?: 'Alive' | 'Dead' | 'unknown';
		species?: string;
		type?: string;
		gender?: 'Female' | 'Male' | 'Genderless' | 'unknown';
		origin?: Location;
		location?: Location;
		image?: string;
		episode?: Array<Episode>;
		url?: string;
		created?: Date;
	};

	type Location = {
		id?: number;
		name?: string;
		type?: string;
		dimension?: string;
		residents?: Array<Character>;
		url?: string;
		created?: Date;
	};

	type Episode = {
		id?: number;
		name?: string;
		air_date?: string;
		episode?: string;
		characters?: Array<Character>;
		url?: string;
		created?: Date;
	};
}
