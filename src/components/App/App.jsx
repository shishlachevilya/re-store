import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, CardPage } from '../Pages';
import ShopHeader from '../ShopHeader';

const App = () => {
  return (
    <main role='main' className='container'>
      <ShopHeader numItems={2} total={132} />
      <Switch>
        <Route path='/' component={ HomePage } exact/>
        <Route path='/cart' component={ CardPage }/>
      </Switch>
    </main>
  );
};

export default App;
