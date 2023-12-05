import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap'

export class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
      agree: false,
      contacttype: 'Tel.',
      message: ""
    }
  }

  render() {
    return (
      <div>
        <div className='container'>
          <div className='row row-content' style={{ paddingLeft: "20px", textAlign: "left" }}>
            <div className='col-12 col-md-7'>
              <h3>
                Send use your feedback
              </h3>
            </div>
            <div className='col-12'>
              <Form>
                <FormGroup row>
                  <Label htmlFor='firstname' md={2}>First Name</Label>
                  <Col md={10}>
                    <Input type='text' name='firstname' placeholder='First Name' value={this.state.firstname} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor='firstname' md={2}>Last Name</Label>
                  <Col md={10}>
                    <Input type='text' name='laststname' placeholder='Last Name' value={this.state.lastname} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor='telnum' md={2}>Contact Num.</Label>
                  <Col md={10}>
                    <Input type='text' name='telnum' placeholder='Tel. Number' value={this.state.telnum} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor='email' md={2}>Email</Label>
                  <Col md={10}>
                    <Input type='text' name='email' placeholder='Email' value={this.state.email} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md={{ size: 6, offset: 2 }}>
                    <FormGroup check>
                      <Label check>
                        <Input type='checkbox' name='agree' checked={this.state.agree} /> <strong>May we contact you?</strong>

                      </Label>
                    </FormGroup>
                  </Col>
                  <Col md={{ size: 3, offset: 1 }}>
                    <input type='select' name='contactType' value={this.state.contacttype}>
                      <option>Tel.</option>
                      <option>Email</option>

                    </input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor='message' md={2}>Your Feedback</Label>
                  <Col md={10}>
                    <Input type='textarea' name='message' value={this.state.message} rows="12">

                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col md={{ size: 10, offset: 2 }}>
                    <Button type='submit' color='primary'>
                      Send Feedback
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Contact