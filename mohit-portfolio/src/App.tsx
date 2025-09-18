import './App.css'

function App() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top glass border-0 mt-2 mx-2">
          <div className="container">
            <a className="navbar-brand fw-semibold" href="#hero">Mohit</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="nav">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
                <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
                <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section id="hero" className="section hero pt-5">
          <div className="container py-5">
            <div className="row align-items-center g-4">
              <div className="col-12 col-lg-7">
                <p className="text-secondary mb-1">Hi, I'm Mohit —</p>
                <h1 className="display-4 fw-bold mb-3 gradient-text">Full-Stack Developer</h1>
                <p className="lead text-secondary mb-3">
                  I craft modern web applications with React, Node.js, TypeScript, and scalable APIs.
                </p>
                <div className="d-flex gap-2 flex-wrap mt-3">
                  <a href="#projects" className="btn btn-primary btn-lg hover-lift"><i className="bi bi-rocket-takeoff me-2"></i>View Projects</a>
                  <a href="#contact" className="btn btn-outline-light btn-lg hover-lift">Contact Me</a>
                  <a href="https://github.com/" target="_blank" className="btn btn-outline-light social-btn hover-lift"><i className="bi bi-github"></i> GitHub</a>
                  <a href="https://www.linkedin.com/" target="_blank" className="btn btn-outline-light social-btn hover-lift"><i className="bi bi-linkedin"></i> LinkedIn</a>
                </div>
              </div>
              <div className="col-12 col-lg-5">
                <div className="glass p-4 text-center">
                  <img className="avatar mb-3" src="https://api.dicebear.com/9.x/initials/svg?seed=Mohit" alt="Mohit avatar" />
                  <div className="text-secondary">React • Node.js • TypeScript • REST • SQL/NoSQL</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="glass p-4 p-lg-5">
                  <h2 className="h3 mb-3">About Me</h2>
                  <p className="mb-0 text-secondary">
                    I’m a full-stack engineer specializing in building performant, secure, and maintainable products.
                    Comfortable across the stack from React and Next.js on the front-end to Node.js/Express, REST APIs, and databases on the back-end.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section">
          <div className="container">
            <h2 className="h3 mb-4">Skills</h2>
            <div className="row g-3">
              {[
                'React', 'TypeScript', 'Redux', 'React Router',
                'Node.js', 'Express', 'REST', 'GraphQL',
                'PostgreSQL', 'MongoDB', 'Prisma', 'Mongoose',
                'Jest', 'Playwright', 'Docker', 'CI/CD'
              ].map((skill) => (
                <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={skill}>
                  <span className="badge bg-secondary-subtle text-secondary-emphasis w-100 py-2 tech-badge">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section">
          <div className="container">
            <h2 className="h3 mb-4">Projects</h2>
            <div className="row g-4">
              {[
                {
                  title: 'Project One',
                  desc: 'E2E full-stack app with React, Node, and PostgreSQL.',
                  links: { demo: '#', code: '#' },
                  image: 'https://picsum.photos/seed/one/600/400',
                  tags: ['React', 'Node.js', 'PostgreSQL']
                },
                {
                  title: 'Project Two',
                  desc: 'Real-time features with websockets and JWT auth.',
                  links: { demo: '#', code: '#' },
                  image: 'https://picsum.photos/seed/two/600/400',
                  tags: ['WebSocket', 'JWT', 'Express']
                },
                {
                  title: 'Project Three',
                  desc: 'REST API with caching, testing, and CI/CD pipeline.',
                  links: { demo: '#', code: '#' },
                  image: 'https://picsum.photos/seed/three/600/400',
                  tags: ['REST', 'Caching', 'CI/CD']
                }
              ].map((p) => (
                <div className="col-12 col-md-6 col-lg-4" key={p.title}>
                  <div className="card h-100 bg-dark text-light border-0 hover-lift project-card">
                    <img src={p.image} className="card-img-top" alt={p.title} />
                    <div className="card-body d-flex flex-column">
                      <h3 className="h5">{p.title}</h3>
                      <p className="text-secondary flex-grow-1">{p.desc}</p>
                      <div className="d-flex flex-wrap gap-2 mb-3">
                        {p.tags?.map((t) => (
                          <span key={t} className="badge rounded-pill tag-badge">{t}</span>
                        ))}
                      </div>
                      <div className="d-flex gap-2">
                        <a className="btn btn-primary btn-sm" href={p.links.demo} target="_blank"><i className="bi bi-box-arrow-up-right me-1"></i>Demo</a>
                        <a className="btn btn-outline-light btn-sm" href={p.links.code} target="_blank"><i className="bi bi-github me-1"></i>Code</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="section">
          <div className="container">
            <h2 className="h3 mb-4">Experience</h2>
            <div className="glass p-4 p-lg-5 timeline">
              <div className="timeline-item">
                <div className="d-flex justify-content-between flex-wrap gap-2">
                  <h3 className="h5 mb-0">Full-Stack Developer</h3>
                  <span className="text-secondary">2022 — Present</span>
                </div>
                <div className="text-secondary">Company Name</div>
                <ul className="mt-2 text-secondary mb-4">
                  <li>Built and deployed React + Node.js apps used by 10k+ users.</li>
                  <li>Implemented CI/CD and testing to improve reliability.</li>
                </ul>
              </div>
              <div className="timeline-item">
                <div className="d-flex justify-content-between flex-wrap gap-2">
                  <h3 className="h5 mb-0">Frontend Developer</h3>
                  <span className="text-secondary">2020 — 2022</span>
                </div>
                <div className="text-secondary">Company Name</div>
                <ul className="mt-2 text-secondary mb-0">
                  <li>Developed SPA features with React and improved performance by 30%.</li>
                  <li>Collaborated with backend to integrate RESTful APIs.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section">
          <div className="container">
            <h2 className="h3 mb-4">Contact</h2>
            <div className="row g-4">
              <div className="col-12 col-lg-6">
                <div className="glass p-4 h-100">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row g-3">
                      <div className="col-12 col-sm-6">
                        <label className="form-label">Name</label>
                        <input className="form-control" placeholder="Your name" />
                      </div>
                      <div className="col-12 col-sm-6">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="you@example.com" />
                      </div>
                      <div className="col-12">
                        <label className="form-label">Message</label>
                        <textarea className="form-control" rows={4} placeholder="How can I help?"></textarea>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary" type="submit">Send</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="glass p-4 h-100 d-flex flex-column gap-2">
                  <a className="text-decoration-none" href="mailto:you@example.com"><i className="bi bi-envelope me-2"></i>you@example.com</a>
                  <a className="text-decoration-none" href="tel:+911234567890"><i className="bi bi-telephone me-2"></i>+91 12345 67890</a>
                  <a className="text-decoration-none" href="https://github.com/" target="_blank"><i className="bi bi-github me-2"></i>GitHub</a>
                  <a className="text-decoration-none" href="https://www.linkedin.com/" target="_blank"><i className="bi bi-linkedin me-2"></i>LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-4 border-top border-secondary-subtle">
        <div className="container d-flex justify-content-between flex-wrap gap-2">
          <span className="text-secondary">© {new Date().getFullYear()} Mohit</span>
          <div className="d-flex gap-3">
            <a href="#hero" className="text-secondary"><i className="bi bi-arrow-up me-1"></i>Back to top</a>
            <a href="https://github.com/" target="_blank" className="text-secondary"><i className="bi bi-github"></i></a>
            <a href="https://www.linkedin.com/" target="_blank" className="text-secondary"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
