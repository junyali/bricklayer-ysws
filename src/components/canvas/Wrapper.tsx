import { useEffect, useState } from 'react';
import { Navigate } from 'react-router';
import { Canvas } from '../../routes/Canvas';

export function Wrapper() {
	const [isSupported, setIsSupported] = useState(true);

	useEffect(() => {
		const updateSupported = () => {
			setIsSupported(window.innerWidth >= 1024);
		};
		window.addEventListener('resize', updateSupported);
	}, []);

	if (!isSupported) {
		return <Navigate to="/notsupported" replace />;
	}

	return <Canvas />
}
