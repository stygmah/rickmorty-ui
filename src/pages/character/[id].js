import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { nanoid } from 'nanoid';
import { RICK_AND_MORTY_API_CHARACTERS } from '@/constants/endpoints';
import AuthenticatedRoute from '@/components/AuthenticatedRoute';
import InfoCard from '@/components/InfoCard';

const Character = ({ id }) => {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const router= useRouter();

  useEffect(() => {
    const fetchCharacter = async () => {
      setLoading(true);
      const response = await fetch(`${RICK_AND_MORTY_API_CHARACTERS}/${id}`);
      if(response.status === 404) {
        router.push('/404');
      }

      const data = await response.json();
      setLoading(false);
      setCharacter(data);
    };

    fetchCharacter();
  }, [id, router]);

  if (loading) {
    return null;
  }

  // TODO: CHANGE CSS FROM INFOCARD TO THIS PAGE
  return (
    <AuthenticatedRoute>
        <Head>
          <title>Character: {character?.name} - Rick and Morty App </title>
          <meta name="description" content="Rick and morty app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <motion.div
          key={nanoid()}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <InfoCard
            character={character}
          />
        </motion.div>
    </AuthenticatedRoute>
  );
};

Character.getInitialProps = async ({ query }) => {
  return { id: query.id };
};

export default Character;
