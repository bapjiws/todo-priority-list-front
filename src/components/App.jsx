import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../../redux/configureStore';

import '../../styles/main';

import UserInput from './UserInput';

const App = () => {
    return <Provider store={configureStore()}>
        <UserInput/>
    </Provider>
};

export default App;