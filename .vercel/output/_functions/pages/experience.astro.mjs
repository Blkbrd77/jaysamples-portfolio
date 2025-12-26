import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_QXGJpzTU.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_CVOqSYH3.mjs';
export { renderers } from '../renderers.mjs';

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const experiences = [
    {
      period: "Nov 2024 \u2013 Present",
      company: "Hose-McCann Communications",
      location: "Deerfield Beach, Florida",
      title: "Program Manager \u2013 DoD Programs",
      description: "Leading Manufacturer and Designer of Land and Marine Turn-Key Communication Solutions",
      highlights: [
        "Executed project plans with dependencies/timelines; consolidated 30 Trello boards via Placker/SOPs/training, ensuring data hygiene and early deliveries",
        "Applied Earned Value Management (EVM) and financial metrics to monitor cost/schedule performance for a $1M Coast Guard integration project with multi-vendor coordination",
        "Recovered engineering discrepancy on customer-furnished equipment, securing equitable adjustment to maintain customer schedule"
      ]
    },
    {
      period: "Jul 2024 \u2013 Nov 2024",
      company: "Independent Consultant",
      location: "Remote",
      title: "Scrum Coach \u2013 PMI-ACP Certification Instructor",
      description: "Independent consulting and certification training",
      highlights: [
        "Delivered PMI-ACP certification preparation courses to aspiring agile practitioners",
        "Coached teams and individuals on Agile methodologies and Scrum practices",
        "Developed training materials and curriculum for certification exam preparation"
      ]
    },
    {
      period: "Mar 2023 \u2013 Nov 2024",
      company: "Foot Locker",
      location: "St. Petersburg and Remote, Florida",
      title: "Senior Director \u2013 Engineering and Platform Enablement",
      description: "$8B diversified global retailer across 30 digital storefronts, 10 mobile applications, and 2,500 stores",
      highlights: [
        "Coached team in implementing open-source developer platform Backstage, delivered under budget by $500K",
        "Increased distributed tracing into customer website flow, reduced false-positive bot signatures over 13%",
        "Developed OPEX/CAPEX budget plans, aligning IT investments with organizational goals; led cost optimization & rationalization initiatives"
      ]
    },
    {
      period: "Jun 2018 \u2013 Mar 2023",
      company: "Highland Companies",
      location: "Mulberry, Florida",
      title: "Director of Program Management Office / Chief Operating Officer",
      description: "Specialty agricultural software and products for large and small produce growers and packers",
      highlights: [
        "Cut audit preparation time over 25%, collaborated with vendors to comply with SOC 2 Trusted Service Criteria audit requirements",
        "Authored technical specifications, statements of work (SOW), and negotiated contracts for innovative ERP vendor plugin software",
        "Developed training program for multi-state non-profit Executive Director certification; coached over 200 support personnel"
      ]
    },
    {
      period: "Jun 2017 \u2013 Jun 2018",
      company: "Ashley Furniture Industries",
      location: "Tampa, Florida",
      title: "Manager \u2013 IT Development",
      description: "Vertically integrated $4.7B leading manufacturer and retailer of home furnishings with 35,000 employees across 155 global countries",
      highlights: [
        "Enabled seamless integration between advanced digital asset management (InRiver) and legacy EDI systems utilizing MuleSoft connectors; increased inventory and image data pulls by 15%",
        "Mentored Scrum team operating in SAFe for Lean Enterprise; increased team efficiency 25% and met critical deliveries",
        "Matured advanced RESTful data exchanges, enabling seamless communication data accuracy/availability"
      ]
    },
    {
      period: "Jan 2015 \u2013 Jun 2017",
      company: "Honeywell International Inc.",
      location: "Largo, Florida",
      title: "Lead Project Management Specialist",
      description: "Fortune 100 Technology company, $11.8B Aerospace division, products used on virtually every commercial and defense aircraft platform worldwide",
      highlights: [
        "Shepherded advanced testing, performed shock, soak, and electromagnetic testing achieving 98% compliance with government flow down requirements to Raytheon",
        "Enhanced collaboration between sites, established program metrics, managed counterfeit parts investigation IAW C-SCRM",
        "Formulated new baseline schedule in Microsoft Project for partner Taiwan Air Force to deliver critical ferrite components to early warning radar system"
      ]
    },
    {
      period: "Jun 2004 \u2013 Dec 2014",
      company: "United States Air Force",
      location: "United States and Iraq",
      title: "Acquisition Manager",
      description: "The mission of the United States Air Force is to fly, fight and win \u2013 airpower anytime, anywhere",
      highlights: [
        "Highly decorated for excellence in execution of space and air domain weapon systems projects; held TS/SCI clearance",
        "Directed depot maintenance retrofits for COTS enhancements to command-and-control systems on AWACS and JSTARS; Lean Six Sigma Green Belt awarded",
        "Oversaw cyber-security upgrades to JSTARS software lab and mission systems; patched 3M lines of code",
        "Managed vendor performance and flow downs to subcontractors on $480M advisory and assistance contract"
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Experience" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-16"> <div class="max-w-4xl mx-auto px-4"> <h1 class="text-4xl font-bold mb-4">Professional Experience</h1> <p class="text-xl text-slate-600 mb-12">20+ years driving transformation across defense, retail, and technology sectors</p> <!-- Timeline --> <div class="relative"> <!-- Timeline line --> <div class="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-200"></div> ${experiences.map((exp, index) => renderTemplate`<div${addAttribute(`relative mb-12 ${index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0 md:mr-auto md:w-1/2" : "md:pl-12 md:ml-auto md:w-1/2"} pl-8 md:pl-0`, "class")}> <!-- Timeline dot --> <div${addAttribute(`absolute top-0 ${index % 2 === 0 ? "left-0 md:left-auto md:right-0 md:translate-x-1/2" : "left-0 md:-translate-x-1/2"} w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow`, "class")}></div> <div${addAttribute(`bg-white p-6 rounded-xl shadow-sm border border-slate-200 ${index % 2 === 0 ? "md:mr-6" : "md:ml-6"} ml-4 md:ml-0`, "class")}> <span class="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-3"> ${exp.period} </span> <h3 class="text-xl font-bold text-slate-800">${exp.title}</h3> <p class="text-blue-600 font-medium">${exp.company}</p> <p class="text-slate-500 text-sm mb-4">${exp.location}</p> <p class="text-slate-600 text-sm italic mb-4">${exp.description}</p> <ul${addAttribute(`text-slate-600 text-sm space-y-2 ${index % 2 === 0 ? "md:text-left" : ""}`, "class")}> ${exp.highlights.map((highlight) => renderTemplate`<li class="flex items-start gap-2"> <span class="text-blue-600 mt-1">•</span> <span>${highlight}</span> </li>`)} </ul> </div> </div>`)} </div> <!-- Download Resume CTA --> <div class="mt-16 text-center"> <div class="bg-slate-100 p-8 rounded-xl"> <h2 class="text-2xl font-bold mb-4">Want the Full Details?</h2> <p class="text-slate-600 mb-6">Download my complete resume in PDF format</p> <a href="/resume/Jay_Samples_Resume.pdf" download class="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
Download Resume (PDF)
</a> </div> </div> </div> </section> ` })}`;
}, "/Users/jaysamples/devproj/jaysamples-portfolio/src/pages/experience.astro", void 0);

const $$file = "/Users/jaysamples/devproj/jaysamples-portfolio/src/pages/experience.astro";
const $$url = "/experience";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Experience,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
