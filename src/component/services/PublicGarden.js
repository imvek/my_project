export function PublicGarden() {
  return (
    <div>
      <form>
        <h1>Application for auditorium Public Amusement Places/public Gardens</h1>
        <p>Event Details :</p>
        <input type="text" name="email" placeholder="Event name" />
        <input type="date" name="email" placeholder="Event date" />
        <input type="time" name="email" placeholder="Event start time" />
        <input type="time" name="email" placeholder="Event end time" />
        <input type="text" name="email" placeholder="Type of event" />
        <input type="number" name="email" placeholder="Expected Number of Attendees" />


        <p>Organizer Details :</p>
        <input type="text" name="email" placeholder="Name of organizer" />
        <input type="text" name="email" placeholder="Mobile no," />
        <input type="email" name="email" placeholder="Email address" />
        <input type="text" name="email" placeholder="Applicant address" />

        <p>Event Description :</p>
        <input type="text" name="email" />

        <p>Present Address :</p>
        <input type="text" name="email" placeholder="House no." />
        <input type="text" name="email" placeholder="City" />
        <input type="date" name="email" placeholder="Post office" />
        <input type="text" name="email" placeholder="District" />


        <div>
          <p>Permit Requirements :</p>
          Have you obtained all necessary permits for the event?<br />
          <input type='radio' name='permit' value='yes' /> Yes
          <input type='radio' name='permit' value='no' /> No
        </div>

        <div><p>Declaration :</p>
          <input type='checkbox' /> I/we hereby confirm that all the information provided in this application is accurate, and I/we agree to comply with all rules and regulations governing the use of the auditorium/public gardens..</div>
        <button>Submit</button>
      </form>
    </div>
  )
}