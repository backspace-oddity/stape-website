'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const steps = [
  {
    title: 'Drop a doc. Get a company profile.',
    description: 'Upload anything — a registration certificate, an invoice, a screenshot. The AI extracts every field and builds your profile in seconds.',
    video: '/product-onboarding.mp4',
    image: '/product-onboarding.png',
    imageAlt: 'Company onboarding — AI-parsed profile card with all fields complete',
  },
  {
    title: 'Review. Sign. Done.',
    description: 'Your contract is generated and ready right in the chat. Read through it, hit sign — no redirects, no PDFs, no separate tools.',
    image: '/product-contract.png',
    imageAlt: 'Service agreement card with digital signature — signed inline',
  },
  {
    title: 'Paste your contractor list. We\'ll structure and run it.',
    description: 'Upload it in any format. We map the data, create clean contractor profiles, and handle contracts and payouts — with zero manual setup.',
    image: '/product-contractors.png',
    imageAlt: 'Contractor review cards — 5 contractors parsed with missing field indicators',
  },
];

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ProductPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── Hero ── */}
      <section ref={heroRef} className="relative pt-32 pb-16 md:pt-44 md:pb-20 bg-white overflow-hidden">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 text-center">
          <motion.h1
            className="font-display font-extrabold text-[36px] md:text-[52px] lg:text-[64px] text-primary leading-[1.08] mb-5 tracking-[-0.025em]"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Set up payroll like
            <br />
            <span className="text-foreground-muted">texting a friend</span>
          </motion.h1>

          <motion.p
            className="text-lg text-foreground-secondary leading-relaxed max-w-lg mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            No forms. No onboarding calls. Drop your docs and start paying contractors worldwide.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href="/"
              className="inline-flex items-center gap-1.5 px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm rounded-md hover:bg-primary/90 transition-colors"
            >
              Try the demo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#walkthrough"
              className="text-sm font-medium text-foreground-secondary hover:text-primary transition-colors"
            >
              See how it works
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Walkthrough — image-first showcase ── */}
      <section id="walkthrough" className="scroll-mt-16">
        {steps.map((step, idx) => (
          <div key={step.title} className={idx % 2 === 0 ? 'bg-background-secondary' : 'bg-white'}>
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
              <AnimatedSection>
                <h2 className="text-[24px] md:text-[36px] font-display font-extrabold text-primary tracking-[-0.02em] leading-[1.1] mb-3">
                  {step.title}
                </h2>
                <p className="text-base md:text-lg text-foreground-secondary leading-relaxed max-w-2xl mb-8 md:mb-12">
                  {step.description}
                </p>

                {/* Full-width media */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg ring-1 ring-border/50">
                  {step.video ? (
                    <video
                      src={step.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto block"
                    />
                  ) : (
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      width={2400}
                      height={1400}
                      className="w-full h-auto block"
                      priority={idx === 0}
                    />
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        ))}
      </section>

      {/* ── Autopilot payroll ── */}
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <AnimatedSection>
            <div className="max-w-3xl">
              <h2 className="text-[24px] md:text-[36px] font-display font-extrabold text-primary tracking-[-0.02em] leading-[1.1] mb-3">
                Pay contractors on autopilot.
              </h2>
              <p className="text-base md:text-lg text-foreground-secondary leading-relaxed max-w-2xl mb-8 md:mb-12">
                No admin work. No chasing invoices. Payouts happen automatically — like you hired a full-time payroll manager, except it never takes a day off.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg ring-1 ring-border/50">
              <video
                src="/product-autopilot.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto block"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Compliance ── */}
      <section className="bg-background-secondary">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <AnimatedSection>
            <div className="max-w-3xl">
              <h2 className="text-[24px] md:text-[36px] font-display font-extrabold text-primary tracking-[-0.02em] leading-[1.1] mb-3">
                Stay compliant without thinking about it.
              </h2>
              <p className="text-base md:text-lg text-foreground-secondary leading-relaxed max-w-2xl mb-8 md:mb-12">
                Need an invoice, a tax form, or a local agreement? Ask the AI agent in chat — it generates jurisdiction-perfect documents for any country and any case.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg ring-1 ring-border/50">
              <video
                src="/product-compliance.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto block"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <AnimatedSection>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { value: '< 5 min', label: 'Company setup' },
                { value: '1 click', label: 'Contract signing' },
                { value: 'Any format', label: 'Contractor import' },
                { value: '240+', label: 'Countries' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center gap-1 p-6 rounded-xl bg-white/5 border border-white/10 text-center"
                >
                  <span className="text-xl md:text-2xl font-display font-extrabold text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs text-white/60">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[700px] mx-auto px-6 md:px-12">
          <AnimatedSection className="flex flex-col items-center text-center">
            <h2 className="text-[28px] md:text-[40px] font-display font-extrabold text-primary tracking-[-0.02em] leading-[1.1]">
              Ready to stop filling out forms?
            </h2>
            <p className="mt-4 text-base text-foreground-secondary leading-relaxed max-w-md">
              Try the interactive demo — 2 minutes, no signup.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <a
                href="/"
                className="inline-flex items-center gap-1.5 px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm rounded-md hover:bg-primary/90 transition-colors"
              >
                Launch demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 px-6 py-3 border border-border text-primary font-semibold text-sm rounded-md hover:bg-background-secondary transition-colors"
              >
                Book a demo
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
