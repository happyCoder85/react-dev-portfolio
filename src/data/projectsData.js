import MemBankImage from '../assets/memBank.png';
import FakeSitesImage from '../assets/FakeSites.png';
import DailyOracleImage from '../assets/DailyOracle.png';
import WeatherAppImage from '../assets/copy.png';

import HTMLLogo from '../assets/tech-stack/htmllogo.png';
import CSSLogo from '../assets/tech-stack/csslogo.png';
import JSLogo from '../assets/tech-stack/js-logo.png';
import ReactLogo from '../assets/tech-stack/react.png';
import PythonLogo from '../assets/tech-stack/python.png';

const projects = [
  {
    id: 1,
    title: 'Fake Sites',
    description: ["Fake Sites is a creative initiative designed to push the boundaries of web development and design.", 
                  "This project involves creating fictional personas and businesses, each with their own distinct identity and set of requirements.",
                  "The goal is to explore innovative web solutions and demonstrate what’s possible when creativity is combined with cutting-edge technology.",],
    image: FakeSitesImage,
    link: 'https://fakesites.jonspurling.ca',
    github: 'https://github.com/happyCoder85/FakeSites',
    techStack: [HTMLLogo, CSSLogo, JSLogo],
  },
  {
    id: 2,
    title: 'DailyOracle',
    description: ["Daily Oracle is a modern journaling app tailored for the 21st century lifestyle, enabling users to meticulously track every aspect of their daily lives.",
                  "Users can create custom segments such as Feelings, Thoughts, Hunger Levels, and consumption of cigarettes, drinks, or other substances.",
                  "The app supports the creation of subcategories for people, places, and more, allowing for comprehensive life documentation."],
    image: DailyOracleImage,
    link: '',
    github: 'https://github.com/DailyOracle',
    techStack: [ReactLogo]
  },
  {
    id: 3,
    title: 'Weather App',
    description: ["The Weather Processing App fetches historical weather data from Environment Canada for Winnipeg, Manitoba, dating back to 1996.",
      "It allows users to generate box and line plot charts based on the retrieved weather data.",
      "The app incorporates threading to optimize data processing and includes a graphical user interface (GUI) for user interaction."],
    image: WeatherAppImage,
    link: 'http://your-weather-app-link.com',
    github: 'http://github.com/your-weather-app-repo',
    techStack: [PythonLogo],
  },
];

export default projects;
