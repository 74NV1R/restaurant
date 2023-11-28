import React, {Component, useState} from 'react'
import MenuItem from './MenuItem'
import DISHES from '../../data/dishes'
import DishDetail from './DishDetail'
import { Button, CardColumns, Modal, ModalFooter } from 'reactstrap'

class Menu extends Component{
    state = {
        dishes: DISHES,
        selectedDish: null,
        modalOpen: false
    }

    onSelectDish = (dish) => {
        this.setState({
            selectedDish: dish,
            modalOpen: true
        })
    }

    toggleModal = () =>{
        this.setState({
            modalOpen : !this.state.modalOpen,

        })
    }

    
    render(){
        const menu = this.state.dishes.map((dish)=> {
            return (
                <MenuItem dish = {dish} onSelectDish={this.onSelectDish} key = {dish.id}/>
            )
        })
    
        const dishDetail = this.state.selectedDish? <DishDetail dish = {this.state.selectedDish}/>: null
    

        return (
            <div className='container'>
                <div className='row'>
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>
                        {dishDetail}
                        <ModalFooter>
                            <Button color='primary' onClick={this.toggleModal}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </div>
        
            </div>
          )
        }
    }

  

export default Menu