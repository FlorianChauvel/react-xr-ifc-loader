import { IFCLoader } from 'three/examples/jsm/loaders/IFCLoader';
import { useLoader } from '@react-three/fiber';

const Building = () => {
    const ifc = useLoader(IFCLoader, './rac_advanced_sample_project.ifc');
    return (
        <primitive object={ifc.scene} />
    );
}

export default Building;