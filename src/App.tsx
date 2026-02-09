import { useState } from 'react'
import './App.css'

function EmploymentProofVisual() {
  return (
    <svg
      viewBox="0 0 780 390"
      xmlns="http://www.w3.org/2000/svg"
      className="proof-svg"
      aria-label="Proof of income requirements diagram showing three required elements: your full name, income amount (no e-transfers), and a recent date"
    >
      {/* Background */}
      <rect x="0" y="0" width="780" height="390" rx="12" fill="#f0fdf4" stroke="#86efac" strokeWidth="2" />

      {/* Title bar */}
      <rect x="0" y="0" width="780" height="48" rx="12" fill="#166534" />
      <rect x="0" y="24" width="780" height="24" fill="#166534" />
      <text x="390" y="32" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">
        SAMPLE PROOF OF INCOME DOCUMENT
      </text>

      {/* Mock document body */}
      <rect x="30" y="70" width="720" height="290" rx="8" fill="#ffffff" stroke="#d1fae5" strokeWidth="1.5" />

      {/* Decorative header lines in doc */}
      <rect x="50" y="85" width="200" height="8" rx="4" fill="#d1fae5" />
      <rect x="50" y="100" width="140" height="8" rx="4" fill="#d1fae5" />

      {/* --- BOX 1: Name (blue) --- */}
      <rect x="50" y="125" width="210" height="80" rx="6" fill="#eef4ff" stroke="#3b82f6" strokeWidth="2.5" strokeDasharray="7,4" />
      <text x="155" y="152" textAnchor="middle" fill="#1e3a5f" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">
        1. YOUR FULL NAME
      </text>
      <text x="155" y="175" textAnchor="middle" fill="#3b82f6" fontSize="18" fontWeight="700" fontFamily="system-ui, sans-serif">
        John A. Smith
      </text>
      <text x="155" y="195" textAnchor="middle" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">
        Must match your application name
      </text>

      {/* --- BOX 2: Income Amount --- */}
      <rect x="285" y="125" width="210" height="80" rx="6" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2.5" strokeDasharray="7,4" />
      <text x="390" y="152" textAnchor="middle" fill="#14532d" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">
        2. INCOME AMOUNT
      </text>
      <text x="390" y="175" textAnchor="middle" fill="#16a34a" fontSize="18" fontWeight="700" fontFamily="system-ui, sans-serif">
        $3,250.00
      </text>
      <text x="390" y="195" textAnchor="middle" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">
        Paystub / bank deposit / CRA etc.
      </text>

      {/* --- BOX 3: Recent Date (yellow) --- */}
      <rect x="520" y="125" width="210" height="80" rx="6" fill="#fefce8" stroke="#eab308" strokeWidth="2.5" strokeDasharray="7,4" />
      <text x="625" y="152" textAnchor="middle" fill="#713f12" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">
        3. RECENT DATE
      </text>
      <text x="625" y="175" textAnchor="middle" fill="#ca8a04" fontSize="18" fontWeight="700" fontFamily="system-ui, sans-serif">
        Jan 15, 2025
      </text>
      <text x="625" y="195" textAnchor="middle" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">
        Within the last 60 days
      </text>

      {/* No E-Transfer warning — fully contained red box */}
      <rect x="50" y="225" width="680" height="70" rx="8" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
      <text x="390" y="250" textAnchor="middle" fill="#dc2626" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">
        E-TRANSFERS ARE NOT ACCEPTED AS PROOF OF INCOME
      </text>
      <text x="390" y="270" textAnchor="middle" fill="#991b1b" fontSize="10" fontFamily="system-ui, sans-serif">
        Provide paystubs, employment letters, bank statements,
      </text>
      <text x="390" y="284" textAnchor="middle" fill="#991b1b" fontSize="10" fontFamily="system-ui, sans-serif">
        CRA Notice of Assessment, or similar official documents
      </text>

      {/* Decorative bottom lines */}
      <rect x="50" y="315" width="680" height="6" rx="3" fill="#ecfdf5" />
      <rect x="50" y="328" width="500" height="6" rx="3" fill="#ecfdf5" />
      <rect x="50" y="341" width="580" height="6" rx="3" fill="#ecfdf5" />
    </svg>
  )
}

