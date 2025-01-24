import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career 
          
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>12th</h4>
                <h5>City Public School</h5>
              </div>
              <h3>96%</h3>
            </div>
            <p>
              Completed my 12th grade with 96% marks in 2022.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>10th</h4>
                <h5>City Public School</h5>
              </div>
              <h3>75%</h3>
            </div>
            <p>
              Completed my 10th grade in 2020 with 75% marks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelors Of Computers Application</h4>
                <h5>Gl Bajaj Institute of Technology And Management</h5>
              </div>
              <h3>8CGPA</h3>
            </div>
            <p>
              Bachelors Of Computers Application from GL Bajaj Institute of Technology And Management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
