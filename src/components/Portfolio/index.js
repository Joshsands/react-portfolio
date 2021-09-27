
const Portfolio = () => {
    return (
      <article className="container">
            <div className="row my-3">
            <div className="col-2 d-flex align-items-center">
              <p>Projects</p>
            </div>
            <div className="col-10">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 project-box my-3 mx-3">
                    <div className="container">
                      <div className="row justify-content-center">
                        <h4 className="col-12 text-white">LifeFinder</h4>
                        <h4 className="col-12 text-white">JS/HTML/CSS</h4>
                        <img className="proj-img" src={require("../../assets/images/lifeFinder.png").default} alt="Joshua Sands profile" /> 
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 project-box my-3 mx-3">
                    <div className="container">
                      <div className="row justify-content-center">
                        <h4 className="col-12 text-white">Git It Done</h4>
                        <h4 className="col-12 text-white">JS/HTML/CSS</h4>
                        <img className="proj-img" src={require("../../assets/images/git-it-done.png").default} alt="Joshua Sands profile" /> 
                      </div>
                    </div>
                    </div>
                  <div className="col-lg-3 project-box my-3 mx-3">
                  <div className="container">
                      <div className="row justify-content-center">
                        <h4 className="col-12 text-white">Run Buddy</h4>
                        <h4 className="col-12 text-white">JS/HTML/CSS</h4>
                        <img className="proj-img" src={require("../../assets/images/run-buddy-thumbnail.png").default} alt="Joshua Sands profile" /> 
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 project-box my-3 mx-3">
                  <div className="container">
                      <div className="row justify-content-center">
                        <h4 className="col-12 text-white">Scheduler</h4>
                        <h4 className="col-12 text-white">JS/HTML/CSS</h4>
                        <img className="proj-img" src={require("../../assets/images/scheduler.png").default} alt="Joshua Sands profile" /> 
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 project-box my-3 mx-3">
                  <div className="container">
                      <div className="row justify-content-center">
                        <h4 className="col-12 text-white">Weather Dashboard</h4>
                        <h4 className="col-12 text-white">JS/HTML/CSS</h4>
                        <img className="proj-img" src={require("../../assets/images/weather-dashboard.png").default} alt="Joshua Sands profile" /> 
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 project-box my-3 mx-3">
                  <div className="container">
                      <div className="row justify-content-center">
                        <h4 className="col-12 text-white">Coding Quiz</h4>
                        <h4 className="col-12 text-white">JS/HTML/CSS</h4>
                        <img className="proj-img" src={require("../../assets/images/codingquiz.png").default} alt="Joshua Sands profile" /> 
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 project-box my-3 mx-3">
                  <div className="container">
                      <div className="row justify-content-center">
                        <h4 className="col-12 text-white">FindMyBoards</h4>
                        <h4 className="col-12 text-white">NodeJS/MySQL</h4>
                        <img className="proj-img" src={require("../../assets/images/findmyboards-snapshot.png").default} alt="Joshua Sands profile" /> 
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 project-box my-3 mx-3">
                  <div className="container">
                      <div className="row justify-content-center">
                        <h4 className="col-12 text-white">DigitalLedger</h4>
                        <h4 className="col-12 text-white">NodeJS/MongoDB</h4>
                        <img className="proj-img" src={require("../../assets/images/digital-ledger.png").default} alt="Joshua Sands profile" /> 
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 project-box my-3 mx-3">
                  <div className="container">
                      <div className="row justify-content-center">
                        <h4 className="col-12 text-white">LifeFinder</h4>
                        <h4 className="col-12 text-white">NodeJS/MySQL</h4>
                        <img className="proj-img" src={require("../../assets/images/ones-zeros.png").default} alt="Joshua Sands profile" /> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </article>
    )
}

export default Portfolio;

