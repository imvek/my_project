export function PropertyTax(){
    return(
            <div>
                <form>
                    <h1>Request for Property Tax Payment</h1>
                    <p>Applicant Details:</p>
                    <input type="text" name="email" placeholder="Full name" />
                    <input type="email" name="email" placeholder="Email address" />
                    <input type="text" name="email" placeholder="Phone number" />
                    <input type="text" name="email" placeholder="Applicant address" />
      
                    <p>Property Information :</p>
                    <input type="text" name="email" placeholder="Property address" />
                    <input type="text" name="email" placeholder="property identification number" />
                    <input type="text" name="email" placeholder="County" />
                    <input type="number" name="email" placeholder="Assessed value" />
                    
                    
                    
      
                    <p>Tax Payment Information :</p>
                    <input type="date" name="email" placeholder="Tax year" />
                    <input type="number" name="email" placeholder="Payment amount" />
                    <input type="text" name="email" placeholder="Payment method" />
      
                      <div><p>Confirmation and Submission :</p>
                      <input type='checkbox' /> I, the undersigned, declare that the information provided in this form is true and accurate to the best of my knowledge.</div>
                    <button>Submit</button>
                </form>
            </div>
        )
      }