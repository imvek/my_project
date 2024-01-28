export function Training(){
  return(
          <div>
              <form>
                  <h1>Training</h1>
                  <p>Personal Details :</p>
                  <input type="text" name="email" placeholder="Full name" />
                  <input type="email" name="email" placeholder="Email address" />
                  <input type="text" name="email" placeholder="Phone number" />
                  <input type="text" name="email" placeholder="Address" />
                  <input type="text" name="email" placeholder="Organisation" />
                  <input type="text" name="email" placeholder="Job title" />
    
                  <p>Trainig program detail :</p>
                  <input type="text" name="email" placeholder="Course/Program title" />
                  <input type="number" name="email" placeholder="Course duration (in months)" />
                  <input type="date" name="email" placeholder="Start date" />
                  <input type="date" name="email" placeholder="End date" />

                  
                  
    
                  <p>Technical Requirements :</p>
                  <select>
                    <option>Device type</option>
                    <option>Desktop</option>
                    <option>Laptop</option>
                    <option>Tablet</option>
                    <option>Smartphone</option>
                  </select>
                  <select>
                    <option>Internet connection</option>
                    <option>High-speed</option>
                    <option>Moderate-speed</option>
                    <option>Low-speed</option>
                  </select>
                  <input type="text" name="email" placeholder="Operating systems" />
    
                    <div><p>Declaration :</p>
                    <input type='checkbox' /> I confirm that the information provided above is accurate, and I agree to abide by the terms and conditions of the water tanker service.</div>
                  <button>Submit</button>
              </form>
          </div>
      )
    }