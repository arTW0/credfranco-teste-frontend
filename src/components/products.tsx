'use client'

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css"

import { BiSolidRightArrow as RightArrow } from 'react-icons/bi'

import Image from 'next/image'
import Amido from '../app/assets/products/amido.png'
import Azeite from '../app/assets/products/azeite.png'
import Leite from '../app/assets/products/leite.png'
import Polvilho from '../app/assets/products/polvilho.png'
import Biscoito from '../app/assets/products/biscoito.png'
import { useState } from "react";

const productsList = [
  {
    id: 1,
    name: "Biscoito Água e Sal Vitarella 400g",
    price: 'R$ 3,12',
    image: Biscoito,
  },
  {
    id: 2,
    name: "Amido de Milho Maizena 500g",
    price: 'R$ 4,19',
    image: Amido,
  },
  {
    id: 3,
    name: "Azeite Andorinha 500ml",
    price: 'R$ 20,99',
    image: Azeite,
  },
  {
    id: 4,
    name: "Leite Piracanjuba Zero Lactose 1L",
    price: 'R$ 5,19',
    image: Leite,
  },
  {
    id: 5,
    name: "Polvilho Doce Yoki 500g",
    price: 'R$11,50',
    image: Polvilho,
  }
]

export default function Products() {
  const [newProduct, setNewProduct] = useState(false)
  const [file, setFile] = useState<File>()

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 4,
      spacing: 12,
    }
  })

  async function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!file) return

    try {
      const data = new FormData()
      data.set('file', file)

      const response = await fetch('/api/products', {
        method: 'POST',
        body: data
      })

      if (response.ok) throw new Error(await response.text())
    } catch (error: any) {
      console.log(error)
    }

  }

  return <div className="m-6">
    <h1 className="text-2xl justify-items-start mb-2">Produtos em promoção</h1>
    <div ref={sliderRef} className="keen-slider h-48 w-12">
      {productsList.map(product => {
        return <div className="cursor-pointer bg-red-200 keen-slider__slide flex rounded-md" key={product.id}>
          <Image
            className='w-48'
            src={product.image}
            alt={product.name} />
          <div className="flex flex-col text-center text-white-800">
            <h1 className="my-8">{product.name}</h1>
            <p>{product.price}</p>
          </div>
        </div>
      })}
      <RightArrow className="absolute right-0 top-1/2 h-10 w-10 text-white-800" />
    </div>

    {newProduct ? <form onSubmit={onSubmitHandler}>
      <input
        className="border-black-100"
        type="text"
        placeholder="Nome do produto"
        onChange={(e) => { e.target.value = e.target.value.replace(/[^a-zA-Z0-9 ]/g, '') }}
      />

      <input
        className="border-black-100"
        type="text"
        placeholder="Preço do produto"
        onChange={(e) => { e.target.value = e.target.value.replace(/\D/g, '') }}
      />

      <input
        className="border-black-100"
        type="file"
        onChange={(e) => setFile(e.target.files?.[0])}
      />

      <button className="bg-red-700 text-white-100 rounded-md h-10 w-40 hover:bg-red-800" type="submit">Adicionar</button>
    </form>
      : <button className="bg-red-700 text-white-100 rounded-md h-10 w-40 hover:bg-red-800" onClick={() => { setNewProduct(true) }}>Adicionar Produto</button>
    }
  </div>

}