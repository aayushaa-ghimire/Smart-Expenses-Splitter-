// import React, { useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { 
//   ArrowLeft, 
//   Plus, 
//   Users, 
//   Wallet, 
//   ArrowUpRight, 
//   ArrowDownLeft, 
//   CheckCircle2, 
//   Clock 
// } from 'lucide-react';
// import Navbar from '../components/layout/Navbar';
// import { mockGroups, mockRecentExpenses } from '../data/mockData';
// import AddExpenseModal from '../components/modals/AddExpenseModal';
// import SettleUpModal from '../components/modals/SettleUpModal';

// export default function GroupDetails() {
//   const { id } = useParams();
//   const group = mockGroups.find((g) => g.id.toString() === id) || mockGroups[0];
//   const [activeTab, setActiveTab] = useState('expenses');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isSettleModalOpen, setIsSettleModalOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-[#fdf8f6] text-[#3a1d28] font-sans">
//       <Navbar />

//       {/* Hero Header */}
//       <section className="bg-[#8b263e] text-white pt-8 pb-16 px-4 sm:px-8 relative">
//         <div className="max-w-6xl mx-auto space-y-4">
//           <Link
//             to="/"
//             className="inline-flex items-center gap-2 text-xs text-[#fce4ec] hover:text-white transition-colors"
//           >
//             <ArrowLeft className="w-4 h-4" /> Back to Dashboard
//           </Link>

//           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//             <div>
//               <span className="inline-block bg-[#fce4ec] text-[#8b263e] text-[11px] font-normal px-3 py-1 rounded-full mb-2">
//                 {group.category}
//               </span>
//               <h1 className="text-3xl sm:text-4xl font-normal tracking-tight">{group.name}</h1>
//               <p className="text-white/80 text-xs font-normal mt-1">{group.membersCount} active members in this group</p>
//             </div>

//             <button onClick={() => setIsModalOpen(true)} className="bg-white text-[#8b263e] hover:bg-[#fce4ec] px-5 py-2.5 rounded-full text-xs font-normal transition-colors cursor-pointer flex items-center gap-1.5 shrink-0 self-start sm:self-center">
//               <Plus className="w-4 h-4" /> Add expense
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Main Content Overlay */}
//       <section className="-mt-8 bg-[#fdf8f6] rounded-t-[2.5rem] px-4 sm:px-8 pt-8 pb-16 relative z-10">
//         <div className="max-w-6xl mx-auto space-y-8">

//           {/* Balance Cards Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//             <div className="bg-white rounded-3xl border border-[#f5e6ea] p-5 space-y-1">
//               <div className="flex items-center justify-between text-xs text-[#3a1d28]/60">
//                 <span>Total group spend</span>
//                 <Wallet className="w-4 h-4 text-[#8b263e]" />
//               </div>
//               <p className="text-2xl font-normal text-[#3a1d28]">$420.00</p>
//             </div>

//             <div className="bg-white rounded-3xl border border-[#f5e6ea] p-5 space-y-1">
//               <div className="flex items-center justify-between text-xs text-[#3a1d28]/60">
//                 <span>Your net balance</span>
//                 <ArrowUpRight className="w-4 h-4 text-[#8b263e]" />
//               </div>
//               <p className={`text-2xl font-normal ${group.yourBalance >= 0 ? 'text-[#8b263e]' : 'text-[#3a1d28]'}`}>
//                 {group.yourBalance >= 0 ? `+$${group.yourBalance.toFixed(2)}` : `-$${Math.abs(group.yourBalance).toFixed(2)}`}
//               </p>
//             </div>

//             <div className="bg-[#fce4ec]/50 rounded-3xl border border-[#f5e6ea] p-5 flex items-center justify-between">
//               <div>
//                 <p className="text-xs font-normal text-[#8b263e]">Settlement status</p>
//                 <p className="text-xs text-[#3a1d28]/70 mt-1">2 balances pending</p>
//               </div>
//               <button onClick={() => setIsSettleModalOpen(true)} className="bg-[#8b263e] hover:bg-[#721e32] text-white text-xs font-normal px-4 py-2 rounded-full transition-colors cursor-pointer">
//                 Settle up
//               </button>
//             </div>
//           </div>

//           {/* Tabs */}
//           <div className="flex items-center gap-2 border-b border-[#f5e6ea] pb-3">
//             <button
//               onClick={() => setActiveTab('expenses')}
//               className={`px-4 py-2 rounded-full text-xs font-normal transition-colors cursor-pointer ${
//                 activeTab === 'expenses'
//                   ? 'bg-[#8b263e] text-white'
//                   : 'text-[#3a1d28]/70 hover:bg-white'
//               }`}
//             >
//               Expenses
//             </button>
//             <button
//               onClick={() => setActiveTab('balances')}
//               className={`px-4 py-2 rounded-full text-xs font-normal transition-colors cursor-pointer ${
//                 activeTab === 'balances'
//                   ? 'bg-[#8b263e] text-white'
//                   : 'text-[#3a1d28]/70 hover:bg-white'
//               }`}
//             >
//               Balances & Settle
//             </button>
//           </div>

