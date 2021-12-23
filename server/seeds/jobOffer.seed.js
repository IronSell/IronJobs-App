const mongoose = require('mongoose');
require('dotenv').config();

const JobOffer = require('../models/JobOffer.model');

const jobOffers = [
  {
    jobTitle: 'Computer technician frontend ionic angular developer',
    experienceYears: '3+ years',
    salary: ' 22.900 -34.770',
    province: 'Valencia',
    description: `In this position you will have:
    - Innovative projects of high relevance in the company, working with cutting-edge technologies.
    - Continuous training adapted to your needs and internal promotion.
    - Constant learning as part of an experienced team within the IT Department.
    - Good working environment and job security
    - Direct contact with the best specialist suppliers`,
    requirements:`- Higher Level Training Cycle in Computer Science
    - Minimum experience of 3 years in the sector
    - Knowledge in:
    - HTML5, CSS, Javascript, JSON, Git (or version control)
    - Angular (v5 or higher)
    - Cordova / Ionic (ionic3 or higher)
    - Jasmine (unit test)`,
    schedule: 'Full-time',
    company:'Mercadona',
    companyLogo:'https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/ae/ae7871ff-1ef7-406c-9feb-ffca2bbbba23?jwt=eyJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDA4NDU3ODIsImV4cCI6MTczNjc2NzI0NSwicnFzIjoiR0VUXFwvdGVuYW50cy9jN2UyYjljMS04NDgwLTQzYjAtYWQ5ZS0wMDBjMTdhYTJjYmIvZG9tYWlucy83MTgzMDJiNi01MzQzLTQzZDMtYThhMy04MjlkYzNkYTA4OTMvYnVja2V0cy82ZjNhYjFjYy01OTIwLTRmNGUtYjEzMS00NmE0NTg3YTBlMWYvaW1hZ2VzL2FlL2FlNzg3MWZmLTFlZjctNDA2Yy05ZmViLWZmY2EyYmJiYmEyMyIsIm1ldGFkYXRhIjp7InJ1bGUiOnsidmVyc2lvbiI6IjIwMTYtMTAiLCJhY3Rpb25zIjpbXX19fQ.L8WE9bUVZBurpHzzarpE-mUCzwxbXA_ng3wgVgHTrOLvzQ6a4isQrmMEDiD0V3E-zodtK5eUq8IngJ1rimBqRl_jdM8pURcy9vA8jPYbsUkRterOzu6Z45jUc7jRgimTsCBj6I_oziyaLXoraRZ9r8jClFRsbXyskKO5F1j4KKWyWxbNuX2XEVs6Cj24cLGNM3WULnH8_n53AHNTZts6_79-KZGsx-IwV5jo4uScjizPOu9V9LdZAfSDJYAmHX_VB4P-gujjWk96G8-p1c_8HZa7DgvbIZcp9SEX4ySUtROnmi7V1Y0G8N-A-VsmnS4sUPEgQzKbhas_gECQAV0ipA&AccessKeyId=d724d9a53d95a810',
  },
  {
    jobTitle: 'Back Office Agent Foreclosed Assets',
    experienceYears: '1+ year',
    salary: '12.000€ - 15.000€',
    province: 'Palma De Mallorca',
    description: `- Making payments, balancing of accounts.
    - Telematic processing with public bodies (capital gains, Ibis, taxes, garbage, Cadastre).
    - Preparation of documentation of the Bank's adjudicated properties for sale and sending to the notary's office.
    - Proceedings with communities of owners.`,
    requirements:
  `- Availability for Immediate Incorporation
    - Responsible and methodical
    - Previous experience in banking / real estate / management or similar position for the preparation of documents for the sale of a property.
    - Notions on taxes, rates, capital gains, energy certificates, management of communities of owners.`,
    schedule: 'Part-time',
    company:'Prosegur',
    companyLogo:'https://www.gmkfreelogos.com/logos/P/img/Prosegur-2.gif',
  },
  {
    jobTitle: 'Call Center Agent customer service and banking Backoffice',
    experienceYears: '2+ years',
    salary: '15.000€ - 18.000€',
    province: 'Barcelona',
    description: `As a Call Center Agent your duties will consist of:
    - Reception and issuance of calls from customers of the Entity.
    - DB management according to previously established requirements.
    - Management of specific campaigns
    - Attending incoming and outgoing information contacts of products and services by electronic means.`,
    requirements:`- Languages: Spanish and native Catalan essential; English high (B2); German medium high (B1-B2).
    - Flexibility to work shifts, weekends and holidays.
    - Availability for immediate incorporation
    - Communication skills
    - Team work
    - Experience in Banking and/or Contact Center sector
    - Management skills
    - Ability to solve problems
    - Tolerance`,
    schedule: 'Full-time',
    company:'Prosegur',
    companyLogo:'https://www.gmkfreelogos.com/logos/P/img/Prosegur-2.gif',
  },
  {
    jobTitle: 'Santander IT Talent Program',
    experienceYears: '1+ year',
    salary: '18.000€ - 24.000€',
    province: 'Remote',
    description: `Through the Santander IT Talent Program, you will have the opportunity to enter a specific development plan focused on digital innovation oriented to new technologies and agile methodologies where you will have training in both technical and professional skills, which will allow you to be the engine of change in Santander Technology.
    Our goal is that you acquire the necessary skills to develop a successful career in the software industry, and that you want to continue facing professional challenges with us`,
    requirements:'Formative cycles of the family of computer science and communications.',
    schedule: 'Full-time',
    company:'Santander',
    companyLogo:'https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/18/1878304b-042e-4838-a693-66da6d2303c2?jwt=eyJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1MjQ1Njg5MDksImV4cCI6MTczNjc2NzI0NSwicnFzIjoiR0VUXFwvdGVuYW50cy9jN2UyYjljMS04NDgwLTQzYjAtYWQ5ZS0wMDBjMTdhYTJjYmIvZG9tYWlucy83MTgzMDJiNi01MzQzLTQzZDMtYThhMy04MjlkYzNkYTA4OTMvYnVja2V0cy82ZjNhYjFjYy01OTIwLTRmNGUtYjEzMS00NmE0NTg3YTBlMWYvaW1hZ2VzLzE4LzE4NzgzMDRiLTA0MmUtNDgzOC1hNjkzLTY2ZGE2ZDIzMDNjMiIsIm1ldGFkYXRhIjp7InJ1bGUiOnsidmVyc2lvbiI6IjIwMTYtMTAiLCJhY3Rpb25zIjpbXX19fQ.O0_VkE-HrOb7adczr44Q-JxGhUV2HpGRG1h5j3EHMOzna6j6rXyhzYqCcg5iuS52CZ8u3r1r1GYnlYX5dBmeMEr_zwCPbkyJwxtlwzQn6OwWks_cbi3ZOle_DyRr01Ld2FQghHniLdBpI24rJQClbJC5HEBQ6eakoNc3IuWzQgxAwFvenhZCXWqpTexHOkZwNMVKll6jjPe3_y6ZoIHKekUwbKeYol5AEQBxSAUudgcHicFMywsGgXIut5UPkQMppQsBrG9kgybPjuP-wXVEQ-LttWAi2Ja_zLkZkRlVzE1Hjm3tHI5VbQULFjMrqz9TV_8zbq8xMgGtwZYhHWsh8A&AccessKeyId=d724d9a53d95a810',
  },
  {
    jobTitle: 'Front-end Developer',
    experienceYears: '3+ years of professional experience in software development',
    salary: '30.000 - 45.000',
    province: 'Valencia',
    description: 'We are looking for a Front-End Web Developer who is motivated to combine the art of design with the art of programming. Your primary responsibilities might vary from: (1) develop new user-facing features, (2) build reusable code and libraries for future use, (3) ensure the technical feasibility of UI/UX designs, (4) optimize application for maximum speed and scalability, (5) assure that all user input is validated before submitting to back-end, and (6) collaborate with other team members and stakeholders.',
    requirements: `Proficient understanding of web markup, including HTML5, CSS3
    Basic understanding of server-side CSS pre-processing platforms, such as LESS and SASS
    Proficient understanding of client-side scripting and JavaScript frameworks, including jQuery
    Good understanding of asynchronous request handling, partial page updates, and AJAX
    Basic knowledge of image authoring tools, to be able to crop, resize, or perform small adjustments on an image. Familiarity with tools such as Gimp or Photoshop is a plus.
    Proficient understanding of cross-browser compatibility issues and ways to work around them.
    Proficient understanding of code versioning tools
    Experience with React is a strong advantage.
    Experience with system architecture or leading a software team is a strong advantage
    Full-time availability is a strong advantage`,
    schedule: 'Full-time',
    company:'Mapfre',
    companyLogo:'https://noticias.mapfre.com/media/2018/10/LOGO-MAPFRE_POS_2536X1270.jpg',
  },
  {
    jobTitle: 'Frontend Developer (React)',
    experienceYears: '3+ years',
    salary: '36.000 - 48.000',
    province: 'Málaga',
    description:  `We are looking for a talented and passionate Frontend Developer to work ad collaborate on existing + greenfield projects and in time will be able to define their own tech stack.
    As our Frontend Developer you get to collaborate, develop and design it all end to end. You will get to work on architecture, application responsiveness, new features and performance together. You will work with quality at your heart and will be surrounded by like minded people so you can bring your creative mind to the decisions we make.
    If you have React, CSS & JS experience, then great! If you want to work remotely, then great! If you want to relocate to the Costa del Sol in Spain, then great! But most of all if you want to work in a Hyper growth Startup with a great culture, on a great project then great!`,
    requirements: 'To ensure success as a react.js developer, you should have in-depth knowledge of JavaScript and React concepts, excellent front-end coding skills, and a good understanding of progressive web applications. Ultimately, a top-class react.js developer should be able to design and build modern user interface components to enhance application performance.',
    schedule: 'Full-time',
    company: 'Mercedes Benz',
    companyLogo:'https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/14/14d67a5c-28ea-44b5-9c6a-567dbfa66850?jwt=eyJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MjYzMzU3MzgsImV4cCI6MTY1Nzg3MTczOCwicnFzIjoiR0VUXFwvdGVuYW50cy9jN2UyYjljMS04NDgwLTQzYjAtYWQ5ZS0wMDBjMTdhYTJjYmIvZG9tYWlucy83MTgzMDJiNi01MzQzLTQzZDMtYThhMy04MjlkYzNkYTA4OTMvYnVja2V0cy82ZjNhYjFjYy01OTIwLTRmNGUtYjEzMS00NmE0NTg3YTBlMWYvaW1hZ2VzLzE0LzE0ZDY3YTVjLTI4ZWEtNDRiNS05YzZhLTU2N2RiZmE2Njg1MCIsIm1ldGFkYXRhIjp7InJ1bGUiOnsidmVyc2lvbiI6IjIwMTYtMTAiLCJhY3Rpb25zIjpbXX19fQ.Uw-5RWjLPPikTMXx39vP0MZMfC_8oTofU6SW2FZdYREXU8m6XMgoDaNp_dO-hYiXURb-XumnDUP7d3up7yw-84jZhYsnSkpQc1eT5-bWDQYpvfLXVDOnbmOr2F2-SIb3t1HprJ1xNwh6HJhsqDQwvQG2S54iFab5dprZ72Ouw9SMUm0pQ6ySV4Hx9b00NJ9LpitJuqaJ8SS-sY-i3XijK_qC7EcMVlAWtt8S8QgnvR_zBVX0yK5TAVnTbEnEFRl6q1aZ29f3hVXmzFgHws0FEvj5vvSl5W1OdykjTymSPGVk1GfFqa-eqANjSjeUyJc-iuM0vV4AiQA7_KbYZA_xgA&AccessKeyId=d724d9a53d95a810',
  },
  {
    jobTitle: 'Angular FrontEnd Developer',
    experienceYears: '3+ years',
    salary: '35.000 - 43.000',
    province: 'Madrid',
    description: `From New Tandem we are looking for a Frontend Developer with knowledge of HTML, JQuery, Javascript and Angular framework as well as a bit of PHP.
    You will be responsible for code development, debugging, testing, integration, and support ofpossible incidences.
    We offer:
    * Flexible working hours, a young team, a great atmosphere and loads of opportunities.
    * Permanent contract with our client.`,
    requirements: `Upper Grade Educational Cycle or technical degree that involves programming.
    * Javascript knowledge.
    * Angular experience (It´s essential)
    * GIT version control knowledge is a plus.
    * PHP and VueJs knowledge is a plus.
    * Proactive, accountable, flexible, analytical, pragmatic.
    * High motivation to learn and grow.`,
    schedule: 'Full-time',
    company: 'HP Solutions',
    companyLogo:'https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/a5/a51e348d-e4f1-4eaf-8eb0-d6e5d3800b5a?jwt=eyJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTgyMzkxNTEsImV4cCI6MTY0OTc3NTE1MSwicnFzIjoiR0VUXFwvdGVuYW50cy9jN2UyYjljMS04NDgwLTQzYjAtYWQ5ZS0wMDBjMTdhYTJjYmIvZG9tYWlucy83MTgzMDJiNi01MzQzLTQzZDMtYThhMy04MjlkYzNkYTA4OTMvYnVja2V0cy82ZjNhYjFjYy01OTIwLTRmNGUtYjEzMS00NmE0NTg3YTBlMWYvaW1hZ2VzL2E1L2E1MWUzNDhkLWU0ZjEtNGVhZi04ZWIwLWQ2ZTVkMzgwMGI1YSIsIm1ldGFkYXRhIjp7InJ1bGUiOnsidmVyc2lvbiI6IjIwMTYtMTAiLCJhY3Rpb25zIjpbXX19fQ.I52FmF9l1he-L6PkHrf6_KpeHeP6C_vZp8tL5YjmWsdgNEjH4lx5z134t1zHZRKNsVwYz_wLL1Yp1MP_T8BRrHi2C0mGhZbZuFA4ul1qGF31u59omxVg8LvgvqSTSDfzAvxRn-PTdCc5ShiUf7TYmWAITDcNwcfD23FTbplTTBBMjA8ZJi4x8dIWmM9wt7rSS4a1bVgOH3LzQsexEH0zulW__Gr1jz2xESlAvEM73LH6R6zf84RIgmpfjOTFlf82NKUJmqPW4sAbcz1w189MxI_I42JqIIwPYYFHc8i7vbyjQPyVbr1sITLcVn1qtl1kgX6Q83rOVo-DpRPuSe6PnQ&AccessKeyId=d724d9a53d95a810',
  },
  {
    jobTitle: 'Software Engineer C++',
    experienceYears: 'At least 2 years',
    salary: '18.000€ - 30.000€',
    province: 'León',
    description: `We are looking for several profiles with different levels of experience in C++ development under Linux for different vacancies. They will perform the following functions in international projects: design, documentation, development and testing of software / firmware.
    In collaboration with the R&D Center in Barcelona, they will be in charge of designing and implementing various components of the printer firmware.
    Translated with www.DeepL.com/Translator (free version)`,
    requirements:`- Solid knowledge or experience in C++
    - Proactivity
    - Experience in teamwork
    - Used to work on Linux`,
    schedule: 'Full-Time',
    company:'HP Solutions',
    companyLogo:'https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/a5/a51e348d-e4f1-4eaf-8eb0-d6e5d3800b5a?jwt=eyJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTgyMzkxNTEsImV4cCI6MTY0OTc3NTE1MSwicnFzIjoiR0VUXFwvdGVuYW50cy9jN2UyYjljMS04NDgwLTQzYjAtYWQ5ZS0wMDBjMTdhYTJjYmIvZG9tYWlucy83MTgzMDJiNi01MzQzLTQzZDMtYThhMy04MjlkYzNkYTA4OTMvYnVja2V0cy82ZjNhYjFjYy01OTIwLTRmNGUtYjEzMS00NmE0NTg3YTBlMWYvaW1hZ2VzL2E1L2E1MWUzNDhkLWU0ZjEtNGVhZi04ZWIwLWQ2ZTVkMzgwMGI1YSIsIm1ldGFkYXRhIjp7InJ1bGUiOnsidmVyc2lvbiI6IjIwMTYtMTAiLCJhY3Rpb25zIjpbXX19fQ.I52FmF9l1he-L6PkHrf6_KpeHeP6C_vZp8tL5YjmWsdgNEjH4lx5z134t1zHZRKNsVwYz_wLL1Yp1MP_T8BRrHi2C0mGhZbZuFA4ul1qGF31u59omxVg8LvgvqSTSDfzAvxRn-PTdCc5ShiUf7TYmWAITDcNwcfD23FTbplTTBBMjA8ZJi4x8dIWmM9wt7rSS4a1bVgOH3LzQsexEH0zulW__Gr1jz2xESlAvEM73LH6R6zf84RIgmpfjOTFlf82NKUJmqPW4sAbcz1w189MxI_I42JqIIwPYYFHc8i7vbyjQPyVbr1sITLcVn1qtl1kgX6Q83rOVo-DpRPuSe6PnQ&AccessKeyId=d724d9a53d95a810',
  },
  {
    jobTitle: 'IT technician frontend applications warehouse',
    experienceYears: 'At least one year',
    salary: '22.000€ - 35.000€',
    province: 'Valencia',
    description: `In this position you will have:
    - Innovative projects of high relevance in the company, working with cutting-edge technologies.
    - Continuous training adapted to your needs and internal promotion.
    - Constant learning as part of an experienced team within the IT Department.
    - Good working environment and job security
    - Direct contact with the best specialist suppliers`,
    requirements:`- Higher Level Training Cycle in Computer Science
    - Minimum experience of at least 1 year in:
    - Native Android programming (Kotlin)
    - Programming with Angular
    - Essential knowledge in:
    - Unix
    - Average knowledge of Office automation
    - Availability from Monday to Friday
    - Availability to travel
    - Driving license and own vehicle
    - Ability to communicate and work as part of a team
    - Passion and interest in new technologies
Translated with www.DeepL.com/Translator (free version)`,
    schedule: 'Full-time',
    company:'Mercadona',
    companyLogo:'https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/ae/ae7871ff-1ef7-406c-9feb-ffca2bbbba23?jwt=eyJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDA4NDU3ODIsImV4cCI6MTczNjc2NzI0NSwicnFzIjoiR0VUXFwvdGVuYW50cy9jN2UyYjljMS04NDgwLTQzYjAtYWQ5ZS0wMDBjMTdhYTJjYmIvZG9tYWlucy83MTgzMDJiNi01MzQzLTQzZDMtYThhMy04MjlkYzNkYTA4OTMvYnVja2V0cy82ZjNhYjFjYy01OTIwLTRmNGUtYjEzMS00NmE0NTg3YTBlMWYvaW1hZ2VzL2FlL2FlNzg3MWZmLTFlZjctNDA2Yy05ZmViLWZmY2EyYmJiYmEyMyIsIm1ldGFkYXRhIjp7InJ1bGUiOnsidmVyc2lvbiI6IjIwMTYtMTAiLCJhY3Rpb25zIjpbXX19fQ.L8WE9bUVZBurpHzzarpE-mUCzwxbXA_ng3wgVgHTrOLvzQ6a4isQrmMEDiD0V3E-zodtK5eUq8IngJ1rimBqRl_jdM8pURcy9vA8jPYbsUkRterOzu6Z45jUc7jRgimTsCBj6I_oziyaLXoraRZ9r8jClFRsbXyskKO5F1j4KKWyWxbNuX2XEVs6Cj24cLGNM3WULnH8_n53AHNTZts6_79-KZGsx-IwV5jo4uScjizPOu9V9LdZAfSDJYAmHX_VB4P-gujjWk96G8-p1c_8HZa7DgvbIZcp9SEX4ySUtROnmi7V1Y0G8N-A-VsmnS4sUPEgQzKbhas_gECQAV0ipA&AccessKeyId=d724d9a53d95a810',
  },
  {
    jobTitle: 'Commercial Agent EVENTUAL international trade FRENCH',
    experienceYears: 'At least 2 years',
    salary: '8.000 - 15.000',
    province: 'Zaragoza',
    description: `The Commercial Agent will be in charge of attending via telephone and e-mail the needs of our customers related to the sale of products in Repsol Química.
    Functions will include the management of orders, management of overdue debt, credit management, processing and resolution of incidents and the management of administrative tasks derived from the support to the sales service.`,
    requirements:`Higher Level Training Cycle in International Trade or Maritime Transport.
    Basic knowledge of office automation
    Communication skills, empathy.
    Networking, collaboration and responsibility/resilience for incident resolution.`,
    schedule: 'Part-time',
    company:'Repsol',
    companyLogo:'https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/5a/5a1bf6fd-1421-453f-b714-f1766bb76349?jwt=eyJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1MjQ1ODAzMDEsImV4cCI6MTczNjc2NzI0NSwicnFzIjoiR0VUXFwvdGVuYW50cy9jN2UyYjljMS04NDgwLTQzYjAtYWQ5ZS0wMDBjMTdhYTJjYmIvZG9tYWlucy83MTgzMDJiNi01MzQzLTQzZDMtYThhMy04MjlkYzNkYTA4OTMvYnVja2V0cy82ZjNhYjFjYy01OTIwLTRmNGUtYjEzMS00NmE0NTg3YTBlMWYvaW1hZ2VzLzVhLzVhMWJmNmZkLTE0MjEtNDUzZi1iNzE0LWYxNzY2YmI3NjM0OSIsIm1ldGFkYXRhIjp7InJ1bGUiOnsidmVyc2lvbiI6IjIwMTYtMTAiLCJhY3Rpb25zIjpbXX19fQ.A7vrXG2-vgLfytF41LDr1D9FEiuZut6ZwZByEJ8tkYhRP5YwDdL-rOYkc9YEUse8C3ss7rhBkMK10ETyK5RyZqVr4drowPzaq9hB2Pt0VPdPnQ7lm6y5S1pWCEqo7pGgJggj66sQY8gzDsFxYXrivp2drWfDb41P3QL-dCsvz1j5yKKWzigSaJUloE1qTJeAf2wNJJooTfqqbz-MB3Wo6LGbUQtZYZdTvwVqeYy5bQZDm50hhldlUuNztyUbBGeXDA6SuO85c1bGgV1jRkddQXE1ELPnXK51y7H7FAiddx4hmUsqDNNGdtZamPBldEIPkusOBOlrRnI1xXG_5NF0Ww&AccessKeyId=d724d9a53d95a810',
  },
  {
    jobTitle: '',
    experienceYears: '',
    salary: '',
    province: '',
    description: '',
    requirements:'',
    schedule: '',
    company:'',
  },
  // {
  //   jobTitle: '',
  //   experienceYears: '',
  //   salary: '',
  //   province: '',
  //   description: '',
  //   requirements:'',
  //   schedule: '',
  //   company:'',
  // },
];

const MONGODB_URI = process.env.MONGODB_URI;

const connectToMongo = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to Mongo');
  } catch (err) {
    console.log('Error connecting to Mongo: ', err);
  }
};
connectToMongo();

const jobOffersCreate = async () => {
  try {
    await JobOffer.create(jobOffers);
    await mongoose.connection.close();
  } catch (err) {
    console.log('ERROR: ', err);
  }
};
jobOffersCreate();