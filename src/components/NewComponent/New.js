import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import s from './New.css'
import { graphql, compose, withApollo } from 'react-apollo'
import gql from 'graphql-tag'

const allInitMessages = gql`
	query allInitMessages{
		allInitMessages {
			id
			createdAt
			message
		}
	}
`

class GraphcoolTest extends Component {

	constructor(props) {
		super(props)
		this.state = {
			graphcoolQuery: '',
		}
	}

	componentDidMount() {
		this._makeInitQuery()
	}

	render() {
		if (this.props.client.loading) {
      return (
        <div>loading</div>
      )
		}
		
		return (
			<div className={s.container}>
				Hello World
			</div>
		)
	}

	_makeInitQuery = async () => {
		const initQueryResult = await this.props.client.query({
			query: allInitMessages,
		})

		const parsedMessages = initQueryResult.data.allInitMessages.slice()
		console.log(parsedMessages)
	} 
}

GraphcoolTest.PropTypes = {
	allInitMessagesQuery: PropTypes.any.isRequired,
}

export default withApollo(GraphcoolTest)

