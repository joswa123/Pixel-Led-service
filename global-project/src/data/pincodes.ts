export interface ZoneDetail {
  pincodes: string[];
  areas: string[];
}

export const zonePincodes: Record<string, ZoneDetail> = {
  'Central Coimbatore': {
    pincodes: ['641001', '641002', '641003', '641009', '641012', '641018', '641044'],
    areas: ['Town Hall', 'RS Puram', 'Lawley Road', 'Ram Nagar', 'Gandhipuram', 'Tatabad', 'Siddhapudur'],
  },
  'North Coimbatore': {
    pincodes: ['641004', '641006', '641011', '641022', '641030', '641031', '641035', '641048', '641049'],
    areas: ['Peelamedu', 'Ganapathy', 'Saibaba Colony', 'NGGO Colony', 'Kavundampalayam', 'Narasimhanaicken Palayam', 'Saravanampatti', 'Kalapatti', 'Chinnavedampatti'],
  },
  'East Coimbatore': {
    pincodes: ['641005', '641015', '641016', '641062', '641103', '641105'],
    areas: ['Singanallur', 'Uppilipalayam', 'Ondipudur', 'Chinniampalayam', 'Irugur', 'Madukarai'],
  },
  'South Coimbatore': {
    pincodes: ['641008', '641021', '641023', '641024', '641028', '641042', '641045', '641111'],
    areas: ['Kuniamuthur', 'Eachanari', 'Podanur', 'Sundrapuram', 'Sowripalayam', 'Kovaipudur', 'Ramanathapuram', 'Vellalore'],
  },
  'West Coimbatore': {
    pincodes: ['641007', '641010', '641025', '641026', '641027', '641039', '641041', '641109', '641110', '641401'],
    areas: ['Veera Keralam', 'Perur', 'Velandipalayam', 'Selvapuram', 'Rathnapuram', 'Telungupalayam', 'Vadavalli', 'Thondamuthur', 'Vaiyampalayam', 'Kangayampalayam'],
  },
  'Suburban / Extended': {
    pincodes: ['641107', '641201', '641402', '642002', '642110', '641033', '641034', '641036', '641037', '641038', '641040'],
    areas: ['Karamadai', 'Sulur', 'Chettipalayam', 'Kurumbapalayam', 'Kovilpalayam', 'Ganeshapuram', 'Neelikonampalayam', 'Thudialur', 'Nanjundapuram', 'Pappanaickenpalayam', 'Kuppakonapudur', 'Subramaniampuram'],
  },
};
