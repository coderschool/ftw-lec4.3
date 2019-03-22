import React, { Component } from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Col
} from 'reactstrap';

//for Mega Movie, to show the image poster,
// attached the poster_path to the 
// `baseurl` https://image.tmdb.org/t/p/w500/

export default class Movie extends Component {
  render() {
    return (
      <div>
        <Col xs="4">
          <Card>
          <CardImg top width="100%" src={'https://image.tmdb.org/t/p/w500' + this.props.poster_path}  />
          <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
            <CardText>{this.props.overview}</CardText>
          </CardBody>
        </Card>
        </Col>
      </div>
    )
  }
}
