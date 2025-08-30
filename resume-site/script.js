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
  // const tmpl = document.getElementById('job-template');
  // const jobsRoot = document.getElementById('jobs');
  // if (tmpl && jobsRoot && jobsRoot.children.length === 0) {
  //   /** @type {{title:string, company:string, location:string, dates:string, bullets:string[]}[]} */
  //   const jobs = [];
  //
  //   const frag = document.createDocumentFragment();
  //
  //   jobs.forEach(job => {
  //     const clone = /** @type {HTMLElement} */(tmpl.content.firstElementChild.cloneNode(true));
  //     const titleEl = clone.querySelector('.job-title');
  //     const companyEl = clone.querySelector('.company');
  //     const locationEl = clone.querySelector('.location');
  //     const datesEl = clone.querySelector('.dates');
  //     const bulletsEl = clone.querySelector('.bullets');
  //
  //     if (titleEl) titleEl.textContent = job.title;
  //     if (companyEl) companyEl.textContent = job.company;
  //     if (locationEl) locationEl.textContent = job.location;
  //     if (datesEl) datesEl.textContent = job.dates;
  //
  //     if (bulletsEl) {
  //       job.bullets.forEach(b => {
  //         const li = document.createElement('li');
  //         li.textContent = b;
  //         bulletsEl.appendChild(li);
  //       });
  //     }
  //
  //     frag.appendChild(clone);
  //   });
  //
  //   jobsRoot.appendChild(frag);
  // }
})();
