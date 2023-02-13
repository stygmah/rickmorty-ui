import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import ResultCard from '../../components/ResultCard';
import { Container, ResultsBox, PaginationButton, PaginationSection } from '../../styles/characters.styled';
import { nanoid } from 'nanoid';
import AuthenticatedRoute from '@/components/AuthenticatedRoute';
import { RICK_AND_MORTY_API_CHARACTERS } from '@/constants/endpoints';


const CharacterList = ( ) => {
  const router = useRouter();

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [invertAnimation, setInvertAnimation] = useState(false);

  useEffect(() => {
    if (router.query.page) {
      setPage(parseInt(router.query.page));
    }
  }, [router.query.page]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${RICK_AND_MORTY_API_CHARACTERS}/?page=${page}`);
        if(response.status === 404) {
          router.push('/404');
        }

        const data = await response.json();
        setTotalPages(data.info.pages)
        setCharacters(data.results);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [page, router]);

  if (loading) {
    return null;
  }


  const paginate = (direction) => {
    if (direction === 'next') {
      router.push(`/characters/${page + 1}`);
      setInvertAnimation(false);
    } else {
      router.push(`/characters/${page - 1}`);
      setInvertAnimation(true);
    }
  }

  return (
    <AuthenticatedRoute>
      <Head>
        <title>Characters page {page} - Rick and Morty App </title>
        <meta name="description" content="Rick and morty app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
          initial={invertAnimation ? { x: -300, opacity: 0 } : { x: 300, opacity: 0 }}
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
    </AuthenticatedRoute>
  );
};

CharacterList.getInitialProps = async ({ query }) => {
  return {
    page: query.page || 1,
  };
};

export default CharacterList;
