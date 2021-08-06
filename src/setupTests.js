//!para probar compoenentes de react
//*solo si es con jest normal
// import '@testing-library/jest-dom/extend-expect';


//! para trabajar con enzyme

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createSerializer } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
