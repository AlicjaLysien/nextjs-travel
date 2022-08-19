import Layout from '../../layout/Layout';
import MonumentItem from '../../components/MonumentItem';

type Props = {
  data: Array<any>,
};

interface Item {
  id: number;
  name: string;
  url: string;
  linkToPhoto: string;
  description: string;
  continent: string;
  country: string;
  coordinates: string;
}

export default function Monument( {data} : Props) {

  return (
    <Layout>
      <>
        <h2>
          List of monuments
        </h2>
        {data.length === 0 && <p>Nothing to show</p>}

        {data.map((item) => (
          <>
            <MonumentItem key={item.id} monument={item} />

            </>
        ))}
        
      </>
    </Layout>
  )
}

export async function getStaticProps(){
  const response = await fetch('https://api.phippy.net/open-api/monuments/all-monuments')
  const data = await response.json()
  return {
    props: {data}
  }
}

