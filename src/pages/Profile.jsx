import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Camera, 
  User, 
  Mail, 
  Phone, 
  Lock, 
  Save, 
  ShieldCheck, 
  Edit2, 
  X,
  DollarSign,
  Upload,
  RotateCcw
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import profileImg from '../assets/profile.png';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const fileInputRef = useRef(null);

  const [profileData, setProfileData] = useState({
    fullName: 'Aayusha Ghimire',
    email: 'aayusha@example.com',
    phone: '+977 9800000000',
    currency: 'USD ($)',
    avatarUrl: profileImg
  });

  const [tempData, setTempData] = useState({ ...profileData });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newImageUrl = URL.createObjectURL(file);
      setTempData((prev) => ({
        ...prev,
        avatarUrl: newImageUrl
      }));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    setProfileData({ ...tempData });
    setIsEditing(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleCancel = () => {
    setTempData({ ...profileData });
    setIsEditing(false);
  };

  const resetAvatar = () => {
    setTempData((prev) => ({
      ...prev,
      avatarUrl: profileImg
    }));
  };

  return (
    <div className="min-h-screen bg-[#fdf8f6] text-[#3a1d28] font-sans antialiased">
      <Navbar />

      {/* Hero Header Bar */}
      <section className="bg-[#8b263e] text-white pt-10 pb-20 px-4 sm:px-8 relative overflow-hidden">
        <div className="max-w-3xl mx-auto flex items-center justify-between relative z-10">
          <div className="flex items-center gap-3">
            <Link 
              to="/" 
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white border border-white/10"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <h1 className="text-xl sm:text-2xl font-normal tracking-tight">Profile & Preferences</h1>
              <p className="text-xs text-white/70 font-normal">Manage your identity and account details</p>
            </div>
          </div>

          {!isEditing ? (
            <button 
              onClick={() => setIsEditing(true)}
              className="bg-[#fce4ec] text-[#8b263e] hover:bg-white px-4 py-2 rounded-full text-xs font-normal transition-all flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
            >
              <Edit2 className="w-3.5 h-3.5" />
              <span>Edit profile</span>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button 
                onClick={handleCancel}
                className="bg-white/10 hover:bg-white/20 text-white px-3.5 py-2 rounded-full text-xs font-normal transition-all flex items-center gap-1 cursor-pointer border border-white/10"
              >
                <X className="w-3.5 h-3.5" />
                <span>Cancel</span>
              </button>
              <button 
                onClick={handleSave}
                className="bg-[#fce4ec] text-[#8b263e] hover:bg-white px-4 py-2 rounded-full text-xs font-normal transition-all flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Main Content Area */}
      <section className="-mt-12 bg-[#fdf8f6] rounded-t-[2.5rem] px-4 sm:px-8 pt-8 pb-20 relative z-20">
        <div className="max-w-3xl mx-auto space-y-6">

          {savedSuccess && (
            <div className="bg-[#f0fdf4] border border-emerald-200 text-emerald-900 px-4 py-3 rounded-2xl text-xs font-normal flex items-center gap-2.5 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Profile details updated successfully.</span>
            </div>
          )}

          {/* Combined Profile Details Card */}
          <form onSubmit={handleSave} className="bg-white border border-[#f5e6ea] p-6 sm:p-8 rounded-3xl space-y-6 shadow-xs">
            <div className="flex items-center justify-between pb-3.5 border-b border-[#f5e6ea]">
              <h3 className="text-xs font-normal text-[#8b263e] uppercase tracking-wider">Personal Details</h3>
              {!isEditing && (
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="text-xs text-[#8b263e] hover:text-[#721e32] font-normal flex items-center gap-1 cursor-pointer"
                >
                  <Edit2 className="w-3 h-3" /> Edit
                </button>
              )}
            </div>

            {/* Integrated Profile Avatar Section */}
            <div className="flex flex-col sm:flex-row items-center gap-5 pb-4 border-b border-[#f5e6ea]/60">
              <div className="relative shrink-0 group">
                <div className="w-20 h-20 rounded-full border-2 border-[#f5d0dc] overflow-hidden bg-[#721e32]">
                  <img 
                    src={isEditing ? tempData.avatarUrl : profileData.avatarUrl} 
                    alt={profileData.fullName}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                  />
                </div>

                {isEditing && (
                  <button 
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute inset-0 bg-[#3a1d28]/40 rounded-full flex flex-col items-center justify-center text-white opacity-90 hover:opacity-100 transition-opacity cursor-pointer backdrop-blur-[2px]"
                  >
                    <Camera className="w-4 h-4 mb-0.5" />
                    <span className="text-[9px] font-normal">Change</span>
                  </button>
                )}

                <input 
                  ref={fileInputRef}
                  type="file" 
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>

              <div className="space-y-1 text-center sm:text-left flex-grow">
                <h2 className="text-base font-normal text-[#3a1d28]">{profileData.fullName}</h2>
                <p className="text-xs text-[#3a1d28]/60 font-normal">{profileData.email}</p>

                {isEditing && (
                  <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="text-[11px] font-normal text-[#8b263e] bg-[#fdf8f6] hover:bg-[#fce4ec] border border-[#f5e6ea] px-3 py-1 rounded-full transition-colors inline-flex items-center gap-1 cursor-pointer"
                    >
                      <Upload className="w-3 h-3" /> Upload new photo
                    </button>
                    {tempData.avatarUrl !== profileImg && (
                      <button
                        type="button"
                        onClick={resetAvatar}
                        className="text-[11px] font-normal text-[#3a1d28]/60 hover:text-[#8b263e] px-2 py-1 transition-colors inline-flex items-center gap-1 cursor-pointer"
                      >
                        <RotateCcw className="w-3 h-3" /> Reset
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Form Fields Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-normal text-[#3a1d28]/70 block">Full Name</label>
                {isEditing ? (
                  <div className="relative">
                    <User className="w-4 h-4 text-[#8b263e] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input 
                      type="text" 
                      name="fullName"
                      value={tempData.fullName}
                      onChange={handleInputChange}
                      className="w-full bg-[#fdf8f6] border border-[#f5e6ea] rounded-2xl py-2.5 pl-10 pr-4 text-xs font-normal text-[#3a1d28] focus:outline-none focus:border-[#8b263e] transition-colors"
                    />
                  </div>
                ) : (
                  <div className="bg-[#fdf8f6] rounded-2xl py-2.5 px-4 text-xs font-normal text-[#3a1d28]">
                    {profileData.fullName}
                  </div>
                )}
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="text-xs font-normal text-[#3a1d28]/70 block">Email Address</label>
                {isEditing ? (
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#8b263e] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input 
                      type="email" 
                      name="email"
                      value={tempData.email}
                      onChange={handleInputChange}
                      className="w-full bg-[#fdf8f6] border border-[#f5e6ea] rounded-2xl py-2.5 pl-10 pr-4 text-xs font-normal text-[#3a1d28] focus:outline-none focus:border-[#8b263e] transition-colors"
                    />
                  </div>
                ) : (
                  <div className="bg-[#fdf8f6] rounded-2xl py-2.5 px-4 text-xs font-normal text-[#3a1d28]">
                    {profileData.email}
                  </div>
                )}
              </div>

              {/* Phone Number */}
              <div className="space-y-1.5">
                <label className="text-xs font-normal text-[#3a1d28]/70 block">Phone Number</label>
                {isEditing ? (
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#8b263e] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input 
                      type="text" 
                      name="phone"
                      value={tempData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-[#fdf8f6] border border-[#f5e6ea] rounded-2xl py-2.5 pl-10 pr-4 text-xs font-normal text-[#3a1d28] focus:outline-none focus:border-[#8b263e] transition-colors"
                    />
                  </div>
                ) : (
                  <div className="bg-[#fdf8f6] rounded-2xl py-2.5 px-4 text-xs font-normal text-[#3a1d28]">
                    {profileData.phone}
                  </div>
                )}
              </div>

              {/* Default Currency Choice */}
              <div className="space-y-1.5">
                <label className="text-xs font-normal text-[#3a1d28]/70 block">Default Currency</label>
                {isEditing ? (
                  <div className="relative">
                    <DollarSign className="w-4 h-4 text-[#8b263e] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select 
                      name="currency"
                      value={tempData.currency}
                      onChange={handleInputChange}
                      className="w-full bg-[#fdf8f6] border border-[#f5e6ea] rounded-2xl py-2.5 pl-10 pr-4 text-xs font-normal text-[#3a1d28] focus:outline-none focus:border-[#8b263e] transition-colors cursor-pointer"
                    >
                      <option value="USD ($)">USD ($)</option>
                      <option value="EUR (€)">EUR (€)</option>
                      <option value="GBP (£)">GBP (£)</option>
                      <option value="NPR (Rs)">NPR (Rs)</option>
                    </select>
                  </div>
                ) : (
                  <div className="bg-[#fdf8f6] rounded-2xl py-2.5 px-4 text-xs font-normal text-[#3a1d28]">
                    {profileData.currency}
                  </div>
                )}
              </div>

            </div>

            {/* Security Section */}
            <h3 className="text-xs font-normal text-[#8b263e] uppercase tracking-wider pt-4 pb-3 border-b border-[#f5e6ea]">Security</h3>

            <div className="flex items-center justify-between p-4 bg-[#fdf8f6] rounded-2xl border border-[#f5e6ea]/60">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#fce4ec] text-[#8b263e]">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-normal text-[#3a1d28]">Password</h4>
                  <p className="text-[11px] text-[#3a1d28]/60 font-normal">Last changed 3 months ago</p>
                </div>
              </div>
              <button 
                type="button" 
                className="text-xs text-[#8b263e] hover:text-[#721e32] font-normal cursor-pointer px-3.5 py-1.5 rounded-full bg-white border border-[#f5e6ea] transition-colors"
              >
                Change
              </button>
            </div>

            {/* Action Controls */}
            {isEditing && (
              <div className="pt-4 flex justify-end gap-3 border-t border-[#f5e6ea]">
                <button 
                  type="button"
                  onClick={handleCancel}
                  className="px-5 py-2 rounded-full text-xs font-normal text-[#3a1d28]/70 hover:bg-[#fdf8f6] transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="bg-[#8b263e] hover:bg-[#721e32] text-white px-6 py-2 rounded-full text-xs font-normal transition-colors cursor-pointer shadow-xs active:scale-95"
                >
                  Save Changes
                </button>
              </div>
            )}
          </form>

        </div>
      </section>
    </div>
  );
}