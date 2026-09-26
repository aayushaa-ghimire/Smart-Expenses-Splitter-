export const currentUser = {
  id: 'usr_1',
  name: 'Aayusha',
  email: 'aayusha@example.com',
  avatar: '/src/assets/profile.png',
};

export const mockSummary = {
  totalBalance: 125.50, // Positive = overall owed to user, Negative = user owes
  youOwe: 45.00,
  youAreOwed: 170.50,
};

export const mockGroups = [
  {
    id: 'grp_1',
    name: 'Goa Trip 2026',
    category: 'Trip',
    totalSpent: 480.00,
    yourBalance: 65.50, // You are owed $65.50
    membersCount: 4,
    members: [
      { id: 'usr_1', name: 'Aayusha', avatar: '/src/assets/profile.png' },
      { id: 'usr_2', name: 'Rohan', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80' },
      { id: 'usr_3', name: 'Siddharth', avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80' },
      { id: 'usr_4', name: 'Priya', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80' },
    ],
  },
  {
    id: 'grp_2',
    name: 'Apartment 4B',
    category: 'Home',
    totalSpent: 1250.00,
    yourBalance: -45.00, // You owe $45.00
    membersCount: 3,
    members: [
      { id: 'usr_1', name: 'Aayusha', avatar: '/src/assets/profile.png' },
      { id: 'usr_2', name: 'Rohan', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80' },
      { id: 'usr_5', name: 'Ananya', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80' },
    ],
  },
  {
    id: 'grp_3',
    name: 'Weekend Dinners',
    category: 'Food',
    totalSpent: 210.00,
    yourBalance: 105.00, 
    membersCount: 2,
    members: [
      { id: 'usr_1', name: 'Aayusha', avatar: '/src/assets/profile.png' },
      { id: 'usr_4', name: 'Priya', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80' },
    ],
  },
];

export const mockRecentExpenses = [
  {
    id: 'exp_1',
    title: 'Beach Resort Booking',
    groupName: 'Goa Trip 2026',
    amount: 320.00,
    paidBy: 'Aayusha',
    date: 'Yesterday',
  },
  {
    id: 'exp_2',
    title: 'WiFi & Electricity Bill',
    groupName: 'Apartment 4B',
    amount: 90.00,
    paidBy: 'Rohan',
    date: '2 days ago',
  },
  {
    id: 'exp_3',
    title: 'Italian Dinner',
    groupName: 'Weekend Dinners',
    amount: 140.00,
    paidBy: 'Aayusha',
    date: 'May 12',
  },
];