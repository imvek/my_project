import React, { useState } from "react";
import SubLayout from "../../../Components/Layout/SubLayout";
import {
  ContactInput,
  DateInput,
  EmailInput,
  NumberInput,
  SelectInput,
  TextInput,
  TimeInput,
} from "../../../Components/Form/InputFields";
import { Checkbox, FormControlLabel } from "@mui/material";
import {
  OutlineButton,
  PrimaryButton,
} from "../../../Components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addAction } from "../../../Redux/Action/action";
import { Constant } from "../../../Redux/Constant";
function Statistic() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.reducer.user);
  const [inputData, setInputData] = useState({});
  const inputChangeHandler = (e) => {
    let { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  return (
    <div className="section-padding-vertical ">
      <h4 className="text-muted">Service On request Statistic</h4>
      <div className="bg-white rounded shadow-sm p-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addAction(Constant.addService, {
                form_details: inputData,
                user_id: user?.id,
                type: "statistic",
              })
            );
          }}
        >
          <p className="color">Applicant Details :</p>
          <div className="row g-4">
            <div className="col-3">
              <TextInput
                label={"Full name"}
                name={"applicantName"}
                onChange={(e) => inputChangeHandler(e)}
              />
            </div>
            <div className="col-3">
              <EmailInput
                label={"Email address"}
                name={"applicantEmail"}
                onChange={(e) => inputChangeHandler(e)}
              />
            </div>
            <div className="col-3">
              <ContactInput
                label={"Phone number"}
                name={"applicantPhone"}
                onChange={(e) => inputChangeHandler(e)}
              />
            </div>
            <div className="col-3">
              <DateInput
                label={"Date of request"}
                name={"requestDate"}
                onChange={(e) =>
                  setInputData({
                    ...inputData,
                    requestDate: new Date(e),
                  })
                }
              />
            </div>
            <div className="col-3">
              <TimeInput
                label={"Time of request"}
                name={"requestTime"}
                onChange={(e) =>
                  setInputData({
                    ...inputData,
                    requestTime: new Date(e),
                  })
                }
              />
            </div>
            <div className="col-3">
              <TextInput
                label={"Type of service requested"}
                placeholder={"(e.g., maintenance, support, inquiry)"}
                name={"serviceType"}
                onChange={(e) => inputChangeHandler(e)}
              />
            </div>
          </div>
          <div className="mt-3">
            <p className="color">Service Details :</p>
            <div className="row gy-4 gx-4">
              <div className="col-3">
                <SelectInput
                  label={"Priority level"}
                  array={["Low", "Medium", "High"]}
                  name={"priorityLevel"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3">
                <SelectInput
                  label={"Status"}
                  array={["Open", "In Progress", "Completed", "Closed"]}
                  name={"status"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p className="color">Purpose :</p>
            <div className="row gy-4 gx-4">
              <div className="col-12 ">
                <TextInput
                  multiline
                  rows={2}
                  maxRows={4}
                  label={"Description"}
                  name={"description"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p>Declaration :</p>
            <FormControlLabel
              control={<Checkbox />}
              label="I hereby declare that the information provided in this application is true and accurate to the best of my knowledge."
            />
          </div>
          <div className="mt-3 d-flex justify-content-center">
            <PrimaryButton title={"Submit"} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Statistic;
