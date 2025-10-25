import {OrpheusFlag} from './components/OrpheusFlag';
import {Footer} from './components/Footer';

function App() {
	return (
		<div className="min-h-screen flex flex-col">
			<div className="flex-grow">
				<OrpheusFlag />
			</div>
			<Footer />
		</div>
	)
}

export default App
