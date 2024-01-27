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
import { PrimaryButton } from "../../../Components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addAction } from "../../../Redux/Action/action";
import { Constant } from "../../../Redux/Constant";
function MobileToilet() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.reducer.user);
  const [inputData, setInputData] = useState({});
  const inputChangeHandler = (e) => {
    let { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  return (
    <div className="section-padding-vertical ">
      <h4 className="text-muted">Request for Mobile toilet</h4>
      <div className="bg-white rounded shadow-sm p-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addAction(Constant.addService, {
                form_details: inputData,
                user_id: user?.id,
                type: "mobileToilet",
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
              <TextInput
                label={"Organization name"}
                name={"origanisationName"}
                onChange={(e) => inputChangeHandler(e)}
              />
            </div>
          </div>
          <div className="mt-3">
            <p className="color">Event Details :</p>
            <div className="row g-4">
              <div className="col-3">
                <TextInput
                  label={"Event name"}
                  name={"eventName"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3">
                <DateInput
                  label={"Date of event"}
                  name={"eventDate"}
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      eventDate: new Date(e),
                    })
                  }
                />
              </div>
              <div className="col-6">
                <TextInput
                  label={"Location/Address"}
                  name={"eventAddress"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p className="color">Mobile Toilet Requirements :</p>
            <div className="row g-4">
              <div className="col-3">
                <NumberInput
                  label={"Number of toilets needed"}
                  name={"toiletNumber"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3">
                <SelectInput
                  label={"Preferred toilet type"}
                  array={["Standard", "ADA Accessible", "VIP/Upgraded"]}
                  name={"tioletType"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3">
                <DateInput
                  label={"Delivery date "}
                  name={"deliveryDate"}
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      deliveryDate: new Date(e),
                    })
                  }
                />
              </div>
              <div className="col-3">
                <TimeInput
                  label={"Delivery time"}
                  name={"deliveryTime"}
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      deliveryTime: new Date(e),
                    })
                  }
                />
              </div>
              <div className="col-3">
                <DateInput
                  label={"Pickup date "}
                  name={"pickupDate"}
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      pickupDate: new Date(e),
                    })
                  }
                />
              </div>
              <div className="col-3">
                <TimeInput
                  label={"Pickup time"}
                  name={"pickupTime"}
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      pickupTime: new Date(e),
                    })
                  }
                />
              </div>
              <div className="col-12">
                <TextInput
                  multiline
                  rows={2}
                  maxRows={4}
                  label={"Additional comments"}
                  name={"additionalComment"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p>Declaration :</p>
            <FormControlLabel
              control={<Checkbox />}
              label="I confirm that the information provided above is accurate, and I agree to abide by the terms and conditions of the water tanker service."
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

export default MobileToilet;
