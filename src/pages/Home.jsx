import React from "react";
import { Link } from "react-router-dom"

const Home = () => {
	return (
		<div>
			<h2>임시 홈</h2>
			<Link to="/login">로그인</Link>
			<br/>
			<Link to="/main">Upcoming Event</Link>
		</div>
	)
}

export default Home;