export function CourtCaseManagement(){
  return (
    <div>
      <form>
        <h1>Court Case Management</h1>
        <p>Case Details :</p>
        <input type="text" name="email" placeholder="Case ID" />
        <input type="text" name="email" placeholder="Case Title" />
        <input type="text" name="email" placeholder="Case type" />
        <input type="date" name="email" placeholder="Date of filing" />
        

        <p>Court Information :</p>
        <input type="text" name="email" placeholder="Court name" />
        <input type="text" name="email" placeholder="Court location" />
        <input type="number" name="email" placeholder="Case number" />
        <select>
          <option>Case status</option>
          <option>Open</option>
          <option>Pending</option>
          <option>Dismissed</option>
          <option>Closed</option>
        </select>
        

        <p>Defendant/Respondent :</p>
        <input type="text" name="email" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="text" name="email" placeholder="Contact information" />
        <input type="text" name="email" placeholder="Address" />

        <p>Attorneys :</p>
        <input type="text" name="email" placeholder="Names of attorneys representing each party" />
        <input type="date" name="email" placeholder="Hearing date" />

        <div><p>Declaration of Applicant :</p>
          <input type='checkbox' /> I, the undersigned, declare that the information provided in this form is true and accurate to the best of my knowledge.</div>
        <button>Submit</button>
      </form>
    </div>
  )
}
