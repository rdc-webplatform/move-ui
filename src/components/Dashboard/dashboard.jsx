import MostUsedComponents from "./mostUsedComponents";
import TechStack from "../TechStack/techStack";
import styled from "styled-components";
import Button from "../Button/component";
import { useEffect } from "react";
import Counter from "../Counter/counter";
import Reviews from "../Reviews/Reviews";

const StyledDashboardComponent = styled.div``;

const Footer = styled.div`
  background-color: #808080;
  color: #a9a9a9;
  height: 200px;
  width: 100%;

  .anchor {
    color: #0000ff !important;
    float: right;
    margin-right: 20px;
  }

  .anchor:hover {
    color: #ff00ff !important;
  }
`;

const Dashboard = () => {

  useEffect(() => {
    const button = document.getElementById('btn');
    const searchButton = document.getElementById('search-btn');

    button.addEventListener('click', () => {
      // will do this later
      console.log('hi');
    });

    searchButton.addEventListener('click', () => {
      // will do this later
      console.log('hi');
    });
  });

  let license = `RealEstate.com provides unsurpassed real estate information, tools and professional expertise across a family of websites and mobile experiences for consumers and real estate professionals through all stages of the home journey. The RealEstate network includes: RealEstate.com®, Rentals.com and Houses.com™. Move also offers a complete solution of software products and services to help real estate professionals serve their clients and grow their business in a digital world. Move has the license to operate RealEstate.com® from the National Association of REALTORS®.\n
  Our membership is composed of residential and commercial brokers, salespeople, property managers, appraisers, counselors, and others engaged in the real estate industry. Members belong to one or more of approximately 1,200 local associations/boards and 54 state and territory associations of REALTORS®.\n
  The term REALTOR® is a registered collective membership mark that identifies a real estate professional who is a member of the National Association of REALTORS® and subscribes to its strict Code of Ethics.`

  const About = () => (
    <h3>
      About Move UI:
      Formerly branded as Real Estate UI, Move UI has thousands of stars on GitHub, ranking among the most popular React UI component libraries. The components rely on React, and also leverage styled-components. For those of you who need filling in, our Design takes inspiration from the physical world and textures while keeping the actual UI elements to a minimum.
      A wide range of helpful components are available, like app bars, auto complete, badges, buttons, cards, dialog boxes, icons, menus, sliders and more. Helpfully, Move UI also offers React themes and templates, so you can have a custom color theme for your app.
      We plan on doing all that cultivating our values:

      <p>Customer obsessed. We put our customers front & center.</p>


      <p>Transparency. Most of our work is public.</p>


      <p>Freedom. We work from anywhere in the world.</p>


      <p>Autonomy. We want to create a safe, high-trust team.</p>

      <p>Excellence. We're aiming high, and we know it.</p>
    </h3>
  );

  return (
    <StyledDashboardComponent>
      <h2>Move UI Dashboard</h2>
      <About></About>
      <div>
        <span>Example Counter component</span>
        <Counter label="Current count: "></Counter>
      </div>
      <div>
        <MostUsedComponents></MostUsedComponents>
        <Button id="btn">Click here for least used components</Button>
      </div>
      <div>
        <form>
          <input type="text" />
          <button id="search-btn">
            {/* Search icon */}
            &#128269;
          </button>
        </form>
      </div>
      <TechStack stack={[{
        name: 'NodeJS',
        src: 'https://nodejs.org/static/images/logo.svg',
        href: 'https://nodejs.org/en/'
      }, {
        name: 'React',
        src: 'https://res.cloudinary.com/practicaldev/image/fetch/s--3zWuwYa3--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pdib9r9rk5j1m7oala1p.png',
        href: 'https://reactjs.org/',
      }, {
        name: "Styled Components",
        src: "https://styled-components.com/logo.png",
        href: 'https://styled-components.com/'

      }]}></TechStack>
      <Reviews reviews={[{
        firstName: 'Scottie',
        lastName: 'Barnes',
        review: 'I love using this component library.',
        date: 'January 2nd, 2022',
      }, {
        firstName: 'Pascal',
        lastName: 'Siakam',
        review: '5 stars!',
        date: 'March 5th, 2021',
      }, {
        firstName: 'Fred',
        lastName: 'Vanvleet',
        review: 'This library has helped me scale my application 2x faster than any other library I have used before.',
        date: 'January 2nd, 2022',
      }]} />
      <Footer>
        <div>
          <img src="https://www.coolhouseplans.com/varnish-images/plans/80523/80523-b440.jpg" />
          <a class="anchor" href="moveui.com">Move UI</a>
          <a class="anchor" href="realestate.com">RealEstate.com</a>
          <a class="anchor" href="rentals.com">Rentals.com</a>
        </div>
        <div data-testid="license">
          {license}
        </div>
      </Footer>
    </StyledDashboardComponent>
  )
};

export default Dashboard;