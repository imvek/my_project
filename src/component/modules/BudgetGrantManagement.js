export function BudgetGrantManagement(){
  return (
    <div>
      <form>
        <h1>Budget And Grant Management</h1>
        <p>Applicant Details :</p>
        <input type="text" name="email" placeholder="Full name" />
        <input type="email" name="email" placeholder="Email address" />
        <input type="text" name="email" placeholder="Phone number" />
        <input type="text" name="email" placeholder="Address" />
        <input type="text" name="email" placeholder="ULB (Urban local body) name" />
        <input type="text" name="email" placeholder="Department name" />
        <input type="date" name="email" placeholder="Budget start date" />
        <input type="date" name="email" placeholder="Budget end date" />
        

        <p>Grant Details :</p>
        <input type="text" name="email" placeholder="Grant name" />
        <input type="text" name="email" placeholder="Grantor or funding source" />
        <input type="text" name="email" placeholder="Grant purpose" />
        <input type="number" name="email" placeholder="Grant amount" />

        <p>Budget Information (In rupees) :</p>
        <input type="number" name="email" placeholder="Fiscal year" />
        <input type="number" name="email" placeholder="Total budget amount" />

        <p>Cost Expenses (In rupees) :</p>
        <input type="number" name="email" placeholder="Personnel costs" />
        <input type="number" name="email" placeholder="Equipment costs" />
        <input type="number" name="email" placeholder="Travel expenses" />
        <input type="number" name="email" placeholder="Supplies and materials expenses" />
        <input type="number" name="email" placeholder="Other Operating expenses" />

        <p>Grant Submission Information :</p>
        <input type="date" name="email" placeholder="Deadline for Grant Submission" />
        <select>
          <option>Budget allowcation</option>
          <option>online</option>
          <option>Bank transfer</option>
          <option>In-person</option>
        </select>

        <div><p>Declaration of Applicant :</p>
          <input type='checkbox' /> I, the undersigned, declare that the information provided in this form is true and accurate to the best of my knowledge.</div>
        <button>Submit</button>
      </form>
    </div>
  )
}