//           {/* Expense History List */}
//           {activeTab === 'expenses' && (
//             <div className="bg-white rounded-3xl border border-[#f5e6ea] p-6 space-y-4">
//               <h2 className="text-base font-normal text-[#3a1d28]">Expense log</h2>

//               <div className="space-y-3">
//                 {mockRecentExpenses.map((exp) => (
//                   <div
//                     key={exp.id}
//                     className="flex items-center justify-between p-4 rounded-2xl bg-[#fdf8f6] border border-[#f5e6ea]"
//                   >
//                     <div className="space-y-1">
//                       <p className="text-xs font-normal text-[#3a1d28]">{exp.title}</p>
//                       <p className="text-[10px] text-[#3a1d28]/60">
//                         Paid by {exp.paidBy} • {exp.date}
//                       </p>
//                     </div>

//                     <div className="text-right">
//                       <p className="text-xs font-normal text-[#8b263e]">${exp.amount.toFixed(2)}</p>
//                       <p className="text-[10px] text-[#3a1d28]/60">Your share: ${(exp.amount / group.membersCount).toFixed(2)}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Balances Tab */}
//           {activeTab === 'balances' && (
//             <div className="bg-white rounded-3xl border border-[#f5e6ea] p-6 space-y-4">
//               <h2 className="text-base font-normal text-[#3a1d28]">Individual settlements</h2>

//               <div className="space-y-3">
//                 <div className="flex items-center justify-between p-4 rounded-2xl bg-[#fdf8f6] border border-[#f5e6ea]">
//                   <div className="flex items-center gap-3">
//                     <div className="w-8 h-8 rounded-full bg-[#fce4ec] text-[#8b263e] flex items-center justify-center text-xs font-normal">
//                       A
//                     </div>
//                     <div>
//                       <p className="text-xs font-normal text-[#3a1d28]">Aayusha owes you</p>
//                       <p className="text-[10px] text-[#3a1d28]/60">For Pokhara AirBnB booking</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <span className="text-xs font-normal text-[#8b263e]">+$45.00</span>
//                     <button className="bg-[#8b263e] hover:bg-[#721e32] text-white text-[11px] font-normal px-3 py-1 rounded-full cursor-pointer">
//                       Remind
//                     </button>
//                   </div>
//                 </div>

//                 <div className="flex items-center justify-between p-4 rounded-2xl bg-[#fdf8f6] border border-[#f5e6ea]">
//                   <div className="flex items-center gap-3">
//                     <div className="w-8 h-8 rounded-full bg-[#fce4ec] text-[#8b263e] flex items-center justify-center text-xs font-normal">
//                       S
//                     </div>
//                     <div>
//                       <p className="text-xs font-normal text-[#3a1d28]">You owe Rohan</p>
//                       <p className="text-[10px] text-[#3a1d28]/60">For dinner split</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <span className="text-xs font-normal text-[#3a1d28]">-$15.50</span>
//                     <button onClick={() => setIsSettleModalOpen(true)} className="bg-[#8b263e] hover:bg-[#721e32] text-white text-[11px] font-normal px-3 py-1 rounded-full cursor-pointer">
//                       Pay now
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//         </div>
//       </section>

//       <AddExpenseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//     </div>
//   );
// }


import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Plus, 
  Users, 
  Wallet, 
  ArrowUpRight, 
  ArrowDownLeft, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import { mockGroups, mockRecentExpenses } from '../data/mockData';
import AddExpenseModal from '../components/modals/AddExpenseModal';
import SettleUpModal from '../components/modals/SettleUpModal';

