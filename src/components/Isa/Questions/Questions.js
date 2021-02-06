import React from 'react';
import Faq from 'react-faq-component';
import '../Landing/Landing.css';
const Questions = () => {
  const data = {
    title: `FAQ`,
    rows: [
      {
        title: 'Q. Will there be any taxes applicable on the payments?',
        content: `No. You only need to pay 17%. All taxes will be paid by us for the payments we received :)
        .
        `,
      },
      {
        title: `Q. Do I have to pay only if I get a full stack developer profile job?`,
        content:
          'We will also train you with Quants and Guesstimates which are used for multiple roles. The ISA is hence binding for any role that you get.',
      },
      {
        title: `Q. What if I change the company before 6 months?`,
        content: `That is ok. Just notify us and the calculations will be adjusted for your next job.`,
      },
      {
        title: `Q. How soon will I get a job?`,
        content: `That depends on one person - You! The harder you work, the quicker you are to get jobs! Different people have different learning curves so it is hard to pin-point a number.`,
      },
      {
        title:
          'Q.  I already have a job offer, do I have to pay my monthly payouts now?',
        content: `Lol. No. We will add it as an exclusion to the ISA. You don't have to pay for them.
        `,
      },
      {
        title: `Q. But what if I am in the final stages of a company while signing the ISA?`,
        content: `The term "Final Stages" is subjective! But as a security measure to keep things fair for you, any job offer received within 15 days after signing this ISA is yours to keep and you won't owe us anything. Beyond that, we would love to have a small slice of your cake!`,
      },
      {
        title: `Q.  What if I quit my job?`,
        content: `In that case, we expect you to pay us the entire amount you owe us as per your offer letter.`,
      },
      {
        title: `Q. What if I don't get a job at all, no matter how hard I try?`,
        content: ` We understand. It is unlikely and very rare, but it is possible. If within a year you don't get a job, you are not liable to pay anything.`,
      },
      {
        title: `Q. What if I get a job on my own and not via YAV's referrals?`,
        content: `The ISA is for the hard work we put in to train you. We are not an HR group, although we have several HR partners. Hence, regardless of what the source of job is, if you attain a job that you like, the ISA is applicable.`,
      },
      {
        title: `Q.  What if I get shortlisted but I don't want to join it?`,
        content: `That is ok. It is your choice if you want to join a company or not.`,
      },
      {
        title: `Q. Can we trust you, should we leave our existing job to study?`,
        content: `That is your call. Are we good? Yes we have amazing mentors, all from top product based companies. Can you study with your existing job? Totally your will power.`,
      },
    ],
  };

  const styles = {
    titleTextColor: 'black',
    rowTitleColor: 'black',
  };

  return (
    <div className='faq-div'>
      <Faq data={data} styles={styles} />
    </div>
  );
};

export default Questions;
