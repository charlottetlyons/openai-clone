import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/AppContainers.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Chatbox from './components/Chatbox/Chatbox.jsx';
import './styles.css'; 

const App = () => {
    return <AppContainer>
        <Sidebar />
        <Chatbox />
    </AppContainer>;
};

// TODO: update use of deprecated render method 
ReactDOM.render(<App />, document.getElementById('root'));