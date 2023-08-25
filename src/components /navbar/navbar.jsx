import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import {ShoppingCart} from 'phosphor-react';
import "./navbar.css"

export const Navbar=()=>{

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 100) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
        window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


    return (
        <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
            <ShoppingCart size={22}/>
        </Link>
        </div> 
        
    </div>
    );
};