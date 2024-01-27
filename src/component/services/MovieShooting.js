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

function MovieShooting() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.reducer.user);
  const [inputData, setInputData] = useState({});
  const inputChangeHandler = (e) => {
    let { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  return (
    <div className="section-padding-vertical ">
      <h4 className="text-muted">Permission for movie shooting</h4>
      <div className="bg-white rounded shadow-sm p-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addAction(Constant.addService, {
                form_details: inputData,
                user_id: user?.id,
                type: "movieShooting",
              })
            );
          }}
        >
          <p className="color">Production Company Information :</p>
          <div className="row g-4">
            <div className="col-3">
              <TextInput
                label={"Production company name"}
                name={"companyName"}
                onChange={(e) => inputChangeHandler(e)}
              />
            </div>
            <div className="col-3">
              <TextInput
                label={"Contact person name"}
                name={"contactName"}
                onChange={(e) => inputChangeHandler(e)}
              />
            </div>
            <div className="col-3">
              <EmailInput
                label={"Email address"}
                name={"email"}
                onChange={(e) => inputChangeHandler(e)}
              />
            </div>
            <div className="col-3">
              <ContactInput
                label={"Phone number"}
                name={"contact"}
                onChange={(e) => inputChangeHandler(e)}
              />
            </div>
            <div className="col-3">
              <TextInput
                label={"Address"}
                name={"address"}
                onChange={(e) => inputChangeHandler(e)}
              />
            </div>
          </div>
          <div className="mt-3">
            <p className="color">Project Details :</p>
            <div className="row gy-4 gx-4">
              <div className="col-3">
                <TextInput
                  label={"Movie title"}
                  name={"movieTitle"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3">
                <TextInput
                  label={"Director's name"}
                  name={"directorName"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3">
                <TextInput
                  label={"Producer's name"}
                  name={"producerName"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3">
                <TextInput
                  label={"Genre"}
                  name={"genre"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3">
                <DateInput
                  label={"Start date"}
                  name={"projectStartDate"}
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      projectStartDate: new Date(e),
                    })
                  }
                />
              </div>
              <div className="col-3">
                <DateInput
                  label={"End date"}
                  name={"projectEndDate"}
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      projectEndDate: new Date(e),
                    })
                  }
                />
              </div>

              <div className="col-3">
                <TextInput
                  label={"Primary shooting address"}
                  name={"shootingAddress"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3">
                <TextInput
                  label={"Additional shooting address"}
                  name={"additionalAddress"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3">
                <NumberInput
                  label={"Number of crew members"}
                  name={"crewMember"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-3">
                <SelectInput
                  label={"Special effects or stunts planned"}
                  array={["Yes", "No"]}
                  name={"specialEffect"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              <div className="col-12">
                <TextInput
                  multiline
                  rows={2}
                  maxRows={4}
                  label={"Brief synopsis"}
                  name={"briefSynopsis"}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p className="color p-0 m-0">Supporting Documents :</p>
            <small>Please attach the following documents:</small>
            <ul>
              <li>Script</li>
              <li>Shooting Schedule</li>
              <li>Location Scout Photos</li>
            </ul>
            <OutlineButton title={"Upload"} />
          </div>
          <div className="mt-3">
            <p>Declaration :</p>
            <FormControlLabel
              control={<Checkbox />}
              label="I hereby acknowledge that I have read and agree to comply with all regulations and guidelines set forth by the relevant authorities for movie shooting."
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

export default MovieShooting;
