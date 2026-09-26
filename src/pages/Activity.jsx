import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Receipt, 
  Search, 
  Clock, 
  CheckCircle2, 
  ArrowUpRight, 
  ArrowDownLeft 
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import { mockRecentExpenses } from '../data/mockData';

export default function Activity() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');

  const safeRecentExpenses = Array.isArray(mockRecentExpenses) ? mockRecentExpenses : [];

  const fullActivities = [
    ...safeRecentExpenses.map(item => ({
      ...item,
      type: item.type || 'expense',
      yourShare: item.yourShare || '+$0.00'
    })),
    {
      id: 'exp-4',
      title: 'Airbnb Booking - Pokhara Trip',
      groupName: 'Pokhara Weekend Trip',
      amount: 240.00,
      paidBy: 'Aayusha',
      date: 'May 10, 2026',
      type: 'expense',
      yourShare: '+$180.00'
    },
    {
      id: 'exp-5',
      title: 'Settled payment with Rohan',
      groupName: 'Dining & Outings',
      amount: 45.00,
      paidBy: 'You',
      date: 'May 08, 2026',
      type: 'settlement',
      yourShare: '-$45.00'
    },
    {
      id: 'exp-6',
      title: 'Monthly Wifi & Electricity',
      groupName: 'Apartment 4B Rent & Bills',
      amount: 85.00,
      paidBy: 'Sujan',
      date: 'May 01, 2026',
      type: 'expense',
      yourShare: '-$28.33'
    }
  ];

  const filteredActivities = fullActivities.filter((item) => {
    const title = item.title || '';
    const groupName = item.groupName || '';
    const matchesSearch = title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          groupName.toLowerCase().includes(searchTerm.toLowerCase());
    if (filterType === 'Settlements') return matchesSearch && item.type === 'settlement';
    if (filterType === 'Expenses') return matchesSearch && item.type === 'expense';
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#fdf8f6] text-[#3a1d28] font-sans">
      <Navbar />

      {/* Header Banner */}
      <section className="bg-[#8b263e] text-white pt-10 pb-20 px-4 sm:px-8 relative">
        <div className="max-w-4xl mx-auto flex items-center justify-between z-10 relative">
          <div className="flex items-center gap-3">
            <Link 
              to="/" 
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <h1 className="text-xl sm:text-2xl font-normal">Activity History</h1>
              <p className="text-xs text-white/80 font-normal mt-0.5">Real-time log of transactions, shared expenses, and settlements</p>
            </div>
          </div>

          <div className="p-2.5 rounded-full bg-white/10 text-white">
            <Receipt className="w-5 h-5" />
          </div>
        </div>
      </section>

      {/* Content Container */}
      <section className="-mt-10 bg-[#fdf8f6] rounded-t-[2.5rem] px-4 sm:px-8 pt-8 pb-16 relative z-20">
        <div className="max-w-4xl mx-auto space-y-6">

          {/* Search & Filter Toolbar */}
          <div className="bg-white border border-[#f5e6ea] p-4 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-[#8b263e] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search activity or group..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#fdf8f6] border border-[#f5e6ea] rounded-2xl py-2 pl-10 pr-4 text-xs font-normal text-[#3a1d28] focus:outline-none focus:border-[#8b263e] transition-colors"
              />
            </div>

            {/* Filter */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              {['All', 'Expenses', 'Settlements'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-4 py-1.5 rounded-full text-xs font-normal transition-all cursor-pointer ${
                    filterType === type 
                      ? 'bg-[#8b263e] text-white shadow-xs' 
                      : 'bg-[#fdf8f6] text-[#3a1d28]/70 border border-[#f5e6ea] hover:bg-white'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Activity List Container */}
          <div className="bg-white rounded-3xl p-6 border border-[#f5e6ea] shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#f5e6ea]">
              <span className="text-xs font-normal text-[#8b263e]">All Transactions</span>
              <span className="text-[11px] text-[#3a1d28]/50">{filteredActivities.length} logs found</span>
            </div>

            <div className="divide-y divide-[#f5e6ea]">
              {filteredActivities.length > 0 ? (
                filteredActivities.map((act) => {
                  const isSettlement = act.type === 'settlement';
                  const shareStr = String(act.yourShare || '');
                  const isPositive = shareStr.startsWith('+');
                  const amountVal = typeof act.amount === 'number' ? act.amount : 0;

                  return (
                    <div key={act.id || Math.random()} className="py-4 first:pt-1 last:pb-1 flex items-center justify-between hover:bg-[#fdf8f6]/50 transition-colors px-2 rounded-2xl">
                      
                      {/* Left Side */}
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-2xl shrink-0 ${
                          isSettlement 
                            ? 'bg-emerald-50 text-emerald-700' 
                            : 'bg-[#fce4ec] text-[#8b263e]'
                        }`}>
                          {isSettlement ? (
                            <CheckCircle2 className="w-4 h-4" />
                          ) : (
                            <Receipt className="w-4 h-4" />
                          )}
                        </div>

                        <div className="space-y-0.5">
                          <h4 className="text-xs font-normal text-[#3a1d28]">{act.title}</h4>
                          <div className="flex items-center gap-2 text-[11px] text-[#3a1d28]/60">
                            <span className="text-[#8b263e] font-normal">{act.groupName}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3 text-[#3a1d28]/40" />
                              {act.date}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Right Side*/}
                      <div className="text-right space-y-0.5">
                        <div className="text-xs font-normal text-[#3a1d28]">
                          ${amountVal.toFixed(2)}
                        </div>
                        <div className={`text-[11px] font-normal flex items-center justify-end gap-0.5 ${
                          isPositive ? 'text-emerald-700' : 'text-[#3a1d28]/60'
                        }`}>
                          {isPositive ? (
                            <ArrowUpRight className="w-3 h-3" />
                          ) : (
                            <ArrowDownLeft className="w-3 h-3 text-rose-700" />
                          )}
                          <span>{shareStr}</span>
                        </div>
                      </div>

                    </div>
                  );
                })
              ) : (
                <div className="py-12 text-center text-xs text-[#3a1d28]/50 font-normal">
                  No matching activities found.
                </div>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}