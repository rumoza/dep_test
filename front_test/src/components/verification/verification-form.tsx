import { useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";
import "./verification-form.modules.scss";

interface VerificationFormProps {
  className?: string;
  route: string;
}

function VerificationForm({ className, route }: VerificationFormProps) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //the final string with the verification code
  //ARRAY[6] OF STRINGS
  //should contain 6 numbers that rappresent the verification code
  const [verifyCode, setVerifyCode] = useState<string[]>([]);

  const handleSubmit = async (e: React.ChangeEvent<any>) => {
    setLoading(true);
    //if verification is't an array of 6 strings then
    //alert(`Verification code wrong type
    if (
      !Array.isArray(verifyCode) ||
      verifyCode.length !== 6 ||
      verifyCode.some((code) => typeof code !== "string")
    ) {
      e.preventDefault();
      alert("Verification code must be an array of 6 strings.");
      return;
    }
    e.preventDefault();

    try {
      const res = await api.post(route, {
        /*whatever goes here*/
      });
      navigate("/login");
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  //FRONTEND:

  /*
   i'm probably going to eventually move 
   all to file called frontend-something.tsx,
    but for now we laying the bricks
  */

  //component for forgot password/create new account section
  const Receive_resend = () => {
    return (
      <div className="receive-resend-container">
        <div className="receive-resend">
          <h2>
            Didn't receive an email? <div className="bold">Resend</div>
          </h2>
        </div>
      </div>
    );
  };

  return (
    <div className="full-container">
      <form onSubmit={handleSubmit} className="form-container">
        <h1>Verify your email</h1>
        <h2>
          We’ve sent you a verification code at{" "}
          <div className="bold">{`\${sample_email}`}</div> to verify your
          account
        </h2>
        <div className="verify-container">
          <input
            id="verify1"
            className="form-input"
            type="text"
            value={verifyCode[0]}
            onChange={(e) => setVerifyCode([e.target.value])}
            placeholder=" "
            required
          />
          <input
            id="verify2"
            className="form-input"
            type="text"
            value={verifyCode[1]}
            onChange={(e) => setVerifyCode([e.target.value])}
            placeholder=" "
            required
          />
          <input
            id="verify3"
            className="form-input"
            type="text"
            value={verifyCode[2]}
            onChange={(e) => setVerifyCode([e.target.value])}
            placeholder=" "
            required
          />
          <input
            id="verify4"
            className="form-input"
            type="text"
            value={verifyCode[3]}
            onChange={(e) => setVerifyCode([e.target.value])}
            placeholder=" "
            required
          />
          <input
            id="verify5"
            className="form-input"
            type="text"
            value={verifyCode[4]}
            onChange={(e) => setVerifyCode([e.target.value])}
            placeholder=" "
            required
          />
          <input
            id="verify6"
            className="form-input"
            type="text"
            value={verifyCode[5]}
            onChange={(e) => setVerifyCode([e.target.value])}
            placeholder=" "
            required
          />
        </div>

        {/* {loading && <LoadingIndicator />} */}
        <button className="form-button" type="submit">
          Next
        </button>

        <Receive_resend />
      </form>
    </div>
  );
}

export default VerificationForm;
