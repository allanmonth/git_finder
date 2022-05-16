import React, { useState } from 'react';
import Router from 'next/router';
import Octicon, { MarkGithub } from '@primer/octicons-react';
import { Button, Corner, Head, RateLimit } from '../components';
import intl from 'react-intl-universal';
import { StyledContainer } from '../style/home';
import Image from 'next/image';
import { hands } from './../static/assets';

const Home = () => {
  const [username, setUsername] = useState('');
  const [init, setInit] = useState(true);
  const handleChange = e => setUsername(e.target.value);

  return (
    <main>
      <Head title="Git Finder" />
      <RateLimit rateLimit={null} setInit={setInit} />
      <Corner/>
      <StyledContainer>
        <form
          onSubmit={e => {
            e.preventDefault();
            Router.push({
              pathname: '/user',
              query: { id: username },
            });
          }}>
          <div>
            <Octicon icon={MarkGithub} size="large" />
          </div>
          {!init ?
          <>
           <label>
             {intl.get('hello')}
             <div className='swipeDownIcon'>
               <Image
                 alt="Hands icon."
                 src={hands}
                 width="20px"
                 height="20px"/>
             </div>
           </label>
          <div>
            <input placeholder={intl.get('hello2')} name="username" type="text" onChange={handleChange} />
            <br/>
            <Button type={'submit'}>{intl.get('hello3')}</Button>
          </div>
          </>
            : null}
        </form>
      </StyledContainer>
    </main>
  );
};

export default Home;
