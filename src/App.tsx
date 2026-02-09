import { useState } from 'react'
import './App.css'

function EmploymentProofVisual() {
  return (
    <div className="proof-card">
      <div className="proof-card-header">SAMPLE PROOF OF INCOME DOCUMENT</div>
      <div className="proof-card-body">
        <div className="proof-card-lines">
          <div className="proof-line" style={{ width: '55%' }} />
          <div className="proof-line" style={{ width: '35%' }} />
        </div>
        <div className="proof-boxes">
          <div className="proof-box proof-box--blue">
            <span className="proof-box-label">1. YOUR FULL NAME</span>
            <span className="proof-box-value proof-box-value--blue">John A. Smith</span>
            <span className="proof-box-hint">Must match your application name</span>
          </div>
          <div className="proof-box proof-box--green">
            <span className="proof-box-label proof-box-label--green">2. INCOME AMOUNT</span>
            <span className="proof-box-value proof-box-value--green">$3,250.00</span>
            <span className="proof-box-hint">Paystub / bank deposit / CRA etc.</span>
          </div>
          <div className="proof-box proof-box--yellow">
            <span className="proof-box-label proof-box-label--yellow">3. RECENT DATE</span>
            <span className="proof-box-value proof-box-value--yellow">Jan 15, 2025</span>
            <span className="proof-box-hint">Within the last 30 days</span>
          </div>
        </div>
        <div className="proof-warning">
          <strong>E-TRANSFERS ARE NOT ACCEPTED AS PROOF OF INCOME</strong>
          <span>Provide paystubs, employment letters, bank statements, CRA Notice of Assessment, or similar official documents</span>
        </div>
        <div className="proof-card-lines">
          <div className="proof-line" style={{ width: '90%' }} />
          <div className="proof-line" style={{ width: '65%' }} />
          <div className="proof-line" style={{ width: '75%' }} />
        </div>
      </div>
    </div>
  )
}

