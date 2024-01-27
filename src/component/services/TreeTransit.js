export function TreeTransit(){
  return(
          <div>
              <form>
                  <h1>Request for Tree Cutting/Tree Transit</h1>
                  <p>Applicant Details :</p>
                  <input type="text" name="email" placeholder="Full name" />
                  <input type="email" name="email" placeholder="Email address" />
                  <input type="text" name="email" placeholder="Phone number" />
                  <input type="text" name="email" placeholder="Applicant address" />
                  
    
                  <p>Property Information :</p>
                  <input type="text" name="email" placeholder="Property owner name" />
                  <input type="text" name="email" placeholder="Property owner number" />
                  <input type="email" name="email" placeholder="Phroperty owner email" />
                  <input type="text" name="email" placeholder="property address" />
    
                  <p>Tree Information :</p>
                  <input type="number" name="email" placeholder="Number of trees to be cut" />
                  <input type="text" name="email" placeholder="Species of trees" />
                  <input type="date" name="email" placeholder="Approximate height of trees" />
                  <input type="text" name="email" placeholder="Reason for cutting/transiting" />


                  <p>Supporting Documents (Checklist) :</p>
                  <ul>
                    <p className='nonTitled'>Please attach the following documents:</p>
                    <li>Attach any required documents, such as property maps, arborist reports, or permits.</li>
                  </ul>
                  <input type="file" />
    
                    <div><p>Confirmation and Submission :</p>
                    <input type='checkbox' /> I, the undersigned, declare that the information provided in this form is true and accurate to the best of my knowledge.</div>
                  <button>Submit</button>
              </form>
          </div>
      )
    }