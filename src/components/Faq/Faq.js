import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faqContents} from '../../data/dataStore';


const Faq = () => (
  <Container>
    <Hero titleText={faqContents.title} imageSrc={faqContents.image}/>
    <p>{faqContents.content}</p>
  </Container>
);

export default Faq;