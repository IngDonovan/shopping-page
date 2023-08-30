import Layout from "../../Components/layout";
import './styles.css';

function SignIn() {
 
    return (
      <>
        <Layout>
        <div className="login-box">
          <form>
            <div className="user-box">
              <input type="text" name="" required="" />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input type="password" name="" required="" />
              <label>Password</label>
            </div><center>
            <a href="#">
                    Login
                <span></span>
            </a></center>
          </form>
          </div>
        </Layout>
      </>
    )
  }
  
  export default SignIn