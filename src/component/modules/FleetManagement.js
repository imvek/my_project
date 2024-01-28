export function FleetManagement() {
  return (
    <div>
      <form>
        <h1>Fleet Management</h1>
        <p>Vehicle Information :</p>
        <input type="text" name="email" placeholder="Vehicle identification number" />
        <input type="text" name="email" placeholder="License plate number" />
        <input type="number" name="email" placeholder="Load volume" />
        <input type="number" name="email" placeholder="fuel consumption (Liters per 1km)" />
        <input type="text" name="email" placeholder="Fuel type" />
        <input type="date" name="email" placeholder="Scheduled service date" />
        <input type="text" name="email" placeholder="Mileage" />
        <input type="date" name="email" placeholder="Next service date" />


        <p>Additional Information :</p>
        <input type="text" name="email" placeholder="Discription" />
        
        
        <p>Supporting Documents (Checklist) :</p>
                  <ul>
                    <p className='nonTitled'>Please attach the following documents:</p>
                    <li>Proof of identity of the applicant (e.g., passport, driver's license)</li>
                    <li>Any other documents as required by local authorities</li>
                  </ul>
                  <input type="file" />

        <div><p>Declaration of Applicant :</p>
          <input type='checkbox' /> I, the undersigned, declare that the information provided in this form is true and accurate to the best of my knowledge.</div>
        <button>Submit</button>
      </form>
    </div>
  )
}