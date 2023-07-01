import { useState, useEffect } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/layout";
import { ApiUrl } from "../../Api";
import ProductDetail from "../../Components/ProductDetail";

function Home() {

  const [items, setItems] = useState(null);

  useEffect(() => {
    // fetch('https://fakestoreapi.com/products?')
    //   .then(response => response.json())
    //   .then(data => setItems(data))
    const fetchData = async () => {
      try {
        const response = await fetch(`${ApiUrl}/products?`)
        const data = await response.json()
        setItems(data)
      } catch (error) {
        console.error(`Oh no, ocurrió un error: ${error}`);
      }
    }
    fetchData()
  }, [])
    return (
       <Layout>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-8   ">
          {
            items?.map((item) => 
              (<Card key={item.id} data={item} />
              )
            )
          }

          </div>
        <ProductDetail />
      </Layout>
        

    )
  }
  
  export default Home