export function Finance() {
  return (
    <div>
      <form>
        <h1>Finance</h1>
        <p>Personal Details :</p>
        <input type="text" name="email" placeholder="Full name" />
        <input type="date" name="email" placeholder="Date of birth" />
        <input type="text" name="email" placeholder="Social Security number" />
        <input type="text" name="email" placeholder="Phone number" />

        <p>Employment Information :</p>
        <input type="text" name="email" placeholder="Company name" />
        <input type="text" name="email" placeholder="Company address" />
        <input type="text" name="email" placeholder="Job title" />
        <input type="text" name="email" placeholder="Role" />

        <p>Financial Information  :</p>
        <select>
          <option>Current assets</option>
          <option>Savings</option>
          <option>Investments</option>
          <option>Real estate</option>
        </select>
        <select>
          <option>Current liabilities</option>
          <option>Loans</option>
          <option>Mortgages</option>
          <option>Credit card debt</option>
        </select>
        <input type="text" name="email" placeholder="Monthly expenses" />
        <input type="text" name="email" placeholder="Annual income" />

        <div><p>Declaration :</p>
          <input type='checkbox' /> I confirm that the information provided above is accurate, and I agree to abide by the terms and conditions of the water tanker service.</div>
        <button>Submit</button>
      </form>
    </div>
  )
}