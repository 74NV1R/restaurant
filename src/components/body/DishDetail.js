import React from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap'
import LoadComments from './LoadComments'

const DishDetail = ({dish}) => {
  return (
    <div>
        <Card className="my-2" >
            <CardImg
            alt="Card image cap"
            src={dish.image}
            style={{
                height: 180
            }}
            top
            width="100%"
            />
            <CardBody style={{textAlign: 'left'}}>
            <CardTitle tag="h5">
                {dish.name}
            </CardTitle>
            <CardText>
                {dish.description}
            </CardText>
            <CardText>
               {dish.price}
            </CardText>
            </CardBody>
        </Card>
        <hr/>
        <LoadComments comments={dish.comments}/>
    </div>
  )
}

export default DishDetail