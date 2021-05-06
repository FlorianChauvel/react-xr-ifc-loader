import { useLoader } from '@react-three/fiber';
import { IFCLoader } from 'three/examples/jsm/loaders/IFCLoader';

const Building = () => {
    const ifc = useLoader(IFCLoader, './rac_advanced_sample_project.ifc');
    return (
        <primitive object={ifc} />
    );
}

export default Building;