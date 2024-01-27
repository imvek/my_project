export function FireSafety(){
  return(
          <div>
              <form>
                  <h1>Fire Safety certificate application</h1>
                  <p>Personal Details:</p>
                  <input type="text" name="email" placeholder="Full name" />
                  <input type="email" name="email" placeholder="Email address" />
                  <input type="text" name="email" placeholder="Phone number" />
                  <input type="text" name="email" placeholder="Address" />
                  
    
                  <p>Property Information :</p>
                  <input type="text" name="email" placeholder="Property name/Address" />
                  <select>
                      <option>Type of property</option>
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Industrial</option>
                      <option>Other</option>
                  </select>
                  <select>
                      <option>Emergency exits signs</option>
                      <option>Installed</option>
                      <option>Not Installed</option>
                  </select>
                  <select>
                      <option>Fire extinguishers</option>
                      <option>Installed</option>
                      <option>Not Installed</option>
                  </select>
                  <select>
                      <option>Emergency lighting</option>
                      <option>Installed</option>
                      <option>Not Installed</option>
                  </select>
                  <input type="text" name="email" placeholder="Additional comments" />
    
                    <div><p>Declaration :</p>
                    <input type='checkbox' /> I confirm that the information provided above is accurate, and I agree to abide by the terms and conditions of the water tanker service.</div>
                  <button>Submit</button>
              </form>
          </div>
      )
    }