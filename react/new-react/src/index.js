import React from 'react';
import { render } from 'react-dom';
import App from './App'

const renderDom = Component => {
    render(
        <Component name="guohao" />,
        document.getElementById('app')
    );
}
renderDom(App);