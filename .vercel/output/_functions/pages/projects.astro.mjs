import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_QXGJpzTU.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_CVOqSYH3.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-16"> <div class="max-w-6xl mx-auto px-4"> <h1 class="text-4xl font-bold mb-4">Projects & Case Studies</h1> <p class="text-xl text-slate-600 mb-12">Highlights from my professional work and personal development projects</p> <!-- Featured Project: 2samples --> <div class="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8 rounded-xl mb-8"> <div class="flex items-center gap-2 mb-4"> <span class="px-3 py-1 bg-blue-500 text-xs font-bold rounded-full">FEATURED</span> <span class="px-3 py-1 bg-green-500 text-xs font-bold rounded-full">PERSONAL PROJECT</span> </div> <h2 class="text-2xl font-bold mb-2">2samples Family Travel Site</h2> <p class="text-slate-300 mb-6">A full-stack web application documenting family travel adventures</p> <div class="grid md:grid-cols-2 gap-8"> <div> <h3 class="font-semibold text-blue-400 mb-3">The Journey</h3> <p class="text-slate-300 text-sm mb-4">
What started as a simple WordPress site evolved into a custom Flask application deployed on AWS.
              This project became a playground for learning modern DevOps practices and AI-assisted development.
</p> <h4 class="font-semibold text-white mb-2">Evolution:</h4> <ul class="text-slate-300 text-sm space-y-1 mb-4"> <li>• <span class="text-slate-400">Phase 1:</span> WordPress on shared hosting</li> <li>• <span class="text-slate-400">Phase 2:</span> Flask/Python rewrite with Grok AI assistance</li> <li>• <span class="text-slate-400">Phase 3:</span> AWS Elastic Beanstalk deployment</li> <li>• <span class="text-slate-400">Phase 4:</span> CI/CD pipeline with GitHub Actions + Claude Code</li> </ul> </div> <div> <h3 class="font-semibold text-blue-400 mb-3">Tech Stack</h3> <div class="flex flex-wrap gap-2 mb-4"> <span class="px-3 py-1 bg-slate-700 rounded-full text-sm">Python</span> <span class="px-3 py-1 bg-slate-700 rounded-full text-sm">Flask</span> <span class="px-3 py-1 bg-slate-700 rounded-full text-sm">AWS EB</span> <span class="px-3 py-1 bg-slate-700 rounded-full text-sm">S3</span> <span class="px-3 py-1 bg-slate-700 rounded-full text-sm">CloudFront</span> <span class="px-3 py-1 bg-slate-700 rounded-full text-sm">GitHub Actions</span> <span class="px-3 py-1 bg-slate-700 rounded-full text-sm">pytest</span> <span class="px-3 py-1 bg-slate-700 rounded-full text-sm">Globe.gl</span> </div> <h4 class="font-semibold text-white mb-2">Key Achievements:</h4> <ul class="text-slate-300 text-sm space-y-1"> <li>• 95%+ test coverage with TDD approach</li> <li>• Automated CI/CD: push to main → staging → manual prod</li> <li>• Interactive 3D globe visualization with Globe.gl</li> <li>• Video hosting via S3/CloudFront CDN</li> <li>• Built with heavy AI assistance (Grok + Claude Code)</li> </ul> </div> </div> <div class="mt-6 pt-6 border-t border-slate-700"> <p class="text-slate-400 text-sm mb-4">
This project demonstrates my ability to bridge program management with hands-on technical execution—understanding
            the full software development lifecycle from architecture through deployment and maintenance.
</p> <a href="https://www.2samples.com" target="_blank" rel="noopener" class="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
Visit 2samples.com
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path> </svg> </a> </div> </div> <!-- Professional Highlights --> <h2 class="text-2xl font-bold mb-6">Professional Project Highlights</h2> <div class="grid md:grid-cols-2 gap-6 mb-8"> <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200"> <div class="flex items-center gap-2 mb-3"> <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">FOOT LOCKER</span> </div> <h3 class="text-lg font-bold mb-2">Backstage Developer Portal Implementation</h3> <p class="text-slate-600 text-sm mb-4">
Led the implementation of Spotify's open-source Backstage developer portal, delivered $500K under budget.
            Improved developer experience and streamlined service discovery across 30 digital storefronts.
</p> <div class="flex flex-wrap gap-2"> <span class="px-2 py-1 bg-slate-100 rounded text-xs">Backstage</span> <span class="px-2 py-1 bg-slate-100 rounded text-xs">Developer Experience</span> <span class="px-2 py-1 bg-slate-100 rounded text-xs">Cost Optimization</span> </div> </div> <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200"> <div class="flex items-center gap-2 mb-3"> <span class="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">HIGHLAND</span> </div> <h3 class="text-lg font-bold mb-2">PMO Standup & Digital Transformation</h3> <p class="text-slate-600 text-sm mb-4">
Established PMO functions from scratch, increasing uptime 30% and reducing 10-30 hours/month in inefficient processes.
            Led migration of Microsoft Dynamics NAV to Azure and network management to Cisco Meraki.
