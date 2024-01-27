import React, { useState } from "react";
import {
  ContactInput,
  DateInput,
  EmailInput,
  SelectInput,
  TextInput,
  TimeInput,
} from "../../../Components/Form/InputFields";
import SubLayout from "../../../Components/Layout/SubLayout";
import {
  OutlineButton,
  PrimaryButton,
} from "../../../Components/Button/Button";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addAction } from "../../../Redux/Action/action";
import { Constant } from "../../../Redux/Constant";
function SewerageConnection() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.reducer.user);
  const [inputData, setInputData] = useState({});
  const inputChangeHandler = (e) => {
    let { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  return (
    <div className="section-padding-vertical ">
      <h4 className="text-muted">Request for Sewerage Connection</h4>
      <div className="bg-white rounded shadow-sm p-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addAction(Constant.addService, {
                form_details: inputData,
                user_id: user?.id,
                type: "sewerageConnection",
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
            <p>Property Details :</p>
            <div className="row gy-4 gx-4">
              <div className="col-3 ">
                <TextInput
                  label={"Proptery owner name"}
                  name={"propertyOwnerName"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3 ">
                <TextInput
                  label={"Property address"}
                  name={"propertyAddress"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3 ">
                <TextInput
                  label={"Property tax/Assessment number"}
                  name={"propertyTax"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3">
                <SelectInput
                  label={"Property type:"}
                  array={["Residential", "Commercial ", "Industrial ", "Other"]}
                  name={"propertyType"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p>Connection Details :</p>
            <div className="row gy-4 gx-4">
              <div className="col-3">
                <SelectInput
                  label={"Type of connection requested:"}
                  array={[
                    "New Connection",
                    "Modification to Existing Connection",
                  ]}
                  name={"connectionType"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3 ">
                <SelectInput
                  label={"Purpose of Connection:"}
                  array={["Domestic", "Commercial", "Industrial", "Other"]}
                  name={"connectionPurpose"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p className="color p-0 m-0">Supporting Documents :</p>
            <small>Please attach the following documents:</small>
            <ul>
              <li>Property Ownership/Lease Documents</li>
              <li>Building Plan/Blueprint</li>
              <li>Plumbing Permit</li>
            </ul>
            <OutlineButton title={"Upload"} />
          </div>
          <div className="mt-3">
            <p className="color p-0 m-0">Confirmation and Submission :</p>
            <div className="mt-3">
              <FormControlLabel
                control={<Checkbox />}
                label="I, the undersigned, declare that the information provided in this form is true and accurate to the best of my knowledge. I understand that any false information may result in the rejection of this application."
              />
            </div>
          </div>
          <div className="mt-3 d-flex justify-content-center">
            <PrimaryButton title={"Submit"} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SewerageConnection;
