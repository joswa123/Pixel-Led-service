export interface Service {
  id: string;
  title: string;
  description: string;
  startingPrice: string;
  timeEstimate: string;
  color: string;
  iconName: 'Tv' | 'CircuitBoard' | 'Wrench' | 'Microscope' | 'Sparkles' | 'Cpu' | 'Building';
}

export const services: Service[] = [
  {
    id: 'panel-repair',
    title: 'LED/LCD Panel Repair',
    description: 'Black screen, vertical/horizontal lines, display flickering, and dead pixels resolution.',
    startingPrice: '₹599',
    timeEstimate: 'Day 1-2',
    color: 'from-[#0A2342] to-[#133E6E]',
    iconName: 'Tv',
  },
  {
    id: 'motherboard',
    title: 'Motherboard & Power Board',
    description: 'No power, red standby light blinking, auto restart loops, HDMI ports & chip-level micro-soldering.',
    startingPrice: '₹850',
    timeEstimate: 'Day 1-2',
    color: 'from-[#133E6E] to-[#0A2342]',
    iconName: 'CircuitBoard',
  },
  {
    id: 'backlight',
    title: 'Backlight / LED Strip',
    description: 'Sound is audible but no picture on screen, dim display, blue tint, or dark patchy areas.',
    startingPrice: '₹1,200',
    timeEstimate: 'Day 1-2',
    color: 'from-[#0A2342] to-[#1E4D80]',
    iconName: 'Sparkles',
  },
  {
    id: 'cof-bonding',
    title: 'COF / TAB Bonding',
    description: 'Advanced laser COF IC micro-bonding machine repairs, ribbon repair & water damage recovery.',
    startingPrice: '₹2,500',
    timeEstimate: 'Day 2-3',
    color: 'from-[#1E4D80] to-[#0A2342]',
    iconName: 'Microscope',
  },
  {
    id: 'wall-mount',
    title: 'TV Wall Mount & Install',
    description: 'Fixed, tilt & swivel wall mount bracket installation for 32" to 85" screens with clean cable management.',
    startingPrice: '₹399',
    timeEstimate: 'Same Day',
    color: 'from-[#0A2342] to-[#133E6E]',
    iconName: 'Wrench',
  },
  {
    id: 'software',
    title: 'Software / Firmware Flash',
    description: 'Android TV boot logo stuck fix, Google TV recovery, firmware flashing, and app crashing issues.',
    startingPrice: '₹500',
    timeEstimate: 'Day 1',
    color: 'from-[#133E6E] to-[#0A2342]',
    iconName: 'Cpu',
  },
  {
    id: 'commercial',
    title: 'Commercial TV Maintenance',
    description: 'Bulk preventive maintenance, display panel upkeep, and AMC contracts for hotels, showrooms & corporate offices.',
    startingPrice: 'Custom',
    timeEstimate: 'Contract',
    color: 'from-[#0A2342] to-[#1E4D80]',
    iconName: 'Building',
  },
];
