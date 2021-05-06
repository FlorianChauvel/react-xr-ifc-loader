import { useLoader } from '@react-three/fiber';
import { IFCLoader } from 'three/examples/jsm/loaders/IFCLoader';

const Building = ({ src }) => {
    const ifc = useLoader(IFCLoader, src);
    return (
        <primitive object={ifc} />
    );
}

export default Building;