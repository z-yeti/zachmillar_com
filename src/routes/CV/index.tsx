import { FC } from "react";
import styles from "./CV.module.css";

export const CV: FC = () => {
  return (
    <>
      <section>
        <h1>Zach Millar</h1>
        <p>Staff Front-End Software Engineer</p>
        <div className={styles["cv__contact"]}>
          <span>Medford, OR</span>
          <span className={styles["cv__contact--pipe"]}>|</span>
          <span>
            <a href="mailto:me@zachmillar.com">me@zachmillar.com</a>
          </span>
          <span className={styles["cv__contact--pipe"]}>|</span>
          <span>
            <a
              href="https://github.com/z-yeti"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </span>
          <span className={styles["cv__contact--pipe"]}>|</span>
          <span>
            <a
              href="https://www.linkedin.com/in/zach-millar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </span>
        </div>
      </section>

      <section>
        <h2>Professional Summary</h2>
        <p>
          Staff Front-End Engineer with 9+ years of experience specializing in
          the React ecosystem and modern web development. Proven track record in
          optimizing application performance, building scalable component
          libraries, and leading technical teams to deliver high-quality,
          user-centric experiences.
        </p>
      </section>

      <section>
        <h2>Skills</h2>
        <h3>Front-end</h3>
        <div className={styles["cv__skills"]}>
          <span>HTML</span>
          <span>CSS</span>
          <span>Javascript</span>
          <span>Typescript</span>
          <span>React</span>
          <span>Vue</span>
          <span>Svelte</span>
        </div>
        <h3>Styling</h3>
        <div className={styles["cv__skills"]}>
          <span>SCSS/SASS</span>
          <span>CSS Modules</span>
          <span>Tailwind CSS</span>
          <span>Styled Components</span>
        </div>
        <h3>State Management</h3>
        <div className={styles["cv__skills"]}>
          <span>Redux</span>
          <span>MobX</span>
          <span>React Context</span>
        </div>
        <h3>Testing</h3>
        <div className={styles["cv__skills"]}>
          <span>Jest</span>
          <span>React Testing Library</span>
          <span>Vitest</span>
          <span>Cypress</span>
        </div>
        <h3>Back-end</h3>
        <div className={styles["cv__skills"]}>
          <span>Node.js</span>
          <span>Express</span>
          <span>Python</span>
          <span>Django</span>
          <span>Flask</span>
        </div>
        <h3>Data & API</h3>
        <div className={styles["cv__skills"]}>
          <span>REST</span>
          <span>GraphQL</span>
          <span>MySQL</span>
          <span>SQLite</span>
        </div>
        <h3>Tools & Platforms</h3>
        <div className={styles["cv__skills"]}>
          <span>Git</span>
          <span>Rollup</span>
          <span>Storybook</span>
          <span>Webpack</span>
          <span>Docker</span>
          <span>Google Tag Manager</span>
          <span>Google Analytics</span>
        </div>
      </section>

      <section>
        <h2>Experience</h2>

        <div>
          <h3>Leaf Trade, Remote</h3>
          <div>
            <h4>Staff Front-end Software Engineer | (Promoted from Senior)</h4>
            <h5>JUNE 2022 - PRESENT</h5>
          </div>
          <ul>
            <li>
              Led architectural planning and implementation for modernizing
              legacy features, transforming Django templates into React
              components with API integration, improving performance and
              maintainability
            </li>
            <li>
              Established a shared component library published to GitHub NPM
              registry, accelerating development across multiple applications
              and ensuring design consistency
            </li>
            <li>
              Created comprehensive Storybook documentation with interactive
              examples, reducing onboarding time for new developers and
              improving cross-team collaboration
            </li>
            <li>
              Implemented robust testing standards and achieved 100% test
              coverage for new applications while systematically increasing
              coverage in legacy code
            </li>
            <li>
              Introduced organization-wide code quality standards through
              linting and formatting tools, significantly reducing bugs and
              improving maintainability
            </li>
            <li>
              Built and optimized CI/CD pipelines using GitHub workflows for
              automated testing, linting, and deployment processes
            </li>
            <li>
              Mentored junior and mid-level engineers through technical
              guidance, pair programming, and detailed code reviews
            </li>
          </ul>
        </div>

        <div>
          <h3>Dutchie, Remote</h3>
          <div>
            <h4>Front-end Software Engineer</h4>
            <h5>JUNE 2021 - JUNE 2022</h5>
          </div>
          <ul>
            <li>
              Executed end-to-end redesign of Point-of-Sale application using
              React and TypeScript in collaboration with design and product
              teams
            </li>
            <li>
              Refactored Redux architecture to eliminate circular dependencies,
              improving application reliability and performance
            </li>
            <li>
              Established testing framework using react-testing-library and led
              weekly test mob sessions, increasing test coverage from 0% to 30%
            </li>
            <li>
              Gathered and implemented customer feedback to enhance user
              experience across POS and Back of House applications
            </li>
            <li>
              Led onboarding processes for new engineering hires, creating
              documentation and providing hands-on support
            </li>
          </ul>
        </div>

        <div>
          <h3>Dutch Bros Coffee, Grants Pass, OR</h3>
          <div>
            <h4>Software Engineer</h4>
            <h5>DECEMBER 2016 - JUNE 2021</h5>
          </div>
          <ul>
            <li>
              Founded and scaled software engineering department from solo role
              to a full-fledged team, establishing coding standards and
              development workflows
            </li>
            <li>
              Designed and built company-wide internal portal featuring custom
              forms, reports, and tools that streamlined operations across
              departments
            </li>
            <li>
              Led multiple redesigns of the main marketing website using PHP,
              Python, React, and Vue, improving user engagement and conversion
              metrics
            </li>
            <li>
              Implemented data integration solutions between internal systems
              and third-party vendors, ensuring consistent information flow
            </li>
            <li>
              Developed technical specifications based on stakeholder
              requirements, translating business needs into actionable
              development tasks
            </li>
          </ul>
        </div>

        <div>
          <h3>Dutch Bros Coffee, Grants Pass, OR</h3>
          <div>
            <h4>IT Helpdesk Specialist</h4>
            <h5>DECEMBER 2015 - DECEMBER 2016</h5>
          </div>
          <ul>
            <li>
              Managed IT infrastructure for corporate headquarters and new
              retail locations, ensuring optimal system performance
            </li>
            <li>
              Created comprehensive technical documentation and training
              materials for internal systems and procedures
            </li>
            <li>
              Provided end-user support and troubleshooting for hardware,
              software, and network issues across the organization
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Education</h2>
        <div>
          <strong>Houston High School</strong> - Germantown, TN - 2010
        </div>
        <div>
          <strong>University of Memphis</strong> - Memphis, TN - 2010 - 2011
        </div>
        <div>
          <strong>Southern Oregon University</strong> - Ashland, OR - 2015 -
          2016
        </div>
      </section>

      <section>
        <h2>Awards</h2>
        <div>
          <strong>Eagle Scout</strong> - MAY 2010
        </div>
      </section>
    </>
  );
};
