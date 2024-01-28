export function waterCharges(){
  return(
          <div>
              <form>
                  <h1>Water Charges application</h1>
                  <p>Personal Details :</p>
                  <input type="text" name="email" placeholder="Full name" />
                  <input type="email" name="email" placeholder="Email address" />
                  <input type="text" name="email" placeholder="Phone number" />
                  <input type="text" name="email" placeholder="Address" />
    
                  <p>Property Information :</p>
                  <input type="text" name="email" placeholder="Property owner name" />
                  <input type="text" name="email" placeholder="Property address" />
                 <select>
                  <option>Type of property</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Industrial</option>
                  <option>Other</option>
                 </select>
                  <input type="text" name="email" placeholder="Property size" />
                  
                  
                  
    
                  <p>Fire Safety Features :</p>
                  <input type="number" name="email" placeholder="Number of occupants" />
                  <input type="number" name="email" placeholder="Number of bedrooms" />
                  <select>
                  <option>Sprinklers or irrigation systems</option>
                  <option>Yes</option>
                  <option>No</option>
                 </select>
                  <input type="number" name="email" placeholder="Average monthly water consumption" />

                    <div><p>Declaration :</p>
                    <input type='checkbox' /> I confirm that the information provided above is accurate, and I agree to abide by the terms and conditions of the water tanker service.</div>
                  <button>Submit</button>
              </form>
          </div>
      )
    }