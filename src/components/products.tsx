'use client'

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css"

import Image from 'next/image'
import Amido from '../app/assets/products/amido.png'
import Azeite from '../app/assets/products/azeite.png'
import Leite from '../app/assets/products/leite.png'
import Polvilho from '../app/assets/products/polvilho.png'
import Biscoito from '../app/assets/products/biscoito.png'

export default function Products() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 12,
    }
  })

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
      name: "Azeite Andorinha Virgem 500ml",
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
      name: "Polvilho doce Yoki 500g",
      price: 'R$11,50',
      image: Polvilho,
    }
  ]

  return <div className="m-6">
    <h1 className="text-2xl justify-items-start mb-2">Produtos em promoção</h1>
    <div ref={sliderRef} className="keen-slider h-48 w-12">
      {productsList.map(product => {
        return <div className="bg-red-200 keen-slider__slide flex rounded-md" key={product.id}>
          <Image
            className='w-48'
            src={product.image}
            alt={product.name} />
          <div className="flex flex-col text-center text-white-800">
            <h1 className="my-8">{product.name}</h1>
            <p>{product.price}</p>
          </div>
        </div>;
      })}
    </div>
  </div>

}