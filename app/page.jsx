import React from 'react';
import Feed from '@components/feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className='orange_gradient text-center'>AI-Powered Prompts</span>
      </h1>
      <p className='desc text-center'>
        Open-source AI prompting tool
      </p>
      <Feed/>
    </section>
  );
};

export default Home;
