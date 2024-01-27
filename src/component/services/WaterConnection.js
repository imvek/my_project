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
function WaterConnection() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.reducer.user);
  const [inputData, setInputData] = useState({});
  const inputChangeHandler = (e) => {
    let { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  return (
    <div className="section-padding-vertical ">
      <h4 className="text-muted">Request for Water Connection</h4>
      <div className="bg-white rounded shadow-sm p-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addAction(Constant.addService, {
                form_details: inputData,
                user_id: user?.id,
                type: "waterConnection",
              })
            );
          }}
        >
          <p className="color">Applicant Details :</p>
          <div className="row gy-4 gx-4">
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
              <TextInput
                label={"Applicant address"}
                name={"applicantAddress"}
                onChange={(e) => inputChangeHandler(e)}
              />
            </div>
          </div>
          <div className="mt-3">
            <p className="color">Property Information :</p>
            <div className="row gy-4 gx-4">
              <div className="col-3">
                <SelectInput
                  label={"Property ownership"}
                  array={["Owned", "Rented"]}
                  name={"propertyOwnership"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3">
                <SelectInput
                  label={"Property type"}
                  array={["Residential", "Commercial", "Industrial"]}
                  name={"propertyType"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3">
                <TextInput
                  label={"Property size (in square feet/meters)"}
                  name={"propertySize"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3">
                <SelectInput
                  label={"Property type"}
                  array={["New Connection", " Replacement/Repair"]}
                  name={"propertyType"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p className="color">Additional Information :</p>
            <div className="row gy-4 gx-4">
              <div className="col-3">
                <TextInput
                  label={"Number of residents/Occupants"}
                  name={"residentNumber"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3">
                <SelectInput
                  label={"Plumbing details"}
                  array={["Standard Plumbing", "Rainwater Harvesting"]}
                  name={"plumbingDetail"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p className="color p-0 m-0">Supporting Documents :</p>
            <small>Please attach the following documents:</small>
            <ul>
              <li>Proof of Ownership/Rental Agreement</li>
              <li>Photo ID (e.g., Passport, Driver's License)</li>
              <li>Recent Property Tax Receipt</li>
              <li>Passport-sized Photographs</li>
              <li>Any other documents specified by the water utility</li>
            </ul>
            <OutlineButton title={"Upload"} />
          </div>
          <div className="mt-3">
            <p>Declaration :</p>
            <FormControlLabel
              control={<Checkbox />}
              label="I hereby declare that the information provided in this application is true and accurate to the best of my knowledge. I understand that any false information may result in the rejection of my application."
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

export default WaterConnection;
