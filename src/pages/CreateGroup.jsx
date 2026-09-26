import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Users, Plus, X, Plane, Home, Utensils, Tag, Sparkles } from 'lucide-react';
import Navbar from '../components/layout/Navbar';

export default function CreateGroup() {
  const navigate = useNavigate();
  const [groupName, setGroupName] = useState('');
  const [category, setCategory] = useState('Trip');
  const [description, setDescription] = useState('');
  const [memberEmail, setMemberEmail] = useState('');
  const [members, setMembers] = useState(['you@example.com']);

  const categories = [
    { id: 'Trip', label: 'Trip', icon: Plane },
    { id: 'Home', label: 'Home / Rent', icon: Home },
    { id: 'Food', label: 'Dining Out', icon: Utensils },
    { id: 'Other', label: 'Other', icon: Tag },
  ];

  const handleAddMember = (e) => {
    e.preventDefault();
    if (memberEmail && !members.includes(memberEmail)) {
      setMembers([...members, memberEmail]);
      setMemberEmail('');
    }
  };

  const handleRemoveMember = (email) => {
    if (email === 'you@example.com') return;
    setMembers(members.filter((m) => m !== email));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!groupName) return;
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#fdf8f6] text-[#3a1d28] font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-[#8b263e] text-white pt-8 pb-16 px-4 sm:px-8 relative">
        <div className="max-w-4xl mx-auto space-y-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs text-[#fce4ec] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
          <h1 className="text-3xl sm:text-4xl font-normal tracking-tight">Create a new group</h1>
          <p className="text-white/80 text-sm font-normal max-w-xl">
            Set up a group to share costs for trips, house bills, or dinners with friends.
          </p>
        </div>
      </section>

      {/* Main Form Overlay */}
      <section className="-mt-8 bg-[#fdf8f6] rounded-t-[2.5rem] px-4 sm:px-8 pt-8 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-[#f5e6ea] p-6 sm:p-8 space-y-8">
            
            {/* Group Details */}
            <div className="space-y-4">
              <h2 className="text-lg font-normal text-[#8b263e]">Group info</h2>

              <div className="space-y-1">
                <label className="text-xs font-normal text-[#3a1d28]/70 block">Group name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Summer Trip to Pokhara"
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  className="w-full bg-[#fdf8f6] border border-[#f5e6ea] rounded-2xl px-4 py-3 text-xs text-[#3a1d28] focus:outline-none focus:border-[#8b263e]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-normal text-[#3a1d28]/70 block">Category</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {categories.map((cat) => {
                    const Icon = cat.icon;
                    const isActive = category === cat.id;
                    return (
                      <button
                        type="button"
                        key={cat.id}
                        onClick={() => setCategory(cat.id)}
                        className={`flex items-center justify-center gap-2 px-3 py-3 rounded-2xl border text-xs font-normal transition-all cursor-pointer ${
                          isActive
                            ? 'bg-[#fce4ec] border-[#8b263e] text-[#8b263e]'
                            : 'bg-[#fdf8f6] border-[#f5e6ea] text-[#3a1d28]/70 hover:bg-white'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{cat.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-normal text-[#3a1d28]/70 block">Description (optional)</label>
                <textarea
                  rows="2"
                  placeholder="Add notes or trip details..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-[#fdf8f6] border border-[#f5e6ea] rounded-2xl px-4 py-3 text-xs text-[#3a1d28] focus:outline-none focus:border-[#8b263e] resize-none"
                />
              </div>
            </div>

            {/* Members Section */}
            <div className="space-y-4 pt-4 border-t border-[#f5e6ea]">
              <div>
                <h2 className="text-lg font-normal text-[#8b263e]">Group members</h2>
                <p className="text-xs text-[#3a1d28]/60 mt-0.5">Invite friends by entering their emails</p>
              </div>

              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="friend@example.com"
                  value={memberEmail}
                  onChange={(e) => setMemberEmail(e.target.value)}
                  className="flex-grow bg-[#fdf8f6] border border-[#f5e6ea] rounded-2xl px-4 py-2.5 text-xs text-[#3a1d28] focus:outline-none focus:border-[#8b263e]"
                />
                <button
                  type="button"
                  onClick={handleAddMember}
                  className="bg-[#8b263e] hover:bg-[#721e32] text-white px-5 py-2.5 rounded-2xl text-xs font-normal transition-colors cursor-pointer flex items-center gap-1.5 shrink-0"
                >
                  <Plus className="w-4 h-4" /> Add
                </button>
              </div>

              {/* Member Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {members.map((email) => (
                  <span
                    key={email}
                    className="inline-flex items-center gap-1.5 bg-[#fce4ec] text-[#8b263e] px-3 py-1.5 rounded-full text-xs font-normal"
                  >
                    <Users className="w-3.5 h-3.5" />
                    {email}
                    {email !== 'you@example.com' && (
                      <button
                        type="button"
                        onClick={() => handleRemoveMember(email)}
                        className="hover:text-[#721e32] cursor-pointer ml-1"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-6 border-t border-[#f5e6ea]">
              <Link to="/">
                <button
                  type="button"
                  className="px-6 py-2.5 rounded-full border border-[#f5e6ea] text-xs font-normal text-[#3a1d28]/70 hover:bg-[#fdf8f6] transition-colors cursor-pointer"
                >
                  Cancel
                </button>
              </Link>
              <button
                type="submit"
                className="bg-[#8b263e] hover:bg-[#721e32] text-white px-8 py-2.5 rounded-full text-xs font-normal transition-colors cursor-pointer flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" /> Create group
              </button>
            </div>

          </form>
        </div>
      </section>
    </div>
  );
}