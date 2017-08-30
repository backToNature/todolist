import React from 'react'
import {Carousel} from 'element-react'
import './Slider.less'
import {Button, Tag, Icon} from '@tencent/comby-lib-mobile'


class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 2
        }
    }

    doClick() {
        this.setState({value: 1});
    }

    render() {
        return (
            <div className="Slider">
                <Button>fsdfsdff</Button>
                <Tag>fsdfsdff</Tag>
                <Icon>fsdfsdff</Icon>
                <div className="title" onClick={this.doClick.bind(this)}>精选</div>
                <div className="title">{this.state.value}</div>
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
    }
}

export default Slider