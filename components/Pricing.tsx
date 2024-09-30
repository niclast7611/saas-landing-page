"use client";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";
import { Element } from "react-scroll";
import CountUp from "react-countup";

const plans = [
  {
    id: "0",
    title: "Core",
    priceMonthly: 19,
    priceYearly: 12,
    caption: "Best for solo creators",
    features: [
      "100MB Cloud storage",
      "100+ prompt templates",
      "5 projects",
      "24/7 support",
    ],
    icon: "/images/circle.svg",
    logo: "/images/plan-1.png",
  },
  {
    id: "1",
    title: "Overdrive",
    priceMonthly: 79,
    priceYearly: 59,
    caption: "Most popular plan",
    features: [
      "All Starter features",
      "1TB additional storage",
      "Unlimited projects",
      "Analytics",
    ],
    icon: "/images/triangle.svg",
    logo: "/images/plan-2.png",
  },
  {
    id: "2",
    title: "Team",
    priceMonthly: 39,
    priceYearly: 29,
    caption: "Exclusively for teams",
    features: [
      "All Overdrive features",
      "10TB additional storage",
      "50% off per member",
      "Real-time collaboration",
    ],
    icon: "/images/hexagon.svg",
    logo: "/images/plan-3.png",
  },
];

const Pricing = () => {
  const [monthly, setMonthly] = useState(true);
  return (
    <section>
      <Element name="pricing">
        <div className="container">
          <div className="max-w-960 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
            <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm">
              Flexible pricing for teams of all sizes
            </h3>
            <div className="relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] border-s4/25 bg-s1/50 backdrop-blur-[6px] max-md:w-[310px]">
              <button
                onClick={() => setMonthly(true)}
                className={clsx("pricing-head_btn", monthly && "text-p4")}
              >
                Monthly
              </button>
              <button
                onClick={() => setMonthly(false)}
                className={clsx("pricing-head_btn", !monthly && "text-p4")}
              >
                Annual
              </button>

              <div
                className={clsx(
                  "g4 rounded-14 before:h-100 pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500",
                  !monthly && "translate-x-full"
                )}
              />
            </div>
            <div className="pricing-bg">
              <Image
                src={"/images/bg-outlines.svg"}
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <Image
                src={"/images/bg-outlines-fill.png"}
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </div>
          </div>
          <div className="scroll-hide relative z-2 -mt-12 flex items-start max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33%+2px)]"
              >
                {index === 1 && (
                  <div className="g4 absolute h-330 left-0 right-0 top-0 z-1 rounded-tl-3xl rounded-tr-3xl" />
                )}
                <div
                  className={clsx(
                    "absolute left-0 right-0 z-2 flex items-center justify-center",
                    index === 1 ? "-top-6" : "-top6 xl:-top-11"
                  )}
                >
                  <Image
                    src={plan.logo}
                    alt={plan.title}
                    width={index === 1 ? "120" : "88"}
                    height={index === 1 ? "120" : "88"}
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
                <div
                  className={clsx(
                    "relative flex flex-col items-center",
                    index === 1 ? "pt-24" : "pt-12"
                  )}
                >
                  <div
                    className={clsx(
                      "small-2 rounded-20 relative z-2 mx-auto mb-6 border-2 px-4 py-1.5 uppercase",
                      index === 1 ? "border-px text-p3" : "border-p1 text-p1"
                    )}
                  >
                    {plan.title}
                  </div>

                  <div className="relative z-2 flex items-center justify-center">
                    <div
                      className={clsx(
                        "h-num flex items-start",
                        index === 1 ? "text-p3" : "text-p4"
                      )}
                    >
                      ${" "}
                      <CountUp
                        start={plan.priceMonthly}
                        end={monthly ? plan.priceMonthly : plan.priceYearly}
                        duration={0.4}
                        useEasing={false}
                        preserveValue
                      />
                    </div>
                    <div className="small-1 relative top-3 ml-1 uppercase">
                      / mo
                    </div>
                  </div>
                </div>
                <div>{plan.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Pricing;
