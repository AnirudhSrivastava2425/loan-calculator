import React, { useState } from 'react'
// import './loan.css'
import PieChart from '../../components/graphs/PieChart'
const SIP = () => {

  const [sip, setSip] = useState({
    principal: 5000,
    interest: 12,
    time: 10,
    totalInterest: 520179,
    totalAmount: 1120179,
    totalPrincipal: 600000,
  })

  const handleChange = (e) => {

    const { name, value } = e.target

    setSip((prev) => ({
      ...prev,
      [name]: value,
    }))

    let updatedSIP = {
      ...sip,
      [name]: value
    }

    let SIP = SIPCal(updatedSIP.principal, updatedSIP.interest, updatedSIP.time)

    setSip((prev) => ({
      ...prev,
      totalAmount: Math.ceil(SIP),
      totalInterest: Math.ceil(SIP) - (updatedSIP.principal*(updatedSIP.time*12)),
      totalPrincipal: updatedSIP.principal*(updatedSIP.time*12)
    }))

  }

  const convertInterest = (r) => {
    return r / 1200
  }

  const SIPCal = (principal, interest, time) => {
    const t = Number(time * 12);
    const r = Number(convertInterest(interest))
    const p = Number(principal)
    const emi = (p * ((1 + r) ** t - 1) * (1 + r)) / r
    return emi
  }

  return (
    <div className='main-wrapper'>
      <div className="input-wrapper">
        <h1>SIP Calculator</h1>
        <div className="loan-input-parent">
          <div className="loan-input-child">
            <label htmlFor="principal">Monthly Investment</label>

            <div className="text-field">
              <span className='suffix' style={{ fontSize: '18px' }}>₹</span>
              <input type="text" name='principal' id='principal' value={sip.principal} onChange={(e) => handleChange(e)} />
            </div>

          </div>

          <input type="range" name="principal" id="principal" step={100} max={100000} value={sip.principal} min={100} onChange={(e) => handleChange(e)} />

        </div>


        <div className="loan-input-parent">
          <div className="loan-input-child">
            <label htmlFor="interest">Interest</label>
            <div className="text-field">
              <input type="text" name='interest' id='interest' value={sip.interest} onChange={(e) => handleChange(e)} />
              <span className='suffix' style={{ fontSize: '18px' }}>%</span>
            </div>


          </div>

          <input type="range" name="interest" id="interest" step={0.5} max={30} value={sip.interest} min={1} onChange={(e) => handleChange(e)} />

        </div>


        <div className="loan-input-parent">
          <div className="loan-input-child">
            <label htmlFor="time">Tenure</label>
            <div className="text-field">
              <input type="text" name='time' id='time' value={sip.time} onChange={(e) => handleChange(e)} />

              <span className='suffix' style={{ fontSize: '18px' }}>Years</span>
            </div>

          </div>

          <input type="range" name="time" id="time" step={1} max={30} value={sip.time} min={1} onChange={(e) => handleChange(e)} />

        </div>

      </div>

      <div className="horizontal-divider"> </div>

      <div className="disp-wrapper">
        <div className="pie-chart-parent">
          <PieChart principal={sip.totalPrincipal} interest={sip.totalInterest} />
        </div>
        <div className="content-holder">
          <div className="stats-holder">
            <span className="label-stats">Monthly SIP</span>
            <span className="label-stats">Total Invested</span>
            <span className="label-stats">Total Return</span>
            <span className="label-stats">Total Interest</span>
          </div>
          <div className="stats-holder value-holder">
            <span className='value-stats'>₹ {(sip.principal).toLocaleString("en-IN")}</span>
            <span className='value-stats'>₹ {(sip.totalPrincipal).toLocaleString("en-IN")}</span>
            <span className='value-stats'>₹ {(sip.totalInterest).toLocaleString("en-IN")}</span>
            <span className='value-stats'>₹ {(sip.totalAmount).toLocaleString("en-IN")}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SIP