export default function GroupDetails() {
  const { id } = useParams();
  const group = mockGroups.find((g) => g.id.toString() === id) || mockGroups[0];
  const [activeTab, setActiveTab] = useState('expenses');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSettleModalOpen, setIsSettleModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fdf8f6] text-[#3a1d28] font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-[#8b263e] text-white pt-8 pb-16 px-4 sm:px-8 relative">
        <div className="max-w-6xl mx-auto space-y-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs text-[#fce4ec] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="inline-block bg-[#fce4ec] text-[#8b263e] text-[11px] font-normal px-3 py-1 rounded-full mb-2">
                {group.category}
              </span>
              <h1 className="text-3xl sm:text-4xl font-normal tracking-tight">{group.name}</h1>
              <p className="text-white/80 text-xs font-normal mt-1">{group.membersCount} active members in this group</p>
            </div>

            <button onClick={() => setIsModalOpen(true)} className="bg-white text-[#8b263e] hover:bg-[#fce4ec] px-5 py-2.5 rounded-full text-xs font-normal transition-colors cursor-pointer flex items-center gap-1.5 shrink-0 self-start sm:self-center">
              <Plus className="w-4 h-4" /> Add expense
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Overlay */}
      <section className="-mt-8 bg-[#fdf8f6] rounded-t-[2.5rem] px-4 sm:px-8 pt-8 pb-16 relative z-10">
        <div className="max-w-6xl mx-auto space-y-8">

          {/* Balance Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-3xl border border-[#f5e6ea] p-5 space-y-1">
              <div className="flex items-center justify-between text-xs text-[#3a1d28]/60">
                <span>Total group spend</span>
                <Wallet className="w-4 h-4 text-[#8b263e]" />
              </div>
              <p className="text-2xl font-normal text-[#3a1d28]">$420.00</p>
            </div>

            <div className="bg-white rounded-3xl border border-[#f5e6ea] p-5 space-y-1">
              <div className="flex items-center justify-between text-xs text-[#3a1d28]/60">
                <span>Your net balance</span>
                <ArrowUpRight className="w-4 h-4 text-[#8b263e]" />
              </div>
              <p className={`text-2xl font-normal ${group.yourBalance >= 0 ? 'text-[#8b263e]' : 'text-[#3a1d28]'}`}>
                {group.yourBalance >= 0 ? `+$${group.yourBalance.toFixed(2)}` : `-$${Math.abs(group.yourBalance).toFixed(2)}`}
              </p>
            </div>

            <div className="bg-[#fce4ec]/50 rounded-3xl border border-[#f5e6ea] p-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-normal text-[#8b263e]">Settlement status</p>
                <p className="text-xs text-[#3a1d28]/70 mt-1">2 balances pending</p>
              </div>
              <button onClick={() => setIsSettleModalOpen(true)} className="bg-[#8b263e] hover:bg-[#721e32] text-white text-xs font-normal px-4 py-2 rounded-full transition-colors cursor-pointer">
                Settle up
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-2 border-b border-[#f5e6ea] pb-3">
            <button
              onClick={() => setActiveTab('expenses')}
              className={`px-4 py-2 rounded-full text-xs font-normal transition-colors cursor-pointer ${
                activeTab === 'expenses'
                  ? 'bg-[#8b263e] text-white'
                  : 'text-[#3a1d28]/70 hover:bg-white'
              }`}
            >
              Expenses
            </button>
            <button
              onClick={() => setActiveTab('balances')}
              className={`px-4 py-2 rounded-full text-xs font-normal transition-colors cursor-pointer ${
                activeTab === 'balances'
                  ? 'bg-[#8b263e] text-white'
                  : 'text-[#3a1d28]/70 hover:bg-white'
              }`}
            >
              Balances & Settle
            </button>
          </div>

          {/* Expense History List */}
          {activeTab === 'expenses' && (
            <div className="bg-white rounded-3xl border border-[#f5e6ea] p-6 space-y-4">
              <h2 className="text-base font-normal text-[#3a1d28]">Expense log</h2>

              <div className="space-y-3">
                {mockRecentExpenses.map((exp) => (
                  <div
                    key={exp.id}
                    className="flex items-center justify-between p-4 rounded-2xl bg-[#fdf8f6] border border-[#f5e6ea]"
                  >
                    <div className="space-y-1">
                      <p className="text-xs font-normal text-[#3a1d28]">{exp.title}</p>
                      <p className="text-[10px] text-[#3a1d28]/60">
                        Paid by {exp.paidBy} • {exp.date}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-xs font-normal text-[#8b263e]">${exp.amount.toFixed(2)}</p>
                      <p className="text-[10px] text-[#3a1d28]/60">Your share: ${(exp.amount / group.membersCount).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Balances Tab */}
          {activeTab === 'balances' && (
            <div className="bg-white rounded-3xl border border-[#f5e6ea] p-6 space-y-4">
              <h2 className="text-base font-normal text-[#3a1d28]">Individual settlements</h2>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 rounded-2xl bg-[#fdf8f6] border border-[#f5e6ea]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#fce4ec] text-[#8b263e] flex items-center justify-center text-xs font-normal">
                      A
                    </div>
                    <div>
                      <p className="text-xs font-normal text-[#3a1d28]">Aayusha owes you</p>
                      <p className="text-[10px] text-[#3a1d28]/60">For Pokhara AirBnB booking</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-normal text-[#8b263e]">+$45.00</span>
                    <button className="bg-[#8b263e] hover:bg-[#721e32] text-white text-[11px] font-normal px-3 py-1 rounded-full cursor-pointer">
                      Remind
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 rounded-2xl bg-[#fdf8f6] border border-[#f5e6ea]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#fce4ec] text-[#8b263e] flex items-center justify-center text-xs font-normal">
                      S
                    </div>
                    <div>
                      <p className="text-xs font-normal text-[#3a1d28]">You owe Rohan</p>
                      <p className="text-[10px] text-[#3a1d28]/60">For dinner split</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-normal text-[#3a1d28]">-$15.50</span>
                    <button onClick={() => setIsSettleModalOpen(true)} className="bg-[#8b263e] hover:bg-[#721e32] text-white text-[11px] font-normal px-3 py-1 rounded-full cursor-pointer">
                      Pay now
                    </button>
                  </div>
                </div>
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