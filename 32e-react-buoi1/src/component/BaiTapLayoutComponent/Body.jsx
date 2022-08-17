import React, { Component } from 'react'

export default class Body extends Component {
  render() {
    return (
      <div>
        <header className="py-5">
          <div className="container px-lg-5">
            <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
              <div className="" style={{textAlign: "left",paddingLeft:"0px!important"}}>
                <h1 className="display-8 fw-light text-capitalize" style={{fontSize:"50px"}}>A warm welcome!</h1>
                <p className="fs-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis voluptates incidunt in molestias? Unde labore officiis expedita, molestias dolores laboriosam?</p>
                <a className="btn btn-primary btn-lg" href="#!">Call to action</a>
              </div>
            </div>
          </div>
        </header>

      </div>
    )
  }
}
