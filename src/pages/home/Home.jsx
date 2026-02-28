import './home.css'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate()
  return (
    <div className='wrapper'>
        <div onClick={()=>navigate('/loan')} className="disp-tile">
            Loan & EMI Calculator
        </div>
    </div>
  )
}

export default Home