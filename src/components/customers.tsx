export default function Customers() {
  const customersList = [
    {
      id: 1,
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
      Phone: "(38) 2142-2624"
    },
    {
      id: 2,
      email: "janet.weaver@reqres.in",
      first_name: "Janet",
      last_name: "Weaver",
      avatar: "https://reqres.in/img/faces/2-image.jpg",
      Phone: "(34) 2975-4833"
    },
    {
      id: 3,
      email: "emma.wong@reqres.in",
      first_name: "Emma",
      last_name: "Wong",
      avatar: "https://reqres.in/img/faces/3-image.jpg",
      Phone: "(38) 2935-9229"
    },
    {
      id: 4,
      email: "eve.holt@reqres.in",
      first_name: "Eve",
      last_name: "Holt",
      avatar: "https://reqres.in/img/faces/4-image.jpg",
      Phone: "(38) 9523-9553"
    },
    {
      id: 5,
      email: "charles.morris@reqres.in",
      first_name: "Charles",
      last_name: "Morris",
      avatar: "https://reqres.in/img/faces/5-image.jpg",
      Phone: "(38) 3652-9245"
    },
    {
      id: 6,
      email: "tracey.ramos@reqres.in",
      first_name: "Tracey",
      last_name: "Ramos",
      avatar: "https://reqres.in/img/faces/6-image.jpg",
      Phone: "(38) 8745-2415"
    }
  ]

  return <div className="p-3 bg-red-200 text-white-100">
    <h1 className="text-2xl mb-1">
      Lista de clientes
    </h1>
    <section className="flex space-x-32">
      <p className="text-lg ml-16">Nome </p>
      <p className="text-lg pr-20 pl-2">Email</p>
      <p className="ml-40">Telefone</p>
    </section>
    {customersList.map(customer => {
      return <div className="flex" key={customer.id}>
        <div className="flex items-center w-1/6">
          <img className="w-10 h-10 m-1 mr-3 rounded-full" src={customer.avatar} alt={customer.first_name} />
          <p className="mr-1">{customer.first_name} </p>
          <p>{customer.last_name}</p>
        </div>
        <div className="flex w-1/6">
          <p className="flex items-center">{customer.email}</p>
        </div>
        <div className="flex w-1/6">
          <p className="flex items-center">{customer.Phone}</p>
        </div>
      </div>
    })}
  </div>
}