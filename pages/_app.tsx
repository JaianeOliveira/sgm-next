import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../layout';
import { ConfigProvider, Button } from 'antd';
import { Provider } from 'react-redux';
import { store } from '../store';

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
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ConfigProvider>
		</Provider>
	);
}
