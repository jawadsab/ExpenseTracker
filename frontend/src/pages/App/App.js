import React,{useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar,AddTransaction } from '../../components';
import { Spending, Transactions } from '../../pages';
import { TransactionWrapper, AddIcon, IconWrapper } from './App.elements';

const Main = () => {

  const [showAddCard,setShowAddCard] = useState(false);
  return (
    <>
      <Router>
        <Navbar />
        <TransactionWrapper>
          <AddTransaction showCard={showAddCard} />
          <IconWrapper onClick={() => setShowAddCard(!showAddCard)}>
            <AddIcon />
          </IconWrapper>
        </TransactionWrapper>
        <Switch>
          <Route exact path="/spending" component={Spending} />
          <Route exact path="/transactions" component={Transactions} />
        </Switch>
      </Router>
    </>
  );
};

export default Main;
