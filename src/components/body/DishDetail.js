import React from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap'
import LoadComments from './LoadComments'

const DishDetail = props => {
    return (
        <div>
            <Card className="my-2" style={{ textAlign: 'center' }}>
                <CardImg
                    alt="Card image cap"
                    src={props.dish.image}
                    style={{
                        height: 180
                    }}
                    top
                    width="100%"
                />
                <CardBody >
                    <CardTitle tag="h5">
                        {props.dish.name}
                    </CardTitle>
                    <CardText>
                        {props.dish.description}
                    </CardText>
                    <CardText>
                        {props.dish.price}
                    </CardText>
                </CardBody>
            </Card>
            <hr />
            <LoadComments comments={props.comments} style={{ textAlign: 'center' }} />
        </div>
    )
}

export default DishDetail