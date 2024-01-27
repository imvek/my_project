export function SewerageCleaning(){
  return(
          <div>
              <form>
                  <h1>Request for septic tank & Sewerage cleaning</h1>
                  <p>Applicant Details :</p>
                  <input type="text" name="email" placeholder="Full name" />
                  <input type="email" name="email" placeholder="Email address" />
                  <input type="text" name="email" placeholder="Phone number" />
                  <input type="text" name="email" placeholder="Address" />
                  
    
                  <p>Service Details :</p>
                  <select>
                  <option>Type of service needed</option>
                  <option>Septic Tank Cleaning</option>
                  <option>Sewerage Cleaning</option>
                  <option>Both</option>
                  </select>
                  <input type="date" name="email" placeholder="Service date" />
                  <input type="text" name="email" placeholder="Septic tank location on property" />
                  <input type="date" name="email" placeholder="Last service date" />
                  <input type="text" name="email" placeholder="Additional comments" />

    
                    <div><p>Terms and Conditions :</p>
                    <input type='checkbox' /> I agree to the terms and conditions of the service</div>
                    <p className="nonTitled">By submitting this form, you agree to our terms and conditions. Our team will contact you to confirm the service details and provide further instructions.</p>
                  <button>Submit</button>
              </form>
          </div>
      )
    }