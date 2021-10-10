import React, { Fragment } from "react";

const Landing = () => {
  return (
    <Fragment>
      <section className="landing">
        <div className="landing-inner">
          <div className="formpage">
            <form>
              <div className="form">
                <div className="form-group">
                  <label> </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="User name"
                    name="name"
                  ></input>
                </div>
                <div className="form-group">
                  <label> </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Driving school name"
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <label> </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Phone number"
                    name="password"
                  />
                </div>
                <div className="form-group">
                  <label> </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    name="email"
                  ></input>
                </div>
                <div className="form-group">
                  <label> </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                    name="password"
                  />
                </div>
                <br />
                <div className="form-message">
                  <label> </label>
                  <input
                    type="text1"
                    className="form-message-in"
                    placeholder="  £20 giftcard when you accept your first job "
                  />
                </div>
                <br />
                <input
                  type="button"
                  className="bottom"
                  value="Input Button"
                ></input>
              </div>
              <br />
            </form>
          </div>
          <div className="advertise">
            <div>Become a Rated</div>
            <div className="advertise_b">Driving Partner</div>
          </div>
        </div>
        <div className="advise_content">
          {" "}
          Join over 250 instructors growing their business with Rated Driving
        </div>
        <div className="bus-controller"> </div>
        <br />
        <div className="rect-card">
          <div className="react-card partner">
            {" "}
            Why partner with Rated Driving?{" "}
          </div>
          <div className="Phone-image">
            <p style={{top:"200px",left:"3rem",color:"white",position:"absolute"}}>Rated Driving Partner</p>
             </div>
          <div className="cards-left">
            <div className="cards-left vector"></div>
            <br />
            <h6
              style={{
                top: "50px",
                left: "1.5em",
                color: "darkblack",
                position: "absolute",
              }}
            >
              We’re not a franchise
            </h6>
            <p
              style={{
                top: "80px",
                left: "1.5em",
                right: "0.5rem",
                position: "absolute",
              }}
            >
              We’re not a franchise You run your business. You set your prices
              commitments
            </p>
            {/* <div className="paragraph">
              <p>
              We’re not a franchise You run your business. You set your prices
              commitments
              </p>
            </div> */}
          </div>
          <br />
          <div className="react-card cards-right">
            <div className="cards-right learner-vector"></div>
            <h6
              style={{
                top: "50px",
                left: "1.5em",
                color: "darkblack",
                position: "absolute",
              }}
            >
              More Learners
            </h6>
            <p
              style={{
                top: "80px",
                left: "1.5em",
                right: "0.5rem",
                position: "absolute",
              }}
            >
              Flexible diaty filling. Join a well oiled marketing machine and
              take on as many or as few learner jobs as you like
            </p>
          </div>
          <div className="cards1-left">
            <div className="start-vector" />
            <h6
              style={{
                top: "50px",
                left: "1.5em",
                color: "darkblack",
                position: "absolute",
              }}
            >
              Start Fast
            </h6>
            <p
              style={{
                top: "80px",
                left: "1.5em",
                right: "0.5rem",
                position: "absolute",
              }}
            >
              We aim to match you with an learner within 24 hours and get you on
              the road within 7 days.
            </p>
          </div>
          <div className="cards1-right">
            <div className="make-easir-vector"> </div>
            <h6
              style={{
                top: "50px",
                left: "1.5em",
                color: "darkblack",
                position: "absolute",
              }}
            >
              More Learners
            </h6>
            <p
              style={{
                top: "80px",
                left: "1.5em",
                right: "0.5rem",
                position: "absolute",
              }}
            >
              Flexible diaty filling. Join a well oiled marketing machine and
              take on as many or as few learner jobs as you like
            </p>
          </div>
        </div>
        <div className="getstarted">
          <div className="myDIV">
            <h5 style={{ color: "white", top: "10px" }}>Get started now</h5>
            <p style={{ color: "white" }}>
              Get set up and start earning instantly with our DriveThru
              <p style={{ color: "white" }}>onboarding programme</p>
            </p>
            <button className="started-bottom">Join now</button>
          </div>
        </div>
        <div className="transparent-page">
          <div className="partner"> Simple, transparent, secure </div>
          <div className="Uber-screen"></div>
          <div className="transparent-cards">
            <div className="free-vector">
              <p style={{left:"1rem",top:"11rem", position: "absolute"}}>Free for instructors</p>
            </div>
            <div className="deposit">
              <p style={{top:"11rem", position: "absolute",}}>Deposits on Enquiry</p>
            </div>
            <div className="secure">
              <p  style={{left:"2rem",top:"14rem", position: "absolute",color:"bold"}}>Secure Payment</p>
            </div>
            <div className="payment">
              <p style={{left:"2rem",top:"14rem", position: "absolute",color:"bold"}}>Payment in Advance</p>

            </div>

        </div>
        </div>
        <div className="Next-page">
          <h1
            style={{
              color: "white",
              position: "absolute",
              left: "370px",
              margin: "3rem",
            }}
          >
            {" "}
            Latest fee structure{" "}
          </h1>
          <br />
          <div className="Strecture"/>
        </div>
        <div className="prsetation-page">
          <div className="contener-easier">
            <h4 style={{ font: "bold", width: "100", top: "2rem" }}>
              {" "}
              Make life easier{" "}
            </h4>
            <p>
              Manage your diary on the go with powerful diary management tools.
              Push notifications and reminders for both yo and the learner to
              ensure minimal cancellations. Take payments from learners anytime
              with our integrated payment system
            </p>
            <p>1. Manage your learners on the go.</p>
            <p>2.Instant message learners.</p>
            <p>3.Take payments from learners.</p>
            <button className="bottom-click"> Join now</button>
          </div>
          <div className="blueBackground">
            <div className="cards-adviser">
              <div className="presentation-mark" />
            </div>
          </div>
          <div className="phone-im"></div>
          <div className="blueBackground-Rightside">
            <div className="cards-adviser-right"></div>
            <div className="cards-adviser" />
          </div>
          <div className="franchise-learner">
            <h4 style={{ font: "bold", width: "100", top: "700px" }}>
              {" "}
              We’re not a franchise{" "}
            </h4>
            <p>
              Manage your diary on the go with powerful diary management tools.
              Push notifications and reminders for both yo and the learner to
              ensure minimal cancellations. Take payments from learners anytime
              with our integrated payment system
            </p>
            <p>1. Select the areas you want to get learners from.</p>
            <p>2.Set your own proces and offers.</p>
            <p>3.A parther you can count on.</p>
            <button className="bottom-click"> Join now</button>
          </div>
          <div className="more-learner">
            <h4 style={{ font: "bold", width: "100", top: "700px" }}>
              {" "}
              More learners{" "}
            </h4>
            <p>
              We are always advertising and bringing in new learner jobs. If you
              want them they’re available on our job board, if you’re fully
              booked then no problem - there’s no minimum commitment.
            </p>
            <p>1. Apply for jobs on our job board for free.</p>
            <p>2. Hourly and intensive learners.</p>
            <p>3. No minimum commitments.</p>
            <p>4. No lead costs</p>
            <button className="bottom-click"> Join now</button>
          </div>
          <div className="morelearner-background">
            <div className="learning-adviser"></div>
            <div className="cards-adviser" />
          </div>
          <div className="ending">
            <h4 style={{ top:"3rem",left:"300px",color:"white",position: "absolute",}}>"We make running a busy driving school easy”</h4>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
// bus-controller

export default Landing;
