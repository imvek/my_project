import React, { useState } from "react";
import {
  ContactInput,
  DateInput,
  EmailInput,
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

function ServiceshoardingLicense() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.reducer.user);
  const [inputData, setInputData] = useState({});
  const inputChangeHandler = (e) => {
    let { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  return (
    <div className="section-padding-vertical ">
      <h4 className="text-muted">Request for Hoarding license</h4>
      <div className="bg-white rounded shadow-sm p-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addAction(Constant.addService, {
                form_details: inputData,
                user_id: user?.id,
                type: "hoardingLicense",
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
            <p>Project Details :</p>
            <div className="row gy-4 gx-4">
              <div className="col-3 ">
                <TextInput
                  label={"Business name"}
                  name={"businessName"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3 ">
                <TextInput
                  label={"Business address"}
                  name={"businessAddress"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3 ">
                <TextInput
                  label={"Address of the proposed hoarding"}
                  name={"hoardingAddress"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3 ">
                <TextInput
                  label={"Purpose of the hoarding"}
                  placeholder={"(e.g., construction, renovation, event)"}
                  name={"hoardingPurpose"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p>Hoarding Specifications :</p>
            <div className="row gy-4 gx-4">
              <div className="col-3">
                <TextInput
                  label={"Dimensions of the hoarding"}
                  name={"hoardingDimension"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3">
                <TextInput
                  label={"Materials to be used"}
                  name={"hoardingMaterial"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3">
                <TextInput
                  label={"Structural details"}
                  name={"structualDetails"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3">
                <DateInput
                  label={"Start date of hoarding"}
                  name={"hoardingStartDate"}
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      hoardingStartDate: new Date(e),
                    })
                  }
                />
              </div>
              <div className="col-3">
                <DateInput
                  label={"End date of hoarding"}
                  name={"hoardingEndDate"}
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      hoardingEndDate: new Date(e),
                    })
                  }
                />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p className="color p-0 m-0">Supporting Documents (Checklist) :</p>
            <small>Please attach the following documents:</small>
            <ul>
              <li>Site plan or map indicating the location of the hoarding</li>
              <li>Drawings or designs of the hoarding structure</li>
              <li>
                Any additional documentation required by the local authority
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

export default ServiceshoardingLicense;
