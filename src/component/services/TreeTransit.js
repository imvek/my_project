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
function TreeTransit() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.reducer.user);
  const [inputData, setInputData] = useState({});
  const inputChangeHandler = (e) => {
    let { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  return (
    <div className="section-padding-vertical ">
      <h4 className="text-muted">Request for Tree Cutting/Tree Transit</h4>
      <div className="bg-white rounded shadow-sm p-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addAction(Constant.addService, {
                form_details: inputData,
                user_id: user?.id,
                type: "treeTransit",
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
            <p>Property Information :</p>
            <div className="row gy-4 gx-4">
              <div className="col-3 ">
                <TextInput
                  label={"Property owner name"}
                  name={"propertyOwnerName"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3 ">
                <TextInput
                  label={"Property owner number"}
                  name={"propertyOwnerNumber"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3 ">
                <TextInput
                  label={"Property owner email"}
                  name={"propertyOwnerEmail"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3 ">
                <TextInput
                  label={"Property address"}
                  name={"propertyOwnerAddress"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p>Tree Information :</p>
            <div className="row gy-4 gx-4">
              <div className="col-3 ">
                <TextInput
                  label={"Number of trees to be cut/"}
                  name={"cutingTreeNumber"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3 ">
                <TextInput
                  label={"Species of trees"}
                  name={"cutingTreeSpecies"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3 ">
                <TextInput
                  label={"Approximate height of trees"}
                  name={"cutingTreeHeight"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-12 ">
                <TextInput
                  multiline
                  rows={2}
                  maxRows={4}
                  label={"Reason for cutting/transiting"}
                  name={"cutingTreeReason"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p className="color p-0 m-0">Supporting Documents :</p>
            <small>Please attach the following documents:</small>
            <ul>
              <li>
                Attach any required documents, such as property maps, arborist
                reports, or permits.
              </li>
            </ul>
            <OutlineButton title={"Upload"} />
          </div>
          <div className="mt-3">
            <p className="color p-0 m-0">Confirmation and Submission :</p>
            <div className="mt-3">
              <FormControlLabel
                control={<Checkbox />}
                label="I, the undersigned, declare that the information provided in this form is true and accurate to the best of my knowledge."
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

export default TreeTransit;
