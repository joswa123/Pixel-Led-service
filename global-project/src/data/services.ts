export interface Service {
  id: string;
  title: string;
  description: string;
  timeEstimate: string;
  quoteTag: string;
  warranty: string;
  badge?: string;
  image?: string;
  color: string;
  iconName: 'Tv' | 'CircuitBoard' | 'Wrench' | 'Microscope' | 'Award' | 'Cpu' | 'Building';
}

export const services: Service[] = [
  {
    id: 'panel-repair',
    title: 'Panel Repair & Screen Lines',
    description: 'Component-level panel diagnosis, T-Con board repairs, horizontal/vertical line restoration, and double-image display correction.',
    timeEstimate: 'Day 1-2',
    quoteTag: 'Free Diagnosis',
    warranty: '1 Year Warranty',
    badge: 'Day 1-2',
    image: '/assets/images/smartfix-panel.webp',
    color: 'from-[#0A2342] to-[#133E6E]',
    iconName: 'Tv',
  },
  {
    id: 'motherboard',
    title: 'Motherboard & Power Board Repair',
    description: 'Chip-level micro-soldering, standby red light fix, power supply board replacement, HDMI fault repair, and surge protection.',
    timeEstimate: 'Day 1-2',
    quoteTag: 'Call for Quote',
    warranty: '6 Months Warranty',
    badge: 'Day 1-2',
    image: '/assets/images/smartfix-motherboard.webp',
    color: 'from-[#133E6E] to-[#0A2342]',
    iconName: 'CircuitBoard',
  },
  {
    id: 'backlight',
    title: 'Backlight / LED Strip Replacement',
    description: 'Fixes sound working but black screen, dim picture, or blue/purple tint using 100% brand-new OEM high-luminance LED arrays.',
    timeEstimate: 'Day 1-2',
    quoteTag: 'Free Diagnosis',
    warranty: '6 Months Warranty',
    badge: 'Day 1-2',
    image: '/assets/images/pexels-bulat843-1243575272-38264253.webp',
    color: 'from-[#0A2342] to-[#1E4D80]',
    iconName: 'Award',
  },
  {
    id: 'cof-bonding',
    title: 'COF / TAB Laser Bonding',
    description: 'Precision laser COF IC micro-bonding machine repairs, ribbon cable replacement, and water damage vertical line screen recovery.',
    timeEstimate: 'Day 2-3',
    quoteTag: 'Call for Quote',
    warranty: '6 Months Warranty',
    badge: 'Day 2-3',
    image: '/assets/images/geralt-demonstration-767982_1920.webp',
    color: 'from-[#1E4D80] to-[#0A2342]',
    iconName: 'Microscope',
  },
  {
    id: 'wall-mount',
    title: 'TV Wall Mount & Installation',
    description: 'Fixed, tilt & swivel heavy-duty wall bracket installation for 32" to 85"+ LED, QLED & OLED TVs with neat concealed cabling.',
    timeEstimate: 'Same Day',
    quoteTag: 'Call for Quote',
    warranty: 'Installation Guarantee',
    badge: 'Same Day',
    image: '/assets/images/smartfix-installation.webp',
    color: 'from-[#0A2342] to-[#133E6E]',
    iconName: 'Wrench',
  },
  {
    id: 'software',
    title: 'Software & Smart OS Flash',
    description: 'Android TV boot logo stuck fix, Google TV system recovery, firmware flashing, app crashing fix, and Wi-Fi connectivity resolution.',
    timeEstimate: 'Day 1',
    quoteTag: 'Free Diagnosis',
    warranty: 'Service Guarantee',
    badge: 'Day 1',
    image: '/assets/images/pexels-miguel-galaz-2969450-11715243.webp',
    color: 'from-[#133E6E] to-[#0A2342]',
    iconName: 'Cpu',
  },
];
