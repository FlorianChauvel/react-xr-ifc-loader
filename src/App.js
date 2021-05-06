import { Suspense } from 'react';
import { Box } from '@react-three/drei';
import { VRCanvas, DefaultXRControllers } from '@react-three/xr';

import Building from './Building';

import './App.css';

const App = () => (
	<div className="main">
		<VRCanvas>
			<DefaultXRControllers />
			

			<ambientLight color="#ffeeff" position={[1, 1, 1]} />
			<ambientLight color="#ffffff" position={[-1, 0.5, -1]} />

			<Suspense fallback={<Box />}>
				<Building src={'small.ifc'} />
			</Suspense>

		</VRCanvas>
	</div>
);

export default App;
