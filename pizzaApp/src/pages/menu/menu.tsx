import cn from "classnames";
import styles from "./menu.module.css";
import Header from "../../assets/components/header/header";
import Search from "../../assets/components/search/search";
import { BASE_API_URL, TOKEN } from "../../helpers/api";
import { IProduct } from "../../interfaces/product.interface";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios"
import Loader from "../../assets/components/loader/loader";
import MenuList from "./menu-list/menu-list";



function Menu () {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = async () => {
    try {
      setIsLoading(true);
        const { data } = await axios<IProduct[]>(`${BASE_API_URL}/products`, {
         headers: {
          "authorization": `Bearer ${TOKEN}`
        }
      })  
      setProducts(data)

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch(e) {
      console.log(e);
      if(e instanceof AxiosError) {
        setError(e?.response?.data?.message || e.message)
      }
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <>
    <div className={cn(styles.head)}>
       <Header>Меню</Header>
       <Search placeholder={"Введите блюдо и состав"}/>
    </div>

    { isLoading ? (
      <Loader/>
    ) : error ? (
      <div className={cn(styles.error)}>{ error }</div>
    ) : (
    <div>
    {!isLoading && <MenuList products={products}/>}
    </div>
    )}
    </>
  )
}

export default Menu;