'use client';

import { useRef } from 'react';
import ContactHero from '@/components/Contact/ContactHero';
import ContactSection from '@/components/Contact/ContactSection';

export default function ContactClient() {
  const firstNameRef = useRef(null);

  return (
    <>
      <ContactHero firstNameRef={firstNameRef} />
      <ContactSection firstNameRef={firstNameRef} />
    </>
  );
}
