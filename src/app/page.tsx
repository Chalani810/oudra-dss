'use client';
import { ReactNode } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import wijesingheImg from '../../public/images/wijesinghe.jpeg';
import dehigollaImg from '../../public/images/dehigolla.jpeg';
import amarasooriyaImg from '../../public/images/amarasooriya.jpeg';
import architectureImg from '../../public/images/architecture.jpeg';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const FadeIn = ({ children, delay = 0, direction = 'up' }: FadeInProps) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: delay, ease: "easeOut" }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const techStack = [
    { name: 'React Web App', category: 'Frontend' },
    { name: 'React Native', category: 'Mobile' },
    { name: 'Node.js & Express', category: 'Backend' },
    { name: 'MongoDB Atlas', category: 'Database' },
    { name: 'ESP32 IoT Nodes', category: 'Hardware' },
    { name: 'Polygon Blockchain', category: 'Security' },
    { name: 'MobileNetV2 (AI)', category: 'Machine Learning' }
  ];

 return (
    <main className="flex flex-col min-h-screen overflow-hidden">
      
{/* --- 1. HERO SECTION --- */}
      <section id="home" className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden bg-transparent pt-20">
        
        {/* Main Title */}
        <FadeIn delay={0.1}>
          <h1 className="relative text-7xl sm:text-8xl md:text-[11rem] font-black mb-8 tracking-tighter leading-none mt-10">
            <span className="text-black">OU</span>
            <span className="text-[#22c55e] drop-shadow-[0_10px_20px_rgba(34,197,94,0.15)]">DRA</span>
            <span className="text-gray-300">.</span>
          </h1>
        </FadeIn>
        
        {/* Subtitle */}
        <FadeIn delay={0.2}>
          <div className="relative space-y-4 mb-12">
            <h2 className="text-2xl md:text-4xl font-medium text-gray-700 tracking-tight">
              The Decision Support System for
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-black uppercase">
              Sri Lankan Agarwood Cultivation
            </h3>
            <div className="mx-auto h-1.5 w-24 bg-[#22c55e] rounded-full mt-6"></div>
          </div>
        </FadeIn>
        
        {/* --- NEW PROJECT ABSTRACT --- */}
        {/* --- PROJECT ABSTRACT (SHORTENED) --- */}
        <FadeIn delay={0.3}>
          <div className="relative bg-white/60 backdrop-blur-md border border-gray-200 p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow max-w-4xl mx-auto mb-14 text-left">
            <h3 className="text-sm font-black text-green-600 uppercase tracking-widest mb-3 border-b border-green-200/50 pb-2 inline-block">
              Project Abstract
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">
              The Oudra project is a multi-modal Decision Support System (DSS) designed to eliminate the 40% premature harvesting rate in Sri Lankan agarwood cultivation caused by destructive, manual testing. Our solution unifies IoT environmental monitoring, non-invasive AI resin assessment, and Polygon blockchain certification to provide highly reliable, data-driven harvesting decisions. Ultimately, Oudra empowers stakeholders to maximize crop yields, ensure transparent supply chains, and command premium international market value.
            </p>
          </div>
        </FadeIn>
        
        {/* Call to Action Buttons */}
        <FadeIn delay={0.4}>
          <div className="relative flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto z-10 justify-center mb-10">
            <a href="#methodology" className="px-12 py-5 bg-[#22c55e] text-black rounded-2xl hover:bg-[#16a34a] hover:-translate-y-1 transition-all duration-300 font-black uppercase tracking-widest text-sm shadow-[0_20px_40px_rgba(34,197,94,0.25)]">
              Explore Methodology
            </a>
            <a href="#downloads" className="px-12 py-5 bg-white/80 backdrop-blur-sm border-2 border-gray-100 text-black rounded-2xl hover:border-black hover:-translate-y-1 transition-all duration-300 font-black uppercase tracking-widest text-sm shadow-sm">
              Project Documents
            </a>
          </div>
        </FadeIn>
      </section>

      {/* --- 2. LITERATURE SURVEY --- */}
      <section id="literature-survey" className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gray-50 rounded-full blur-[120px] -z-10"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Literature Survey</h2>
              <p className="text-green-500 font-bold uppercase tracking-widest text-xs">Current Practices & Limitations</p>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="p-10 bg-white rounded-3xl border border-gray-200 hover:border-gray-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 flex flex-col group h-full">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 border border-gray-100 shadow-sm text-gray-500 group-hover:text-black transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">Traditional Assessment</h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-grow">Current industry practices heavily rely on manual logbooks, subjective human evaluation, and slow lab-based resin tests. These methods are highly reactive and invasive, often causing physical damage to the trees.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="p-10 bg-white rounded-3xl border border-gray-200 hover:border-gray-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 flex flex-col group h-full">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 border border-gray-100 shadow-sm text-gray-500 group-hover:text-black transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">Technological Disconnection</h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-grow">While some farms use generic IoT tracking, these systems lack specific optimizations for agarwood's unique growth factors. Furthermore, there is a complete absence of digital, end-to-end traceability for export certification.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="p-10 bg-red-50/30 rounded-3xl border border-red-100 hover:border-red-200 hover:shadow-[0_8px_30px_rgb(239,68,68,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col group h-full">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 border border-red-100 shadow-sm text-red-400 group-hover:text-red-600 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path></svg>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">Economic Impact</h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-grow">Due to these subjective processes, <span className="font-bold text-red-500">over 40% of agarwood harvests occur prematurely</span>. This results in severe revenue loss and prevents Sri Lankan farmers from commanding premium prices in international markets.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* --- 3. RESEARCH GAP --- */}
      <section id="research-gap" className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">The Research Gap</h2>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeIn delay={0.1}><div className="p-8 bg-white rounded-3xl border border-gray-200 hover:border-gray-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"><div className="w-10 h-10 bg-gray-50 text-gray-600 rounded-lg flex items-center justify-center font-black text-sm mb-5 border border-gray-200">01</div><h3 className="text-lg font-bold text-gray-900 mb-3">Spatial Tracking Deficit</h3><p className="text-sm text-gray-600 leading-relaxed">The industry relies heavily on easily lost manual logbooks. There is a critical absence of mechanisms to visually track spatial data or maintain comprehensive, verifiable lifecycle histories for individual trees.</p></div></FadeIn>
            <FadeIn delay={0.2}><div className="p-8 bg-white rounded-3xl border border-gray-200 hover:border-gray-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"><div className="w-10 h-10 bg-gray-50 text-gray-600 rounded-lg flex items-center justify-center font-black text-sm mb-5 border border-gray-200">02</div><h3 className="text-lg font-bold text-gray-900 mb-3">Generic IoT Monitoring</h3><p className="text-sm text-gray-600 leading-relaxed">While some agricultural IoT exists, these systems are overly generic. They fail to factor in the highly specific soil, pH, and climate requirements unique to successful agarwood growth and resin induction.</p></div></FadeIn>
            <FadeIn delay={0.3}><div className="p-8 bg-white rounded-3xl border border-gray-200 hover:border-gray-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"><div className="w-10 h-10 bg-gray-50 text-gray-600 rounded-lg flex items-center justify-center font-black text-sm mb-5 border border-gray-200">03</div><h3 className="text-lg font-bold text-gray-900 mb-3">Destructive Assessment</h3><p className="text-sm text-gray-600 leading-relaxed">Current resin assessment requires physical damage to the tree, relies heavily on subjective human judgment, or depends on slow, expensive laboratory tests, directly leading to premature harvesting.</p></div></FadeIn>
            <FadeIn delay={0.4}><div className="p-8 bg-white rounded-3xl border border-gray-200 hover:border-gray-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"><div className="w-10 h-10 bg-gray-50 text-gray-600 rounded-lg flex items-center justify-center font-black text-sm mb-5 border border-gray-200">04</div><h3 className="text-lg font-bold text-gray-900 mb-3">Lack of Traceability</h3><p className="text-sm text-gray-600 leading-relaxed">There is a complete lack of end-to-end, unalterable traceability in the supply chain, making it incredibly difficult to prove crop authenticity and origin to foreign buyers and export certification bodies.</p></div></FadeIn>
          </div>
        </div>
      </section>

      {/* --- PROBLEM & SOLUTION --- */}
      <section id="problem-solution" className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Problem & Solution</h2>
              <p className="text-green-500 font-bold uppercase tracking-widest text-xs">Transforming Agarwood Cultivation</p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
            <FadeIn delay={0.1} direction="right">
              <div className="p-10 md:p-14 bg-white rounded-[2.5rem] border border-gray-200 shadow-sm hover:shadow-2xl hover:border-red-200 transition-all duration-500 flex flex-col relative overflow-hidden group h-full">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-[80px] -z-10 group-hover:bg-red-100 transition-colors duration-500"></div>
                <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-8 border border-red-100 shadow-sm"><svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg></div>
                <h3 className="text-3xl font-black text-gray-900 mb-6">The Core Problem</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8 flex-grow">Currently, over 40% of agarwood harvests occur prematurely. This is directly caused by manual, subjective resin assessments and a complete lack of digital tree tracking or environmental monitoring.</p>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Key Stakeholders Affected</h4>
                  <ul className="text-sm text-gray-700 space-y-3 font-medium">
                    <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-red-400 mr-3"></span> Field workers & Plantation managers</li>
                    <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-red-400 mr-3"></span> Agricultural investors & Certification bodies</li>
                    <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-red-400 mr-3"></span> Government forestry agencies</li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="left">
              <div className="p-10 md:p-14 bg-gradient-to-br from-green-50/80 to-white rounded-[2.5rem] border border-green-100 shadow-sm hover:shadow-2xl hover:border-green-300 transition-all duration-500 flex flex-col relative overflow-hidden group h-full">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-100/50 rounded-full blur-[80px] -z-10 group-hover:bg-green-200/50 transition-colors duration-500"></div>
                <div className="w-14 h-14 bg-green-500 text-white rounded-2xl flex items-center justify-center mb-8 shadow-md shadow-green-500/20"><svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                <h3 className="text-3xl font-black text-gray-900 mb-6">The Oudra Solution</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8 flex-grow">Oudra provides an <span className="font-bold text-green-600">integrated Decision Support System</span> that completely replaces manual, destructive, and unreliable management with data-driven, real-time, and verifiable decision making.</p>
                <div className="bg-white p-6 rounded-2xl border border-green-100 shadow-sm">
                  <h4 className="text-xs font-bold text-green-600 uppercase tracking-widest mb-4">Core Framework Pillars</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center text-sm font-bold text-gray-800 bg-gray-50 px-4 py-3 rounded-xl border border-gray-100 hover:border-green-300 transition-colors"><span className="text-green-500 text-lg mr-2">✦</span> AI Detection</div>
                    <div className="flex items-center text-sm font-bold text-gray-800 bg-gray-50 px-4 py-3 rounded-xl border border-gray-100 hover:border-green-300 transition-colors"><span className="text-green-500 text-lg mr-2">✦</span> IoT Monitoring</div>
                    <div className="flex items-center text-sm font-bold text-gray-800 bg-gray-50 px-4 py-3 rounded-xl border border-gray-100 hover:border-green-300 transition-colors"><span className="text-green-500 text-lg mr-2">✦</span> Digital Mapping</div>
                    <div className="flex items-center text-sm font-bold text-gray-800 bg-gray-50 px-4 py-3 rounded-xl border border-gray-100 hover:border-green-300 transition-colors"><span className="text-green-500 text-lg mr-2">✦</span> Blockchain</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- 3. CORE OBJECTIVE --- */}
      <section id="objectives" className="py-24 bg-black border-y border-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <FadeIn>
            <h2 className="text-gray-500 font-bold uppercase tracking-[0.2em] text-xs mb-10">Main Research Objective</h2>
            <blockquote className="text-2xl md:text-4xl font-medium text-white leading-snug mb-10">
              "To design, develop, and validate a multi-modal decision support system that reduces premature harvesting through AI-assisted resin detection achieving <span className="text-green-500 font-black tracking-tight">≥90% accuracy</span>."
            </blockquote>
            <div className="inline-block px-6 py-2 bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-bold rounded-full">
              Project Status: 90% Complete
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- 4. METHODOLOGY & ARCHITECTURE --- */}
      <section id="methodology" className="py-24 md:py-32 bg-white border-t border-gray-100 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Methodology</h2>
              <p className="text-green-500 font-bold uppercase tracking-widest text-xs">System Architecture</p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 order-2 lg:order-1">
              {[
                { id: '01', title: 'Tree Tracking', role: 'Digitalization', desc: 'NFC tagging & GPS mapping builds a real-time virtual plantation map.' },
                { id: '02', title: 'IoT Network', role: 'Growth Analytics', desc: 'ESP32 nodes monitor soil, pH, and temp with cloud-driven alerts.' },
                { id: '03', title: 'AI Detection', role: 'Resin Assessment', desc: 'Classifies resin condition as High, Medium, or No-Resin with 85%+ accuracy.' },
                { id: '04', title: 'Blockchain', role: 'Certification', desc: 'QR-verifiable harvest certificates recorded on the Polygon blockchain.' }
              ].map((comp, i) => (
                <FadeIn key={comp.id} delay={i * 0.1} direction="right">
                  <div className="p-8 bg-gray-50 rounded-3xl border border-gray-200 hover:border-green-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full">
                    <div className="w-12 h-12 bg-white text-green-600 border border-gray-200 shadow-sm rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors">
                      <span className="text-lg font-black">{comp.id}</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{comp.title}</h4>
                    <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest mb-4">{comp.role}</p>
                    <p className="text-sm text-gray-600 leading-relaxed flex-grow">{comp.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn direction="left">
              <div className="relative w-full rounded-[2.5rem] overflow-hidden border border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.08)] group bg-gray-50 flex items-center justify-center min-h-[300px] md:min-h-[450px] p-6 order-1 lg:order-2 h-full">
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white -z-10"></div>
                <img src={architectureImg.src} alt="Oudra System Architecture" className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-700 rounded-2xl" />
                <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-green-500/30 rounded-tl-lg"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-green-500/30 rounded-br-lg"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- 5. TECHNOLOGIES --- */}
      <section id="technologies" className="py-20 bg-black border-y border-gray-900">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <FadeIn>
            <h2 className="text-xs font-bold text-gray-600 uppercase tracking-[0.3em] mb-10">Technology Stack</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, i) => (
                <div key={i} className="px-6 py-3 bg-gray-900 border border-gray-800 rounded-xl text-sm font-bold text-gray-300 hover:border-green-500 hover:text-green-500 transition-all">{tech.name}</div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      
   {/* --- 7. PROJECT MILESTONES --- */}
      <section id="milestones" className="py-16 md:py-20 bg-white border-t border-gray-100 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Project Milestones</h2>
              <p className="text-green-500 font-bold uppercase tracking-widest text-xs">Research Timeline & Assessments</p>
            </div>
          </FadeIn>

          <div className="relative border-l-2 border-gray-100 ml-4 md:ml-0 md:border-none space-y-6 md:space-y-8">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 -translate-x-1/2"></div>

            {[
              { id: 'taf-submission', title: 'TAF Submission', date: 'June 2025', marks: '-', desc: 'Topic Assessment Form is submitted for the initial approval of the research topic and domain.', isCompleted: true },
              { id: 'project-charter', title: 'Project Charter', date: 'July 2025', marks: '-', desc: 'A formal document outlining the project scope, main objectives, and team roles.', isCompleted: true },
              { id: 'proposal-document', title: 'Proposal Document', date: 'August 2025', marks: '6%', desc: 'A Project Proposal document is submitted to the supervisor for the approval of the project.', isCompleted: true },
              { id: 'proposal-presentation', title: 'Proposal Presentation', date: 'September 2025', marks: '6%', desc: 'A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.', isCompleted: true },
              { id: 'progress-presentation-i', title: 'Progress Presentation I', date: 'January 2026', marks: '15%', desc: 'Reviews 50% completion of the project, identifying design or requirement gaps.', isCompleted: true },
              { id: 'progress-presentation-ii', title: 'Progress Presentation II', date: 'March 2026', marks: '18%', desc: 'Demonstrates 90% completion, along with poster presentation and analysis.', isCompleted: true },
              { id: 'final-report', title: 'Final Report & Group Report', date: 'April 2026', marks: '19%', desc: 'Evaluates the completed project including individual, group, and final reports.', isCompleted: false },
              { id: 'final-presentation', title: 'Final Presentation & Viva', date: 'April 2026', marks: '20%', desc: 'Individual viva to assess each member’s contribution to the research project.', isCompleted: false },
              { id: 'checklist', title: 'Checklist', date: 'April 2026', marks: '2%', desc: 'Includes commercialization plan, PM tool report, UAT, and business canvas.', isCompleted: false },
              { id: 'log-book', title: 'Log Book', date: 'April 2026', marks: '2%', desc: 'Validates project progress with supervisor comments and status documents.', isCompleted: false },
              { id: 'website-assessment', title: 'Website Assessment', date: 'April 2026', marks: '2%', desc: 'Website promotes the research project and reveals all related project details.', isCompleted: false },
              { id: 'research-paper', title: 'Research Paper', date: 'May 2026', marks: '16%', desc: 'Describes the project’s contribution to existing knowledge and literature review.', isCompleted: false },
              { id: 'final-thesis', title: 'Final Thesis Submission', date: 'May 2026', marks: '-', desc: 'The comprehensive and finalized thesis document is formally submitted for university archiving and final evaluation.', isCompleted: false }
            ].map((milestone, i) => (
              <FadeIn key={i} direction={i % 2 === 0 ? 'right' : 'left'}>
                {/* Added id here and scroll-mt-28 so the sticky nav doesn't cover the title when anchored */}
                <div id={milestone.id} className={`scroll-mt-28 relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot (Green check for completed, Gray clock for pending) */}
                  <div className={`absolute left-[-21px] md:static md:left-auto w-10 h-10 rounded-full border-4 border-white shadow-md flex items-center justify-center shrink-0 z-10 transition-colors duration-300 ${milestone.isCompleted ? 'bg-green-500' : 'bg-gray-100'}`}>
                    {milestone.isCompleted ? (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    ) : (
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    )}
                  </div>

                  <div className={`w-full md:w-[45%] pl-8 md:pl-0 ${i % 2 === 0 ? 'md:text-left md:pl-8' : 'md:text-right md:pr-8'}`}>
                    <div className={`bg-gray-50 p-5 rounded-3xl border transition-all duration-300 group hover:shadow-xl hover:-translate-y-1 ${milestone.isCompleted ? 'border-gray-200 hover:border-green-300' : 'border-gray-100 hover:border-gray-300 opacity-80 hover:opacity-100'}`}>
                      <div className={`flex items-center gap-3 mb-2 ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                        <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${milestone.isCompleted ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'}`}>
                          {milestone.date}
                        </span>
                        <span className="text-xs font-bold text-gray-500">Marks: {milestone.marks}</span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">{milestone.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{milestone.desc}</p>
                      
                      <div className={`mt-3 flex items-center gap-1.5 text-xs font-bold ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} ${milestone.isCompleted ? 'text-green-500' : 'text-amber-500'}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${milestone.isCompleted ? 'bg-green-500' : 'bg-amber-500'}`}></span>
                        {milestone.isCompleted ? 'Completed' : 'Pending'}
                      </div>
                    </div>
                  </div>

                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

    {/* --- 8. DOWNLOADS --- */}
      <section id="downloads" className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Project Documents</h2>
              <p className="text-green-500 font-bold uppercase tracking-widest text-xs">Download Research Artifacts</p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'TAF (Topic Assessment)', type: 'PDF Document', file: '/documents/TAF_25-26J-157.pdf' },
              { title: 'Project Proposal', type: 'PDF Document', file: '/documents/Project Proposal.pdf' },
              { title: 'Research Paper', type: 'IEEE Format', file: '/documents/Research Paper.pdf' },
              { title: 'Final Report', type: 'PDF Document', file: '/documents/Final Report.pdf' },
              { title: 'Proposal Presentation', type: 'Slides (PPTX)', file: '/documents/25-26J-157-Project Proposal Presentation.pptx' },
              { title: 'Progress Presentation I', type: 'Slides (PPTX)', file: '/documents/25-26J-157 PP1 Presentation Slides.pptx' },
              { title: 'Progress Presentation II', type: 'Slides (PPTX)', file: '/documents/25-26J-157 - PP2 presentation.pptx' },
              { title: 'Final Presentation', type: 'Slides (PPTX)', file: '/documents/Final Presentation.pptx' }
            ].map((doc, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                {/* --- FIXED A TAG HERE --- */}
                <a 
                  href={doc.file || '#'} 
                  download={!!doc.file} // Only trigger download if a file exists
                  target={doc.file ? "_blank" : undefined} // Open in new tab if needed
                  rel="noopener noreferrer"
                  className={`p-6 bg-white rounded-2xl border shadow-sm transition-all duration-300 flex flex-col justify-between h-full group ${
                    doc.file 
                    ? 'border-gray-200 hover:shadow-lg hover:border-green-300 hover:-translate-y-1 cursor-pointer' 
                    : 'border-gray-100 opacity-60 cursor-not-allowed' // Grays out items that don't have files yet
                  }`}
                >
                  <div>
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 border transition-colors ${
                      doc.file 
                      ? 'bg-gray-50 text-gray-400 border-gray-100 group-hover:bg-green-50 group-hover:text-green-500 group-hover:border-green-200'
                      : 'bg-gray-50 text-gray-300 border-gray-100'
                    }`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    </div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1 leading-snug">{doc.title}</h4>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">{doc.type}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-gray-50 pt-4">
                    <span className={`text-xs font-bold transition-colors ${doc.file ? 'text-gray-400 group-hover:text-green-600' : 'text-gray-300'}`}>
                      {doc.file ? 'Download' : 'Coming Soon'}
                    </span>
                    <svg className={`w-4 h-4 transition-colors ${doc.file ? 'text-gray-300 group-hover:text-green-500' : 'text-gray-200'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. TEAM --- */}
      <section id="team" className="py-24 md:py-32 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-black text-gray-900 tracking-tight">Research Team</h2>
              <div className="mx-auto h-1.5 w-24 bg-green-500 rounded-full mt-6"></div>
            </div>
          </FadeIn>
          
          <div className="mb-20">
            <FadeIn><h3 className="text-2xl font-black text-gray-900 mb-8 text-center">Supervisors</h3></FadeIn>
            <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { name: 'Ms. Chathurangika Kahandawarachchi', role: 'Supervisor', img: '/images/supervisor.jpg', linkedin: '#' },
                { name: 'Ms. Narmada Gamage', role: 'Co-Supervisor', img: '/images/co-supervisor.jpg', linkedin: '#' }
              ].map((person, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="flex items-center space-x-6 p-6 bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md hover:border-green-300 transition-all group relative">
                    <div className="w-24 h-24 rounded-2xl bg-gray-50 shrink-0 overflow-hidden border border-gray-200 group-hover:border-green-200 transition-colors">
                      <img src={person.img} alt={person.name} className="w-full h-full object-cover object-top" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-lg font-black text-gray-900 leading-tight mb-1 pr-8">{person.name}</h4>
                      <p className="text-green-600 font-bold text-xs uppercase tracking-widest">{person.role}</p>
                    </div>
                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="absolute top-6 right-6 text-gray-300 hover:text-[#0a66c2] transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <div>
            <FadeIn><h3 className="text-2xl font-black text-gray-900 mb-8 text-center">Team Members</h3></FadeIn>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'A.G.T. WIJESINGHE', id: 'IT22319142', role: 'Tree Tracking', img: wijesingheImg, isLeader: true, linkedin: '#' },
                { name: 'D.N. DEHIGOLLA', id: 'IT22123886', role: 'IoT Network', img: dehigollaImg, isLeader: false, linkedin: '#' },
                { name: 'R.P.C.A. AMARASOORIYA', id: 'IT22123640', role: 'AI Detection', img: amarasooriyaImg, isLeader: false, linkedin: '#' },
                { name: 'T.A.C.S. THENNAKOON', id: 'IT22310996', role: 'Blockchain', img: thennakoonImg, isLeader: false, linkedin: '#' }
              ].map((member, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className={`relative text-center bg-white p-5 md:p-6 rounded-3xl border transition-all duration-300 group flex flex-col items-center h-full ${member.isLeader ? 'border-green-400 shadow-lg shadow-green-500/10 hover:-translate-y-2' : 'border-gray-200 shadow-sm hover:border-green-300 hover:shadow-xl hover:-translate-y-2'}`}>
                    {member.isLeader && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full shadow-md z-10 border-2 border-white flex items-center gap-1 uppercase tracking-widest w-max">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"></path></svg>
                        Group Leader
                      </div>
                    )}
                    <div className={`w-full aspect-[4/5] bg-gray-50 rounded-2xl mb-4 overflow-hidden border transition-all duration-300 ${member.isLeader ? 'border-green-200' : 'border-gray-100 group-hover:border-green-200'}`}>
                      <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="flex items-center justify-center gap-1.5 mb-1 w-full">
                      <h5 className="font-black text-gray-900 text-sm truncate">{member.name}</h5>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#0a66c2] transition-colors shrink-0">
                        <svg className="w-[14px] h-[14px]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      </a>
                    </div>
                    <p className="text-[10px] text-gray-500 font-mono mb-4">{member.id}</p>
                    <span className={`mt-auto text-[9px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest transition-colors ${member.isLeader ? 'bg-green-100 text-green-700' : 'bg-gray-50 text-gray-600 group-hover:bg-green-100 group-hover:text-green-700'}`}>
                      {member.role}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 9. CONTACT --- */}
      <section id="contact" className="py-24 bg-black relative overflow-hidden border-t border-gray-900">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[150px]"></div>
        
        <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
          <FadeIn>
            <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-xs mb-4">Project ID: 25-26J-157</p>
            <h2 className="text-gray-100 text-4xl md:text-5xl font-black mb-8 tracking-tight">
              Get In <span className="text-green-500">Touch.</span>
            </h2>
            {/* Changed text-gray-600 back to text-gray-400 here so it shows up on the black background! */}
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              For inquiries regarding the Oudra DSS, agricultural investment, or academic collaboration.
            </p>
            
            <div className="bg-gray-900/50 backdrop-blur-md border border-gray-800 p-8 rounded-3xl mb-10 max-w-xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-1">Sri Lanka Institute of Information Technology</h3>
              <p className="text-green-500 text-sm">Faculty of Computing | Information Systems Engineering</p>
            </div>

            <a 
              href="mailto:research@oudra-project.com" 
              className="inline-block px-10 py-4 bg-green-500 text-black font-bold rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:bg-white hover:-translate-y-1 transition-all"
            >
              Email the Research Team
            </a>
          </FadeIn>
        </div>
      </section>

    </main>
  );
}