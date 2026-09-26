import React from 'react';
import { X, ArrowRight, CheckCircle, CreditCard } from 'lucide-react';

export default function SettleUpModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
      <div className="bg-[#fdf8f6] border border-[#f5e6ea] w-full max-w-md rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative animate-in fade-in zoom-in duration-200">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#f5e6ea]">
          <div>
            <h2 className="text-xl font-normal text-[#8b263e]">Record payment</h2>
            <p className="text-xs text-[#3a1d28]/60 mt-0.5">Settle balance between group members</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#fce4ec] text-[#3a1d28]/70 hover:text-[#8b263e] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Visual Payment Card */}
        <div className="bg-white rounded-2xl border border-[#f5e6ea] p-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#fce4ec] text-[#8b263e] flex items-center justify-center text-xs font-normal">
              You
            </div>
            <ArrowRight className="w-4 h-4 text-[#8b263e]" />
            <div className="w-9 h-9 rounded-full bg-[#f5e6ea] text-[#3a1d28] flex items-center justify-center text-xs font-normal">
              Rohan
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs text-[#3a1d28]/60 block uppercase text-[10px]">Paying</span>
            <span className="text-base font-normal text-[#8b263e]">$15.50</span>
          </div>
        </div>

        {/* Form Inputs */}
        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-normal text-[#3a1d28]/70 block">Amount ($)</label>
            <input
              type="number"
              defaultValue="15.50"
              className="w-full bg-white border border-[#f5e6ea] rounded-2xl px-4 py-3 text-xs text-[#3a1d28] focus:outline-none focus:border-[#8b263e]"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-normal text-[#3a1d28]/70 block">Payment method</label>
            <div className="relative">
              <CreditCard className="w-4 h-4 text-[#8b263e] absolute left-3.5 top-3.5" />
              <select className="w-full bg-white border border-[#f5e6ea] rounded-2xl pl-10 pr-4 py-3 text-xs text-[#3a1d28] focus:outline-none focus:border-[#8b263e]">
                <option value="esewa">eSewa / Digital Wallet</option>
                <option value="cash">Cash Payment</option>
                <option value="bank">Bank Transfer</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-normal text-[#3a1d28]/70 block">Note (optional)</label>
            <input
              type="text"
              placeholder="e.g. Cleared dinner split"
              defaultValue="Cleared dinner split"
              className="w-full bg-white border border-[#f5e6ea] rounded-2xl px-4 py-3 text-xs text-[#3a1d28] focus:outline-none focus:border-[#8b263e]"
            />
          </div>
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
            className="bg-[#8b263e] hover:bg-[#721e32] text-white px-6 py-2 rounded-full text-xs font-normal transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <CheckCircle className="w-4 h-4" /> Confirm payment
          </button>
        </div>

      </div>
    </div>
  );
}