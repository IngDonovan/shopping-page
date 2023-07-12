import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Card from "../../Components/Card";
import Layout from "../../Components/layout";
import ProductDetail from "../../Components/ProductDetail";



function Home() {

  const { 
    items,
    setItems,
    searchByTitle,
    setSearchByTitle,
    searchByCategory,
    filteredItems,
    setFilteredItems,
  } = useContext(ShoppingCartContext);
  
  // const renderView = () => {
  //   if ( searchByTitle?.length > 0 ) {
  //     if (filteredItems?.length > 0) {
  //       return ( 
  //         filteredItems?.map((item) => (
  //             <Card key={item.id} data={item} />
  //           )
  //         )
  //       )
  //     } else {
  //       return (
  //         <div>Nothing</div>
  //       )
  //     }
  //   }else {
  //     return(
  //       items?.map((item) => (
  //           <Card key={item.id} data={item} />
  //         )
  //       )
  //     )
  //   }
  // }
  const renderView = () => {
    const itemsToRender = (searchByTitle?.length > 0 || searchByCategory?.length > 0)
      ? filteredItems
      : items;

    if (itemsToRender?.length > 0) {
      return itemsToRender.map(item => (
        <Card key={item.id} data={item} />
      ));
    } else {
      return <p>No Results Found</p>;
    }
  };

    return (
       <Layout>
          <div className="flex items-center justify-center relative w-80 my-4">
            <h1 className="font-medium text-xl">Products</h1>
          </div>
          <input className="rounded-lg w-80 p-3 mb-4 focus:outline-none text-black"
            type="text" 
            placeholder="Search a Product"
            onChange={(event) => setSearchByTitle(event.target.value)}
          />
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-4 text-white">
          {renderView()}
          </div>
        <ProductDetail />        
      </Layout>
        

    )
  }
  
  export default Home