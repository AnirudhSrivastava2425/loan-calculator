import React, { useState } from 'react'
import './loan.css'
const Loan = () => {

  const [loan, setLoan] = useState({
    principal: 1000000,
    interest: 6,
    time: 7,
    EMI:14609,
    totalInterest:227119,
    totalAmount:1227119,
  })

  const handleChange = (e) => {

    const { name, value } = e.target

    setLoan((prev) => ({
      ...prev,
      [name]: value,
    }))


    let updatedLoan = {
      ...loan,
      [name]:value,
    }
    let  emi = EMICal(updatedLoan.principal,updatedLoan.interest,updatedLoan.time)

    let totalAmt = emi*Number(updatedLoan.time)*12

    setLoan((prev)=>({
      ...prev,
      EMI:Math.ceil(emi),
      totalAmount:Math.ceil(totalAmt),
      totalInterest:Math.ceil(totalAmt)-updatedLoan.principal,
    }))
  }

  const convertInterest = (r) => {
    return r / 1200
  }

  const EMICal = (principal,interest,time) =>{
    const t = Number(time*12);
    const r = Number(convertInterest(interest))
    const p = Number(principal)
    const emi = ((p*r) * (1+r)**t)/((1+r)**t - 1)
    return emi
  }

  return (
    <div className='main-wrapper'>
      <div className="input-wrapper">
        <h1>Loan Calculator</h1>
        <div className="loan-input-parent">
          <div className="loan-input-child">
            <label htmlFor="principal">Loan Amount</label>

            <div className="text-field">
              <span className='suffix' style={{ fontSize: '18px' }}>₹</span>
              <input type="text" name='principal' id='principal' value={loan.principal} onChange={(e) => handleChange(e)} />
            </div>

          </div>

          <input type="range" name="principal" id="principal" step={50000} max={10000000} value={loan.principal} min={100000} onChange={(e) => handleChange(e)} />

        </div>


        <div className="loan-input-parent">
          <div className="loan-input-child">
            <label htmlFor="interest">Interest</label>
            <div className="text-field">
              <input type="text" name='interest' id='interest' value={loan.interest} onChange={(e) => handleChange(e)} />
              <span className='suffix' style={{ fontSize: '18px' }}>%</span>
            </div>


          </div>

          <input type="range" name="interest" id="interest" step={0.5} max={30} value={loan.interest} min={1} onChange={(e) => handleChange(e)} />

        </div>


        <div className="loan-input-parent">
          <div className="loan-input-child">
            <label htmlFor="time">Tenure</label>
            <div className="text-field">
              <input type="text" name='time' id='time' value={loan.time} onChange={(e) => handleChange(e)} />

              <span className='suffix' style={{ fontSize: '18px' }}>Years</span>
            </div>

          </div>

          <input type="range" name="time" id="time" step={1} max={30} value={loan.time} min={1} onChange={(e) => handleChange(e)} />

        </div>

      </div>

      <div className="horizontal-divider"> </div>

      <div className="content-holder">
        <div className="stats-holder">
          <span className="label-stats">Monthly EMI</span>
          <span className="label-stats">Principal Amount</span>
          <span className="label-stats">Total Amount</span>
          <span className="label-stats">Total Interest</span>
        </div>
        <div className="stats-holder value-holder">
          <span className='value-stats'>₹ {loan.EMI}</span>
          <span className='value-stats'>₹ {loan.principal}</span>
          <span className='value-stats'>₹ {loan.totalAmount}</span>
          <span className='value-stats'>₹ {loan.totalInterest}</span>
        </div>
      </div>
    </div>
  )
}

export default Loan

