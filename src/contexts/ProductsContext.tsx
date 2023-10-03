import { createContext, ReactNode, useCallback, useEffect, useState } from "react"
import { api } from "../lib/axios"

export interface Product {
  uuid: string,
  name: string,
  description: string,
  price: number,
  pills: string[],
  img: string
}

interface ProductsContextType {
  products: Product[]
  loading: boolean
  coffeeDeliveryCart: CoffeeDeliveryCart,
  coffeeDeliveryPaymentMethod?: 'credito' | 'debito' | 'dinheiro'
  updateCoffeeAtCart: (uuid: string, amount: number) => void
  updatePaymentMethod: (paymentMethod: string) => void
  fetchProducts: () => Promise<void>
}

interface ProductsProviderProps {
  children: ReactNode
}

interface CoffeeDeliveryCart {
  [uuid: string]: number;
}

export const ProductsContext = createContext({} as ProductsContextType)

export const ProdutsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>([])
  const [coffeeDeliveryCart, setCoffeeDeliveryCart] = useState<CoffeeDeliveryCart>({})
  const [coffeeDeliveryPaymentMethod, setCoffeeDeliveryPaymentMethod] = useState<ProductsContextType['coffeeDeliveryPaymentMethod']>()
  const [coffeeDeliveryAddress, setCoffeeDeliveryAddress] = useState({})
  const [loading, setLoading] = useState(true)
  
  const fetchProducts = useCallback(async () => {
    setLoading(true)
    const response = await api.get('/products')
    setLoading(false)

    setProducts(response.data)
  }, [])

  const getCoffeeDeliveryCart = useCallback(() => {
    const coffeeDeliveryCart = localStorage.getItem("coffeeDeliveryCart");

    if (coffeeDeliveryCart == null) {
      localStorage.setItem("coffeeDeliveryCart", JSON.stringify({}))
    } else {
      setCoffeeDeliveryCart(JSON.parse(coffeeDeliveryCart))
    }
  }, [])

  const updateCoffeeAtCart = useCallback((uuid: string, amount: number) => {    
    const newCoffeeDeliveryCart =  {...coffeeDeliveryCart}

    if (amount > 0) {
      newCoffeeDeliveryCart[uuid] = amount
    } else {
      delete newCoffeeDeliveryCart[uuid]
    }

    setCoffeeDeliveryCart(newCoffeeDeliveryCart)
    localStorage.setItem("coffeeDeliveryCart", JSON.stringify(newCoffeeDeliveryCart))
    

  }, [coffeeDeliveryCart])

  const clearCart = useCallback(() => {
    setCoffeeDeliveryCart({})
    localStorage.setItem("coffeeDeliveryCart", JSON.stringify({}))
  }, [])

  const getPaymentMethod = useCallback(() => {
    const coffeeDeliveryPaymentMethod = localStorage.getItem("coffeeDeliveryPaymentMethod");

    setCoffeeDeliveryPaymentMethod(coffeeDeliveryPaymentMethod)
  }, [])

  const updatePaymentMethod = useCallback((paymentMethod: string) =>  {
    setCoffeeDeliveryPaymentMethod(paymentMethod)
    localStorage.setItem("coffeeDeliveryPaymentMethod", paymentMethod)
  }, [])

  const getAddress = useCallback(() => {
    const coffeeDeliveryAddress = localStorage.getItem("coffeeDeliveryAddress");

    if (coffeeDeliveryAddress == null) {
      localStorage.setItem("coffeeDeliveryAddress", JSON.stringify({}))
    } else {
      setCoffeeDeliveryAddress(JSON.parse(coffeeDeliveryAddress))
    }
  }, [])

  const updateAddress = useCallback((key: string, value: string) =>  {
    const newCoffeeDeliveryAddress =  {...coffeeDeliveryAddress}
    newCoffeeDeliveryAddress[key] = value

    localStorage.setItem("coffeeDeliveryAddress", JSON.stringify(newCoffeeDeliveryAddress))
    setCoffeeDeliveryAddress(newCoffeeDeliveryAddress)
  }, [coffeeDeliveryAddress])

  useEffect(() => {
    fetchProducts()
    getCoffeeDeliveryCart()
    getAddress()
    getPaymentMethod()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ProductsContext.Provider
      value={{
        products,
        loading,
        coffeeDeliveryCart,
        coffeeDeliveryPaymentMethod,
        updateCoffeeAtCart,
        updatePaymentMethod,
        updateAddress,
        clearCart,
        coffeeDeliveryAddress,
        fetchProducts
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}