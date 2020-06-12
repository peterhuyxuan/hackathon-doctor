import React, { Component } from "react";
import { Steps } from "antd";

const { Step } = Steps;

class PatientStatus extends Component {
  render() {
    return (
      <div className="mt-50">
        <section>
          <div className="container">
            <Steps current={1} status="error">
              <Step title="Obtaining Patient Information" description="" />
              <Step title="Checking Symptons" description="" />
              <Step title="Booking Event" description="" />
            </Steps>
          </div>
        </section>
      </div>
    );
  }
}

export default PatientStatus;
