import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Home';

describe("Home component", () => {
    it("renders loading... before fetching API", () => {
        render(<Home />)
        screen.getByText('Loading...')
    })
    it("renders dogBreeds if request succeeds", async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => ['african'],
        });
        render(<Home />)
        const requests = await document.querySelector('#app')
        expect(requests).toBeNull();
        
    })
})


// import React from "react";
// import { shallow, mount, Enzyme } from "enzyme";
// import Home from './Home';
// import UserBreed from "./UserBreed";
// import { sendRequest } from './Home';

// describe("Home components", () => {

//     let wrapper;
//     beforeEach(() => {
//         wrapper = shallow(<Home />);
//       });

//     it('renders initial userBreed component', () => {
//         const wrapper = shallow(<Home />);
//         const userBreed = wrapper.find(UserBreed);
//         expect(userBreed).toHaveLength(0);
//     });

//     it('', () => {
//         const postSpy = jest.spyOn(sendRequest, 'get');
//         console.log(postSpy.debug())
//     }
//     )



//     // it("", () => {
//     //     const wrapper = shallow(<Home />);
//     //     const appState = wrapper.state();
//     // })


//     // it("should render correctly when isLoading is true", () => {
//     //     const wrapper = mount(<Home />);
//     //     const loadingNode = wrapper.find('[data-test-id="loading"]');
//     //     const dataNode = wrapper.find('[data-test-id="data"]');

//     //     const { fetchData } = sendRequest.getState();
//     //     expect(loadingNode.text()).toBe("Loading...");
//     // });
// });