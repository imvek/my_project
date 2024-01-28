export function ProjectSystem() {
  return (
    <div>
      <form>
        <h1>Project System</h1>
        <p>Personal Details :</p>
        <input type="text" name="email" placeholder="Full name" />
        <input type="text" name="email" placeholder="Email address" />
        <input type="text" name="email" placeholder="Phone number" />
        <input type="text" name="email" placeholder="Address" />

        <p>Project Details :</p>
        <input type="text" name="email" placeholder="Project name" />
        <input type="number" name="email" placeholder="Number of team member" />
        <input type="date" name="email" placeholder="Project start date" />
        <input type="date" name="email" placeholder="Project end date" />
        <input type="text" name="email" placeholder="Budget of project" />
        <input type="text" name="email" placeholder="Project Description" />

        <div><p>Declaration :</p>
          <input type='checkbox' /> I, the undersigned, declare that the information provided in this form is true and accurate to the best of my knowledge.</div>
        <button>Submit</button>
      </form>
    </div>
  )
}