function SelfEmploymentProofVisual() {
  return (
    <div className="proof-card">
      <div className="proof-card-header">SELF-EMPLOYMENT / CORPORATION — 2 PROOFS REQUIRED</div>
      <div className="proof-card-body proof-card-body--self">
        <p className="proof-card-subtitle proof-card-subtitle--lg">You must provide <strong>BOTH</strong> of the following documents:</p>
        <div className="proof-boxes proof-boxes--two">
          <div className="proof-box proof-box--blue proof-box--lg">
            <span className="proof-box-label proof-box-label--lg">1. PROOF OF INCORPORATION</span>
            <div className="proof-doc-icon proof-doc-icon--blue">
              <div className="proof-line proof-line--blue" style={{ width: '50%' }} />
              <div className="proof-line proof-line--blue" style={{ width: '70%' }} />
              <div className="proof-line proof-line--blue" style={{ width: '40%' }} />
              <div className="proof-line proof-line--blue" style={{ width: '60%' }} />
            </div>
            <span className="proof-box-value proof-box-value--blue proof-box-value--lg">Certificate of Incorporation</span>
            <span className="proof-box-hint proof-box-hint--lg">or Business Registration document</span>
          </div>
          <div className="proof-box proof-box--purple proof-box--lg">
            <span className="proof-box-label proof-box-label--purple proof-box-label--lg">2. TAX FORMS (2 YEARS)</span>
            <div className="proof-doc-stack">
              <div className="proof-doc-icon proof-doc-icon--purple">
                <div className="proof-line proof-line--purple" style={{ width: '50%' }} />
                <div className="proof-line proof-line--purple" style={{ width: '65%' }} />
                <div className="proof-line proof-line--purple" style={{ width: '35%' }} />
              </div>
              <div className="proof-doc-icon proof-doc-icon--purple proof-doc-icon--offset">
                <div className="proof-line proof-line--purple" style={{ width: '50%' }} />
                <div className="proof-line proof-line--purple" style={{ width: '65%' }} />
                <div className="proof-line proof-line--purple" style={{ width: '35%' }} />
              </div>
            </div>
            <span className="proof-box-value proof-box-value--purple proof-box-value--lg">T1 General, T2 Corporate, or Notice of Assessment</span>
            <span className="proof-box-hint proof-box-hint--lg">Preferably for the 2 previous tax years</span>
          </div>
        </div>
        <div className="proof-note">
          <strong>Tax forms must be in your name (or your corporation's name) and show income figures.</strong>
          <span>Documents must clearly display your name, income amounts, and dates.</span>
        </div>
      </div>
    </div>
  )
}

function ProofOfIncomeSection() {
  const [mode, setMode] = useState<'employment' | 'self-employment'>('employment')

  return (
    <div className="proof-visual-container">
      <h4 className="proof-visual-title">What Your Proof of Income Must Show</h4>
      <p className="proof-visual-subtitle">
        Select your income type below, then review the diagram so you understand exactly what we need.
      </p>

      <div className="proof-tabs">
        <button
          type="button"
          className={`proof-tab ${mode === 'employment' ? 'active' : ''}`}
          onClick={() => setMode('employment')}
        >
          Employment / Benefits
        </button>
        <button
          type="button"
          className={`proof-tab ${mode === 'self-employment' ? 'active' : ''}`}
          onClick={() => setMode('self-employment')}
        >
          Corporation / Self-Employment
        </button>
      </div>

      {mode === 'employment' && (
        <>
          <p className="proof-mode-description">
            Each document you upload <strong>must</strong> clearly display all 3 of the following.
            E-Transfers are <strong>not accepted</strong> as proof of income.
          </p>
          <EmploymentProofVisual />
        </>
      )}

      {mode === 'self-employment' && (
        <>
          <p className="proof-mode-description">
            If you are self-employed or own a corporation, you must provide <strong>2 documents</strong> as
            proof of income: your proof of incorporation and tax forms preferably for the <strong>2 previous years</strong>.
          </p>
          <SelfEmploymentProofVisual />
        </>
      )}

      <div className="proof-rejection-notice">
        <div className="proof-rejection-icon">!</div>
        <div className="proof-rejection-content">
          <strong>Important: Documents that do not meet the above requirements will not be accepted.</strong>
          <span>Incomplete, illegible, or non-compliant proof of income will result in delays or denial of your application. Please ensure all submitted documents clearly satisfy every condition outlined above before uploading.</span>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [formData, setFormData] = useState({
    // Personal
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    currentAddress: '',
    currentCity: '',
    currentProvince: 'AB',
    currentPostalCode: '',
    howLongAtCurrentAddress: '',

    // Desired rental
    desiredMoveInDate: '',
    desiredUnit: '',
    numberOfOccupants: '',
    occupantNames: '',
    pets: 'no',
    petDetails: '',
    vehicleMakeModel: '',
    vehicleLicensePlate: '',

    // Employment
    employmentStatus: '',
    employer: '',
    jobTitle: '',
    employerPhone: '',
    monthlyGrossIncome: '',
    additionalIncomeSource: '',
    additionalIncomeAmount: '',

    // Rental history
    previousLandlordName: '',
    previousLandlordPhone: '',
    previousAddress: '',
    reasonForLeaving: '',
    previousLandlordName2: '',
    previousLandlordPhone2: '',
    previousAddress2: '',
    reasonForLeaving2: '',

    // References
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactRelationship: '',
    personalReferenceName: '',
    personalReferencePhone: '',
    personalReferenceRelationship: '',

    // Additional
    hasBeenEvicted: 'no',
    evictionDetails: '',
    hasBrokeLease: 'no',
    brokeLeaseDetails: '',
    hasFiledBankruptcy: 'no',
    bankruptcyDetails: '',
    hasConvictions: 'no',
    convictionDetails: '',
    additionalComments: '',

    // Consent
    consentBackgroundCheck: false,
    consentCreditCheck: false,
    consentInfoAccuracy: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Application submitted:', formData)
    alert('Your application has been submitted. We will contact you shortly.')
  }

  return (
    <div className="application-wrapper">
      <header className="app-header">
        <h1>Rental Application</h1>
        <p>Please complete all sections below. Incomplete applications will not be processed.</p>
      </header>

      <form onSubmit={handleSubmit} className="application-form">

        {/* ---- PERSONAL INFORMATION ---- */}
        <section className="form-section">
          <h2>Personal Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input id="firstName" name="firstName" required value={formData.firstName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name *</label>
              <input id="lastName" name="lastName" required value={formData.lastName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="dateOfBirth">Date of Birth *</label>
              <input id="dateOfBirth" name="dateOfBirth" type="date" required value={formData.dateOfBirth} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} placeholder="(403) 555-0000" />
            </div>
          </div>
        </section>

        {/* ---- CURRENT ADDRESS ---- */}
        <section className="form-section">
          <h2>Current Address</h2>
          <div className="form-grid">
            <div className="form-group full-width">
              <label htmlFor="currentAddress">Street Address *</label>
              <input id="currentAddress" name="currentAddress" required value={formData.currentAddress} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="currentCity">City *</label>
              <input id="currentCity" name="currentCity" required value={formData.currentCity} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="currentProvince">Province *</label>
              <select id="currentProvince" name="currentProvince" required value={formData.currentProvince} onChange={handleChange}>
                <option value="AB">Alberta</option>
                <option value="BC">British Columbia</option>
                <option value="SK">Saskatchewan</option>
                <option value="MB">Manitoba</option>
                <option value="ON">Ontario</option>
                <option value="QC">Quebec</option>
                <option value="NB">New Brunswick</option>
                <option value="NS">Nova Scotia</option>
                <option value="PE">Prince Edward Island</option>
                <option value="NL">Newfoundland and Labrador</option>
                <option value="YT">Yukon</option>
                <option value="NT">Northwest Territories</option>
                <option value="NU">Nunavut</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="currentPostalCode">Postal Code *</label>
              <input id="currentPostalCode" name="currentPostalCode" required value={formData.currentPostalCode} onChange={handleChange} placeholder="T2X 1A1" />
            </div>
            <div className="form-group">
              <label htmlFor="howLongAtCurrentAddress">How long at this address? *</label>
              <input id="howLongAtCurrentAddress" name="howLongAtCurrentAddress" required value={formData.howLongAtCurrentAddress} onChange={handleChange} placeholder="e.g. 2 years" />
            </div>
          </div>
        </section>

        {/* ---- DESIRED RENTAL ---- */}
        <section className="form-section">
          <h2>Desired Rental Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="desiredMoveInDate">Desired Move-In Date *</label>
              <input id="desiredMoveInDate" name="desiredMoveInDate" type="date" required value={formData.desiredMoveInDate} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="desiredUnit">Unit / Property You Are Applying For</label>
              <input id="desiredUnit" name="desiredUnit" value={formData.desiredUnit} onChange={handleChange} placeholder="Address or unit number" />
            </div>
            <div className="form-group">
              <label htmlFor="numberOfOccupants">Total Number of Occupants *</label>
              <input id="numberOfOccupants" name="numberOfOccupants" type="number" min="1" required value={formData.numberOfOccupants} onChange={handleChange} />
            </div>
            <div className="form-group full-width">
              <label htmlFor="occupantNames">Full Names of All Occupants (including children) *</label>
              <textarea id="occupantNames" name="occupantNames" required value={formData.occupantNames} onChange={handleChange} rows={2} placeholder="List all people who will be living in the unit" />
            </div>
            <div className="form-group">
              <label htmlFor="pets">Do you have pets? *</label>
              <select id="pets" name="pets" required value={formData.pets} onChange={handleChange}>
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
            {formData.pets === 'yes' && (
              <div className="form-group">
                <label htmlFor="petDetails">Pet Details (type, breed, weight)</label>
                <input id="petDetails" name="petDetails" value={formData.petDetails} onChange={handleChange} placeholder="e.g. Dog, Labrador, 60 lbs" />
              </div>
            )}
            <div className="form-group">
              <label htmlFor="vehicleMakeModel">Vehicle Make &amp; Model</label>
              <input id="vehicleMakeModel" name="vehicleMakeModel" value={formData.vehicleMakeModel} onChange={handleChange} placeholder="e.g. 2020 Honda Civic" />
            </div>
            <div className="form-group">
              <label htmlFor="vehicleLicensePlate">License Plate #</label>
              <input id="vehicleLicensePlate" name="vehicleLicensePlate" value={formData.vehicleLicensePlate} onChange={handleChange} />
            </div>
          </div>
        </section>

        {/* ---- EMPLOYMENT & INCOME ---- */}
        <section className="form-section">
          <h2>Employment &amp; Income</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="employmentStatus">Employment Status *</label>
              <select id="employmentStatus" name="employmentStatus" required value={formData.employmentStatus} onChange={handleChange}>
                <option value="">Select...</option>
                <option value="full-time">Full-Time</option>
                <option value="part-time">Part-Time</option>
                <option value="self-employed">Self-Employed</option>
                <option value="student">Student</option>
                <option value="retired">Retired</option>
                <option value="unemployed">Unemployed</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="employer">Employer / Company Name *</label>
              <input id="employer" name="employer" required value={formData.employer} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="jobTitle">Job Title / Position *</label>
              <input id="jobTitle" name="jobTitle" required value={formData.jobTitle} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="employerPhone">Employer Phone Number</label>
              <input id="employerPhone" name="employerPhone" type="tel" value={formData.employerPhone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="monthlyGrossIncome">Monthly Gross Income (before tax) *</label>
              <input id="monthlyGrossIncome" name="monthlyGrossIncome" required value={formData.monthlyGrossIncome} onChange={handleChange} placeholder="$" />
            </div>
            <div className="form-group">
              <label htmlFor="additionalIncomeSource">Additional Income Source</label>
              <input id="additionalIncomeSource" name="additionalIncomeSource" value={formData.additionalIncomeSource} onChange={handleChange} placeholder="e.g. Child tax benefit, pension" />
            </div>
            <div className="form-group">
              <label htmlFor="additionalIncomeAmount">Additional Income Amount (monthly)</label>
              <input id="additionalIncomeAmount" name="additionalIncomeAmount" value={formData.additionalIncomeAmount} onChange={handleChange} placeholder="$" />
            </div>
          </div>
        </section>

        {/* ---- PROOF OF INCOME ---- */}
        <section className="form-section proof-of-income-section">
          <h2>Proof of Income</h2>
          <p className="section-description">
            You will be required to provide proof of income. Please review the diagram below carefully
            so you understand exactly what we need.
          </p>
          <ProofOfIncomeSection />
          <div className="form-grid" style={{ marginTop: '1.5rem' }}>
            <div className="form-group full-width">
              <label htmlFor="proofOfIncomeFile">Upload Proof of Income *</label>
              <input id="proofOfIncomeFile" name="proofOfIncomeFile" type="file" accept=".pdf,.jpg,.jpeg,.png" multiple />
              <span className="field-hint">Accepted formats: PDF, JPG, PNG. You may upload multiple files.</span>
            </div>
          </div>
        </section>

        {/* ---- RENTAL HISTORY ---- */}
        <section className="form-section">
          <h2>Rental History</h2>
          <h3 className="sub-heading">Most Recent Landlord</h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="previousLandlordName">Landlord Name *</label>
              <input id="previousLandlordName" name="previousLandlordName" required value={formData.previousLandlordName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="previousLandlordPhone">Landlord Phone *</label>
              <input id="previousLandlordPhone" name="previousLandlordPhone" type="tel" required value={formData.previousLandlordPhone} onChange={handleChange} />
            </div>
            <div className="form-group full-width">
              <label htmlFor="previousAddress">Address *</label>
              <input id="previousAddress" name="previousAddress" required value={formData.previousAddress} onChange={handleChange} />
            </div>
            <div className="form-group full-width">
              <label htmlFor="reasonForLeaving">Reason for Leaving *</label>
              <input id="reasonForLeaving" name="reasonForLeaving" required value={formData.reasonForLeaving} onChange={handleChange} />
            </div>
          </div>

          <h3 className="sub-heading">Second Most Recent Landlord (if applicable)</h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="previousLandlordName2">Landlord Name</label>
              <input id="previousLandlordName2" name="previousLandlordName2" value={formData.previousLandlordName2} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="previousLandlordPhone2">Landlord Phone</label>
              <input id="previousLandlordPhone2" name="previousLandlordPhone2" type="tel" value={formData.previousLandlordPhone2} onChange={handleChange} />
            </div>
            <div className="form-group full-width">
              <label htmlFor="previousAddress2">Address</label>
              <input id="previousAddress2" name="previousAddress2" value={formData.previousAddress2} onChange={handleChange} />
            </div>
            <div className="form-group full-width">
              <label htmlFor="reasonForLeaving2">Reason for Leaving</label>
              <input id="reasonForLeaving2" name="reasonForLeaving2" value={formData.reasonForLeaving2} onChange={handleChange} />
            </div>
          </div>
        </section>

        {/* ---- REFERENCES ---- */}
        <section className="form-section">
          <h2>References</h2>
          <h3 className="sub-heading">Emergency Contact</h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="emergencyContactName">Full Name *</label>
              <input id="emergencyContactName" name="emergencyContactName" required value={formData.emergencyContactName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="emergencyContactPhone">Phone *</label>
              <input id="emergencyContactPhone" name="emergencyContactPhone" type="tel" required value={formData.emergencyContactPhone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="emergencyContactRelationship">Relationship *</label>
              <input id="emergencyContactRelationship" name="emergencyContactRelationship" required value={formData.emergencyContactRelationship} onChange={handleChange} />
            </div>
          </div>

          <h3 className="sub-heading">Personal Reference</h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="personalReferenceName">Full Name *</label>
              <input id="personalReferenceName" name="personalReferenceName" required value={formData.personalReferenceName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="personalReferencePhone">Phone *</label>
              <input id="personalReferencePhone" name="personalReferencePhone" type="tel" required value={formData.personalReferencePhone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="personalReferenceRelationship">Relationship *</label>
              <input id="personalReferenceRelationship" name="personalReferenceRelationship" required value={formData.personalReferenceRelationship} onChange={handleChange} />
            </div>
          </div>
        </section>

        {/* ---- ADDITIONAL QUESTIONS ---- */}
        <section className="form-section">
          <h2>Additional Questions</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="hasBeenEvicted">Have you ever been evicted? *</label>
              <select id="hasBeenEvicted" name="hasBeenEvicted" required value={formData.hasBeenEvicted} onChange={handleChange}>
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
            {formData.hasBeenEvicted === 'yes' && (
              <div className="form-group">
                <label htmlFor="evictionDetails">Please explain</label>
                <input id="evictionDetails" name="evictionDetails" value={formData.evictionDetails} onChange={handleChange} />
              </div>
            )}
            <div className="form-group">
              <label htmlFor="hasBrokeLease">Have you ever broken a lease? *</label>
              <select id="hasBrokeLease" name="hasBrokeLease" required value={formData.hasBrokeLease} onChange={handleChange}>
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
            {formData.hasBrokeLease === 'yes' && (
              <div className="form-group">
                <label htmlFor="brokeLeaseDetails">Please explain</label>
                <input id="brokeLeaseDetails" name="brokeLeaseDetails" value={formData.brokeLeaseDetails} onChange={handleChange} />
              </div>
            )}
            <div className="form-group">
              <label htmlFor="hasFiledBankruptcy">Have you ever filed for bankruptcy? *</label>
              <select id="hasFiledBankruptcy" name="hasFiledBankruptcy" required value={formData.hasFiledBankruptcy} onChange={handleChange}>
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
            {formData.hasFiledBankruptcy === 'yes' && (
              <div className="form-group">
                <label htmlFor="bankruptcyDetails">Please explain</label>
                <input id="bankruptcyDetails" name="bankruptcyDetails" value={formData.bankruptcyDetails} onChange={handleChange} />
              </div>
            )}
            <div className="form-group">
              <label htmlFor="hasConvictions">Do you have any criminal convictions? *</label>
              <select id="hasConvictions" name="hasConvictions" required value={formData.hasConvictions} onChange={handleChange}>
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
            {formData.hasConvictions === 'yes' && (
              <div className="form-group">
                <label htmlFor="convictionDetails">Please explain</label>
                <input id="convictionDetails" name="convictionDetails" value={formData.convictionDetails} onChange={handleChange} />
              </div>
            )}
            <div className="form-group full-width">
              <label htmlFor="additionalComments">Additional Comments</label>
              <textarea id="additionalComments" name="additionalComments" value={formData.additionalComments} onChange={handleChange} rows={3} placeholder="Anything else you'd like us to know?" />
            </div>
          </div>
        </section>

        {/* ---- CONSENT ---- */}
        <section className="form-section consent-section">
          <h2>Authorization &amp; Consent</h2>
          <div className="consent-items">
            <label className="checkbox-label">
              <input type="checkbox" name="consentBackgroundCheck" checked={formData.consentBackgroundCheck} onChange={handleChange} required />
              <span>I authorize a background check to be conducted as part of this application. *</span>
            </label>
            <label className="checkbox-label">
              <input type="checkbox" name="consentCreditCheck" checked={formData.consentCreditCheck} onChange={handleChange} required />
              <span>I authorize a credit check to be conducted as part of this application. *</span>
            </label>
            <label className="checkbox-label">
              <input type="checkbox" name="consentInfoAccuracy" checked={formData.consentInfoAccuracy} onChange={handleChange} required />
              <span>I certify that all information provided in this application is true and accurate. I understand that providing false information may result in denial or termination of tenancy. *</span>
            </label>
          </div>
        </section>

        <div className="form-actions">
          <button type="submit" className="submit-btn">Submit Application</button>
        </div>
      </form>
    </div>
  )
}

export default App
