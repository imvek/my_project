export function ServiceshoardingLicense(){
  return(
          <div>
              <form>
                  <h1>Request for Hoarding license</h1>
                  <p>Applicant Details :</p>
                  <input type="text" name="email" placeholder="Full name" />
                  <input type="email" name="email" placeholder="Email address" />
                  <input type="text" name="email" placeholder="Phone number" />
                  <input type="text" name="email" placeholder="Applicant address" />
    
                  <p>Project Details :</p>
                  <input type="text" name="email" placeholder="Business name" />
                  <input type="text" name="email" placeholder="Business address" />
                  <input type="text" name="email" placeholder="Address of proposed hoarding" />
                  <input type="text" name="email" placeholder="Purpose of hoarding" />

                  <p>Hoarding Specifications :</p>
                  <input type="text" name="email" placeholder="Dimensions of the hoarding" />
                  <input type="text" name="email" placeholder="Materials to be used" />
                  <input type="text" name="email" placeholder="Structural details" />
                  <input type="date" name="email" placeholder="Start date of hoarding" />
                  <input type="date" name="email" placeholder="End date of hoarding" />

                  <p>Supporting Documents (Checklist) :</p>
                  <ul>
                    <p className='nonTitled'>Please attach the following documents:</p>
                    <li>Site plan or map indicating the location of the hoarding</li>
                    <li>Drawings or designs of the hoarding structure</li>
                    <li>Any additional documentation required by the local authority</li>
                  </ul>
                  <input type="file" />
                  
                  <div><p>Confirmation and Submission :</p>
                    <input type='checkbox' /> I, the undersigned, declare that the information provided in this form is true and accurate to the best of my knowledge.</div>
                  <button>Submit</button>
              </form>
          </div>
      )
    }