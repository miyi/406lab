import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import styles from './SingleCard.css'

export default class SingleCard extends Component {
  render() {
    const spacing = <pre>   </pre>
    return(
      <Card rounded={true} zDepth={0}>
        <CardMedia>
          <img src={this.props.profileImg} alt="" style={{height: 250}} />
        </CardMedia>
        <CardHeader
          title={"$" + this.props.hourlyWage + ' ' + this.props.rank}
          subtitle={this.props.name + '  ·  ' + this.props.distance + 'km away'}
          style={{padding:0, paddingTop:5,}}
          textStyle={{fontWeight:900}}
          // avatar={<Avatar src={this.props.profileImg} size={60} />}
        />
        {/* <CardTitle title={this.props.title} subtitle={this.props.hourlyWage} />
        <CardText>
          {this.props.detailInfo}
        </CardText>
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions> */}
      </Card>
    )
  }
}
