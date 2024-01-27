import React, { useState } from "react";
import {
  ContactInput,
  DateInput,
  EmailInput,
  NumberInput,
  SelectInput,
  TextInput,
  TimeInput,
  YearInput,
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
function PropertyTax() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.reducer.user);
  const [inputData, setInputData] = useState({});
  const inputChangeHandler = (e) => {
    let { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  return (
    <div className="section-padding-vertical ">
      <h4 className="text-muted">Request for Property Tax Payment</h4>
      <div className="bg-white rounded shadow-sm p-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addAction(Constant.addService, {
                form_details: inputData,
                user_id: user?.id,
                type: "propertyTax",
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
                  label={"Property address"}
                  name={"propertyAddress"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3 ">
                <TextInput
                  label={"Property identification number (PIN)"}
                  name={"proteryIdentificationNumber"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3 ">
                <TextInput
                  label={"County"}
                  name={"country"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3 ">
                <TextInput
                  label={"Assessed value"}
                  name={"assessdValue"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p>Tax Payment Information :</p>
            <div className="row gy-4 gx-4">
              <div className="col-3 ">
                <YearInput
                  label={"Tax year"}
                  name={"taxYear"}
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      taxYear: new Date(e),
                    })
                  }
                />
              </div>
              <div className="col-3 ">
                <NumberInput
                  label={"Payment amount"}
                  name={"paymentAmount"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3 ">
                <TextInput
                  label={"Payment method"}
                  placeholder={"(Credit Card, Debit Card, Bank Transfer, etc.)"}
                  name={"paymentMethod"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
            </div>
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

export default PropertyTax;
