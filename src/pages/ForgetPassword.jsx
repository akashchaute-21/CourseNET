import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function ForgetPassword() {
    //define a flag for email sent or not
    const [emailSent, setEmailSent] = useState(false);
    //set rmail to show it in UI
    const [email, setEmail] = useState("");

    const {loading} = useSelector((state) => state.auth);

    const dispatch = useDispatch()

    const handleOnSubmit = (e) => {
            e.preventDefault();
            // dispatch(getPasswordResetToken(email, setEmail));
    }
  return (
    <div className='text-white flex justify-center items-center'>
      {
        loading ? (
            <div>Loading...</div>
        ) : (
            <div>
                <h1> {/*   depends on email sent or not */}
                    {
                        !emailSent ? "Reset Your Password" : "Check Your Email"
                    }
                </h1>
                <p>
                    {
                        !emailSent ? "Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery" 
                        :
                        `We have sent the reset email to ${email}`
                    }
                </p>
                <form onSubmit={handleOnSubmit}>
                    {
                        !emailSent && (
                            <label>
                                <p>Email Address:</p>
                                <input 
                                    required
                                    type="email"
                                    name='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Enter Your Email Address'
                                    />

                            </label>
                        )
                    }

                    <button
                    // inoreder to use submit in form  
                    type='submit'>
                        {
                            !emailSent ? "Reset Password" : "Resend Email"
                        }
                    </button>
                </form>
                <div>
                    <Link to="/login">
                        <p>Back to login </p>
                    </Link>
                </div>
            </div>
        )
      }
    </div>
  )
}

export default ForgetPassword
