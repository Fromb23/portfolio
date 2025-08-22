import React from 'react';
import { Code, Heart, BookOpen, Palette } from 'lucide-react';

const Footer = () => {
	return (
		<footer className="bg-card py-8 border-t border-primary">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="text-primary mb-4 md:mb-0 flex items-center">
						<Code className="mr-2 text-accent" size={16} />
						<p>&copy; 2025 Francis Rombo. All rights reserved.</p>
					</div>
					<div className="flex space-x-6">
						<a href="#" className="text-secondary hover:text-accent transition-colors flex items-center">
							<Heart size={14} className="mr-1" fill="currentColor" />
							Privacy
						</a>
						<a href="#" className="text-secondary hover:text-accent transition-colors flex items-center">
							<BookOpen size={14} className="mr-1" />
							Terms
						</a>
						<a href="#" className="text-secondary hover:text-accent transition-colors flex items-center">
							<Palette size={14} className="mr-1" />
							Cookies
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
