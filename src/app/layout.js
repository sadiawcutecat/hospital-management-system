import Footer from '@/Components/Footer/Footer';
import NavBar from '@/Components/NavBar/NavBar';
import { Inter } from 'next/font/google';
import AuthProvider from './context/AuthProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Health Care',
	description: 'Health Care',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" data-theme="light">
			<body className={inter.className}>
				<AuthProvider>
					<NavBar />
					{children}
					<Footer />
				</AuthProvider>
			</body>
		</html>
	);
}
