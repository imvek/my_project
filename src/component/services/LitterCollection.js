export function LitterCollection(){
  return(
          <div>
              <form>
                  <h1>Litter Collection Application Form</h1>
                  <p>Applicant Details :</p>
                  <input type="text" name="email" placeholder="Full name" />
                  <input type="email" name="email" placeholder="Email address" />
                  <input type="text" name="email" placeholder="Phone number" />
                  <input type="text" name="email" placeholder="Apllicant address" />
                  
    
                  <p>Event Details :</p>
                  <input type="text" name="email" placeholder="Event name" />
                  <input type="date" name="email" placeholder="Event date" />
                  <input type="time" name="email" placeholder="Event start time" />
                  <input type="time" name="email" placeholder="Event end time" />
                  <input type="number" name="email" placeholder="Number of participants" />

    
                  
                  <div>
                  <p>Additional Details :</p>
                  Do you require any supplies for the litter collection (trash bags, gloves, etc.)?<br />
                  <input type='radio' name='trash' value='yes'/> Yes
                  <input type='radio' name='trash' value='no'/> No
                  </div>
                  <p className="nonTitled">If yes, please specify the quantity and type of supplies needed</p>
                  <input type="text" placeholder="Additional comments" />

                 <div><p>Acknowledgment  :</p>
                    <input type='checkbox' /> acknowledge that I am organizing this litter collection event voluntarily and will adhere to all safety guidelines and regulations. I understand that it is my responsibility to ensure the proper disposal of collected litter in accordance with local regulations.</div>
                  <button>Submit</button>
              </form>
          </div>
      )
    }