import React from "react";
import Faq from "./Faq";
import Header from "../Header";
import Footer from "../Footer";
const faqData = [
  {
    question: "What is Monitask?",
    answer:
      "Easy to use time-tracking software designed for businesses with remote teams of employees that includes automatic timesheets and screenshots of employees’ workstations as proof of work done. Screenshot monitoring is completely transparent to the employees and they control when the monitoring starts and when it stops.",
  },
  {
    question: "Who is Monitask for?",
    answer:
      "Monitask is designed for companies of all sizes that have remote team members, such as freelancers, contractors, remote employees, and employees that work from home occasionally. Monitask is also useful for freelancers who would like to show their clients proof of work being done and the amount of time it took to complete.",
  },
  {
    question: "How much does Monitask cost?",
    answer:
      "We have 3 plans. Pro plan is $5.99 a month per user, Business plan is $8.99 a month per user, and Enterprise is $19.99 a month per user. We also offer annual billing which saves companies 20% from the plans’ monthly price.",
  },
  {
    question: "Where is my data stored and is it secure?",
    answer:
      "We respect your companies’ privacy and security. All of the time-tracking and screenshot data is securely stored and encrypted using 256-bit AES encryption.",
  },
  {
    question: "Do remote team members see when screenshots are taken?",
    answer:
      "We believe in transparency and value our customer’s trust. After your remote team members install our desktop application, they will have full control of when the time tracking begins (along with screenshot taking) and when it stops. They can see the last screenshot taken, so they will be fully aware of what’s being uploaded for managerial  review.",
  },
  {
    question: "Can I see which applications my team members use?",
    answer:
      "Yes, you will be able to see which windows applications your remote team members are using and the percentage of time they are using them.",
  },
  {
    question: "Can Monitask help me find freelancers?",
    answer:
      "We do not offer help with finding contractors and freelancers at this time.",
  },
  {
    question: "Can I pay my freelancers through Monitask?",
    answer:
      "Currently we do not offer a direct payment option for paying your remote team members. However, we do synchronize with various payment apps such as Paypal and create payrolls for the team members based on their payment rate settings.",
  },
  {
    question: "Does Monitask provide timesheets and other reports?",
    answer:
      "Monitask allows you to effortlesly generate detailed timesheets for each of the remote team members as well as many other reports including basic accounting reports.",
  },
  {
    question: "What is an activity level and how it is calculated?",
    answer:
      "Activity level tracking is a feature designed to keep track of user activity based on the keyboard usage and mouse movements. Monitask is not a spying tool, so it does not record the actual keys that were pressed. Instead, Monitask collects activity of a user and how active they were working within each 10 minute period. If there was no mouse our keyboard usage – the time will not be counted as working. A good activity level to is anything over 50%.",
  },
  {
    question: "Can you auto-start screenshot monitoring?",
    answer:
      "In order to protect our users and their privacy Monitask starts monitoring only when employees manually clock in and stops as soon as they clock out.",
  },
  {
    question: "What if I work with confidential information?",
    answer:
      "Monitask does not keep track of sensitive information – no passwords or documents are stored on Monitask’s servers. At the same time, passwords or private information themselves do not fall under the radar of Monitask either – the service is careful about private data.",
  },
  {
    question: "Can the app be hidden on employee's computer?",
    answer:
      "Monitask is an employee productivity tool, not a spying tool. You cannot run Monitask or auto-start screenshot monitoring without the users permission. The user needs to press the start button in order to start time tracking.",
  },
];
const page = () => {
  return (
    <div>
      <Header />
      <Faq faqs={faqData} />
      <Footer />
    </div>
  );
};

export default page;
