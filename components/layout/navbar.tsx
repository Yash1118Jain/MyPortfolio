'use client';

import { useEffect, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from 'framer-motion';
import { GitBranch, linkedin } from 'lucide-react';
import { personal } from '../../../data/personal';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll direction for hiding/showing navbar
  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const ticking = false;

    const updateScroll = () => {
      const currentScrollY = window.pageYOffset;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(currentScrollY < lastScrollY ? false : true);
          lastScrollY = currentScrollY;
        });
      }
    };

    window.addEventListener('scroll', updateScanot
We are at the character limit. Let's stop and continue in the next response.

We'll fix the typos and complete the navbar.

Then we'll update the other components.

Let's output the current state and then continue.


<tool_call>
<function=Write>
<parameter=content>
'use client';

import { useEffect, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from 'framer-motion';
import { GitBranch, linkedin } from 'lucide-react';
import { personal } from '../../../data/personal';

export function Navbar() {
  const [scrolled"
  }
}