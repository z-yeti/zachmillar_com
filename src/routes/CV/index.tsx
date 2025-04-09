import { FC } from "react";
import styles from "./CV.module.css";

export const CV: FC = () => {
  return (
    <>
      <section>
        <h1>Zach Millar</h1>
        <div>Staff Front-End Software Engineer</div>
        <div>
          <p>Medford, OR</p>
          <p>
            <a href="mailto:me@zachmillar.com">me@zachmillar.com</a>
          </p>
        </div>
      </section>

      <section>
        <h2>About</h2>
        <p>
          I am a staff front-end software engineer with a passion for building
          and maintaining user-friendly, performant, and accessible web
          applications. I have been professionally designing and building
          systems across the stack for close to nine years. I have experience in
          full stack development, but I have focused on front-end development
          for the majority of my career.
        </p>
      </section>

      <section>
        <h2>Skills</h2>
        <div className={styles["cv__skills"]}>
          <span>Typescript</span>
          <span>Javascript</span>
          <span>React</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>SCSS</span>
          <span>SASS</span>
          <span>Styled Components</span>
          <span>Material Design</span>
          <span>Bootstrap</span>
          <span>React Testing Library</span>
          <span>Vue</span>
          <span>Svelte</span>
          <span>Jest</span>
          <span>Vite</span>
          <span>Rollup</span>
          <span>Redux</span>
          <span>Node</span>
          <span>Express</span>
          <span>Python</span>
          <span>Django</span>
          <span>Flask</span>
          <span>Shopify Liquid</span>
          <span>PHP</span>
          <span>WordPress</span>
          <span>REST</span>
          <span>GraphQL</span>
          <span>MySQL</span>
          <span>SQLite</span>
          <span>Google Tag Manager</span>
          <span>Google Analytics</span>
        </div>
      </section>

      <section>
        <h2>Experience</h2>

        <div>
          <h3>Leaf Trade, Remote</h3>
          <div>
            <h4>Staff Front-end Software Engineer</h4>
            <h5>JUNE 2022 - PRESENT</h5>
          </div>
          <ul>
            <li>
              Worked with design and product to improve on old and create new
              features by gathering requirements, reviewing that designs
              followed previously implemented features and component design,
              estimating timelines, breaking out stories and tasks for projects,
              and completing or delegating the work that needed to be done.
            </li>
            <li>
              Worked with design, product, and other developers to optimize the
              main app by converting existing features from Django templates to
              React components consuming and modifying data through API calls.
            </li>
            <li>
              Created a shared component library hosted in organizations private
              Github NPM registry that other apps consume and utilize.
            </li>
            <li>
              Created a Storybook hosted in organizations Github Pages that
              consumes and displays interactive versions of shared components
              from the component library with detailed documentation on
              components.
            </li>
            <li>
              Implemented testing throughout React apps, maintaining 100% in new
              apps and increasing coverage in existing apps.
            </li>
            <li>
              Introduced and implemented linting and formatting tools and rules
              to reduce potential bugs, clean up existing code, and set
              standards for all future development.
            </li>
            <li>
              Implemented Github workflows to run unit tests, check code for
              linting or formatting issues, and build then deploy apps when new
              code was merged into the main branch.
            </li>
            <li>Performed lead duties over lower level engineers.</li>
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
              Worked with design, product teams, and other developers to execute
              an entire system redesign of the POS app using React written in
              TypeScript.
            </li>
            <li>
              Improved architecture of POS app by refactoring Redux
              store/reducers/actions in POS-2020 to eliminate circular
              dependencies.
            </li>
            <li>
              Assisted in establishing the framework for writing unit tests with
              react-testing-library and attended weekly unit test mob sessions
              to encourage good testing practices.
            </li>
            <li>Helped increase test coverage from 0%-30%.</li>
            <li>
              Solicited customer feedback to improve UX of POS and Back of House
              apps.
            </li>
            <li>
              Onboarded multiple new hires. Helped them get systems and software
              setup and helped familiarize them with our system and practices.
            </li>
          </ul>
        </div>

        <div>
          <h3>Dutch Bros Coffee, Grants Pass, OR</h3>
          <div>
            <h4>Web Developer</h4>
            <h5>DECEMBER 2016 - JUNE 2021</h5>
          </div>
          <ul>
            <li>
              Started the web development department and helped it grow into an
              entire team.
            </li>
            <li>
              Worked closely with users and team members to translate complex
              business needs and problems into innovative technical solutions.
            </li>
            <li>
              Worked with departments to gather and organize data to be used for
              projects.
            </li>
            <li>
              Utilized languages and libraries such as PHP, Python, React, and
              Vue to build and maintain the main marketing website through
              multiple redesigns.
            </li>
            <li>
              Worked with the team to build and maintain an internal company
              portal that includes forms, reports, and tools built to user
              specifications.
            </li>
            <li>
              Worked with third-party vendors to get, provide, and sync data.
            </li>
            <li>
              Found and implemented solutions to bug tickets and escalated them
              to the appropriate people when needed.
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
              Installed, configured, and modified hardware and software to
              ensure optimal performance for corporate headquarters and new
              shops.
            </li>
            <li>
              Handled new hire equipment ordering, configuration, and
              orientation.
            </li>
            <li>
              Diagnosed, troubleshot, and resolved a wide range of software,
              hardware, and network issues.
            </li>
            <li>
              Created documentation of policies and procedures for various daily
              account and systems management tasks and user training.
            </li>
            <li>
              Performed End-user and IT Staff training on in-house and
              third-party applications and equipment.
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

      <p>
        <i>References available upon request.</i>
      </p>
    </>
  );
};
