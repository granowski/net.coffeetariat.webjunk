(function () {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = String(new Date().getFullYear());
  }

  const printBtn = document.getElementById('printBtn');
  if (printBtn) {
    printBtn.addEventListener('click', () => window.print());
  }

  // Render Experience jobs from template if present
  const tmpl = document.getElementById('job-template');
  const jobsRoot = document.getElementById('jobs');
  if (tmpl && jobsRoot) {
    /** @type {{title:string, company:string, location:string, dates:string, bullets:string[]}[]} */
    const jobs = [
      {
        title: 'Senior Frontend Engineer',
        company: 'Acme Corp',
        location: 'Remote',
        dates: '2022 — Present',
        bullets: [
          'Led development of a design system used across 5 products, reducing UI bugs by 35%.',
          'Improved performance scores (Lighthouse) from 68 to 95 by optimizing critical paths.',
          'Mentored 4 engineers and introduced code review guidelines that cut review time by 25%.'
        ]
      },
      {
        title: 'Frontend Engineer',
        company: 'Globex',
        location: 'New York, NY',
        dates: '2019 — 2022',
        bullets: [
          'Built reusable components and patterns that accelerated feature delivery by 20%.',
          'Collaborated with design and QA to maintain WCAG AA compliance across the app.',
          'Integrated end-to-end tests, reducing production regressions by 30%.'
        ]
      },
      {
        title: 'Junior Web Developer',
        company: 'Initech',
        location: 'Austin, TX',
        dates: '2017 — 2019',
        bullets: [
          'Implemented mobile-first pages and improved accessibility across the marketing site.',
          'Optimized images and CSS delivery, cutting average page weight by 40%.',
          'Worked closely with backend to shape API contracts for new features.'
        ]
      }
    ];

    const frag = document.createDocumentFragment();

    jobs.forEach(job => {
      const clone = /** @type {HTMLElement} */(tmpl.content.firstElementChild.cloneNode(true));
      const titleEl = clone.querySelector('.job-title');
      const companyEl = clone.querySelector('.company');
      const locationEl = clone.querySelector('.location');
      const datesEl = clone.querySelector('.dates');
      const bulletsEl = clone.querySelector('.bullets');

      if (titleEl) titleEl.textContent = job.title;
      if (companyEl) companyEl.textContent = job.company;
      if (locationEl) locationEl.textContent = job.location;
      if (datesEl) datesEl.textContent = job.dates;

      if (bulletsEl) {
        job.bullets.forEach(b => {
          const li = document.createElement('li');
          li.textContent = b;
          bulletsEl.appendChild(li);
        });
      }

      frag.appendChild(clone);
    });

    jobsRoot.appendChild(frag);
  }
})();