</p> <div class="flex flex-wrap gap-2"> <span class="px-2 py-1 bg-slate-100 rounded text-xs">PMO</span> <span class="px-2 py-1 bg-slate-100 rounded text-xs">Azure Migration</span> <span class="px-2 py-1 bg-slate-100 rounded text-xs">Process Improvement</span> </div> </div> <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200"> <div class="flex items-center gap-2 mb-3"> <span class="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded">ASHLEY FURNITURE</span> </div> <h3 class="text-lg font-bold mb-2">Virtual Inventory & POS Solution</h3> <p class="text-slate-600 text-sm mb-4">
Developed handheld point-of-sale solution using Salesforce CRM Lightning components, driving $5M uplift to annual
            retail sales by reducing customer friction and enabling endless aisle options.
</p> <div class="flex flex-wrap gap-2"> <span class="px-2 py-1 bg-slate-100 rounded text-xs">Salesforce</span> <span class="px-2 py-1 bg-slate-100 rounded text-xs">Retail</span> <span class="px-2 py-1 bg-slate-100 rounded text-xs">Revenue Growth</span> </div> </div> <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200"> <div class="flex items-center gap-2 mb-3"> <span class="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded">HOSE-MCCANN COMMUNICATIONS</span> </div> <h3 class="text-lg font-bold mb-2">$20M Navy Maritime Communications Program</h3> <p class="text-slate-600 text-sm mb-4">
Led agile transformation for engineering/QA teams delivering secure maritime communication systems.
            Reduced regression cycles from 5 to 3 days with 20% improvement in automated testing.
</p> <div class="flex flex-wrap gap-2"> <span class="px-2 py-1 bg-slate-100 rounded text-xs">DoD</span> <span class="px-2 py-1 bg-slate-100 rounded text-xs">Agile Transformation</span> <span class="px-2 py-1 bg-slate-100 rounded text-xs">Test Automation</span> </div> </div> <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200"> <div class="flex items-center gap-2 mb-3"> <span class="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded">HONEYWELL</span> </div> <h3 class="text-lg font-bold mb-2">$600K NATO Missile Project Milestone</h3> <p class="text-slate-600 text-sm mb-4">
Ensured delivery of a challenging milestone by developing an innovative solution using pressure paper
            in hydraulic presses to simulate epoxy bonds. This out-of-the-box approach mitigated early assembly
            failures, preventing potential cost and schedule overruns.
</p> <div class="flex flex-wrap gap-2"> <span class="px-2 py-1 bg-slate-100 rounded text-xs">Defense</span> <span class="px-2 py-1 bg-slate-100 rounded text-xs">Strategic Thinking</span> <span class="px-2 py-1 bg-slate-100 rounded text-xs">Process Improvement</span> </div> </div> <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200"> <div class="flex items-center gap-2 mb-3"> <span class="px-2 py-1 bg-sky-100 text-sky-700 text-xs font-medium rounded">US AIR FORCE</span> </div> <h3 class="text-lg font-bold mb-2">Satellite Simulator Training Automation</h3> <p class="text-slate-600 text-sm mb-4">
Slashed training/evaluation budget by 15% ($25K/year) by automating scripts for Linux OS training suite.
            Applied simulator scripting techniques to automate training scenarios, eliminating manual input by evaluators.
</p> <div class="flex flex-wrap gap-2"> <span class="px-2 py-1 bg-slate-100 rounded text-xs">Automation</span> <span class="px-2 py-1 bg-slate-100 rounded text-xs">Cost Reduction</span> <span class="px-2 py-1 bg-slate-100 rounded text-xs">Linux</span> </div> </div> </div> <!-- This Portfolio --> <div class="bg-slate-100 p-8 rounded-xl"> <h2 class="text-2xl font-bold mb-4">This Portfolio Site</h2> <p class="text-slate-600 mb-4">
Built with modern web technologies to showcase both content and technical capability:
</p> <div class="flex flex-wrap gap-2 mb-4"> <span class="px-3 py-1 bg-white rounded-full text-sm border border-slate-300">Astro</span> <span class="px-3 py-1 bg-white rounded-full text-sm border border-slate-300">Tailwind CSS</span> <span class="px-3 py-1 bg-white rounded-full text-sm border border-slate-300">TypeScript</span> <span class="px-3 py-1 bg-white rounded-full text-sm border border-slate-300">Vercel</span> <span class="px-3 py-1 bg-white rounded-full text-sm border border-slate-300">Claude Code</span> </div> <p class="text-slate-500 text-sm">
Scaffolded and developed with AI assistance from Claude Code, demonstrating efficient use of modern development tools.
</p> </div> </div> </section> ` })}`;
}, "/Users/jaysamples/devproj/jaysamples-portfolio/src/pages/projects.astro", void 0);

const $$file = "/Users/jaysamples/devproj/jaysamples-portfolio/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
