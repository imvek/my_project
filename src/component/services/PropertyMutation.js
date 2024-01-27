export function PropertyMutation(){
  return(
          <div>
              <form>
                  <h1>Request for Property Mutation</h1>
                  <p>Applicant Details:</p>
                  <input type="text" name="email" placeholder="Full name" />
                  <input type="email" name="email" placeholder="Email address" />
                  <input type="text" name="email" placeholder="Phone number" />
                  <input type="text" name="email" placeholder="Applicant address" />
    
                  <p>Property Details :</p>
                  <input type="text" name="email" placeholder="Property address" />
                  <input type="text" name="email" placeholder="Current owner's name" />
                  <input type="text" name="email" placeholder="Current owner's contact name" />
                  <select>
                    <option>Type of mutation requested</option>
                    <option>transfer of Ownership</option>
                    <option>Chnage in Property Characteristics</option>
                  </select>
                  
                  
    
                  <p>reason for Mutation :</p>
                  <input type="text" name="email" placeholder="Provide a brief explanation for requested mutation" />

                  <p>Supporting Documents :</p>
                  <ul>
                    <p className='nonTitled'>Please attach the following documents:</p>
                    <li>Proof of Identity of the Applicant</li>
                    <li>Proof of Current Ownership</li>
                    <li>Any other relevant documents supporting the mutation request</li>
                  </ul>
                  <input type="file" />
                  
    
                    <div><p>Declaration :</p>
                    <input type='checkbox' /> I hereby declare that the information provided in this application is true and accurate to the best of my knowledge. I understand that any false information may result in the rejection of my application.</div>
                  <button>Submit</button>
              </form>
          </div>
      )
    }