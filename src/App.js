
import { Box } from '@react-three/drei';
import { VRCanvas, DefaultXRControllers } from '@react-three/xr';
import { Suspense } from 'react';
import Building from './Building';

const App = () => {

    return (
			<div className="main">
				<VRCanvas>
					<DefaultXRControllers />
					<Suspense fallback={<Box />}>
						<Building />
					</Suspense>
				</VRCanvas>
			</div>
	)
};

export default App;
