import { toast } from "react-hot-toast"

import rzpLogo from "../../assets/Logo/logo_courseNET223.png"
import { resetCart } from "../../slices/cartSlice"
import { setPaymentLoading } from "../../slices/courseSlice"
import { apiConnector } from "../apiConnector"
import { studentEndpoints } from "../apis"
import { setUser } from "../../slices/profileSlice"
const {
  PAYMENT_GET_ORDER_API,
  VERIFY_PAYMENT_API,
} = studentEndpoints

// Load the Razorpay SDK from the CDN
function loadScript(src) {
 // console.log("this is script")
  return new Promise((resolve) => {
    const script = document.createElement("script")
    script.src = src
    script.onload = () => {
      console.log("error aa")
      resolve(true)
    }
    script.onerror = () => {
   
      resolve(false)
    }
    document.body.appendChild(script)
  })
}

// Buy the Course
export async function BuyCourse(
  token,
  courses,
  user_details,
  navigate,
  dispatch,
  amount
) {
  const toastId = toast.loading("Loading...")

  try {
    // Loading the script of Razorpay SDK
   console.log("yhis is res");
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
  
    if (!res) {
      toast.error(
        "Razorpay SDK failed to load. Check your Internet Connection."
      )
      return
    }

  //  Initiating the Order in Backend
    const orderResponse = await apiConnector(
      "POST",
      PAYMENT_GET_ORDER_API,
      {
        amount,
        courses,
      },
      {
        Authorization: `Bearer ${token}`,
      }
    )

    if (!orderResponse.data.success) {
      throw new Error(orderResponse.data.message)
    }
    console.log("PAYMENT RESPONSE FROM BACKEND............", orderResponse.data)
   
   // Opening the Razorpay SDK
    const options = {
      key:"rzp_test_oN3UUmJXcwkRYc",
      currency: "INR",
      amount: "5000",
      order_id: orderResponse.data.data.id,
      name: "courseNET",
      description: "Thank you for Purchasing the Course.",
      image: rzpLogo,
      prefill: {
        name: "yash",
        email: "xyz@gmail.com",
      },
      handler: function (response) {
       // console.log(response)
        const order_id = orderResponse.data.data.id;
        console.log("..............courses",courses)
       verifyPayment({ ...response,order_id ,courses }, token, navigate, dispatch)
      },
    }
   const paymentObject = new window.Razorpay(options)

    paymentObject.open()
    paymentObject.on("payment.failed", function (response) {
      toast.error("Oops! Payment Failed.")
      console.log(response.error)
   })
  } catch (error) {
    console.log("PAYMENT API ERROR............", error)
    toast.error("Could Not make Payment.")
  }
  toast.dismiss(toastId)
}

// Verify the Payment
async function verifyPayment(bodyData, token, navigate, dispatch) {
  const toastId = toast.loading("Verifying Payment...")
  dispatch(setPaymentLoading(true))
  try {
    const response = await apiConnector("POST", VERIFY_PAYMENT_API, bodyData, {
      Authorization: `Bearer ${token}`,
    })

    console.log("VERIFY PAYMENT RESPONSE FROM BACKEND............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }

    toast.success("Payment Successful. Happy Learning...")
    navigate("/dashboard/enrolled-courses")
    dispatch(resetCart())
    dispatch(setUser(response.data.userDet))
  } catch (error) {
    console.log("PAYMENT VERIFY ERROR............", error)
    toast.error("Could Not Verify Payment.")
  }
  toast.dismiss(toastId)
  dispatch(setPaymentLoading(false))
}


