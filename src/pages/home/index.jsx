import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from 'constants/routes';
import SectionHeader from 'components/SectionHeader';

const Home = () => {
  const startPlanning = (
    <Link
      to={routes.SELECTION}
      aria-label='Start Voting: link to step 1 of planning your vote. Reminder: This is a planning application, actual voting must be done in person on election day.'
    >
      Start Planning!
    </Link>
  );

  return (
    <>
      <div className='col-md-12' role='main'>
        <SectionHeader
          title='Plan Your Vote'
          description='Be prepared for the random order ballot. Choose candidates, answer
          Capital Plan borrowing questions, and pick where and when to vote -
          all with Plan Your Vote.'
        />
        {startPlanning}

        <div
          className='intro-left'
          role='region'
          aria-label='Voter tool - Feature list:'
        >
          <ul className='intro-tips'>
            <li>
              Browse candidates for mayor, councillor, Park Board commissioner,
              and school trustee, then add your favourites to your plan.
            </li>
            <li>
              Answer 3 Capital Plan borrowing questions about whether the City
              can borrow money to help pay for certain projects.
            </li>
            <li>
              Choose from 9 voting days and over 100 locations to fit your
              schedule.
            </li>
            <li>
              Email your plan and add voting day details to your calendar. Your
              plan will show your chosen candidates in the order you’ll find
              them on your ballot.
            </li>
          </ul>
        </div>
        <div
          className='intro-right'
          role='region'
          tabIndex='-1'
          aria-label='voter tool - general flow'
        >
          <img
            className='intro-right-img'
            src='https://vancouver.ca/plan-your-vote/img/intro_right_legend.png'
            alt='intro'
          />
          <span className='intro-pointer candidates'>
            Step 1 Your candidate selections
          </span>
          <span className='intro-pointer capital-plan'>
            Step 2 Your Capital Plan borrowing answers
          </span>
          <span className='intro-pointer details'>
            Step 3 Your voting day and location details
          </span>
          <span className='intro-pointer checklist'>
            Step 4 Your voting checklist
          </span>
        </div>

        <div
          className='intro-center'
          role='region'
          aria-label='Important disclosures.'
        >
          <p>
            No personal information is needed. We don’t save or share your plan.
          </p>
          {startPlanning}
          <p className='reassurance' role='alert'>
            <img
              src='https://vancouver.ca/plan-your-vote/img/lock-black.jpg'
              alt='lock icon'
            />
            It's private and confidential
          </p>
          <p className='note' role='alert'>
            This election tool is only intended to help you plan your vote. By
            using it, you are not actually casting a vote. You still need to go
            to the voting location on election day to vote in person.
          </p>
          <p className='note' role='alert'>
            The views expressed in the candidates' profiles are the views of the
            candidates, and they are not endorsed by the City of Vancouver. The
            profiles are reproduced verbatim as submitted by the candidates and
            the content has not been altered in any way by the City.
          </p>

          <p className='to-election-site' role='alert'>
            For details on voter registration, identification, and more,
            <br />
            <a
              href='https://vancouver.ca/your-government/2018-election.aspx'
              aria-label=' or details on voter registration, identification, and more, visit the full election site on vancouver.ca'
            >
              visit full election site
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
