import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import unvisibilityIcon from '../assets/svg/unvisibiliryIcon.svg'
import OAuth from '../components/OAuth'
function Signin() {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const {email, password} = formData

    const navigate = useNavigate()

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }
    const onSubmit = async (e) => {
        e.preventDefault()

        try{
            const auth = getAuth()

            const userCredential = await signInWithEmailAndPassword(auth, email, password)

            if(userCredential.user){
                navigate('/')
        }
        } catch (error){
            toast.error('Bad User Credentials')
        }
    
    }
    return (
      <>
        <div className="pageContainer">
            <header>
                <p className="pageHeader">Welcome back!</p>
            </header>
            <main>
                <form onSubmit={onSubmit} >
                    <input type="email" className='emailInput' placeholder='Email' id='email' value={email} onChange={onChange} />
                    {/* Type will decide if the pass is shown */}
                    <div className="passwordInputDiv">
                        <input type={showPassword ? 'text' : 'password'}
                        className='passwordInput' placeholder='Password' id='password' value={password} onChange={onChange} />
                        <img src={showPassword ? visibilityIcon : unvisibilityIcon} alt="showPassword" className='showPassword'
                        onClick={() => setShowPassword((prevState) => !prevState)} />
                    </div>
                    <Link to='/forgotpass' className='forgotPasswordLink'>
                        Forgot Password
                    </Link>
                    <div className="signInBar">
                        <p className="signInText">
                            Sign In
                        </p>
                        <button className='signInButton'>
                            <ArrowRightIcon fill='#fff' width='34px' height='34px' />
                        </button>
                    </div>
                </form>
                <OAuth />
                <Link to='/signup' className='registerLink'>
                    Sign Up
                </Link>
            </main>
        </div>
      </>
    )
  }
  
  export default Signin