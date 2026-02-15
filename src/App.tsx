import './App.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPaintBrush, faGears, faDatabase, faTerminal, faRocket, faDownload, faSun, faMoon  } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import experience from './experience.json';
import skills from './skills.json';
import awards from './awards.json';




export default function App() {
    return (<main>
        <Header />
        <div className="topContainer">
            <Name></Name>
            <FullStack></FullStack>
        </div>
        <SearchBar />
        <Results />
        <Skills />
        <Experience />
        <Awards />

    </main>);
}

const Header = () => {
    return <div className="Header">
        <div className="topRightButtons">
            <FontAwesomeIcon icon={faDownload} />
            <FontAwesomeIcon icon={faSun} />
            <FontAwesomeIcon icon={faMoon   } />
        </div>
    </div>
}

const Name = () => {
    return <div>
        <div className="Name">Julian Badillo</div>
        <div className="Title">
            <FontAwesomeIcon icon={faRocket} />
            {' '}
            Fullstack Engineer
            {' '}
            <a href="https://github.com/julianbadillo/" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://github.com/juli4nb4dillo/" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/juli4nb4dillo/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
    </div>;
}

const FullStack = () => {
    return <div className="FullStack">
        <div><FontAwesomeIcon icon={faPaintBrush} /> Front End</div>
        <div><FontAwesomeIcon icon={faGears} /> Back End</div>
        <div><FontAwesomeIcon icon={faDatabase} /> Databases</div>
    </div>
}

const SearchBar = () => {
    const [searchText, setSearchText] = useState('');

    const onTextChange = (event) => {
        setSearchText(event.target.value);
    }
    return <div className="SearchBar">
        <FontAwesomeIcon icon={faTerminal} className="terminalIcon blinking" />
        <input type="text" value={searchText} onChange={onTextChange} placeholder="Search" />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
    </div>
}

const Results = () => {
    return <div><h2>Results</h2></div>
}



const Skills = () => {
    return <div>
        <h2>Skills</h2>
        {skills.map((obj, idx) =>
            <Card key={obj.skill} title={obj.skill}>
                <ul className="Bullet">
                    {obj.items.map((item) =>
                        <li key={item.name}>{item.name} <FontAwesomeIcon icon={item.icon} /></li>)}
                </ul>
            </Card>)}
    </div>;
}

const Experience = () => {
    return <div>
        <h2>Experience</h2>
        {experience.map((obj, idx) =>
            <Card key={obj.company} title={`${obj.company}  ${obj.from}-${obj.until}`}>
                <p>{obj.company}</p>
                <p>Accomplishments</p>
                {obj.accomplishments.map((obj) => <p>{obj}</p>)}
            </Card>)}
    </div>;
}


const Awards = () => {
    return <Card title="Awards">
        {awards.map((obj, idx) => <p key={obj.id}>{obj.year}: {obj.name}</p>)}
    </Card>
}

const Card = ({ title, children }) => {
    return <div className="Card">
        <div className="CardHeader">{title}</div>
        <div className="CardBody">
            {children}
        </div>
    </div>
}