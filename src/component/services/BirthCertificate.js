export function BirthCirtificate(){
  return(
          <div>
              <form>
                  <h1>Birth Certificate Application</h1>
                  <p>Personal Details:</p>
                  <input type="text" name="email" placeholder="Name of applicant" />
                  <input type="date" name="email" placeholder="date of birth" />
                  <input type="text" name="email" placeholder="Place of birth" />
                  <div>Gender<br /> <input type='radio' name='gender' value='male'/> Male
                  <input type='radio' name='gender' value='female'/> Female
                  <input type='radio' name='gender' value='other'/> Other
                  </div>
    
                  <p>Particulars of Applicant's Father and Mother :</p>
                  <input type="text" name="email" placeholder="Father's full name" />
                  <input type="text" name="email" placeholder="Nationality of father" />
                  <input type="text" name="email" placeholder="Mother's full name" />
                  <input type="text" name="email" placeholder="Nationality of mother" />
    
                  <p>Permanent Address :</p>
                  <input type="text" name="email" placeholder="House no." />
                  <input type="text" name="email" placeholder="City" />
                  <input type="date" name="email" placeholder="Post office" />
                  <input type="text" name="email" placeholder="District" />

                  <p>Present Address :</p>
                  <input type="text" name="email" placeholder="House no." />
                  <input type="text" name="email" placeholder="City" />
                  <input type="date" name="email" placeholder="Post office" />
                  <input type="text" name="email" placeholder="District" />

                  <p>Supporting Documents (Checklist) :</p>
                  <ul>
                    <p className='nonTitled'>Please attach the following documents:</p>
                    <li>Proof of identity of the applicant (e.g., passport, driver's license)</li>
                    <li>Proof of relationship (e.g., marriage certificate)</li>
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