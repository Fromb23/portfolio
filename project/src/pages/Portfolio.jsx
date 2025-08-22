import React, { useState, useEffect } from 'react';
import AboutMe from '../components/Aboutme';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CertificationsSkills from '../components/CertificationsSkills';

const Portfolio = () => {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		if (isDark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [isDark]);

	const toggleTheme = () => {
		setIsDark(!isDark);
	};

	return (
		<div className="min-h-screen">
			<Header isDark={isDark} toggleTheme={toggleTheme} />
			<Hero />
			<AboutMe />
			<Services />
			<CertificationsSkills />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
};

export default Portfolio;