import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';
import './App.css';
import Loading from './components/Loading';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Dashboard from './components/pages/Dashboard';
import Routines from './components/pages/Routines';
import Account from './components/pages/Account';
import History from './components/pages/History';
import Progress from './components/pages/Progress';

function App() {
	return (
		<AuthProvider>
			<Router>
				<div className="App font-display min-h-screen max-w-lg bg-gray-200 mx-auto">
					<Route path="/login" component={Login} />
					<Route path="/signup" component={Signup} />
					<Route path="/loading" component={Loading} />
					<PrivateRoute path="/" exact component={Dashboard} />
					<PrivateRoute path="/history" component={History} />
					<PrivateRoute path="/routines" component={Routines} />
					<PrivateRoute path="/progress" component={Progress} />
					<PrivateRoute path="/account" component={Account} />
				</div>
			</Router>
		</AuthProvider>
	);
}

export default App;
