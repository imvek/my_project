export function AccountingManagement(){
  return (
    <div>
      <form>
        <h1>Asset Accounting Management</h1>
        <p>Asset Identification :</p>
        <input type="text" name="email" placeholder="Asset ID or Tag number" />
        <input type="text" name="email" placeholder="Business address" />
        <select>
          <option>Asset category</option>
          <option>Tangible (e.g., equipment, vehicles)</option>
          <option>Intangible (e.g., software license, patents)</option>
          <option>Both</option>
        </select>
        <input type="number" name="email" placeholder="Serial number" />
        <input type="text" name="email" placeholder="Asset description" />
        

        <p>Acquisition Information :</p>
        <input type="date" name="email" placeholder="Date of Acquisition" />
        <input type="number" name="email" placeholder="purchase cost" />
        <input type="text" name="email" placeholder="Vendor info" />
        <input type="number" name="email" placeholder="Purchase order number" />

        <p>Depreciation Details :</p>
        <select>
          <option>Maintenance Schedule</option>
          <option>Regular</option>
          <option>As needed</option>
        </select>
        <input type="text" name="email" placeholder="Survice Provider information" />
        <input type="date" name="email" placeholder="Last maintenance date" />
        <select>
          <option>Is the asset insured?</option>
          <option>Yes</option>
          <option>No</option>
        </select>


        <p>Financial Information :</p>
        <input type="text" name="email" placeholder="Current book value" />
        <input type="text" name="email" placeholder="Accumulated Depreciation" />
        <input type="text" name="email" placeholder="Record of financial transactions" />

        <p>Location :</p>
        <input type="text" name="email" placeholder="Current location of the asset" />
        <input type="text" name="email" placeholder="Previous location (if applicable)" />
        <input type="text" name="email" placeholder="Department or Division" />

        <p>Custodian Details :</p>
        <input type="text" name="email" placeholder="Custodian name" />
        <input type="text" name="email" placeholder="Custodian contact information" />
        <input type="date" name="email" placeholder="Assignment start date" />

        <p>Disposal Details :</p>
        <input type="date" name="email" placeholder="Date of disposal" />
        <input type="text" name="email" placeholder="Method of disposal" />
        <input type="text" name="email" placeholder="Authorization for disposal" />
        <input type="text" name="email" placeholder="Approving authority" />

        <p>Audit and Compliance :</p>
        <input type="date" name="email" placeholder="Date of Changes" />
        <input type="time" name="email" placeholder="Time of Changes" />

        <p>Additional Information :</p>
        <input type="text" name="email" placeholder="User ID or name of the person updating the info" />
        <input type="date" name="email" placeholder="Date of update" />
        <input type="time" name="email" placeholder="Time of update" />
        <input type="date" name="email" placeholder="Date of Submission" />
        <input type="time" name="email" placeholder="Time of Submission" />
        

        <div><p>Declaration of Applicant :</p>
          <input type='checkbox' /> I, the undersigned, declare that the information provided in this form is true and accurate to the best of my knowledge.</div>
        <button>Submit</button>
      </form>
    </div>
  )
}
