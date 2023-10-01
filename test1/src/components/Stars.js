import React, {Component} from 'react';
import "./stars.css";

import {ReactComponent as IconStar}  from "../assets/icons/star.svg";

const raiting = Array.from({ length: 5 });


class Stars extends Component {
    render() {
        return (
            <div className={"stars"}>

                <IconStar/>
            </div>
        );
    }
}

export default Stars;