import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { Home } from './pages/Home';
import { ToastProvider } from './context';
import { THEME } from './global';

function App() {

	return (
		<ThemeProvider theme ={THEME}>
			<ToastProvider>
				<div className="App">
					<Home />
				</div>
				<ToastContainer />

			</ToastProvider>
		</ThemeProvider>
	);
}

export default App;
