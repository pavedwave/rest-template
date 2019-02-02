import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';
import Home from "./components/HomeComponent";
import Footer from "./components/FooterComponent";
import About from "./components/AboutComponent";

// https://facebook.github.io/create-react-app/docs/running-tests#initializing-test-environment

// 1. npm install --save enzyme enzyme-adapter-react-16 react-test-renderer
// 2. create src/setupTests.js file


// #001 Test only renders App  (shallow rendering)
it('renders without crashing', () => {
  shallow(<App />);
});

// #002 Test rendering of App and DOM creation
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// #003 Test title

it('renders expected message', () => {
  const wrapper = shallow(<App />);
  const welcome = <h1>Double J Saloon</h1>;
  // expect(wrapper.contains(welcome)).toBe(true);
  expect(wrapper.contains(welcome)).toEqual(true);
  
});


// #004 Test Home Component
// https://medium.freecodecamp.org/the-right-way-to-test-react-components-548a4736ab22

describe("Home", () => {
  let props;
  let mountedHome;
  const home = () => {
    if (!mountedHome) {
      mountedHome = mount(
        <Home {...props} />
      );
    }
    return mountedHome;
  }

  beforeEach(() => {
    props = {
      dish: undefined,
      promotion: undefined,
      leader: undefined,
    };
    mountedHome = undefined;
  });
  
  // All tests will go here

  it("always renders a div", () => {
    const divs = home().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });
});


// #005 Test Footer Component
// https://medium.freecodecamp.org/the-right-way-to-test-react-components-548a4736ab22

describe("Footer", () => {
  let props;
  let mountedFooter;
  const footer = () => {
    if (!mountedFooter) {
      mountedFooter = mount(
        <Footer {...props} />
      );
    }
    return mountedFooter;
  }

  beforeEach(() => {
    props = {
      dish: undefined,
      promotion: undefined,
      leader: undefined,
    };
    mountedFooter = undefined;
  });
  
  // All tests will go here

  it("always renders a div", () => {
    const divs = footer().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });
});


// #006 Test About Component
// https://medium.freecodecamp.org/the-right-way-to-test-react-components-548a4736ab22

describe("About", () => {
  let props;
  let mountedAbout;
  const about = () => {
    if (!mountedAbout) {
      mountedAbout = mount(
        <About {...props} />
      );
    }
    return mountedAbout;
  }

  beforeEach(() => {
    props = {
      dish: undefined,
      promotion: undefined,
      leader: undefined,
    };
    mountedAbout = undefined;
  });
  
  // All tests will go here

  it("always renders a div", () => {
    const divs = about().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });
});
