import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import ResultCard from '../../components/ResultCard';
import { Container, ResultsBox, PaginationButton, PaginationSection } from '../../styles/characters.styled';
import { nanoid } from 'nanoid';


const CharacterList = ( ) => {
  const router = useRouter();

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (router.query.page) {
      setPage(parseInt(router.query.page));
    }
  }, [router.query.page]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
        if(response.status === 404) {
          router.push('/404');
        }

        const data = await response.json();
        setTotalPages(data.info.pages)
        setCharacters(data.results);
        setLoading(false);
      } catch (err) {
        console.log(err,'::error')
        console.error(err);
      }
    };
    fetchData();
  }, [page, router]);

  if (loading) {
    return <p>Loading...</p>;
  }


  const paginate = (direction) => {
    if (direction === 'next') {
      router.push(`/characters/${page + 1}`);
    } else {
      router.push(`/characters/${page - 1}`);
    }
  }

  return (
      <Container>
        <PaginationSection>
          { page > 1 &&
            <PaginationButton onClick={()=>paginate()} className="left">
              <i className="arrow left"></i>
            </PaginationButton>   
          }
        </PaginationSection>
        <motion.div
          key={nanoid()}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <ResultsBox>
            {characters && characters.length > 1 ? characters.map(character => (
              <ResultCard key={nanoid()} result={character} />
            )) : <p>LOADING</p>}
          </ResultsBox>
        </motion.div>
        <PaginationSection>
          { page < totalPages &&  
                  <PaginationButton onClick={()=>paginate('next')} className="right">
                  <i className="arrow right"></i>
                </PaginationButton> 
          }
        </PaginationSection>
      </Container>
  );
};

CharacterList.getInitialProps = async ({ query }) => {
  return {
    page: query.page || 1,
  };
};

export default CharacterList;
