export function WasteManagement(){
  return(
          <div>
              <form>
                  <h1>Door to Door (Solid Waste Management)</h1>
                  <p>Personal Details :</p>
                  <input type="text" name="email" placeholder="Full name" />
                  <input type="email" name="email" placeholder="Email address" />
                  <input type="text" name="email" placeholder="Phone number" />
                  <input type="text" name="email" placeholder="Address" />
    
                  <p>Property Information :</p>
                  <input type="text" name="email" placeholder="Property owner name" />
                  <input type="text" name="email" placeholder="Property address" />
                 <select>
                  <option>Type of property</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Industrial</option>
                  <option>Other</option>
                 </select>
                  <input type="number" name="email" placeholder="Number of Residents/Employees" />
                  <select>
                  <option>Type of Solid Waste Generated</option>
                  <option>General Household Waste</option>
                  <option>Recyclables</option>
                  <option>Green Waste (Yard waste, organic)</option>
                  <option>Hazardous Waste</option>
                 </select>
                 <input type="text" name="email" placeholder="Describe waste" />
                  
                  
                  
    
                  <p>Service Request Details  :</p>
                  <select>
                  <option>Preferred collection of schedule</option>
                  <option>Weekly</option>
                  <option>Bi-weekly</option>
                  <option>Monthly</option>
                  <option>Other (Please specify)</option>
                 </select>
                  <input type="text" name="email" placeholder="Specify schedule" />
                  <select>
                  <option>Container preference</option>
                  <option>Standard Bins</option>
                  <option>Bags</option>
                  <option>Other</option>
                 </select>
                  <input type="text" name="email" placeholder="Specify contianer" />
                  <select>
                  <option>Additional services requested</option>
                  <option>Bulk item collection</option>
                  <option>Electronic waste collection</option>
                  <option>Special Event Waste Management</option>
                  <option>Other</option>
                 </select>
                  <input type="text" name="email" placeholder="Specify additional request" />

                  

                    <div><p>Declaration :</p>
                    <input type='checkbox' /> I confirm that the information provided above is accurate, and I agree to abide by the terms and conditions of the water tanker service.</div>
                  <button>Submit</button>
              </form>
          </div>
      )
    }