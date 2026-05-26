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
              href="https://zachmillar.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              zachmillar.dev
            </a>
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
          Staff Front-End Engineer with 9+ years of experience in React and
          modern web development. Track record of owning frontend architecture
          across the full stack: component libraries, CI/CD pipelines,
          e-commerce platforms, and data-heavy interfaces. Works well as a
          technical lead or a focused individual contributor, and has experience
          building and mentoring engineering teams from the ground up.
        </p>
      </section>

      <section>
        <h2>Skills</h2>
        <h3>Front-end</h3>
        <div className={styles["cv__skills"]}>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>React</span>
          <span>Vue</span>
          <span>Svelte</span>
        </div>
        <h3>Styling</h3>
        <div className={styles["cv__skills"]}>
          <span>SCSS/SASS</span>
          <span>Styled Components</span>
          <span>Tailwind CSS</span>
          <span>Material Design</span>
        </div>
        <h3>State Management</h3>
        <div className={styles["cv__skills"]}>
          <span>Redux</span>
          <span>Redux Toolkit</span>
          <span>RTK Query</span>
          <span>MobX</span>
        </div>
        <h3>Testing</h3>
        <div className={styles["cv__skills"]}>
          <span>Jest</span>
          <span>React Testing Library</span>
          <span>MSW</span>
          <span>Playwright</span>
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
          <span>GitHub Actions</span>
          <span>AI Coding Agents</span>
          <span>Segment</span>
          <span>Google Analytics & Tag Manager</span>
        </div>
      </section>

      <section>
        <h2>Experience</h2>

        <div>
          <h3>LeafTrade (Acquired by Leaf Link), Remote</h3>
          <div>
            <h4>Staff Front-End Engineer</h4>
            <h5>JUNE 2022 - PRESENT</h5>
          </div>
          <ul>
            <li>
              Modernized a frontend codebase built on jQuery, legacy React,
              SCSS, and Django templates; established linting and formatting
              standards still used across the org
            </li>
            <li>
              Rebuilt the e-commerce storefront from Django templates to
              React/TypeScript with REST API integration; the main platform
              dispensaries use to place bulk orders from cannabis vendors
            </li>
            <li>
              Built a Quick Order feature that lets buyers work through a
              spreadsheet-style quantity grid to add items across multiple
              dispensary carts at once, cutting down time-to-order for
              high-volume customers
            </li>
            <li>
              Built and maintain a shared component library on the GitHub NPM
              registry, including a full-featured data table with sorting,
              filtering, pagination, multi-select, and export; documented with
              interactive examples in a public Storybook
            </li>
            <li>
              Migrated legacy Django form and template pages to React with REST
              API integration across the platform, including vendor and admin
              dashboard pages
            </li>
            <li>
              Introduced Redux Toolkit and RTK Query with OpenAPI codegen,
              auto-generating typed API hooks from YAML specs and standardizing
              data fetching across all frontend apps
            </li>
            <li>
              Introduced AI coding agents into the team workflow, including
              building and refactoring backend code needed for new frontend
              features
            </li>
            <li>
              Migrated analytics from Google Analytics and Tag Manager to
              Segment, routing event data directly to the company data warehouse
            </li>
            <li>
              Maintained test coverage on critical paths and key workflows using
              Jest, React Testing Library, MSW, and Playwright; built and
              maintained CI/CD pipelines with GitHub Actions
            </li>
          </ul>
        </div>

        <div>
          <h3>Dutchie, Remote</h3>
          <div>
            <h4>Front-End Software Engineer</h4>
            <h5>JUNE 2021 - JUNE 2022</h5>
          </div>
          <ul>
            <li>
              Redesigned the Point-of-Sale application end-to-end using React
              and TypeScript, working directly with design and product
            </li>
            <li>
              Refactored Redux architecture to remove circular dependencies,
              improving reliability and performance
            </li>
            <li>
              Set up a testing framework using React Testing Library and ran
              weekly test mob sessions, growing coverage from 0% to 30%
            </li>
            <li>
              Gathered and acted on customer feedback to improve the POS and
              Back of House apps
            </li>
            <li>
              Led onboarding for new engineering hires, writing documentation
              and providing hands-on support
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
              Built the software engineering department from scratch, growing
              from a solo role to a full team with defined coding standards and
              workflows
            </li>
            <li>
              Designed and built a company-wide internal portal with custom
              forms, reports, and tools used across departments
            </li>
            <li>
              Led several redesigns of the main marketing website using PHP,
              Python, React, and Vue
            </li>
            <li>
              Built integrations between internal systems and third-party vendors
              to keep data in sync
            </li>
            <li>
              Worked with stakeholders to write technical specs and break
              requirements down into development tasks
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
              Managed IT infrastructure across corporate headquarters and new
              retail locations
            </li>
            <li>
              Wrote technical documentation and training materials for internal
              systems
            </li>
            <li>
              Handled end-user support for hardware, software, and network
              issues across the org
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
