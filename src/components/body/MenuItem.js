import React from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'

const MenuItem = ({dish, onSelectDish}) => {
    return (
        <div>
        <Card inverse style={{padding: "10px", margin: "10px", cursor: 'pointer'}} onClick={()=>onSelectDish(dish)}>
          <CardImg
            alt={dish.name}
            src={dish.image}
            style={{
              height: "100%",
              opacity: 0.5
            }}
            width="100%"
          />
          <CardImgOverlay>
            <CardTitle tag="h5" style={{fontSize: 25, fontWeight: "bold", color: "black"}}>
              {dish.name}
            </CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
  )
}

export default MenuItem