import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import './App.css';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Loading from './components/Loading';
import Dashboard from './components/pages/Dashboard';
import Routines from './components/pages/Routines';
import Account from './components/pages/Account';
import { AuthProvider } from './Auth';
import History from './components/pages/History';

function App() {
	return (
		<AuthProvider>
			<Router>
				<div className="App font-display min-h-screen max-w-lg bg-gray-200 mx-auto">
					<Route path="/login" component={Login} />
					<Route path="/signup" component={Signup} />
					<Route path="/loading" component={Loading} />
					<PrivateRoute path="/" exact component={Dashboard} />
					<PrivateRoute path="/routines" component={Routines} />
					<PrivateRoute path="/account" component={Account} />
					<PrivateRoute path="/history" component={History} />
				</div>
			</Router>
		</AuthProvider>
	);
}

export default App;
