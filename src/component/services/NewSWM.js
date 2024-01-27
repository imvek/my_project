export function NewSWM(){
  return(
          <div>
              <form>
                  <h1>Request for New SWM ID</h1>
                  <p>Applicant Details:</p>
                  <input type="text" name="email" placeholder="Full name" />
                  <input type="email" name="email" placeholder="Email address" />
                  <input type="text" name="email" placeholder="Phone number" />
                  <input type="text" name="email" placeholder="Applicant address" />
    
                  <p>Identification Details :</p>
                  <input type="number" name="email" placeholder="Government-issued ID number" />
                  <input type="text" name="email" placeholder="Property address" />
                  <input type="text" name="email" placeholder="Property ownership details" />
    
                  <p>Purpose of SWM ID :</p>
                  
                  <input type="text" name="email" placeholder="Reason for cutting/transiting" />
                  
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
                    <input type='checkbox' /> I hereby declare that the information provided in this application is true and accurate to the best of my knowledge. I understand that any false information may result in the rejection of my application.</div>
                  <button>Submit</button>
              </form>
          </div>
      )
    }