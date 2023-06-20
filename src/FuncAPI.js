import { useEffect, useState } from "react";

function FuncAPI() {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    const fetchData = (search="") => {
        let q = "";
        if(search) q = `/search?q=${search}`;
        fetch(`https://dummyjson.com/products${q}`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setProducts(res.products);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);

    const searchProducts = () => {
        fetchData(search);
    }

    return (
        <>
            <h1>Products from API</h1>

            <div>
                <input type="text" placeholder="Search Product:" onChange={(e) => setSearch(e.target.value)} /> 
                <button onClick={searchProducts}>Search</button>
            </div>
            <div>
                {
                    products.map((product, i) => {
                        return (
                            <div key={i}>
                                <div>{product.id} - {product.title}</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default FuncAPI;