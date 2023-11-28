import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

const NavigationComponent = () => {
  return (
    <div>
        <Navbar
            color="dark"
            dark
        >
            <NavbarBrand href="/">
                Restaurant
            </NavbarBrand>
        </Navbar>
    </div>
  )
}

export default NavigationComponent