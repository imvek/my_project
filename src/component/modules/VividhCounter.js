export function VividhCounter(){
  return(
          <div>
              <form>
                  <h1>Vividh counter application</h1>
                  <p>ULB Employee Details :</p>
                  <input type="text" name="email" placeholder="Employee ID" />
                  <input type="text" name="email" placeholder="Employee name" />
                  <input type="text" name="email" placeholder="Department" />
                  <input type="text" name="email" placeholder="Designation" />
    
                  <p>Transaction Information :</p>
                  <input type="text" name="email" placeholder="Transaction ID (auto-generated)" />
                  <input type="date" name="email" placeholder="Date of transaction" />
                  <input type="time" name="email" placeholder="Time of transaction" />
                  <input type="text" name="email" placeholder="Type of service" />
                  <input type="number" name="email" placeholder="Amount" />
                  <select>
                    <option>Payment method</option>
                    <option>Cash</option>
                    <option>Card</option>
                    <option>Online</option>
                  </select>
                  <input type="text" name="email" placeholder="Additional information" />
    
                    <div><p>Declaration :</p>
                    <input type='checkbox' /> I confirm that the information provided above is accurate, and I agree to abide by the terms and conditions of the water tanker service.</div>
                  <button>Submit</button>
              </form>
          </div>
      )
    }