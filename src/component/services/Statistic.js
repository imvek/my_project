export function Statistic(){
  return(
          <div>
              <form>
                  <h1>Service On request Statistic</h1>
                  <p>Applicant Details:</p>
                  <input type="text" name="email" placeholder="Full name" />
                  <input type="email" name="email" placeholder="Email address" />
                  <input type="text" name="email" placeholder="Phone number" />
                  <input type="date" name="email" placeholder="Date of request" />
                  <input type="time" name="email" placeholder="Time of request" />
                  <input type="text" name="email" placeholder="Type of service requested" />
    
                  <p>Service Details :</p>
                  <select>
                    <option>Priority level</option>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                  <select>
                    <option>Status</option>
                    <option>Open</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                    <option>Closed</option>
                  </select>
                  
    
                  <p>Purpose :</p>
                  <input type="text" name="email" placeholder="Description" />
                  
    
                    <div><p>Declaration :</p>
                    <input type='checkbox' /> I hereby declare that the information provided in this application is true and accurate to the best of my knowledge.</div>
                  <button>Submit</button>
              </form>
          </div>
      )
    }