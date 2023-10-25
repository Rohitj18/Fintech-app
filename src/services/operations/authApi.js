import { toast } from "react-hot-toast"
import { setLoading, setToken } from "../../slices/authSlice"
import { setUser,setAdditionalDetails } from "../../slices/profileSlice"
import { apiConnector } from "../apiconnector"
import { AuthEndPoints } from "../api"

const {LOGIN_API,SIGNUP_API,GETADDDET_API,ADDDET_API} = AuthEndPoints;

export function signUp(
    email,
    password,
    confirmpassword,
    navigate
  ) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", SIGNUP_API, {
          email,
          password,
          confirmpassword,
        })
  
        console.log("SIGNUP API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        toast.success("Signup Successful")
        navigate("/login")
      } catch (error) {
        console.log("SIGNUP API ERROR............", error)
        toast.error("Signup Failed")
        navigate("/signup")
      }
      dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }
  
  export function login(email, password, navigate) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", LOGIN_API, {
          email,
          password
        })
  
        console.log("LOGIN API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
  
        toast.success("Login Successful")
        dispatch(setToken(response.data.token))
        const userImage = response.data?.user?.image
          ? response.data.user.image
          : `https://api.dicebear.com/5.x/initials/svg?seed=${"Rohit"} ${"Jabade"}`
        dispatch(setUser({ ...response.data.user, image: userImage }))
        localStorage.setItem("token", JSON.stringify(response.data.token))
        localStorage.setItem("user",JSON.stringify(response.data.user));
        let isAdditionalDetail = await dispatch(getAdditionalDetails(response.data.token));
        console.log("ye frontend ka addtional hai",isAdditionalDetail);
        if(isAdditionalDetail.data?.success){
          navigate("/dashboard");
        }else{
          navigate("/profile");
        }
      } catch (error) {
        console.log("LOGIN API ERROR............", error)
        toast.error("Login Failed")
      }
      dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }

  export function createAdditonalDetails(token,formData,navigate) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", ADDDET_API,
          formData,
          {
            Authorization: `Bearer ${token}`,
          },
        )
  
        console.log("AdditionalDetails response...", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
  
        toast.success("Details Updated Successfully")
      
        const userDatajson = localStorage.getItem("user");
        const userData = await JSON.parse(userDatajson);
        const imageurl = response.data.url;
        userData.image = imageurl.toString();
        dispatch(setUser({...userData}));
        console.log("This is the user data in add dets",userData);
        localStorage.setItem("user",JSON.stringify(userData));
        navigate("/dashboard");
      } catch (error) {
        console.log("LOGIN API ERROR............", error)
        toast.error("Login Failed")
      }
      dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }

  export function getAdditionalDetails(token) {
    return async (dispatch) => {
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("GET", GETADDDET_API,
          {},
          {
            Authorization: `Bearer ${token}`,
          },
        )
  
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        
        return response;
      } catch (error) {
        console.log("No additional details", error)
        toast.error("No additional details found")
      }
      dispatch(setLoading(false))
    }
  }



  export function logout(navigate) {
    return (dispatch) => {
      dispatch(setToken(null))
      dispatch(setUser(null))
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      toast.success("Logged Out")
      navigate("/")
    }
  }
