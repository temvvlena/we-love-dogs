import React from 'react'
import { render, screen } from '@testing-library/react';
import Home from './Home';
import UserBreed from './UserBreed';
import { shallow } from "enzyme";


describe("rendering components", () => {
    it("renders Home component without crashing", () => {
        shallow(<Home />);
    });
    it("renders Userbreed component without crashing", () => {
        shallow(<UserBreed />);
    })
});

// describe("Async component", () => {
//     test('renders pictures if request succeeds', async () => {
//         window.fetch = jest.fn();
//         window.fetch.mockResolvedValueOnce({
//             json: async () => [{0: "affenpinscher"}],
//         });
//         render(<Home />)
        
//         const listItemElements = await screen.findAllByRole("listitem");
//         expect(listItemElements).not.toHaveLength(0);
//     });
// });