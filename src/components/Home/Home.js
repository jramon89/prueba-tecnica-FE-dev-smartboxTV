import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from "../Common/Slider/Slider";
import Modal from "../Common/Modal/Modal";

class Home extends Component {
    static propTypes = {
        data: PropTypes.object
    };

    constructor(props){
        super(props);
        this.state = {
            items:'',
            isOpen: false,
            details: ''
        };

        this.onClick = this.onClick.bind(this);

    }
    componentWillReceiveProps(nextProps, nextContext) {

        const { data } = nextProps;
        const images = [];

        data.items.map((value) => {
            const img = value.images.find((image) => {
                return image.type === 'backdrop'
            });

            const video = value.videos.length ?
                `https://mychannel.nunchee.tv/api/assets/videos/view/${value.videos[0]._id}?type=backdrop&scale=90&placeholder=true`: '';

            if (img && img._id) {
                images.push({
                    src: `https://mychannel.nunchee.tv/api/assets/images/view/${img._id}?type=backdrop&scale=90&placeholder=true`,
                    title: value.title.original,
                    description: value.description ? value.description : {},
                    video,
                });
            }
        });

        this.setState({
            items: images
        });
    }

    render() {
        const {
            items,
            details,
            isOpen
        } = this.state;

        return(
            <div>
                <Modal
                    isOpen={ isOpen }
                    modalBgColor={'rgba(29,29,29,0.5)'}>
                    <div className={'serie-details'}>
                        <div className={'description'}>
                            <div className={'title'}>
                                { details.title }
                            </div>
                            {
                                details.description && details.description.plain ?
                                    details.description.plain.original : 'No description'
                            }
                        </div>
                        <div className={'video'}>
                            <video poster={details.src} controls={'controls'} tabIndex={0}>
                                <source/>
                            </video>
                        </div>
                    </div>
                </Modal>
                <div className={'Slider'}>
                    <Slider
                        onClick={ this.onClick }
                        bullets={ true }
                        previews={ true }
                        items={ [...items]}
                        animation={'slide'}/>
                </div>
            </div>
        );
    }

    onClick(values) {
        this.setState({
           isOpen: true,
           details: values
        });
    }
}

export default Home;