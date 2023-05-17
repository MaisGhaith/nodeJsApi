import './App.css';
import { useEffect, useState } from 'react';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [showProducts, setShowProducts] = useState(false);

    useEffect(() => {
        fetch("http://localhost:7000/products")
            .then(res => res.json())
            .then((data) => {
                setProducts(data)
            })
    }, [])


    const [search, setSearch] = useState('')
    console.log(search)


    // ! connect the endpoint with this button
    // const [newProduct, setNewProduct] = useState({
    //     title: 't shirt',
    //     description: 'jfkdlsjfl;kdsjfkldf',
    //     price: '525',
    //     image: '',

    // });

    // const addProduct = () => {
    //     fetch('http://localhost:7000/products', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(newProduct),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             // Update the products list with the new product
    //             setProducts([...products, data]);
    //             // Reset the new product state
    //             setNewProduct({
    //                 title: products.title,
    //                 description: products.description,
    //                 price: products.price,
    //                 image: products.image,

    //             });
    //         })
    //         .catch((error) => console.error('Error:', error));
    // };




    return (
        <div className='App'>

            <hero></hero>


            <h1 className='header'>Products</h1>
            <input onChange={(e) => setSearch(e.target.value)}
                placeholder='Search'
            ></input>
            {/* <button onClick={addProduct}>Add Product</button> */}

            <button onClick={() => setShowProducts(true)}>Show Products</button>
            {showProducts && (
                <div className='card-container'>
                    {products
                        .filter((item) => {
                            const itemTitle = item.title.toLowerCase();
                            const itemId = item.id ?? '';
                            const itemPrice = item.price ?? '';

                            return search.toLowerCase() === '' ||
                                itemTitle.includes(search) ||
                                itemId.toString().includes(search) ||
                                itemPrice.toString().includes(search);
                        })
                        .map((product) => (


                            <div className='card' key={product.id}>
                                <img src={product.image} alt={product.title} />
                                <div className='card-body'>
                                    <h2 className='card-title'>{product.title}</h2>
                                    <p className='card-price'>${product.price}</p>
                                    <p className='card-description'>{product.description}</p>
                                </div>
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
}

export default ProductsPage