import HomeWrapper from '../../components/HomeWrapper'
import './Home.css'
const Home = () => {
  return (
    <HomeWrapper>
      <div className='main-wrap' style={{ height: '490px', background: '50%', position: '117px' }} >
        {/* <div className='overlay'></div> */}

        <section>
          <div className='container'>
            <div className='row' >
              <div className="col-8 ml-5 " style={{ marginTop: '6rem' }}>

                <div className="row  d-flex align-items-end">
                  <h1 className='title'>Welcome to Cred Adda</h1>
                </div>
                <form className=' row mt-5 mb-3  d-flex align-items-center' >
                  <div class="form-group row">
                    <div className='col'>
                      <select className="form-select" aria-label="Default select example" >
                        <option>India</option>
                        <option>Chanda</option>
                      </select>
                    </div>
                    <div className='col'>
                      <input type={'number'} class="form-control mb-2" placeholder="Enter amount" required />

                    </div>

                    <div className='col'>
                      <select className="form-select" aria-label="Default select example" >
                        <option>Canada</option>
                        <option>India</option>
                      </select>
                    </div>
                    <div className='col d-flex justify-content-center '>
                      <button type="submit" class="btn btn-outline-dark">Submit</button>
                    </div>

                  </div>


                </form>

              </div>
              <div className='col-auto'>
                <div className="card " style={{ width: '300px', marginTop: '5rem' }}>
                  <div className="card-header">
                    <div className="container d-flex justify-content-center my-1">
                      <div class="btn-group btn-group-toggle" data-toggle="buttons">
                        <button class="btn btn-outline-dark active">
                          <span type="radio" name="options" id="option1" autocomplete="off" checked /> Sign In
                        </button>
                        <button class="btn btn-outline-dark">
                          <span type="radio" name="options" id="option2" autocomplete="off" /> Log In
                        </button>

                      </div>
                    </div>

                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </HomeWrapper>
  )
}

export default Home