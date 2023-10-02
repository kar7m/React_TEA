import React, {Component} from 'react';
import PropTypes from "prop-types";

class Partner extends Component {
    render() {
        return (
                <img src={this.props.src} alt="partner"/>
        );
    }
}

Partner.propTypes={
    src:PropTypes.string.isRequired,
}

export default Partner;