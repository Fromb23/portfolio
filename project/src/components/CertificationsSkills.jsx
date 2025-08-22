import React, { useState } from 'react';
import { Award, BookOpen, Server, Cpu, Database, Shield, Zap, Code, Cloud, Terminal, ExternalLink, X } from 'lucide-react';

const CertificationsSkills = () => {
	const [selectedCert, setSelectedCert] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	// Certification data
	const certifications = [
		{
			title: "ALX Certified Backend Developer",
			issuer: "ALX Africa",
			date: "2025",
			image: "/certs/cert1.png",
			link: "https://intranet.alxswe.com/certificates/NsJcM6C3Ty"
		},
		{
			title: "Powerlearn Project",
			issuer: "Software Engineering Basics",
			date: "2024",
			image: "/certs/cert2.png",
			link: ""
		}
	];

	// Backend skills data (unchanged)
	const backendSkills = [
		// ... (same as your original code)
	];

	const openCertModal = (cert) => {
		setSelectedCert(cert);
		setIsModalOpen(true);
		document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
	};

	const closeCertModal = () => {
		setIsModalOpen(false);
		setSelectedCert(null);
		document.body.style.overflow = 'auto'; // Re-enable scrolling
	};

	return (
		<section id="certifications-skills" className="py-20 bg-primary">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Certifications Section */}
				<div className="mb-20">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center justify-center">
							<Award className="mr-3 text-accent" size={32} />
							Certifications & Qualifications
						</h2>
						<p className="text-lg text-secondary max-w-3xl mx-auto">
							Continuous learning and professional development are key to staying current in the ever-evolving tech landscape.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{certifications.map((cert, index) => (
							<div key={index} className="bg-card rounded-xl overflow-hidden shadow-theme hover:shadow-theme-lg transition-all hover:-translate-y-2 group">
								<div
									className="h-40 bg-secondary flex items-center justify-center p-4 cursor-pointer"
									onClick={() => openCertModal(cert)}
								>
									<img
										src={cert.image}
										alt={cert.title}
										className="max-h-24 max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
									/>
								</div>
								<div className="p-5">
									<h3 className="font-semibold text-primary mb-1 group-hover:text-accent transition-colors">{cert.title}</h3>
									<p className="text-sm text-secondary mb-2">{cert.issuer}</p>
									<div className="flex justify-between items-center">
										<span className="text-xs text-accent bg-accent/10 px-2 py-1 rounded-full">{cert.date}</span>
										<button
											onClick={() => openCertModal(cert)}
											className="text-accent hover:text-primary text-sm flex items-center transition-colors"
										>
											View details
											<ExternalLink size={14} className="ml-1" />
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Certification Modal */}
				{isModalOpen && selectedCert && (
					<div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
						<div className="bg-card rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
							<div className="sticky top-0 bg-card p-4 border-b border-secondary flex justify-between items-center">
								<h3 className="text-xl font-semibold text-primary">{selectedCert.title}</h3>
								<button
									onClick={closeCertModal}
									className="p-1 rounded-full hover:bg-secondary transition-colors"
									aria-label="Close modal"
								>
									<X size={24} className="text-primary" />
								</button>
							</div>

							<div className="p-6">
								<div className="flex flex-col md:flex-row gap-6">
									<div className="md:w-1/2 flex items-center justify-center bg-secondary p-6 rounded-lg">
										<img
											src={selectedCert.image}
											alt={selectedCert.title}
											className="max-h-full max-w-full object-contain"
										/>
									</div>

									<div className="md:w-1/2">
										<div className="mb-6">
											<h4 className="text-lg font-medium text-primary mb-2">Certificate Details</h4>
											<p className="text-secondary mb-1"><span className="font-medium">Issuer:</span> {selectedCert.issuer}</p>
											<p className="text-secondary mb-1"><span className="font-medium">Date:</span> {selectedCert.date}</p>
											{selectedCert.link && (
												<a
													href={selectedCert.link}
													target="_blank"
													rel="noopener noreferrer"
													className="text-accent hover:underline inline-flex items-center mt-2"
												>
													Verify credential online <ExternalLink size={14} className="ml-1" />
												</a>
											)}
										</div>

										<div>
											<h4 className="text-lg font-medium text-primary mb-2">Skills Acquired</h4>
											<ul className="text-secondary space-y-1">
												<li className="flex items-start">
													<span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
													<span>Backend development principles and best practices</span>
												</li>
												<li className="flex items-start">
													<span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
													<span>API design and implementation</span>
												</li>
												<li className="flex items-start">
													<span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
													<span>Database management and optimization</span>
												</li>
												<li className="flex items-start">
													<span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
													<span>Authentication and security protocols</span>
												</li>
											</ul>
										</div>
									</div>
								</div>

								<div className="mt-6 flex justify-end">
									<button
										onClick={closeCertModal}
										className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
									>
										Close
									</button>
								</div>
							</div>
						</div>
					</div>
				)}

				{/* Backend Skills Section (unchanged) */}
				<div>
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center justify-center">
							<Terminal className="mr-3 text-accent" size={32} />
							Backend Engineering Expertise
						</h2>
						<p className="text-lg text-secondary max-w-3xl mx-auto">
							Building robust, scalable server-side solutions with modern technologies and best practices.
						</p>
					</div>

					<div className="bg-card rounded-xl p-8 shadow-theme mb-12">
						<div className="grid md:grid-cols-2 gap-8 items-center">
							<div>
								<h3 className="text-2xl font-semibold text-primary mb-4">My Backend Development Philosophy</h3>
								<p className="text-secondary mb-4 leading-relaxed">
									As a backend developer, I specialize in creating the foundation that powers applications—the server,
									database, and application logic that users never see but always rely on. My approach combines
									technical excellence with practical solutions that scale.
								</p>
								<p className="text-secondary leading-relaxed">
									I believe in building systems that are not just functional but resilient, maintainable, and
									efficient. From designing database schemas to implementing authentication systems and creating
									comprehensive API documentation, I focus on the details that make applications robust and reliable.
								</p>
							</div>
							<div className="grid grid-cols-2 gap-4">
								<div className="bg-secondary p-4 rounded-lg text-center">
									<div className="text-accent text-3xl font-bold mb-1">99.9%</div>
									<div className="text-sm text-primary">Uptime Reliability</div>
								</div>
								<div className="bg-secondary p-4 rounded-lg text-center">
									<div className="text-accent text-3xl font-bold mb-1">200ms</div>
									<div className="text-sm text-primary">Avg. Response Time</div>
								</div>
								<div className="bg-secondary p-4 rounded-lg text-center">
									<div className="text-accent text-3xl font-bold mb-1">100</div>
									<div className="text-sm text-primary">API Requests/Hour</div>
								</div>
								<div className="bg-secondary p-4 rounded-lg text-center">
									<div className="text-accent text-3xl font-bold mb-1">24/7</div>
									<div className="text-sm text-primary">Monitoring</div>
								</div>
							</div>
						</div>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{backendSkills.map((skill, index) => (
							<div key={index} className="bg-card p-6 rounded-xl shadow-theme hover:shadow-theme-lg transition-all hover:-translate-y-1 group">
								<div className="flex items-center mb-4">
									<div className="bg-accent/10 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform">
										{skill.icon}
									</div>
									<h3 className="text-xl font-semibold text-primary">{skill.category}</h3>
								</div>
								<p className="text-secondary mb-4 text-sm leading-relaxed">{skill.description}</p>
								<div className="flex flex-wrap gap-2">
									{skill.skills.map((item, idx) => (
										<span key={idx} className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">
											{item}
										</span>
									))}
								</div>
							</div>
						))}
					</div>

					{/* Backend Engineering Details */}
					<div className="mt-12 bg-card rounded-xl p-8 shadow-theme">
						<h3 className="text-2xl font-semibold text-primary mb-6 text-center">Comprehensive Backend Implementation</h3>

						<div className="grid md:grid-cols-2 gap-8">
							<div>
								<h4 className="text-lg font-medium text-primary mb-4 flex items-center">
									<Server className="mr-2 text-accent" size={20} />
									API Development & Integration
								</h4>
								<ul className="space-y-3 text-secondary">
									<li className="flex items-start">
										<span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
										<span>Designed and implemented <strong>RESTful APIs</strong> with proper status codes, error handling, and versioning</span>
									</li>
									<li className="flex items-start">
										<span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
										<span>Built <strong>GraphQL</strong> schemas and resolvers for efficient data fetching with Apollo Server</span>
									</li>
									<li className="flex items-start">
										<span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
										<span>Implemented real-time features with <strong>WebSockets</strong> and Socket.io for live updates</span>
									</li>
									<li className="flex items-start">
										<span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
										<span>Created comprehensive API documentation with Swagger/OpenAPI specifications</span>
									</li>
								</ul>
							</div>

							<div>
								<h4 className="text-lg font-medium text-primary mb-4 flex items-center">
									<Database className="mr-2 text-accent" size={20} />
									Database & Infrastructure
								</h4>
								<ul className="space-y-3 text-secondary">
									<li className="flex items-start">
										<span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
										<span>Designed optimized database schemas and implemented efficient query patterns</span>
									</li>
									<li className="flex items-start">
										<span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
										<span>Containerized applications with <strong>Docker</strong> and managed multi-container environments</span>
									</li>
									<li className="flex items-start">
										<span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
										<span>Implemented <strong>global error handlers</strong> and structured logging systems</span>
									</li>
									<li className="flex items-start">
										<span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
										<span>Set up monitoring, alerting, and performance tracking for production systems</span>
									</li>
								</ul>
							</div>
						</div>

						<div className="mt-8 p-4 bg-secondary rounded-lg border-l-4 border-accent">
							<div className="flex items-start">
								<BookOpen className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
								<p className="text-primary">
									<strong>My goal as a backend engineer</strong> is to build systems that are not just functional but
									exceptional—scalable architectures that handle growth, secure implementations that protect data,
									and efficient code that delivers performance. I'm committed to writing clean, maintainable code
									and implementing best practices that stand the test of time and scale.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CertificationsSkills;