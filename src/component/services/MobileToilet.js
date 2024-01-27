export function MobileToilet(){
  return(
          <div>
              <form>
                  <h1>Request for Mobile toilet</h1>
                  <p>Applicant Details :</p>
                  <input type="text" name="email" placeholder="Full name" />
                  <input type="email" name="email" placeholder="Email address" />
                  <input type="text" name="email" placeholder="Phone number" />
                  <input type="text" name="email" placeholder="organization name" />
    
                  <p>Event Details :</p>
                  <input type="text" name="email" placeholder="Event name" />
                  <input type="date" name="email" placeholder="Date of event" />
                  <input type="text" name="email" placeholder="Location/Address" />
    
                  <p>Mobile Toilet Requirements :</p>
                  <input type="text" name="email" placeholder="Number of toilets needed" />
                  <select>
                    <option>Prefered toilet type</option>
                    <option>Standard</option>
                    <option>ADA Accessible</option>
                    <option>VIP/Upgraded</option>
                  </select>
                  <input type="date" name="email" placeholder="Delivery date" />
                  <input type="time" name="email" placeholder="Delivery time" />
                  <input type="date" name="email" placeholder="Pickup date" />
                  <input type="time" name="email" placeholder="Pickup time" />
                  <input type="text" placeholder="Additional comments" />
    
                    <div><p>Declaration :</p>
                    <input type='checkbox' /> I confirm that the information provided above is accurate, and I agree to abide by the terms and conditions of the water tanker service.</div>
                  <button>Submit</button>
              </form>
          </div>
      )
    }