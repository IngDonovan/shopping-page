import { useState, useEffect } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/layout";

function Home() {
  const [items, setItems] = useState(null);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])
    return (
       <Layout>
          Home
          {
            items?.map((item) => 
              (<Card key={item.id} data={item} />
              )
            )
          }
        
      </Layout>
        

    )
  }
  
  export default Home