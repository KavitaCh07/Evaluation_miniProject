import './signUp.css';
import Logo from '../../component/logo/logo';

function SignUp() {
   return <div className='rectangle'>
    <Logo/>
    <div className='formContainer'>
        <form action="" className='form'>
            <div className='sign-up'>SIGN UP</div>
            <input type="tel" name="" id="" placeholder='Enter Mobile Number' />
            <input type="text" name="" id="" placeholder='Enter 4 Digit MPin' />
            <input type="text" name="" id="" placeholder='Re-Enter 4 Digit MPin' />
            <button className='button-background'> <span className='signup'> SIGN UP</span></button>

        </form>

    </div>
   </div>
        

}
export default SignUp;