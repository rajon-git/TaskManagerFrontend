import React, { useRef } from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { NewTaskRequest } from "../../APIRequest/APIRequest";
import { ErrorToast, IsEmpty } from "../../helper/FormHelper";

const Create = () => {
  let titleRef,desRef = useRef();
  let navigate = useNavigate();

  const CreateTask = () => {
    let title = titleRef.value;
    let description = desRef.value;
    if (IsEmpty(title)) {
      ErrorToast("Title Required!");
    } else if (IsEmpty(description)) {
      ErrorToast("Description Required!");
    } else {
      NewTaskRequest(title, description).then((result) => {
        if (result === true) {
          navigate("/All");
        }
      });
    }
  };

  return (
    <>
      <Container fluid={true} className="content-body">
        <Row className="d-flex justify-content-center">
          <div className="col-12 col-lg-8 col-sm-12 col-md-8 p-2">
            <div className="card">
              <div className="card-body">
                <h4>Create New</h4>
                <br />
                <input
                  ref={(input) => (titleRef = input)}
                  type="text"
                  placeholder="Task Name"
                  className="form-control animated fadeInUp"
                />
                <br />
                <textarea
                  ref={(input) => (desRef = input)}
                  placeholder="Task Descriptions..."
                  className="form-control animated fadeInUp"
                />
                <br />
                <button
                  onClick={CreateTask}
                  className="btn btn-primary float-end"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Create;
