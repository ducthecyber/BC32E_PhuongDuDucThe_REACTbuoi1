import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <div>
        <section className="pt-4">
          <div className="container px-lg-5">
            {/* Page Features*/}
            <div className="row gx-lg-5">
              <div className="col-lg-3 col-xxl-4 mb-5">
                <div className="card bg-light border-0 h-100">
                  <div className="card-body text-center p-4 p-lg-3 pt-0 pt-lg-0" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-collection" /></div>
                    <h2 className="fs-4 fw-bold">Card title</h2>
                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam debitis impedit hic!</p>
                    <div className="mt-4">
                      <a className="btn btn-primary btn-lg" href="#!">Find Out More</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-xxl-4 mb-5">
                <div className="card bg-light border-0 h-100">
                  <div className="card-body text-center p-4 p-lg-3 pt-0 pt-lg-0" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-cloud-download" /></div>
                    <h2 className="fs-4 fw-bold">Card title</h2>
                    <p className="mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam praesentium explicabo eius illo alias repellat et?</p>
                    <div className="mt-4">
                      <a className="btn btn-primary btn-lg" href="#!">Find Out More</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-xxl-4 mb-5">
                <div className="card bg-light border-0 h-100">
                  <div className="card-body text-center p-4 p-lg-3 pt-0 pt-lg-0" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-card-heading" /></div>
                    <h2 className="fs-4 fw-bold">Card title</h2>
                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta possimus repellat laboriosam?</p>
                    <div className="mt-4">
                      <a className="btn btn-primary btn-lg" href="#!">Find Out More</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-xxl-4 mb-5">
                <div className="card bg-light border-0 h-100">
                  <div className="card-body text-center p-4 p-lg-3 pt-0 pt-lg-0" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-bootstrap" /></div>
                    <h2 className="fs-4 fw-bold">Card title</h2>
                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eaque nemo sequi delectus ducimus nulla recusandae!</p>
                    <div className='mt-5'>
                      <a className="btn btn-primary btn-lg" href="#!">Find Out More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
