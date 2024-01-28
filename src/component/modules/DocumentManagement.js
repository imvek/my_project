export function DocumentManagement() {
  return (
    <div>
      <form>
        <h1>Document Management System</h1>
        <p>Organisation Infomation :</p>
        <input type="text" name="email" placeholder="Organisation name" />
        <select>
          <option>Organisation type</option>
          <option>Corporation</option>
          <option>Non-Profit</option>
          <option>Government</option>
        </select>
        <input type="text" name="email" placeholder="Contact person name" />
        <input type="email" name="email" placeholder="Contact email address" />
        <input type="number" name="email" placeholder="Contact phone number" />
        <input type="text" name="email" placeholder="Contact person Address" />


        <p>Document Management System Requirements :</p>
        <input type="text" name="email" placeholder="Type of document to be managed" />
        <div>Web centric architecture<br />
          <input type='radio' name='architecture' value='yes' /> Yes
          <input type='radio' name='architecture' value='no' /> No
        </div>
        <div>Parallel processing technology<br />
          <input type='radio' name='technology' value='yes' /> Yes
          <input type='radio' name='technology' value='no' /> No
        </div>



        <p>Technical specifications :</p>
        <input type="text" name="email" placeholder="Preferred Technology stack" />
        
        <input type="text" name="email" placeholder="Integration requirements" />
        
        <input type="number" name="email" placeholder="Expected number of concurrent users" />
        <input type="text" name="email" placeholder="Security and access control requirements" />

        <p>Other information :</p>
        <input type="date" name="email" placeholder="Desired deployment date" />
        <input type="number" name="email" placeholder="Implementation timeline preferences (In months)" />
        <input type="text" name="email" placeholder="Budget range for DMS deployment" />
        <input type="text" name="email" placeholder="Security and access control requirements" />
        





        <div><p>Declaration :</p>
          <input type='checkbox' /> I, the undersigned, declare that the information provided in this form is true and accurate to the best of my knowledge.</div>
        <button>Submit</button>
      </form>
    </div>
  )
}
