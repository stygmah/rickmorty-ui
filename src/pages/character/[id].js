import React, { useState, useEffect } from 'react';
import InfoCard from '@/components/InfoCard';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { nanoid } from 'nanoid';

const Character = ({ id }) => {
  const [character, setCharacter] = useState({});
  const router= useRouter();

  useEffect(() => {

    const fetchCharacter = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      if(response.status === 404) {
        router.push('/404');
      }

      const data = await response.json();
      setCharacter(data);
    };

    fetchCharacter();
  }, [id, router]);
  // TODO: CHANGE CSS FROM INFOCARD TO THIS PAGE
  return (
    <motion.div
      key={nanoid()}
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <InfoCard
        character={character}
      />
    </motion.div>
  );
};

Character.getInitialProps = async ({ query }) => {
  return { id: query.id };
};

export default Character;
