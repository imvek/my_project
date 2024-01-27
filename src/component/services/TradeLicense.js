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

function TradeLicense() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.reducer.user);
  const [inputData, setInputData] = useState({});
  const inputChangeHandler = (e) => {
    let { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  return (
    <div className="section-padding-vertical ">
      <h4 className="text-muted">
        Request for Trade license New/Renew Application
      </h4>
      <div className="bg-white rounded shadow-sm p-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addAction(Constant.addService, {
                form_details: inputData,
                user_id: user?.id,
                type: "tradeLicense",
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
            <p className="color">Business Information :</p>
            <div className="row gy-4 gx-4">
              <div className="col-3">
                <TextInput
                  label={"Business name"}
                  name={"businessName"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3">
                <SelectInput
                  label={"Business type"}
                  array={[
                    "Sole Proprietorship",
                    "Partnership",
                    "Limited Liability Company (LLC)",
                    "Corporation",
                  ]}
                  name={"businessType"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>

              <div className="col-3">
                <TextInput
                  label={"Business address"}
                  name={"businessAddress"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>

              <div className="col-3">
                <ContactInput
                  label={"Phone number"}
                  name={"businessNumber"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3">
                <TextInput
                  label={"Email address"}
                  name={"businessEmail"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3">
                <TextInput
                  label={"Nature of business"}
                  name={"businessNature"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3">
                <DateInput
                  label={"Business start date"}
                  name={"businessStartDate"}
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      businessStartDate: new Date(e),
                    })
                  }
                />
              </div>
              <div className="col-3">
                <NumberInput
                  label={"Number of employees"}
                  name={"businessEmployees"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p className="color">Trade License Details :</p>
            <div className="row gy-4 gx-4">
              <div className="col-3">
                <SelectInput
                  label={"Type of license"}
                  array={["New", "Renewal"]}
                  name={"typeLicense"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3">
                <NumberInput
                  label={"Previous license number (if renewal)"}
                  name={"numberLicense"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3">
                <DateInput
                  label={"Proposed start date (for new license)"}
                  name={"licenseStartDate"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3">
                <NumberInput
                  label={"License Duration( in years)"}
                  name={"licenseDuration"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p className="color p-0 m-0">Business Documentation :</p>
            <small>Please attach the following documents:</small>
            <ul>
              <li>Business Registration Certificate</li>
              <li>Proof of Address (utility bill, lease agreement, etc.)</li>
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

export default TradeLicense;
