import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HomeComponent from '../../components/Home/Home';
import { getPlaylist } from "../../actions/actionsPlaylist";


@connect(state=>({
    data: state.playlist.data,
    isFetching: state.playlist.isFetching
}))

class Home extends Component {
    static propTypes = {};

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getPlaylist());
    }


    render() {
        const {
            data,
            isFetching
        } = this.props;
        return(
            <div>
                <HomeComponent data={ data }/>
            </div>
        );
    }
}

export default Home;