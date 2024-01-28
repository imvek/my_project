export function TradeLicense() {
  return (
    <div>
      <form>
        <h1>Request for Trade license New/Renew Application</h1>
        <p>Applicant Details :</p>
        <input type="text" name="email" placeholder="Full name" />
        <input type="text" name="email" placeholder="Email address" />
        <input type="text" name="email" placeholder="Phone number" />
        <input type="text" name="email" placeholder="Address" />

        <p>Business Information :</p>
        <input type="text" name="email" placeholder="Business name" />
        <select>
          <option>Business type</option>
          <option>Sole Proprietorship</option>
          <option>Partnership</option>
          <option>Limited Liability Company (LLC)</option>
          <option>Corporation</option>
        </select>
        <input type="text" name="email" placeholder="Business address" />
        <input type="text" name="email" placeholder="Phone number" />
        <input type="email" name="email" placeholder="Email address" />
        <input type="text" name="email" placeholder="Nature of project" />
        <input type="date" name="email" placeholder="Business start date" />
        <input type="number" name="email" placeholder="Number of employees" />
        
        <p>Trade License Details :</p>
        <input type="text" name="email" placeholder="Business name" />
        <select>
          <option>Type of License</option>
          <option>New</option>
          <option>Renewal</option>
        </select>
        <input type="text" name="email" placeholder="Previous license number (if renewed)" />
        
        <input type="date" name="email" placeholder="Proposed start date (for new license)" />
        <input type="number" name="email" placeholder="License Duration (in years)" />
        
        <p>Business Documentation :</p>
                  <ul>
                    <p className='nonTitled'>Please attach the following documents:</p>
                    <li>Business Registration Certificate</li>
                    <li>Proof of Address (utility bill, lease agreement, etc.)</li>
                  </ul>
                  <input type="file" />

        <div><p>Declaration :</p>
          <input type='checkbox' /> I hereby declare that the information provided in this application is true and accurate to the best of my knowledge. I understand that any false information may result in the rejection of my application.</div>
        <button>Submit</button>
      </form>
    </div>
  )
}