export function RoadCutting(){
  return(
          <div>
              <form>
                  <h1>Road Cutting Application</h1>
                  <p>Applicant Details</p>
                  <input type="text" name="email" placeholder="Full name" />
                  <input type="text" name="email" placeholder="Contact no." />
                  <input type="email" name="email" placeholder="Email address" />
                  <input type="text" name="email" placeholder="Resident address" />
    
                  <p>Organization/Company Details</p>
                  <input type="text" name="email" placeholder="Organization/Company name" />
                  <input type="text" name="email" placeholder="Contact no." />
                  <input type="email" name="email" placeholder="Email address" />
                  <input type="text" name="email" placeholder="Organization/Company address" />
    
                  <p>Prohect Details</p>
                  <input type="text" name="email" placeholder="Project name" />
                  <input type="text" name="email" placeholder="Purpose of road cutting" />
                  <input type="email" name="email" placeholder="Email address" />
                  <input type="text" name="email" placeholder="Project address" />
                  <input type="date" name="email" placeholder="Start date of cutting" />
                  <input type="date" name="email" placeholder="End date of cutting" />

                  <p>Technical Details</p>
                  <input type="text" name="email" placeholder="Type of road" />
                  <input type="number" name="email" placeholder="Road width" />
                  <input type="number" name="email" placeholder="Depth of cutting" />
                  <input type="number" name="email" placeholder="Length of cutting" />
                  

                  <p>Supporting Documents (Checklist) :</p>
                  <ul>
                    <p className='nonTitled'>Please attach the following documents:</p>
                    <li>Site map</li>
                    <li>Any Relevant Permits (if applicable)</li>
                    <li>Other Supporting Documents</li>
                  </ul>
                  <input type="file" />
    
                    <div><p>Declaration of Applicant :</p>
                    <input type='checkbox' /> Checkbox for the applicant to confirm that they understand and agree to comply with local regulations, safety measures, and any other relevant requirements.</div>
                  <button>Submit</button>
              </form>
          </div>
      )
    }