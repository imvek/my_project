export function FireService(){
  return(
          <div>
              <form>
                  <h1>Request for fire extinguishing services</h1>
                  <p>Contact Details :</p>
                  <input type="text" name="email" placeholder="Organisation name" />
                  <input type="text" name="email" placeholder="Contact person name" />
                  <input type="email" name="email" placeholder="Email address" />
                  <input type="text" name="email" placeholder="Phone number" />
    
                  <p>Service Location :</p>
                  <input type="text" name="email" placeholder="Address of service loacation" />
    
                  <p>Type of Facility :</p>
                  <select>
                    <option>Facility</option>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Industrial</option>
                    <option>Others</option>
                  </select>

                  <p>Description of the Fire Risk/Concern :</p>
                  <input type="text" name="email" placeholder="Description" />
                  

                  
                  <div>
                  <p>Details of Fire Extinguishing Services Required :</p>
                  Type of fire extinguishing service<br /> 
                  <input type='radio' name='gender' value='male'/> Inspection
                  <input type='radio' name='gender' value='female'/> Installation
                  <input type='radio' name='gender' value='other'/> Maintenance
                  <input type='radio' name='gender' value='other'/> Emergency
                  <input type='radio' name='gender' value='other'/> Response
                  <input type='radio' name='gender' value='other'/> Other
                  </div>
                  <input type="date" name="email" placeholder="Date for service" />
                  <input type="time" name="email" placeholder="Time for service" />
    
                    <div><p>Term and Conditions :</p>
                    <input type='checkbox' /> I have read and agree to the terms and conditions.</div>
                  <button>Submit</button>
              </form>
          </div>
      )
    }