import React, { Component, useState } from 'react'
import MenuItem from './MenuItem'
import DISHES from '../../data/dishes'
import DishDetail from './DishDetail'
import COMMENTS from '../../data/comments.js'
import { Button, CardColumns, Modal, ModalFooter } from 'reactstrap'

class Menu extends Component {


    state = {
        dishes: DISHES,
        comments: COMMENTS,
        selectedDish: null,
        modalOpen: false
    }

    onSelectDish = (dish) => {
        this.setState({
            selectedDish: dish,
            modalOpen: true
        })
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen,

        })
    }


    render() {
        document.title = 'Menu'

        const menu = this.state.dishes.map((dish) => {
            return (
                <MenuItem dish={dish} onSelectDish={this.onSelectDish} key={dish.id} />
            )
        })

        let dishDetail = null
        if (this.state.selectedDish != null) {
            const comments = this.state.comments.filter(comment => {
                return comment.dishId === this.state.selectedDish.id
            })
            dishDetail = <DishDetail
                dish={this.state.selectedDish}
                comments={comments}
            />
        }


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