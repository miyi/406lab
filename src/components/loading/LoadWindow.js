import React from 'react'
import Load_1_styles from './Load_1.scss'
import load_2_styles from './Load_2.css'

const Load_1 = () => {
	return(
		<div className='Load_1_styles.content'>
			<div className='Load_1_styles.title__box'>
				<h1 className='Load_1_styles.title--main'>
					<span>LAB406</span>
				</h1>
				<div className='Load_1_styles.title--border'/>
				<p className='Load_1_styles.title--sub'>
					<span>こんにちは世界</span>
				</p>
			</div>
		</div>
	)
}

const Load_2 = () => {
	return(
		<div className="load_2_styles.ring-2">
			<div className="load_2_styles.ball-holder">
					<div className="load_2_styles.ball"></div>
			</div>
		</div>
	)
}



export { Load_1, Load_2 }