import React, { useState } from 'react';
import { 
  Heart, 
  ArrowRight, 
  Users, 
  Wallet, 
  ArrowUpRight, 
  ArrowDownLeft,
  Plane,
  Home,
  Utensils,
  Grid,
  Receipt,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import { mockSummary, mockGroups, mockRecentExpenses } from '../data/mockData';

export default function Dashboard() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { id: 'All', label: 'All groups', icon: Grid },
    { id: 'Trip', label: 'Trips', icon: Plane },
    { id: 'Home', label: 'Home', icon: Home },
    { id: 'Food', label: 'Dining', icon: Utensils },
  ];

  const filteredGroups = activeCategory === 'All' 
    ? mockGroups 
    : mockGroups.filter(g => g.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="min-h-screen bg-[#fdf8f6] text-[#3a1d28] font-sans">
      <Navbar />

      {/* Hero Header Section */}
      <section className="bg-[#8b263e] text-white pt-10 pb-20 px-4 sm:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          
          {/* Main Hero Circle */}
          <div className="relative shrink-0">
            <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full border-4 border-white/20 p-2 overflow-hidden bg-[#721e32]">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=80" 
                alt="Friends hanging out" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="absolute -bottom-2 right-2 bg-white text-[#8b263e] text-xs font-normal px-3 py-1 rounded-full shadow-xs">
              Shared balances
            </span>
          </div>

          {/* Hero Content */}
          <div className="text-center md:text-left space-y-3 max-w-xl">
            <h1 className="text-3xl sm:text-4xl font-normal tracking-tight leading-snug">
              Keep track of shared trip bills, rent, and dining out.
            </h1>
            <p className="text-white/80 text-sm font-normal">
              Manage group balances seamlessly with zero transaction friction.
            </p>
            <div className="pt-2">
              <span className="inline-block bg-[#fce4ec] text-[#8b263e] text-xs font-normal px-4 py-1.5 rounded-full">
                Active group overview
              </span>
            </div>
          </div>

          {/* Stacked Side Circles */}
          <div className="hidden md:flex flex-col gap-4 shrink-0">
            <div className="w-24 h-24 rounded-full border-2 border-white/30 overflow-hidden bg-white/10 p-1">
              <img 
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&auto=format&fit=crop&q=80" 
                alt="Group trip" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-24 h-24 rounded-full border-2 border-white/30 overflow-hidden bg-white/10 p-1 self-end">
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=300&auto=format&fit=crop&q=80" 
                alt="Dinner gathering" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Main Container */}
      <section className="-mt-10 bg-[#fdf8f6] rounded-t-[2.5rem] px-4 sm:px-8 pt-8 pb-16 relative z-20">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Category Filter Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-normal text-[#8b263e]">Categories</h2>
                <p className="text-xs text-[#3a1d28]/60 mt-0.5">Filter your active groups by type</p>
              </div>

              <Link to="/create-group">
                <button className="bg-[#8b263e] hover:bg-[#721e32] text-white px-5 py-2 rounded-full text-xs font-normal transition-colors cursor-pointer">
                  New group
                </button>
              </Link>
            </div>

            {/* Category Filter Buttons */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex flex-col items-center justify-center gap-2 min-w-[100px] px-4 py-3 rounded-2xl transition-all cursor-pointer ${
                      isActive
                        ? 'bg-white shadow-xs border border-[#f5e6ea] text-[#8b263e]'
                        : 'bg-white/60 hover:bg-white text-[#3a1d28]/70 border border-transparent'
                    }`}
                  >
                    <div className={`p-2 rounded-xl ${isActive ? 'bg-[#fce4ec]' : 'bg-[#f5e6ea]/50'}`}>
                      <Icon className="w-5 h-5 text-[#8b263e]" />
                    </div>
                    <span className="text-xs font-normal">{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Groups Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredGroups.map((group) => (
              <Link 
                key={group.id} 
                to={`/group/${group.id}`} 
                className="block text-left"
              >
                <div className="bg-white rounded-3xl border border-[#f5e6ea] p-4 hover:shadow-xs transition-all relative flex flex-col justify-between group h-full">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    className="absolute top-3 left-3 p-1.5 rounded-full bg-[#fce4ec] text-[#8b263e] hover:bg-[#8b263e] hover:text-[#fdf8f6] transition-colors cursor-pointer z-10"
                  >
                    <Heart className="w-3.5 h-3.5 fill-current" />
                  </button>

                  <div className="w-full h-32 rounded-2xl bg-[#f5e6ea] overflow-hidden mb-3 relative">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&auto=format&fit=crop&q=80" 
                      alt={group.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute bottom-2 right-2 text-[10px] bg-white/90 font-normal px-2 py-0.5 rounded-full text-[#8b263e]">
                      {group.category}
                    </span>
                  </div>

                  <div className="space-y-2 flex-grow">
                    <h3 className="text-sm font-normal text-[#3a1d28] line-clamp-1">{group.name}</h3>
                    
                    <div className="flex items-center gap-1.5 text-xs text-[#3a1d28]/60">
                      <Users className="w-3.5 h-3.5 text-[#8b263e]" />
                      <span>{group.membersCount} members</span>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-[#f5e6ea]">
                      <div>
                        <span className="text-[10px] text-[#3a1d28]/50 uppercase tracking-wider block">Your share</span>
                        <span className={`text-sm font-normal ${group.yourBalance >= 0 ? 'text-[#8b263e]' : 'text-[#3a1d28]'}`}>
                          {group.yourBalance >= 0 ? `+$${group.yourBalance.toFixed(2)}` : `-$${Math.abs(group.yourBalance).toFixed(2)}`}
                        </span>
                      </div>

                      <div className="p-2 rounded-full bg-[#8b263e] text-white group-hover:bg-[#721e32] transition-colors">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Refined Overview & Activity Section */}
          <div className="space-y-6 pt-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-normal text-[#8b263e]">Overview & Activity</h2>
                <p className="text-xs text-[#3a1d28]/60 mt-0.5">Your financial status and recent group updates</p>
              </div>
              <Link
                to="/activity"
                className="inline-flex items-center gap-1.5 bg-white border border-[#f5e6ea] px-4 py-2 rounded-full text-xs text-[#8b263e] hover:bg-[#fce4ec]/50 transition-colors"
              >
                <span>View timeline</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Net Balance Overview Cards */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                
                {/* Net Balance Card */}
                <div className="bg-[#8b263e] text-white p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between min-h-[160px]">
                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-xs text-[#fce4ec] font-normal tracking-wide uppercase">Overall Net Balance</span>
                    <div className="p-2 rounded-full bg-white/10 backdrop-blur-md">
                      <Wallet className="w-4 h-4 text-[#fce4ec]" />
                    </div>
                  </div>

                  <div className="relative z-10 mt-4">
                    <div className="text-3xl font-normal tracking-tight">
                      {mockSummary.totalBalance >= 0 ? `+$${mockSummary.totalBalance.toFixed(2)}` : `-$${Math.abs(mockSummary.totalBalance).toFixed(2)}`}
                    </div>
                    <p className="text-[11px] text-[#fce4ec]/80 mt-1">
                      {mockSummary.totalBalance >= 0 ? "You are overall owed money across all groups" : "You have pending dues to clear"}
                    </p>
                  </div>

                  <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/5 pointer-events-none" />
                </div>

                {/* Sub-Metrics Row */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-4 rounded-2xl border border-[#f5e6ea]">
                    <div className="flex items-center gap-1.5 text-emerald-700 text-xs mb-1">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                      <span>You get back</span>
                    </div>
                    <p className="text-lg font-normal text-[#3a1d28]">${mockSummary.youAreOwed.toFixed(2)}</p>
                  </div>

                  <div className="bg-white p-4 rounded-2xl border border-[#f5e6ea]">
                    <div className="flex items-center gap-1.5 text-rose-700 text-xs mb-1">
                      <ArrowDownLeft className="w-3.5 h-3.5" />
                      <span>You owe</span>
                    </div>
                    <p className="text-lg font-normal text-[#3a1d28]">${mockSummary.youOwe.toFixed(2)}</p>
                  </div>
                </div>

              </div>

              {/* Right Column: Activity Stream */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-6 border border-[#f5e6ea] flex flex-col justify-between">
                <div className="flex items-center justify-between pb-4 border-b border-[#f5e6ea]">
                  <div className="flex items-center gap-2">
                    <Receipt className="w-4 h-4 text-[#8b263e]" />
                    <h3 className="text-sm font-normal text-[#3a1d28]">Recent Activity</h3>
                  </div>
                  <span className="text-[11px] text-[#3a1d28]/50">Latest updates</span>
                </div>

                {/* Vertical Stream List */}
                <div className="divide-y divide-[#f5e6ea] py-1">
                  {mockRecentExpenses.slice(0, 3).map((expense) => {
                    const isPaidByYou = expense.paidBy.toLowerCase() === 'you' || expense.paidBy.toLowerCase() === 'aayusha';
                    return (
                      <div key={expense.id} className="py-3.5 first:pt-2 last:pb-2 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div className={`w-2 h-2 rounded-full shrink-0 ${isPaidByYou ? 'bg-[#8b263e]' : 'bg-[#3a1d28]/30'}`} />

                          <div className="space-y-0.5 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-xs font-normal text-[#3a1d28] truncate">{expense.title}</span>
                              <span className="bg-[#fce4ec] text-[#8b263e] text-[10px] px-2 py-0.5 rounded-full font-normal shrink-0">
                                {expense.groupName}
                              </span>
                            </div>
                            <p className="text-[11px] text-[#3a1d28]/60 flex items-center gap-1">
                              <Clock className="w-3 h-3 text-[#3a1d28]/40 shrink-0" />
                              <span>{isPaidByYou ? 'You paid' : `Paid by ${expense.paidBy}`} • {expense.date}</span>
                            </p>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <span className="text-xs font-normal text-[#3a1d28] block">${expense.amount.toFixed(2)}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-3 border-t border-[#f5e6ea] text-center">
                  <Link 
                    to="/activity" 
                    className="text-xs text-[#8b263e] hover:text-[#721e32] transition-colors inline-flex items-center gap-1 font-normal"
                  >
                    View full expense history <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}