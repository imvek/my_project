export function DebrisCollection() {
  return (
    <div>
      <form>
        <h1>Request for debris collection</h1>
        <p>Applicant Details :</p>
        <input type="text" name="email" placeholder="Full name" />
        <input type="email" name="email" placeholder="Email address" />
        <input type="text" name="email" placeholder="Phone number" />
        <input type="text" name="email" placeholder="Apllicant address" />

        <p>Event Details :</p>
        <select>
          <option>Type of debris</option>
          <option>Construction Debris</option>
          <option>Household waste</option>
          <option>Yard waste</option>
          <option>Hazardous Materials</option>
          <option>Others</option>
        </select>
        <input type="number" name="email" placeholder="Quantity of debris" />
        <input type="text" name="email" placeholder="Descritption of debris" />

        <p>Pickup Location : :</p>
        <input type="text" name="email" placeholder="Street address" />
        <input type="text" name="email" placeholder="City" />
        <input type="text" name="email" placeholder="State" />
        <input type="text" name="email" placeholder="Zipcode" />
        <input type="date" name="email" placeholder="Date of pickup" />
        <input type="time" name="email" placeholder="Time of pickup" />

        <p>Additional Details :</p>
        <input type="text" name="email" placeholder="Special instruction" />

        <p>Attach photo of debris :</p>
        <input type="file" />

        <div><p>Confirmation and Submission :</p>
          <input type='checkbox' /> I, the undersigned, declare that the information provided in this form is true and accurate to the best of my knowledge.</div>
        <button>Submit</button>
      </form>
    </div>
  )
}