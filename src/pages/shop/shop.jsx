import React ,{useState}from "react";
import {PRODUCTS} from "src/products.js"
import {Product} from 'src/pages/shop/product.jsx';
import SearchBar from "src/components /SearchBar.jsx";
import "./shop.css";

export const Shop = ()=>{
         const [filteredProducts,setFilteredProducs] = useState(PRODUCTS);
         const handleSearch = (searchTerm) => {
                if(searchTerm === " "){
                    setFilteredProducs(PRODUCTS);
                }
                else{
                    const matchingProducts =[];
                     PRODUCTS.forEach((product)=>{
                        if(product.productName.toLowerCase().includes(searchTerm.toLowerCase())){
                            matchingProducts.push(product);
                        }
                    });
                    setFilteredProducs(matchingProducts);
                }
         }
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Abhinav's Tech Shop </h1>
                <div className="search-bar"><SearchBar  onSearch={handleSearch} /></div>
                <div className="products">
                

                {filteredProducts.map((product) => (
          <Product key={product.id} data={product} />
        ))}
                </div>
            </div>
        </div>
    );
};