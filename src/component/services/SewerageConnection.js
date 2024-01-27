export function SewerageConnection(){
  return(
          <div>
              <form>
                  <h1>Request for Sewerage Connection</h1>
                  <p>Applicant Details:</p>
                  <input type="text" name="email" placeholder="Full name" />
                  <input type="email" name="email" placeholder="Email address" />
                  <input type="text" name="email" placeholder="Phone number" />
                  <input type="text" name="email" placeholder="Applicant address" />
                  
    
                  <p>Property Details :</p>
                  <input type="text" name="email" placeholder="Property owner name" />
                  <input type="text" name="email" placeholder="Property address" />
                  <input type="text" name="email" placeholder="Property tax/Assessment number" />
                  <select>
                    <option>Property type:</option>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Industrial</option>
                    <option>Other</option>
                  </select>
                  <select>
                    <option>Type of connection requested:</option>
                    <option>New Connection</option>
                    <option>Modification to Existing Connection</option>
                  </select>
                  <select>
                    <option>Purpose of Connection:</option>
                    <option>Domestic</option>
                    <option>Commercial</option>
                    <option>Industrial</option>
                    <option>Other</option>
                  </select>

                  <p>Supporting Documents (Checklist) :</p>
                  <ul>
                    <p className='nonTitled'>Please attach the following documents:</p>
                    <li>Property Ownership/Lease Documents</li>
                    <li>Building Plan/Blueprint</li>
                    <li>Plumbing Permit</li>
                  </ul>
                  <input type="file" />
    
                    <div><p>Confirmation and Submission :</p>
                    <input type='checkbox' /> I, the undersigned, declare that the information provided in this form is true and accurate to the best of my knowledge. I understand that any false information may result in the rejection of this application.</div>
                  <button>Submit</button>
              </form>
          </div>
      )
    }