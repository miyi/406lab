import React, { Component } from 'react' ;
import style from './AdvMarker.scss';

class Marker extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<span>
				<div className={style.shadow} />
				<div className={style.pin} />	
			</span>	
		)
	}
}

export default Marker;
