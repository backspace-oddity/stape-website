'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Long exhausting list — credits-style, feels never-ending
const todayBullets = [
  'Cross-check three spreadsheets for contractor rates',
  'Google "how to pay someone in Colombia legally"',
  'Convert currencies manually and hope you got the rate right',
  'Send 47 individual payment instructions',
  'Realize you sent USD instead of EUR to two people',
  'Chase 12 people for missing tax documents',
  'Explain to your team why payments are late again',
  'Get a Slack DM: "hey, my payment didn\u2019t arrive?"',
  'Reconcile failed transactions across 3 tools',
  'Fill out a wire transfer form for the 9th time today',
  'Generate compliance reports for multiple jurisdictions',
  'Wonder if you\u2019re even withholding the right tax',
  'Answer "where\u2019s my money?" messages until 9pm',
  'Manually update your contractor tracking spreadsheet',
  'Discover Wise flagged a payment for review. Again.',
  'Email your accountant asking about Brazilian tax codes',
  'Apologize to your best developer for the late payment',
  'Open yet another tab to check FX rates',
  'Realize it\u2019s 7pm and you haven\u2019t done actual work',
  'Set a reminder to do all of this again next month',
];

const stapePhrases = [
  'Close the deal you\u2019ve been chasing for weeks',
  'Interview the senior engineer in S\u00e3o Paulo',
  'Close the deal. Ship the feature. Take the call from Tokyo.',
  'Take a proper lunch break',
  'Close the deal you\u2019ve been chasing for weeks',
];

export default function WorkThatDisappearsV2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [thingsCount, setThingsCount] = useState(167);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % stapePhrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Slowly ticking counter — things you could be doing instead
  useEffect(() => {
    const ticker = setInterval(() => {
      setThingsCount((prev) => prev + 1);
    }, 8000);
    return () => clearInterval(ticker);
  }, []);

  return (
    <section id="work-that-disappears" ref={ref} className="py-20 md:py-28 bg-primary">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-[32px] md:text-[40px] font-display font-extrabold text-white leading-[1.1] tracking-[-0.02em]">
            Two ways to spend your Tuesday
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Overwhelming static list — overflows the card naturally */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden max-h-[480px]"
          >
            {/* Header inside card padding */}
            <div className="px-8 md:px-10 pt-8 md:pt-10">
              <h3 className="text-lg font-display font-bold text-white mb-6">Your Tuesday without Stape</h3>
            </div>

            {/* List overflows bottom of the card — no bottom padding, card clips it */}
            <div className="px-8 md:px-10 pb-0">
              <ul className="space-y-3">
                {todayBullets.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/55 text-[13px] leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-white/25 mt-[7px] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {/* Spacer so the last visible item is mid-line, suggesting more below */}
              <div className="h-4" />
            </div>
          </motion.div>

          {/* Right: One calm phrase at a time — big, rotating */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-accent/10 rounded-2xl p-8 md:p-10 border border-accent/20 flex flex-col justify-between h-[480px]"
          >
            <h3 className="text-lg font-display font-bold text-white mb-8">Your Tuesday with Stape</h3>

            {/* Single rotating phrase — large type */}
            <div className="flex-1 flex items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentPhrase}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="text-[28px] md:text-[36px] font-display font-extrabold text-white leading-[1.15] tracking-[-0.02em]"
                >
                  {stapePhrases[currentPhrase]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Progress dots + counter */}
            <div>
              <div className="flex items-center gap-2">
                {stapePhrases.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPhrase(i)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === currentPhrase
                        ? 'w-6 bg-accent'
                        : 'w-2 bg-white/20 hover:bg-white/30'
                    }`}
                  />
                ))}
              </div>

              {/* "And N other things" counter */}
              <p className="mt-5 text-white/40 text-xs leading-relaxed">
                …and{' '}
                <span className="font-mono text-accent/70 text-sm font-semibold tabular-nums">
                  {thingsCount}
                </span>{' '}
                other things that actually move the needle
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-1.5 px-6 py-3 bg-accent text-primary font-semibold text-sm rounded-md hover:bg-accent/90 transition-colors"
          >
            Get your Tuesdays back
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>

    </section>
  );
}