function SelfEmploymentProofVisual() {
  return (
    <svg
      viewBox="0 0 780 420"
      xmlns="http://www.w3.org/2000/svg"
      className="proof-svg"
      aria-label="Self-employment proof of income requirements: proof of incorporation and tax forms for 2 previous years"
    >
      {/* Background */}
      <rect x="0" y="0" width="780" height="420" rx="12" fill="#f0fdf4" stroke="#86efac" strokeWidth="2" />

      {/* Title bar */}
      <rect x="0" y="0" width="780" height="48" rx="12" fill="#166534" />
      <rect x="0" y="24" width="780" height="24" fill="#166534" />
      <text x="390" y="32" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">
        SELF-EMPLOYMENT / CORPORATION — 2 PROOFS REQUIRED
      </text>

      {/* Mock document body */}
      <rect x="30" y="70" width="720" height="320" rx="8" fill="#ffffff" stroke="#d1fae5" strokeWidth="1.5" />

      {/* Subtitle */}
      <text x="390" y="100" textAnchor="middle" fill="#14532d" fontSize="13" fontWeight="600" fontFamily="system-ui, sans-serif">
        You must provide BOTH of the following documents:
      </text>

      {/* --- BOX 1: Proof of Incorporation --- */}
      <rect x="60" y="125" width="310" height="140" rx="8" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2.5" strokeDasharray="7,4" />
      <text x="215" y="152" textAnchor="middle" fill="#14532d" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">
        1. PROOF OF INCORPORATION
      </text>
      {/* Mini doc icon */}
      <rect x="175" y="165" width="80" height="55" rx="4" fill="#dcfce7" stroke="#86efac" strokeWidth="1.5" />
      <rect x="185" y="175" width="40" height="5" rx="2" fill="#86efac" />
      <rect x="185" y="185" width="55" height="5" rx="2" fill="#86efac" />
      <rect x="185" y="195" width="30" height="5" rx="2" fill="#86efac" />
      <rect x="185" y="205" width="50" height="5" rx="2" fill="#86efac" />
      <text x="215" y="240" textAnchor="middle" fill="#16a34a" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">
        Certificate of Incorporation
      </text>
      <text x="215" y="255" textAnchor="middle" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">
        or Business Registration document
      </text>

      {/* --- BOX 2: Tax Forms --- */}
      <rect x="410" y="125" width="310" height="140" rx="8" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2.5" strokeDasharray="7,4" />
      <text x="565" y="152" textAnchor="middle" fill="#14532d" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">
        2. TAX FORMS (2 YEARS)
      </text>
      {/* Two stacked mini doc icons */}
      <rect x="520" y="163" width="70" height="45" rx="4" fill="#dcfce7" stroke="#86efac" strokeWidth="1.5" />
      <rect x="530" y="171" width="35" height="4" rx="2" fill="#86efac" />
      <rect x="530" y="179" width="45" height="4" rx="2" fill="#86efac" />
      <rect x="530" y="187" width="25" height="4" rx="2" fill="#86efac" />
      <rect x="535" y="170" width="70" height="45" rx="4" fill="#dcfce7" stroke="#86efac" strokeWidth="1.5" />
      <rect x="545" y="178" width="35" height="4" rx="2" fill="#86efac" />
      <rect x="545" y="186" width="45" height="4" rx="2" fill="#86efac" />
      <rect x="545" y="194" width="25" height="4" rx="2" fill="#86efac" />
      <text x="565" y="234" textAnchor="middle" fill="#16a34a" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">
        T1 General, T2 Corporate,
      </text>
      <text x="565" y="248" textAnchor="middle" fill="#16a34a" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">
        or Notice of Assessment
      </text>
      <text x="565" y="260" textAnchor="middle" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">
        Preferably for the 2 previous tax years
      </text>

      {/* Important note */}
      <rect x="60" y="285" width="660" height="50" rx="8" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
      <text x="390" y="307" textAnchor="middle" fill="#14532d" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">
        Tax forms must be in your name (or your corporation's name) and show income figures.
      </text>
      <text x="390" y="324" textAnchor="middle" fill="#14532d" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">
        Documents must clearly display your name, income amounts, and dates.
      </text>

      {/* Decorative bottom lines */}
      <rect x="50" y="355" width="680" height="6" rx="3" fill="#ecfdf5" />
      <rect x="50" y="368" width="500" height="6" rx="3" fill="#ecfdf5" />
      <rect x="50" y="381" width="580" height="6" rx="3" fill="#ecfdf5" />
    </svg>
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
