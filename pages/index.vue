<template>
  <div class="portfolio">
    <!-- Navigation -->
    <nav class="nav">
      <div class="nav__container">
        <a href="#home" class="nav__logo">Philippe Ledoit</a>
        <div class="nav__links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
      <div class="hero__content">
        <h1 class="hero__title">
          Developer, Finance & Data Professional
        </h1>
        <p class="hero__subtitle">
          I build modern web applications, analyze financial markets, and transform data into insights.
          Currently crafting digital experiences with code.
        </p>
        <div class="hero__actions">
          <a href="#projects" class="btn btn--primary">View Work</a>
          <a href="#contact" class="btn btn--secondary">Get in Touch</a>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
      <div class="container">
        <h2 class="section__title">About</h2>
        <div class="about__content">
          <p class="about__text">
            I'm a developer with a unique blend of technical expertise spanning software development,
            financial analysis, and data science. I enjoy building clean, efficient solutions that solve
            real-world problems.
          </p>
          <p class="about__text">
            My background in finance and data gives me a unique perspective on building applications
            that are both technically sound and business-focused. I'm passionate about creating
            tools that help people make better decisions through data.
          </p>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="skills">
      <div class="container">
        <h2 class="section__title">Skills & Expertise</h2>
        <div class="skills__grid">
          <div class="skill-card">
            <h3 class="skill-card__title">Development</h3>
            <ul class="skill-card__list">
              <li>JavaScript / TypeScript</li>
              <li>Vue.js / Nuxt.js</li>
              <li>React / Next.js</li>
              <li>Node.js / Python</li>
              <li>CSS / SCSS</li>
              <li>Git / CI/CD</li>
            </ul>
          </div>

          <div class="skill-card">
            <h3 class="skill-card__title">Finance</h3>
            <ul class="skill-card__list">
              <li>Financial Modeling</li>
              <li>Risk Analysis</li>
              <li>Portfolio Management</li>
              <li>Market Research</li>
              <li>Quantitative Analysis</li>
              <li>Investment Strategies</li>
            </ul>
          </div>

          <div class="skill-card">
            <h3 class="skill-card__title">Data</h3>
            <ul class="skill-card__list">
              <li>Data Analysis</li>
              <li>Statistical Modeling</li>
              <li>Data Visualization</li>
              <li>SQL / Databases</li>
              <li>Machine Learning</li>
              <li>ETL Pipelines</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects">
      <div class="container">
        <h2 class="section__title">Featured Projects</h2>
        <div class="projects__grid">
          <article class="project-card">
            <div class="project-card__header">
              <h3 class="project-card__title">Financial Dashboard</h3>
              <div class="project-card__tags">
                <span>Vue.js</span>
                <span>Finance</span>
                <span>Data Viz</span>
              </div>
            </div>
            <p class="project-card__description">
              Real-time financial dashboard with interactive charts, portfolio tracking, and market analysis tools.
              Built with Vue.js and integrated with financial APIs.
            </p>
            <div class="project-card__footer">
              <a href="#" class="project-card__link" aria-label="View Financial Dashboard project">View Project →</a>
            </div>
          </article>

          <article class="project-card">
            <div class="project-card__header">
              <h3 class="project-card__title">Data Analytics Platform</h3>
              <div class="project-card__tags">
                <span>Python</span>
                <span>Data</span>
                <span>ML</span>
              </div>
            </div>
            <p class="project-card__description">
              Comprehensive data analytics platform for processing large datasets, generating insights,
              and creating automated reports with machine learning capabilities.
            </p>
            <div class="project-card__footer">
              <a href="#" class="project-card__link" aria-label="View Data Analytics Platform project">View Project →</a>
            </div>
          </article>

          <article class="project-card">
            <div class="project-card__header">
              <h3 class="project-card__title">Trading Algorithm</h3>
              <div class="project-card__tags">
                <span>Python</span>
                <span>Finance</span>
                <span>Algorithm</span>
              </div>
            </div>
            <p class="project-card__description">
              Automated trading system with backtesting capabilities, risk management, and real-time
              market data integration. Built with Python and quantitative finance libraries.
            </p>
            <div class="project-card__footer">
              <a href="#" class="project-card__link" aria-label="View Trading Algorithm project">View Project →</a>
            </div>
          </article>

          <article class="project-card">
            <div class="project-card__header">
              <h3 class="project-card__title">Web Application</h3>
              <div class="project-card__tags">
                <span>Nuxt.js</span>
                <span>TypeScript</span>
                <span>Full Stack</span>
              </div>
            </div>
            <p class="project-card__description">
              Modern full-stack web application with server-side rendering, authentication, and
              real-time features. Built with Nuxt.js and TypeScript for type safety.
            </p>
            <div class="project-card__footer">
              <a href="#" class="project-card__link" aria-label="View Web Application project">View Project →</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
      <div class="container">
        <h2 class="section__title">Get in Touch</h2>
        <div class="contact__content">
          <p class="contact__text">
            I'm always interested in discussing new projects, opportunities, or just having a conversation
            about development, finance, or data science.
          </p>
          <div class="contact__links">
            <a href="mailto:phil@menhir-holdings.com" class="contact__link">
              <span>Email</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="contact__link">
              <span>LinkedIn</span>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="contact__link">
                <span>GitHub</span>
              </a>
            </a>
            </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p class="footer__text">
          © {{ new Date().getFullYear() }} Philippe Ledoit
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
useHead({
  title: 'Philippe Ledoit - Developer, Finance & Data Professional',
  meta: [
    {
      name: 'description',
      content: 'Portfolio of Philippe Ledoit - Developer specializing in web development, finance, and data science.'
    }
  ]
})
</script>
