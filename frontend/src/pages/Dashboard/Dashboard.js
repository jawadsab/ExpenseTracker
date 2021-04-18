import React from "react";
import {DashboardNavigation,Home} from "../../components"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

const Test = () => {
    return <h1 style={{marginLeft:"20vw",background:"red",width:"100%",height:"100vh"}}>TEST</h1>
}

const Dashboard = () => {
    return (
        <>
            <Router>
            <DashboardNavigation />
            <Switch>
                <Route exact path="/dashboard" component={Home} />
            </Switch>

            </Router>
            
            
        </>
    )
}
export default Dashboard;