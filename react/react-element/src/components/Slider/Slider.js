import React from 'react'
import {Carousel} from 'element-react'
import './Slider.less'

const Slider = () => (
    <div className="Slider">
        <div className="title">精选</div>
        <Carousel trigger="click" height="210px" autoplay={false}>
          {
            [1,2,3,4].map((item, index) => {
              return (
                <Carousel.Item key={index}>
                    <li className="bg">
                        <div className="detail">
                            <p className="title"></p>
                            <p className="cnname">梵高《星爷》</p>
                            <p className="buttons">
                                <span className="use-button">使用</span>
                            </p>
                        </div>
                        <div className="skin-example">
                            <div className="skin-container">
                                <img src="http://stdl.qq.com/stdl/skin/upload/skinpicture/skinimage_67.png" draggable="false"/>
                            </div>
                            <div className="browser-body"></div>
                        </div>
                    </li>
                </Carousel.Item>
              )
            })
          }
        </Carousel>
    </div>
)

export default Slider