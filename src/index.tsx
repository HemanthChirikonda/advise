import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.jsx';
import { NotFound } from './pages/_404.jsx';
import './style.css';
import { AboutUs } from './pages/AboutUs/index.js';
import { Services } from './pages/Services/index.js';
import Footer from './components/Footer/Footer.js';
import Home2 from './pages/Home2/index.js';
import Study from './pages/Study/index.js';
import Migration from './pages/Migration/index.js';
import Blog from './pages/Blog/Blog.js';
import Contact from './pages/Contact/Contact.js';
import BookingModel from './components/BookingModel/BookingModel.js';

export function App() {
	return (
		<LocationProvider>
			<Header />
			<BookingModel/>
			<main>
				<Router>
					<Route path="/" component={Home2} />
					<Route path='/about-us' component={AboutUs}/>
					<Route path='/study' component={Study}/>
					<Route path='/migration' component={Migration}/>
					<Route path='/services' component={Services}/>
					<Route path='/blog' component={Blog}/>
					<Route path='/contact' component={Contact}/>
					<Route default component={NotFound} />
				</Router>
			</main>
			<Footer/>
		</LocationProvider>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
