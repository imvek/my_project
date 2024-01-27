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

function FuneralVan() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.reducer.user);
  const [inputData, setInputData] = useState({});
  const inputChangeHandler = (e) => {
    let { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  return (
    <div className="section-padding-vertical ">
      <h4 className="text-muted">Request for funeral van (hearse)</h4>
      <div className="bg-white rounded shadow-sm p-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addAction(Constant.addService, {
                form_details: inputData,
                user_id: user?.id,
                type: "funeralVan",
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
                label={"Relationship to Deceased"}
                name={"deceasedRelation"}
                onChange={(e) => inputChangeHandler(e)}
              />
            </div>
          </div>
          <div className="mt-3">
            <p>Deceased Information :</p>
            <div className="row gy-4 gx-4">
              <div className="col-3 ">
                <TextInput
                  label={"Full Name"}
                  name={"deceasedName"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3">
                <DateInput
                  label={"Date of death"}
                  name={"dateOfDeath"}
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      dateOfDeath: new Date(e),
                    })
                  }
                />
              </div>
              <div className="col-3">
                <TimeInput
                  label={"Time of Death"}
                  name={"timeOfDeath"}
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      timeOfDeath: new Date(e),
                    })
                  }
                />
              </div>
              <div className="col-3 ">
                <DateInput
                  label={"Date of funeral"}
                  name={"funeralDate"}
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      funeralDate: new Date(e),
                    })
                  }
                />
              </div>
              <div className="col-3 ">
                <TimeInput
                  label={"Time of funernal"}
                  name={"funeralTime"}
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      funeralTime: new Date(e),
                    })
                  }
                />
              </div>
              <div className="col-3">
                <TextInput
                  label={"Funeral location"}
                  name={"funeralLocation"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3">
                <TextInput
                  label={"Pickup address"}
                  name={"pickupAddress"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3">
                <TextInput
                  label={"Destination address"}
                  name={"destinationAddress"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p>Additional Requests or Instructions :</p>
            <div className="row gy-4 gx-4">
              <div className="col-12 ">
                <TextInput
                  label={"Description"}
                  name={"descritption"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p>Acknowledgment :</p>
            <FormControlLabel
              control={<Checkbox />}
              label="I, the undersigned, hereby request the provision of a funeral van (hearse) for the transportation of the deceased named above. I understand and agree to comply with any terms and conditions set forth by the service provider.
                    "
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

export default FuneralVan;
