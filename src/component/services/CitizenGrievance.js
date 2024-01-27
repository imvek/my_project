export function CitizenGrievance(){
  return(
          <div>
              <form>
                  <h1>Request for Citizen grievances</h1>
                  <p>Applicant Details :</p>
                  <input type="text" name="email" placeholder="Full name" />
                  <input type="email" name="email" placeholder="Email address" />
                  <input type="text" name="email" placeholder="Phone number" />
                  <input type="text" name="email" placeholder="Applicant address" />
    
                  <p>Grievance Details :</p>
                  <input type="date" name="email" placeholder="Date of incident" />
                  <input type="text" name="email" placeholder="Location of incident" />
                  <select>
                    <option>Type of Grievance</option>
                    <option>Public Services</option>
                    <option>Safety Concerns</option>
                    <option>Environmental Issues</option>
                    <option>Law Enforcement</option>
                    <option>Others</option>
                  </select>
                  <input type="text" name="email" placeholder="Detailed description of grievance" />

                  <p>Supporting Documents (Checklist) :</p>
                  <ul>
                    <p className='nonTitled'>Please attach the following documents:</p>
                    <li>Attach any relevant documents, photos, or videos that support your grievance</li>
                  </ul>
                  <input type="file" />
                  
                  <div><p>Confirmation and Submission :</p>
                    <input type='checkbox' /> I, the undersigned, declare that the information provided in this form is true and accurate to the best of my knowledge.</div>
                  <button>Submit</button>
              </form>
          </div>
      )
    }