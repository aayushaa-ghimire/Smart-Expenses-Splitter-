import React, { useState } from 'react';
import { X, DollarSign, Users, Calendar, Tag } from 'lucide-react';

export default function AddExpenseModal({ isOpen, onClose }) {
  const [splitType, setSplitType] = useState('equal');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
      <div className="bg-[#fdf8f6] border border-[#f5e6ea] w-full max-w-lg rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#f5e6ea]">
          <div>
            <h2 className="text-xl font-normal text-[#8b263e]">Add an expense</h2>
            <p className="text-xs text-[#3a1d28]/60 mt-0.5">Log a new bill for your group</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#fce4ec] text-[#3a1d28]/70 hover:text-[#8b263e] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Static Form Fields */}
        <div className="space-y-4">
          
          {/* Description / Title */}
          <div className="space-y-1">
            <label className="text-xs font-normal text-[#3a1d28]/70 block">Expense description</label>
            <div className="relative">
              <Tag className="w-4 h-4 text-[#8b263e] absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="e.g. Dinner at Thakali"
                defaultValue="Dinner at Thakali"
                className="w-full bg-white border border-[#f5e6ea] rounded-2xl pl-10 pr-4 py-3 text-xs text-[#3a1d28] focus:outline-none focus:border-[#8b263e]"
              />
            </div>
          </div>

          {/* Amount & Date Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-normal text-[#3a1d28]/70 block">Total amount ($)</label>
              <div className="relative">
                <DollarSign className="w-4 h-4 text-[#8b263e] absolute left-3.5 top-3.5" />
                <input
                  type="number"
                  placeholder="0.00"
                  defaultValue="60.00"
                  className="w-full bg-white border border-[#f5e6ea] rounded-2xl pl-10 pr-4 py-3 text-xs text-[#3a1d28] focus:outline-none focus:border-[#8b263e]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-normal text-[#3a1d28]/70 block">Date</label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-[#8b263e] absolute left-3.5 top-3.5" />
                <input
                  type="date"
                  defaultValue="2026-05-15"
                  className="w-full bg-white border border-[#f5e6ea] rounded-2xl pl-10 pr-4 py-3 text-xs text-[#3a1d28] focus:outline-none focus:border-[#8b263e]"
                />
              </div>
            </div>
          </div>

          {/* Paid By Selection */}
          <div className="space-y-1">
            <label className="text-xs font-normal text-[#3a1d28]/70 block">Paid by</label>
            <select className="w-full bg-white border border-[#f5e6ea] rounded-2xl px-4 py-3 text-xs text-[#3a1d28] focus:outline-none focus:border-[#8b263e]">
              <option value="usr_1">You (Aayusha)</option>
              <option value="usr_2">Rohan</option>
              <option value="usr_3">Siddharth</option>
              <option value="usr_4">Priya</option>
            </select>
          </div>

          {/* Split Options Toggle */}
          <div className="space-y-2 pt-2">
            <label className="text-xs font-normal text-[#3a1d28]/70 block">Split method</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setSplitType('equal')}
                className={`py-2 px-3 rounded-xl border text-xs font-normal transition-colors cursor-pointer ${
                  splitType === 'equal'
                    ? 'bg-[#fce4ec] border-[#8b263e] text-[#8b263e]'
                    : 'bg-white border-[#f5e6ea] text-[#3a1d28]/70'
                }`}
              >
                Split equally
              </button>
              <button
                type="button"
                onClick={() => setSplitType('custom')}
                className={`py-2 px-3 rounded-xl border text-xs font-normal transition-colors cursor-pointer ${
                  splitType === 'custom'
                    ? 'bg-[#fce4ec] border-[#8b263e] text-[#8b263e]'
                    : 'bg-white border-[#f5e6ea] text-[#3a1d28]/70'
                }`}
              >
                Custom amounts
              </button>
            </div>
          </div>

          {/* Conditional UI rendering for Split Breakdown */}
          {splitType === 'equal' ? (
            <div className="p-3 bg-white rounded-2xl border border-[#f5e6ea] text-xs text-[#3a1d28]/70 flex items-center justify-between">
              <span>Split evenly (4 members)</span>
              <span className="font-normal text-[#8b263e]">$15.00 / person</span>
            </div>
          ) : (
            <div className="space-y-2 pt-1">
              <p className="text-[11px] text-[#3a1d28]/60">Enter specific amount for each member:</p>
              <div className="space-y-2 max-h-36 overflow-y-auto pr-1">
                {[
                  { name: 'You (Aayusha)', defaultVal: '20.00' },
                  { name: 'Rohan', defaultVal: '15.00' },
                  { name: 'Siddharth', defaultVal: '15.00' },
                  { name: 'Priya', defaultVal: '10.00' }
                ].map((member, idx) => (
                  <div key={idx} className="flex items-center justify-between gap-3 bg-white p-2.5 rounded-2xl border border-[#f5e6ea]">
                    <span className="text-xs font-normal text-[#3a1d28]">{member.name}</span>
                    <div className="relative w-28">
                      <span className="absolute left-3 top-2 text-xs text-[#3a1d28]/50">$</span>
                      <input
                        type="number"
                        defaultValue={member.defaultVal}
                        className="w-full bg-[#fdf8f6] border border-[#f5e6ea] rounded-xl pl-6 pr-2 py-1 text-xs text-right text-[#3a1d28] focus:outline-none focus:border-[#8b263e]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#f5e6ea]">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full border border-[#f5e6ea] text-xs font-normal text-[#3a1d28]/70 hover:bg-white transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="bg-[#8b263e] hover:bg-[#721e32] text-white px-6 py-2 rounded-full text-xs font-normal transition-colors cursor-pointer"
          >
            Save expense
          </button>
        </div>

      </div>
    </div>
  );
}