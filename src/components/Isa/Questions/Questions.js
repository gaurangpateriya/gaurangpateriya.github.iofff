import React from 'react';
import Faq from 'react-faq-component';

const Questions = () => {
  const data = {
    title: `Income sharing agreement (ISA) Questions`,
    rows: [
      {
        title: 'Will there be any govt taxes applicable on the fees?',
        content: `18% GST will be applicable on the fees instalments while making payments.
        `,
      },
      {
        title: `What are the approved banks that you'll be keeping for processing the payment? What are the other payment methods?`,
        content: 'We will let you know after the completion of the course',
      },
      {
        title: `After the course if I get the job above 6lpa and ISA starts and let's say I paid 5 months installments in 6th months. And then I want to pay the remaining amount all at once, then  will I pay you the left amount according to 2 lakhs or 3 lakhs?`,
        content: `The total amount is 3L. If you have already paid us a certain amount then we will calculate the remaining amount from 3L, and you can pay the money at once.
        `,
      },
      {
        title: `I already have a job of 5 LPA Can my minimum guarantee be increased?`,
        content: `Yes, if you already have a job of 5LPA your minimum guarantee in the Income sharing agreement can be increased.`,
      },
      {
        title: 'Will there be any govt taxes applicable on the fees?',
        content: `18% GST will be applicable on the fees instalments while making payments.
        `,
      },
      {
        title: `What are the approved banks that you'll be keeping for processing the payment? What are the other payment methods?`,
        content: 'We will let you know after the completion of the course',
      },
      {
        title: `After the course if I get the job above 6lpa and ISA starts and let's say I paid 5 months installments in 6th months. And then I want to pay the remaining amount all at once, then  will I pay you the left amount according to 2 lakhs or 3 lakhs?`,
        content: `The total amount is 3L. If you have already paid us a certain amount then we will calculate the remaining amount from 3L, and you can pay the money at once.
        `,
      },
      {
        title: `I already have a job of 5 LPA Can my minimum guarantee be increased?`,
        content: `Yes, if you already have a job of 5LPA your minimum guarantee in the Income sharing agreement can be increased.`,
      },
    ],
  };

  const styles = {
    titleTextColor: 'black',
    rowTitleColor: 'black',
  };

  return (
    <div style={{ padding: '3rem' }}>
      <Faq data={data} styles={styles} />
    </div>
  );
};

export default Questions;
