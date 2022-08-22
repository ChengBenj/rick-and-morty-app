import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import Router from './router';

import client from './services/api';

function App() {
	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</ApolloProvider>
	);
}

export default App;
