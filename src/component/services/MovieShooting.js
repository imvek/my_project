export function MovieShooting(){
  return(
          <div>
              <form>
                  <h1>Permission for movie shooting</h1>
                  <p>Production Company Information :</p>
                  <input type="text" name="email" placeholder="Production company name" />
                  <input type="text" name="email" placeholder="Contact person name" />
                  <input type="email" name="email" placeholder="Email address" />
                  <input type="text" name="email" placeholder="Phone number" />
                  <input type="text" name="email" placeholder="Address" />
    
                  <p>Project Details :</p>
                  <input type="text" name="email" placeholder="Movie title" />
                  <input type="text" name="email" placeholder="Director's name" />
                  <input type="text" name="email" placeholder="Producer's name" />
                  <input type="text" name="email" placeholder="Genre" />
                  <input type="date" name="email" placeholder="Start date" />
                  <input type="date" name="email" placeholder="End date" />
                  <input type="text" name="email" placeholder="Primary shooting address" />
                  <input type="text" name="email" placeholder="Additional shooting address" />
                  <input type="number" name="email" placeholder="number of crew members" />
                  <input type="text" name="email" placeholder="Special effects or stunts planned" />
                  <input type="text" name="email" placeholder="brief synopsis" />

                  <p>Supporting Documents :</p>
                  <ul>
                    <p className='nonTitled'>Please attach the following documents:</p>
                    <li>Script</li>
                    <li>Shooting Schedule</li>
                    <li>Location Scout Photos</li>
                  </ul>
                  <input type="file" />
    
                    <div><p>Declaration :</p>
                    <input type='checkbox' /> I hereby acknowledge that I have read and agree to comply with all regulations and guidelines set forth by the relevant authorities for movie shooting.</div>
                  <button>Submit</button>
              </form>
          </div>
      )
    }