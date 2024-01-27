export function MarriageCertificate(){
  return(
      <div>
          <form>
              <h1>Marriage Certificate Application</h1>
              <p>Applicant Details:</p>
              <input type="text" name="email" placeholder="Name of applicant" />
              <input type="text" name="email" placeholder="Applicant address" />
              <input type="number" name="email" placeholder="Mobile no." />
              <input type="email" name="email" placeholder="Email address" />

              <p>Groom's Information:</p>
              <input type="text" name="email" placeholder="Full Name" />
              <input type="text" name="email" placeholder="Place of birth" />
              <input type="date" name="email" placeholder="Date of birth" />
              <input type="text" name="email" placeholder="Address before marriage" />
              <input type="text" name="email" placeholder="Occupation" />

              <p>Bride's Information:</p>
              <input type="text" name="email" placeholder="Full Name" />
              <input type="text" name="email" placeholder="Place of birth" />
              <input type="date" name="email" placeholder="Date of birth" />
              <input type="text" name="email" placeholder="Address before marriage" />
              <input type="text" name="email" placeholder="Occupation" />

              <p>Marriage Details:</p>
              <input type="date" name="email" placeholder="Date of birth" />
              <input type="time" name="email" placeholder="Time of Marriage" />
              <input type="text" name="email" placeholder="Location/City of Marriage" />
              <input type="text" name="email" placeholder="Name and Title of the Officiant" />

              <p>Parental Information:</p>
              <input type="text" name="email" placeholder="Full Name of Groom's Father" />
              <input type="text" name="email" placeholder="Full Name of Groom's Mother" />
              <input type="text" name="email" placeholder="Full Name of Bride's Father" />
              <input type="text" name="email" placeholder="Full Name of Bride's Mother" />

              <p>Documents Atteched</p>
              Upload photo of groom: <input type='file' />
              Upload photo of bride: <input type='file' />

              <div><input type='checkbox' /> A statement confirming the accuracy of the information</div>
              <button>Submit</button>
          </form>
      </div>
  )
}