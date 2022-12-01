import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { AuthProvider } from '../contexts/AuthContext';
import { store } from '../store';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<ConfigProvider
				theme={{
					token: {
						colorPrimary: '#4E9F3D',
					},
				}}
			>
				<AuthProvider>
					<Component {...pageProps} />
				</AuthProvider>
			</ConfigProvider>
		</Provider>
	);
}
