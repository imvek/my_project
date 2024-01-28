export function Payroll() {
  return (
    <div>
      <form>
        <h1>HR & Payroll Application Form</h1>
        <p>Personal Details :</p>
        <input type="text" name="email" placeholder="Full name" />
        <input type="text" name="email" placeholder="Email address" />
        <input type="text" name="email" placeholder="Phone number" />
        <input type="text" name="email" placeholder="Address" />

        <p>Employment Information :</p>
        <input type="text" name="email" placeholder="Position applied for" />
        <input type="text" name="email" placeholder="Department" />
        <input type="date" name="email" placeholder="Date of application" />
        <input type="text" name="email" placeholder="Desired salary" />

        <p>Highest Education Level :</p>
        <input type="text" name="email" placeholder="Institute name" />
        <input type="text" name="email" placeholder="Degree" />
        <input type="date" name="email" placeholder="Passing date" />
        <input type="text" name="email" placeholder="Location" />

        <p>Work Experience :</p>
        <input type="text" name="email" placeholder="Previous company name" />
        <input type="text" name="email" placeholder="Job title" />
        <input type="date" name="email" placeholder="Start date" />
        <input type="date" name="email" placeholder="End date" />

        <p>Bank Account Information (for payroll purposes) :</p>
        <input type="text" name="email" placeholder="Bank name" />
        <input type="text" name="email" placeholder="Account holder name" />
        <input type="text" name="email" placeholder="Account number" />
        <input type="number" name="email" placeholder="IFSC code" />

        <div><p>Declaration :</p>
          <input type='checkbox' /> I, the undersigned, declare that the information provided in this form is true and accurate to the best of my knowledge.</div>
        <button>Submit</button>
      </form>
    </div>
  )
}