const Portfolio = () => {
  return (
    <div className="row my-3">
      <div className="col-2 d-flex align-items-center">
        <p>Projects</p>
      </div>
      <div className="col-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 project-box my-3 mx-3">
              <div className="container">
                <div className="row">
                  <h4 className="col-12">project name</h4>
                  <h4 className="col-12">languages used</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 project-box my-3 mx-3"></div>
            <div className="col-lg-3 project-box my-3 mx-3"></div>
            <div className="col-lg-3 project-box my-3 mx-3"></div>
            <div className="col-lg-3 project-box my-3 mx-3"></div>
            <div className="col-lg-3 project-box my-3 mx-3"></div>
            <div className="col-lg-3 project-box my-3 mx-3"></div>
            <div className="col-lg-3 project-box my-3 mx-3"></div>
            <div className="col-lg-3 project-box my-3 mx-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
