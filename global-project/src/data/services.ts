export interface Service {
  id: string;
  title: string;
  description: string;
  timeEstimate: string;
  quoteTag: string;
  warranty: string;
  badge?: string;
  color: string;
  iconName: 'Tv' | 'CircuitBoard' | 'Wrench' | 'Microscope' | 'Sparkles' | 'Cpu' | 'Building';
}

export const services: Service[] = [
  {
    id: 'display-replacement',
    title: 'Display & Panel Replacement',
    description: 'Original LED, LCD, QLED & 4K display replacement. Solves broken screens, lines, flickering, and dead pixels with 1-Year Comprehensive Warranty.',
    timeEstimate: 'In Hours to 1 Day',
    quoteTag: 'Free Quote',
    warranty: '1 Year Warranty',
    badge: '1 Year Warranty',
    color: 'from-[#0A2342] to-[#133E6E]',
    iconName: 'Tv',
  },
  {
    id: 'motherboard',
    title: 'Motherboard & Power Board',
    description: 'Complete motherboard replacement, power supply repair, standby red light fix & chip-level micro-soldering with 6-Month Warranty.',
    timeEstimate: 'In Hours to 1 Day',
    quoteTag: 'Free Quote',
    warranty: '6 Months Warranty',
    badge: '6 Months Warranty',
    color: 'from-[#133E6E] to-[#0A2342]',
    iconName: 'CircuitBoard',
  },
  {
    id: 'backlight',
    title: 'Backlight / LED Strip Replacement',
    description: 'Sound audible but black screen, dim display, or blue tint fixed with 100% brand-new OEM LED strips and 6-Month Warranty.',
    timeEstimate: 'In Hours to 1 Day',
    quoteTag: 'Free Quote',
    warranty: '6 Months Warranty',
    badge: '6 Months Warranty',
    color: 'from-[#0A2342] to-[#1E4D80]',
    iconName: 'Sparkles',
  },
  {
    id: 'cof-bonding',
    title: 'COF / TAB Laser Bonding',
    description: 'Advanced laser COF IC micro-bonding machine repairs, ribbon repair & water damage vertical line screen recovery.',
    timeEstimate: 'Within 1 Day',
    quoteTag: 'Free Quote',
    warranty: '6 Months Warranty',
    badge: '6 Months Warranty',
    color: 'from-[#1E4D80] to-[#0A2342]',
    iconName: 'Microscope',
  },
  {
    id: 'panel-repair',
    title: 'Panel Circuit & T-Con Repair',
    description: 'Component-level T-Con board fixing, voltage regulator restoration, and double-image display correction.',
    timeEstimate: 'Day 1',
    quoteTag: 'Free Quote',
    warranty: '90-Day Warranty',
    badge: '90-Day Warranty',
    color: 'from-[#0A2342] to-[#133E6E]',
    iconName: 'Tv',
  },
  {
    id: 'wall-mount',
    title: 'TV Wall Mount & Install',
    description: 'Fixed, tilt & swivel wall mount bracket installation for 32" to 85" screens with clean concealed cabling.',
    timeEstimate: 'Same Day',
    quoteTag: 'Free Quote',
    warranty: 'Installation Guarantee',
    badge: 'Same Day',
    color: 'from-[#0A2342] to-[#133E6E]',
    iconName: 'Wrench',
  },
  {
    id: 'software',
    title: 'Software / Smart OS Flash',
    description: 'Android TV boot logo stuck fix, Google TV recovery, firmware flashing, and app crashing issues.',
    timeEstimate: 'Day 1',
    quoteTag: 'Free Quote',
    warranty: 'Service Guarantee',
    badge: 'Day 1 Fix',
    color: 'from-[#133E6E] to-[#0A2342]',
    iconName: 'Cpu',
  },
  {
    id: 'commercial',
    title: 'Commercial TV Maintenance',
    description: 'Bulk preventive maintenance, display panel upkeep, and AMC contracts for hotels, showrooms & corporate offices.',
    timeEstimate: 'Contract',
    quoteTag: 'Custom Quote',
    warranty: 'Annual AMC',
    badge: 'AMC Plan',
    color: 'from-[#0A2342] to-[#1E4D80]',
    iconName: 'Building',
  },
];
