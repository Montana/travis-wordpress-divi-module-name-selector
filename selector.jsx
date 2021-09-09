import React, { Component } from 'react';
import Swiper from 'swiper';
import './style.css';

// Internal dependencies


class Prefix_Module_Name extends Component {
  static slug = "prefix_module_name"; // Travis slug can be called by $SLUG -> Montana for example has this laid out in PostQuery. 

  static css(props) {
    const additionalCss = [];

    return additionalCss;
  }

  render() {
    return <div className="wrap"> {this.props.content} </div>;
  }
}
