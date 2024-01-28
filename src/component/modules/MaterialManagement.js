export function MaterialManagement(){
  return(
          <div>
              <form>
                  <h1>Material management application</h1>
                  <p>Personal Details :</p>
                  <input type="text" name="email" placeholder="Full name" />
                  <input type="email" name="email" placeholder="Email address" />
                  <input type="text" name="email" placeholder="Phone number" />
                  <input type="text" name="email" placeholder="Address" />
    
                  <p>Material Demand  :</p>
                  <input type="text" name="email" placeholder="Material name" />
                  <input type="number" name="email" placeholder="Quantity needed" />
                  <input type="date" name="email" placeholder="Required date" />

                  <p>Purchase Requisition :</p>
                  <input type="text" name="email" placeholder="Vendor name" />
                  <input type="text" name="email" placeholder="Material needed" />
                  <input type="text" name="email" placeholder="Delivery address" />
                  <select>
                    <option>Urgency level</option>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>

                  <p>Purchase Order :</p>
                  <input type="date" name="email" placeholder="Order date" />
                  <input type="date" name="email" placeholder="Delivery date" />
                  <input type="text" name="email" placeholder="Delivery instructions" />
    
                    <div><p>Declaration :</p>
                    <input type='checkbox' /> I confirm that the information provided above is accurate, and I agree to abide by the terms and conditions of the water tanker service.</div>
                  <button>Submit</button>
              </form>
          </div>
      )
    }