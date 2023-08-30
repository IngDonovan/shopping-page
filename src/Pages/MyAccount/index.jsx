import Layout from "../../Components/layout";
import './styles.css'

function MyAccount() {

    return (
      <>
        <Layout>
        <div className="loader my-10">
          <div className="wrapper">
            <div className="circle"></div>
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
            <div className="line-4"></div>
          </div>
        </div>
        </Layout>
      </>
    )
  }
  
  export default MyAccount