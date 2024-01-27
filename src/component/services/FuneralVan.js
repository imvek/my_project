export function FuneralVan(){
  return(
          <div>
              <form>
                  <h1>Request for funeral van (hearse)</h1>
                  <p>Applicant Details :</p>
                  <input type="text" name="email" placeholder="Full name" />
                  <input type="email" name="email" placeholder="Email address" />
                  <input type="text" name="email" placeholder="Phone number" />
                  <input type="text" name="email" placeholder="Realationship to Deceased" />
    
                  <p>Deceased Information :</p>
                  <input type="text" name="email" placeholder="Full name" />
                  <input type="date" name="email" placeholder="Date of death" />
                  <input type="time" name="email" placeholder="Time of death" />
                  <input type="date" name="email" placeholder="Date of funeral" />
                  <input type="time" name="email" placeholder="Time of funeral" />
                  <input type="text" name="email" placeholder="Funeral location" />
                  <input type="text" name="email" placeholder="Pickup address" />
                  <input type="text" name="email" placeholder="Destination address" />

    
                  <p>Additional Requests or Instructions :</p>
                  <input type="text" name="email" placeholder="Description" />
                  
                  <div><p>Acknowledgment :</p>
                    <input type='checkbox' /> I, the undersigned, hereby request the provision of a funeral van (hearse) for the transportation of the deceased named above. I understand and agree to comply with any terms and conditions set forth by the service provider.</div>
                  <button>Submit</button>
              </form>
          </div>
      )
    }