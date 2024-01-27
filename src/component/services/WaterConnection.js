export function WaterConnection(){
  return(
          <div>
              <form>
                  <h1>Request for Water Connection</h1>
                  <p>Applicant Details:</p>
                  <input type="text" name="email" placeholder="Full name" />
                  <input type="email" name="email" placeholder="Email address" />
                  <input type="text" name="email" placeholder="Phone number" />
                  <input type="text" name="email" placeholder="Applicant address" />
    
                  <p>Property Information :</p>
                  <select>
                    <option>property ownership</option>
                    <option>Owned</option>
                    <option>Rented</option>
                  </select>
                  <select>
                    <option>Property type</option>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Industrial</option>
                  </select>
                  <input type="number" name="email" placeholder="Property size (in square feet)" />
                  <select>
                    <option>Property type</option>
                    <option>New Connection</option>
                    <option>Reolacement/Repair</option>
                  </select>
    
                  <p>Additional Information :</p>
                  <select>
                    <option>Plumbing details</option>
                    <option>Standard Plumbing</option>
                    <option>Rainwater Harvesting</option>
                  </select>
                  <input type="number" name="email" placeholder="Number of residents/Occupants" />
                  
                  <p>Supporting Documents (Checklist) :</p>
                  <ul>
                    <p className='nonTitled'>Please attach the following documents:</p>
                    <li>Proof of Ownership/Rental Agreement</li>
                    <li>Photo ID (e.g., Passport, Driver's License)</li>
                    <li>Recent Property Tax Receipt</li>
                    <li>Passport-sized Photographs</li>
                    <li>Any other documents specified by the water utility</li>
                  </ul>
                  <input type="file" />
    
                    <div><p>Declaration :</p>
                    <input type='checkbox' /> I hereby declare that the information provided in this application is true and accurate to the best of my knowledge. I understand that any false information may result in the rejection of my application</div>
                  <button>Submit</button>
              </form>
          </div>
      )
    }