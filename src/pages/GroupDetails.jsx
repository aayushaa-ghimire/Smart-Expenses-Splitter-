import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Plus, 
  Users, 
  Wallet, 
  ArrowUpRight, 
  Camera, 
  Clock, 
  ShieldCheck, 
  UserPlus, 
  ArrowRight 
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import { mockGroups, mockRecentExpenses } from '../data/mockData';
import AddExpenseModal from '../components/modals/AddExpenseModal';
import SettleUpModal from '../components/modals/SettleUpModal';

export default function GroupDetails() {
  const { id } = useParams();
  const initialGroup = mockGroups.find((g) => g.id.toString() === id) || mockGroups[0];

  const [group, setGroup] = useState(initialGroup);
  const [coverImage, setCoverImage] = useState(
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80"
  );
  const [activeTab, setActiveTab] = useState('expenses');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSettleModalOpen, setIsSettleModalOpen] = useState(false);

  const [members] = useState([
    { id: 1, name: 'Aayusha Ghimire', role: 'Group Admin', balance: +45.00, avatar: 'A' },
    { id: 2, name: 'Rohan Sharma', role: 'Member', balance: -15.50, avatar: 'R' },
    { id: 3, name: 'Priya Patel', role: 'Member', balance: -29.50, avatar: 'P' },
    { id: 4, name: 'Siddharth Roy', role: 'Member', balance: 0.00, avatar: 'S' },
  ]);

  const allDebts = [
    { id: 1, debtor: 'Rohan Sharma', creditor: 'Aayusha Ghimire', amount: 15.50, description: 'Dinner split' },
    { id: 2, debtor: 'Priya Patel', creditor: 'Aayusha Ghimire', amount: 29.50, description: 'Pokhara AirBnB booking' },
    { id: 3, debtor: 'Siddharth Roy', creditor: 'Rohan Sharma', amount: 12.00, description: 'Taxi fare' },
  ];

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-[#fdf8f6] text-[#3a1d28] font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="relative bg-[#8b263e] text-white pt-8 pb-20 px-4 sm:px-8 overflow-hidden">
        {/* Cover Photo Background with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={coverImage} 
            alt="Group cover" 
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#8b263e] via-[#8b263e]/80 to-transparent" />
        </div>

        <div className="max-w-6xl mx-auto space-y-6 relative z-10">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs text-[#fce4ec] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Dashboard
            </Link>

            <label className="cursor-pointer inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 px-3.5 py-1.5 rounded-full text-xs text-white transition-colors">
              <Camera className="w-3.5 h-3.5 text-[#fce4ec]" />
              <span>Change Cover</span>
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleCoverChange} 
                className="hidden" 
              />
            </label>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-white/20 shadow-sm shrink-0 bg-[#721e32]">
                <img 
                  src={coverImage} 
                  alt={group.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-1">
                <span className="inline-block bg-[#fce4ec] text-[#8b263e] text-[11px] font-normal px-3 py-0.5 rounded-full mb-1">
                  {group.category}
                </span>
                <h1 className="text-2xl sm:text-4xl font-normal tracking-tight">{group.name}</h1>
                <p className="text-white/80 text-xs font-normal flex items-center gap-2 pt-1">
                  <Users className="w-3.5 h-3.5 text-[#fce4ec]" />
                  <span>{members.length} active members</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 self-start sm:self-end">
              <button 
                onClick={() => setIsModalOpen(true)} 
                className="bg-white text-[#8b263e] hover:bg-[#fce4ec] px-5 py-2 rounded-full text-xs font-normal transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
              >
                <Plus className="w-4 h-4" /> Add expense
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="-mt-8 bg-[#fdf8f6] rounded-t-[2.5rem] px-4 sm:px-8 pt-8 pb-16 relative z-10">
        <div className="max-w-6xl mx-auto space-y-8">

          {/* Balance Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl border border-[#f5e6ea] p-5 space-y-1">
              <div className="flex items-center justify-between text-xs text-[#3a1d28]/60">
                <span>Total group spend</span>
                <Wallet className="w-4 h-4 text-[#8b263e]" />
              </div>
              <p className="text-2xl font-normal text-[#3a1d28]">$420.00</p>
            </div>

            <div className="bg-white rounded-2xl border border-[#f5e6ea] p-5 space-y-1">
              <div className="flex items-center justify-between text-xs text-[#3a1d28]/60">
                <span>Your net balance</span>
                <ArrowUpRight className="w-4 h-4 text-[#8b263e]" />
              </div>
              <p className={`text-2xl font-normal ${group.yourBalance >= 0 ? 'text-[#8b263e]' : 'text-[#3a1d28]'}`}>
                {group.yourBalance >= 0 ? `+$${group.yourBalance.toFixed(2)}` : `-$${Math.abs(group.yourBalance).toFixed(2)}`}
              </p>
            </div>

            <div className="bg-[#fce4ec]/40 rounded-2xl border border-[#f5e6ea] p-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-normal text-[#8b263e]">Settlement status</p>
                <p className="text-xs text-[#3a1d28]/70 mt-1">2 balances pending</p>
              </div>
              <button 
                onClick={() => setIsSettleModalOpen(true)} 
                className="bg-[#8b263e] hover:bg-[#721e32] text-white text-xs font-normal px-4 py-2 rounded-full transition-colors cursor-pointer"
              >
                Settle up
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-[#f5e6ea] pb-3">
            <button
              onClick={() => setActiveTab('expenses')}
              className={`px-4 py-2 rounded-full text-xs font-normal transition-colors cursor-pointer ${
                activeTab === 'expenses'
                  ? 'bg-[#8b263e] text-white'
                  : 'text-[#3a1d28]/70 hover:bg-white'
              }`}
            >
              Expenses Log
            </button>
            <button
              onClick={() => setActiveTab('balances')}
              className={`px-4 py-2 rounded-full text-xs font-normal transition-colors cursor-pointer ${
                activeTab === 'balances'
                  ? 'bg-[#8b263e] text-white'
                  : 'text-[#3a1d28]/70 hover:bg-white'
              }`}
            >
              Balances & Debts
            </button>
            <button
              onClick={() => setActiveTab('members')}
              className={`px-4 py-2 rounded-full text-xs font-normal transition-colors cursor-pointer ${
                activeTab === 'members'
                  ? 'bg-[#8b263e] text-white'
                  : 'text-[#3a1d28]/70 hover:bg-white'
              }`}
            >
              Members ({members.length})
            </button>
          </div>

          {/* Expenses Log */}
          {activeTab === 'expenses' && (
            <div className="bg-white rounded-2xl border border-[#f5e6ea] p-6 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#f5e6ea]">
                <h2 className="text-sm font-normal text-[#3a1d28]">Recent Group Expenses</h2>
                <span className="text-xs text-[#3a1d28]/50">Total 3 items</span>
              </div>

              <div className="space-y-3">
                {mockRecentExpenses.map((exp) => (
                  <div
                    key={exp.id}
                    className="flex items-center justify-between p-4 rounded-xl bg-[#fdf8f6] border border-[#f5e6ea]"
                  >
                    <div className="space-y-1">
                      <p className="text-xs font-normal text-[#3a1d28]">{exp.title}</p>
                      <p className="text-[10px] text-[#3a1d28]/60 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#3a1d28]/40" />
                        <span>Paid by {exp.paidBy} • {exp.date}</span>
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-xs font-normal text-[#8b263e]">${exp.amount.toFixed(2)}</p>
                      <p className="text-[10px] text-[#3a1d28]/60">Your share: ${(exp.amount / members.length).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Detailed Balances */}
          {activeTab === 'balances' && (
            <div className="bg-white rounded-2xl border border-[#f5e6ea] p-6 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#f5e6ea]">
                <div>
                  <h2 className="text-sm font-normal text-[#3a1d28]">Detailed Debt Breakdown</h2>
                  <p className="text-xs text-[#3a1d28]/60 mt-0.5">Overview of who owes whom in this group</p>
                </div>
                <button 
                  onClick={() => setIsSettleModalOpen(true)}
                  className="bg-[#8b263e] text-white text-xs font-normal px-4 py-1.5 rounded-full hover:bg-[#721e32] transition-colors cursor-pointer"
                >
                  Settle up
                </button>
              </div>

              <div className="space-y-3 pt-2">
                {allDebts.map((debt) => (
                  <div key={debt.id} className="flex items-center justify-between p-4 rounded-xl bg-[#fdf8f6] border border-[#f5e6ea]">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#fce4ec] text-[#8b263e] flex items-center justify-center text-xs font-normal shrink-0">
                        {debt.debtor.charAt(0)}
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-xs font-normal text-[#3a1d28] flex items-center gap-1.5">
                          <span>{debt.debtor}</span>
                          <ArrowRight className="w-3 h-3 text-[#8b263e]" />
                          <span>{debt.creditor}</span>
                        </p>
                        <p className="text-[10px] text-[#3a1d28]/60">{debt.description}</p>
                      </div>
                    </div>

                    <div className="text-right flex items-center gap-3">
                      <span className="text-xs font-normal text-[#8b263e]">${debt.amount.toFixed(2)}</span>
                      {debt.creditor === 'Aayusha Ghimire' && (
                        <button className="bg-[#fce4ec] text-[#8b263e] hover:bg-[#8b263e] hover:text-white transition-colors text-[10px] px-3 py-1 rounded-full cursor-pointer">
                          Remind
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Members Tab */}
          {activeTab === 'members' && (
            <div className="bg-white rounded-2xl border border-[#f5e6ea] p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#f5e6ea]">
                <div>
                  <h2 className="text-sm font-normal text-[#3a1d28]">Group Members</h2>
                  <p className="text-xs text-[#3a1d28]/60 mt-0.5">People involved in this group expense pool</p>
                </div>
                <button className="inline-flex items-center gap-1.5 bg-[#fce4ec] text-[#8b263e] hover:bg-[#8b263e] hover:text-white transition-colors px-3.5 py-1.5 rounded-full text-xs font-normal cursor-pointer">
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>Add member</span>
                </button>
              </div>

              <div className="divide-y divide-[#f5e6ea]">
                {members.map((member) => (
                  <div key={member.id} className="py-3.5 first:pt-1 last:pb-1 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#fce4ec] text-[#8b263e] flex items-center justify-center text-xs font-normal shrink-0">
                        {member.avatar}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-normal text-[#3a1d28]">{member.name}</span>
                          {member.role === 'Group Admin' && (
                            <span className="inline-flex items-center gap-1 text-[9px] bg-[#8b263e] text-white px-2 py-0.2 rounded-full font-normal">
                              <ShieldCheck className="w-2.5 h-2.5" />
                              Admin
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] text-[#3a1d28]/60 mt-0.5">{member.role}</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className={`text-xs font-normal block ${
                        member.balance > 0 
                          ? 'text-[#8b263e]' 
                          : member.balance < 0 
                          ? 'text-rose-700' 
                          : 'text-[#3a1d28]/60'
                      }`}>
                        {member.balance > 0 
                          ? `Gets back +$${member.balance.toFixed(2)}` 
                          : member.balance < 0 
                          ? `Owes -$${Math.abs(member.balance).toFixed(2)}` 
                          : 'Settled up'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      <AddExpenseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <SettleUpModal isOpen={isSettleModalOpen} onClose={() => setIsSettleModalOpen(false)} />
    </div>
  );
}
