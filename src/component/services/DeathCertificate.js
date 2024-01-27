export function DeathCirtificate(){
  return(
          <div>
              <form>
                  <h1>Death Certificate Application</h1>
                  <p>Deceased Person's Details :</p>
                  <input type="text" name="email" placeholder="Full name" />
                  <input type="date" name="email" placeholder="Date of birth" />
                  <input type="text" name="email" placeholder="Place of birth" />
                  <div>Gender<br /> <input type='radio' name='gender' value='male'/> Male
                  <input type='radio' name='gender' value='female'/> Female
                  <input type='radio' name='gender' value='other'/> Other
                  </div>
                  <input type="text" name="email" placeholder="Full name of father/husband" />
                  <input type="text" name="email" placeholder="Full name of mother" />
                  <input type="text" name="email" placeholder="Address at the time of death" />
                  <div>Marital Status<br /> <input type='radio' name='ms' value='married'/> Married
                  <input type='radio' name='ms' value='unmarried'/> Unmarried
                  </div>
    
                  <p>Details About the Death </p>
                  <input type="date" name="email" placeholder="" />
                  <input type="time" name="email" placeholder="" />
                  <input type="text" name="email" placeholder="Place of death" />
                  <select>
                    <option>Was an autopsy performed</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
    
                  <p>Address of the deceased at the time of the death:</p>
                  <input type="text" name="email" placeholder="House no." />
                  <input type="text" name="email" placeholder="City" />
                  <input type="date" name="email" placeholder="Post office" />
                  <input type="text" name="email" placeholder="District" />

                  <p>Permanent address of the deceased:</p>
                  <input type="text" name="email" placeholder="House no." />
                  <input type="text" name="email" placeholder="City" />
                  <input type="date" name="email" placeholder="Post office" />
                  <input type="text" name="email" placeholder="District" />

                  
                  <button>Submit</button>
              </form>
          </div>
      )
    }