import React from "react";
import {DashboardNavigation,Home,Add,Modal,Analytics} from "../../components"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


const Dashboard = () => {
    return (
        <>
            <Router>
            <DashboardNavigation />
            <Switch>
                <Route exact path="/dashboard" component={Home} />
                <Route exact path="/stats" component={Analytics} />
            </Switch>
            <Modal></Modal>
            <Add />

            </Router>
            
            
        </>
    )
}
export default Dashboard;