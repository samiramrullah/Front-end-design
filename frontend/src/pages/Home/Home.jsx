import HomeWrapper from '../../components/HomeWrapper'
import './Home.css'
const Home = () => {
  return (
    <HomeWrapper>
      <div className='main-wrap' style={{ height: '490px', background: '50%', position: '117px' }} >
        <div className='overlay'></div>
        <section>
          <div className='container'>
            <div className='row justify-content-end ms-auto' style={{ height: '170px', }}>

              <div className='col-lg-4 '>
                <div className="card " style={{ width: '300px', marginTop: '9rem' }}>
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
        <section style={{ zIndex: 1 }}>
          <div className='container'>
            <div className='row no-gutters slider-text  align-items-center justify-content-start' style={{ height: '429px', }}>
              <div className='col-md-7'>
                <h2>Welcome to Vacation Rental</h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    </HomeWrapper>
  )
}

export default Home