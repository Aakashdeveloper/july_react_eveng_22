import React from 'react';
import Footer from '../Footer';
import {create} from 'react-test-renderer';

describe('SnapShot Test',() => {
    test('Testing Footer',() => {
        let tree = create(<Footer/>);
        expect(tree.toJSON()).toMatchSnapshot()
    })
})