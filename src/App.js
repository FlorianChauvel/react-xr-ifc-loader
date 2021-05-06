
import { useState } from 'react';
import { VRCanvas, DefaultXRControllers } from '@react-three/xr';
import { IFCLoader } from 'three/examples/jsm/loaders/IFCLoader';

const App = () => {
	const [ifc, setIfc] = useState();
	
	const handleChange = ({ target }) => {
		const file = target.files[0];

		if (!file) {
			return;
		}

		const url = URL.createObjectURL(file);

		const loader = new IFCLoader();
		loader.load(url, geometry => setIfc(geometry));
	};

    return (
		<div className="main">
			<input onChange={handleChange} type="file" />
			<VRCanvas>
				<DefaultXRControllers />
				{ifc}
			</VRCanvas>
		</div>
	)
};

export default App;
