import { useRouter } from 'next/router'
import { gql } from "@apollo/client";
import client from "../apollo-client";
import { useEffect, useState } from "react";
import jsonData from '../data.json';

const Tail = () => {
  const router = useRouter();

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);


  useEffect(async () => {
    const { tail } = router.query;

    if(tail) {
      setError(null);

      const { data } = await client.query({
        query: gql`
          query GetJsonIdFromTail {
            long_tails(where: {tail: {_eq: "${tail}"}}) {
              json_id
            }
          }
        `,
      });

      if(data.long_tails.length) {
        setData(jsonData.find(jd => jd.id === data.long_tails[0].json_id));
      } else {
        setError(`No data found for ${tail}`)
      }
    }

  }, [router.query.tail]);

  if(error) {
    return <p>{error}</p>;
  }

  if(!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <p>Title: {data.title}</p>
      <p>Description: {data.description}</p>
    </>
  )
}

export default Tail
