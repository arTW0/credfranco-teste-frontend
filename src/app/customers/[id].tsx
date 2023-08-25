interface CustomersProps {
  customers: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
  }[]
}

export async function getStaticProps() {
  const res = await fetch('https://reqres.in/api/users')
  const { data } = await res.json();

  return {
    props: { customers: data }
  }
}

export default function Customers({ customers }: CustomersProps) {
  return <div>
    <h1>Clientes</h1>
    {customers.map(customer => {
      return <div key={customer.id}>
        <p>{customer.first_name}</p>
      </div>
    })}
  </div>
}

