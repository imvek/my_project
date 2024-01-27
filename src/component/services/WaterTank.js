export function WaterTank(){
  return(
          <div>
              <form>
                  <h1>Request for water Tanker</h1>
                  <p>Applicant Details :</p>
                  <input type="text" name="email" placeholder="Full name" />
                  <input type="email" name="email" placeholder="Email address" />
                  <input type="text" name="email" placeholder="Phone number" />
                  <input type="text" name="email" placeholder="Applicant address" />
                  
    
                  <p>Delivery Address :</p>
                  <input type="text" name="email" placeholder="Street address" />
                  <input type="text" name="email" placeholder="City" />
                  <input type="text" name="email" placeholder="Zipcode" />
                  <input type="text" name="email" placeholder="District" />
    
                  <p>Delivery Details :</p>
                  <input type="date" name="email" placeholder="Date requested" />
                  <input type="time" name="email" placeholder="Time requested" />
                  <input type="date" name="email" placeholder="Quantity of water (in gallon)" />
                  <input type="text" name="email" placeholder="Additional comments" />

                    <div><p>Declaration :</p>
                    <input type='checkbox' /> I confirm that the information provided above is accurate, and I agree to abide by the terms and conditions of the water tanker service.</div>
                  <button>Submit</button>
              </form>
          </div>
      )
    }