function Contact() {
  return (
    <form className="container mt-4">
      <div className="form-group row">
        <label for="contactName" className="col-sm-2 col-form-label">
          Name
        </label>
        <div className="col-sm-10">
          <input
            type="name"
            className="form-control"
            id="contactName"
            placeholder="Name"
          />
        </div>
      </div>
      <div className="form-group row">
        <label for="inputEmail3" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="email"
            className="form-control"
            id="inputEmail3"
            placeholder="Email"
          />
        </div>
      </div>

      <div className="form-group row">
        <label for="contactName" className="col-sm-2 col-form-label">
          Message
        </label>
        <div className="col-sm-10">
          <textarea
            class="form-control"
            id="FormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>

      <fieldset className="form-group">
        <div className="row">
          <legend className="col-form-label col-sm-2 pt-0">
            Contact Reason
          </legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                value="option1"
                checked
              />
              <label className="form-check-label" for="gridRadios1">
                Employer / Recruiter
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                value="option2"
              />
              <label className="form-check-label" for="gridRadios2">
                Networking
              </label>
            </div>
            <div className="form-check disabled">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios3"
                value="option3"
              />
              <label className="form-check-label" for="gridRadios3">
                Project Questions
              </label>
            </div>
          </div>
        </div>
      </fieldset>

      <div className="form-group row text-center">
        <div className="col-sm-12">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default Contact;
