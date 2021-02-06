import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Home from "../Home";


jest.mock('../IOSVideoModule', () => ({ getVideoData: jest.fn(function () {
        return "[ { \"description\" : \"The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.\",\n" +
            "            \"sources\" : [ \"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4\" ],\n" +
            "            \"subtitle\" : \"By Garage419\",\n" +
            "            \"thumb\" : \"images/WhatCarCanYouGetForAGrand.jpg\",\n" +
            "            \"title\" : \"What care can you get for a grand?\"\n" +
            "        }\n" +
            "    ]";
    }) }))


it('renders correctly', () => {
    renderer.create(<Home />);
});

describe('<Home />', () => {
    it('has 1 child', () => {
        const tree = renderer.create(<Home />).toJSON();
        expect(tree.children.length).toBe(1);
        expect(tree.children[0].children.length).toBe(1);
    });
});
