import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { db } from '../firebase.config'
import {setDoc, doc, serverTimestamp} from 'firebase/firestore'
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import unvisibilityIcon from '../assets/svg/unvisibiliryIcon.svg'
import OAuth from '../components/OAuth'
function Signup() {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const {name, email, password} = formData

    const navigate = useNavigate()

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }
    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            const auth = getAuth()
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)

            const user = userCredential.user

            updateProfile(auth.currentUser, {
                displayName: name
            })

            const formDataCopy = {...formData}
            delete formDataCopy.password
            formDataCopy.timestamp = serverTimestamp()

            await setDoc(doc(db, 'users', user.uid), formDataCopy)
            navigate('/')
        } catch (error){
            toast.error('Bad User Credentials')
        }
    }
    return (
      <>
        <div className="pageContainer">
            <header>
                <p className="pageHeader">New here?</p>
            </header>
            <main>
                <form onSubmit={onSubmit} >
                    <input type="text" className='nameInput' placeholder='Name' id='name' value={name} onChange={onChange} />
                    <input type="email" className='emailInput' placeholder='Email' id='email' value={email} onChange={onChange} />
                    {/* Type will decide if the pass is shown */}
                    <div className="passwordInputDiv">
                        <input type={showPassword ? 'text' : 'password'}
                        className='passwordInput' placeholder='Password' id='password' value={password} onChange={onChange} />
                        <img src={showPassword ? visibilityIcon : unvisibilityIcon} alt="showPassword" className='showPassword'
                        onClick={() => setShowPassword((prevState) => !prevState)} />
                    </div>
                    
                    <div className="signInBar">
                        <p className="signInText">
                            Sign Up
                        </p>
                        <button className='signInButton'>
                            <ArrowRightIcon fill='#fff' width='34px' height='34px' />
                        </button>
                    </div>
                </form>
                <OAuth />
                <Link to='/signin' className='registerLink'>
                    Sign In
                </Link>
            </main>
        </div>
      </>
    )
  }
  
  export default Signup