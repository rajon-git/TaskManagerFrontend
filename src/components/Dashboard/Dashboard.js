import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { SummaryRequest } from "../../APIRequest/APIRequest";

const Dashboard = () => {
  useEffect(() => {
    SummaryRequest();
  }, []);

  let summaryList = useSelector((state) => state.summary.value);
  
  return (
    <>
      <div className="container">
        <div className="row p-0 m-0">
          {summaryList.map((item, i) => (
            <div
              key={i.toString()}
              className="col-12 col-lg-3 col-md-3 col-sm-6 p-2"
            >
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="animated fadeInUp">{item._id}</h5>
                  <h6 className="text-secondary animated fadeInUp">
                    Total - {item.sum}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
