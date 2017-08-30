import React from 'react'

import '../common/reset.less'
import '../common/layout.less'

import Header from './Header/Header.js'
import SkinList from './SkinList/SkinList.js'
import Slider from './Slider/Slider.jsx'

const Root = () => (
    <div className="layout-doc">
        <Header />
        <div className="layout-container">
            <div className="layout-container-left">
                <Slider />
                <SkinList />
            </div>
            <div className="layout-container-right"></div>
        </div>
        <div className="layout-header"></div>
    </div>
)

export default Root