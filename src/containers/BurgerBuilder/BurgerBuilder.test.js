import React from 'react';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import {BurgerBuilder} from './BurgerBuilder';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

Enzyme.configure({ adapter: new Adapter() });

describe('<BurgerBuilder/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = Enzyme.shallow(<BurgerBuilder onInitIngredients={() => {}}/>);
    });

    it('should render <BuildControls /> when receiving ingredients', () => {
        wrapper.setProps({ings: {salad: 0},price:4});
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    });

});