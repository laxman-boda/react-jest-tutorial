import {Enzyme} from 'enzyme'
import { EnzymeAdapter } from "enzyme-adapter-react-16";

Enzyme.configue({
    adapter:new EnzymeAdapter(),
    disableLifecycleMethods:true
})
