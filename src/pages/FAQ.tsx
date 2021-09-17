import React from "react";
import { Link, RouteComponentProps } from "@reach/router";
import { Disclosure } from "@headlessui/react";

import Nav from "../components/Nav";
import CyborgEyeShadow from "../assets/faq/cyborg-eye-shadow.png";

function FAQ(props: RouteComponentProps) {
  const faqs = [
    {
      question: "What are SGF Cyborgs?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia lectus turpis, viverra molestie augue suscipit in. Mauris diam quam, lacinia vel cursus tincidunt, rhoncus vitae odio. In consequat quam.",
    },
    {
      question: "How many Cyborgs will be available to purchase?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia lectus turpis, viverra molestie augue suscipit in. Mauris diam quam, lacinia vel cursus tincidunt, rhoncus vitae odio. In consequat quam.",
    },
    {
      question: "Where & where will I be able to mint Cyborgs?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia lectus turpis, viverra molestie augue suscipit in. Mauris diam quam, lacinia vel cursus tincidunt, rhoncus vitae odio. In consequat quam.",
    },
    {
      question: "How much will it be to mint 1 Cyborg?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia lectus turpis, viverra molestie augue suscipit in. Mauris diam quam, lacinia vel cursus tincidunt, rhoncus vitae odio. In consequat quam.",
    },
    {
      question: "What wallets do you support?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia lectus turpis, viverra molestie augue suscipit in. Mauris diam quam, lacinia vel cursus tincidunt, rhoncus vitae odio. In consequat quam.",
    },
    {
      question: "Is there a rarity based attribute system?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia lectus turpis, viverra molestie augue suscipit in. Mauris diam quam, lacinia vel cursus tincidunt, rhoncus vitae odio. In consequat quam.",
    },
    {
      question: "Will there be a Marketplace?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia lectus turpis, viverra molestie augue suscipit in. Mauris diam quam, lacinia vel cursus tincidunt, rhoncus vitae odio. In consequat quam.",
    },
    {
      question: "Do I receive my NFT as soon as I mint it?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia lectus turpis, viverra molestie augue suscipit in. Mauris diam quam, lacinia vel cursus tincidunt, rhoncus vitae odio. In consequat quam.",
    },
  ];

  return (
    <div style={{ background: "#101010" }} className="min-h-screen">
      <Nav />
      <main className="py-36">
        <h1 className="text-center text-primary-light glow text-5xl font-black italic">
          FAQS
        </h1>
        <section className="relative -mt-10  px-52">
          <img
            src={CyborgEyeShadow}
            alt="Cyborg sillouhette with glow eyes"
            className="mt-2 ml-10"
          />
          <dl className="space-y-5">
            {faqs.map((faq) => (
              <Disclosure
                as="div"
                key={faq.question}
                className="border border-gray-light bg-gray-dark rounded-md p-5"
              >
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-dark focus:outline-none">
                        <span className="font-black italic uppercase text-white text-xl">
                          {faq.question}
                        </span>
                        <span className="ml-6 h-7 flex items-center text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`${open ? "-rotate-180" : "rotate-0"}
                              h-6 w-6 transform transition-all duration-200`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </section>
        <div className="mt-8 font-orb ">
          <p className="text-sm font-medium text-gray text-center font-inter">
            Can’t find an answer to your query? Don’t worry, we’ve got your
            back...
          </p>
          <div className="flex flex-wrap justify-center items-center">
            <Link
              to="/roadmap"
              className="btn-primary font-black mt-4 mr-3 uppercase"
            >
              Roadmap
            </Link>
            <a
              href="https://discord.com/invite/bBeHKHHSu5"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary font-black mt-4"
            >
              JOIN DISCORD
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FAQ;
