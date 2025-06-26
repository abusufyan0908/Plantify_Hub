import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash, FaUpload } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useAuth } from '../Context/AuthContext';

const GardenerProfile = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    experience: '',
    bio: '',
    hourlyRate: '',
    minimumHours: '',
    specialties: '',
    certifications: '',
    languages: '',
    profileImage: null,
    workImages: []
  });

  useEffect(() => {
    if (!user || !user.isGardener) {
      navigate('/login');
      return;
    }

    // TODO: Fetch gardener profile from backend
    // For now using mock data
    const mockProfile = {
      name: "John Doe",
      email: "john@example.com",
      phone: "1234567890",
      location: "New York",
      experience: "5 years",
      bio: "Professional gardener with expertise in landscape design",
      hourlyRate: "25",
      minimumHours: "2",
      specialties: "Landscape Design, Organic Gardening",
      certifications: "Master Gardener",
      languages: "English, Spanish",
      isAvailable: true,
      rating: 4.5
    };
    setProfile(mockProfile);
    setFormData(mockProfile);
  }, [user, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      if (type === 'profile') {
        setFormData(prev => ({ ...prev, profileImage: file }));
      } else {
        setFormData(prev => ({
          ...prev,
          workImages: [...prev.workImages, file]
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // TODO: Send update request to backend
      toast.success('Profile updated successfully');
      setIsEditing(false);
    } catch (error) {
      toast.error('Failed to update profile');
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete your profile?')) {
      try {
        // TODO: Send delete request to backend
        toast.success('Profile deleted successfully');
        navigate('/');
      } catch (error) {
        toast.error('Failed to delete profile');
      }
    }
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-emerald-600 p-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Profile</h1>
            <div className="space-x-4">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="bg-white text-emerald-600 px-4 py-2 rounded-lg hover:bg-emerald-50"
              >
                <FaEdit className="inline mr-2" />
                {isEditing ? 'Cancel' : 'Edit'}
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                <FaTrash className="inline mr-2" />
                Delete
              </button>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {/* Form content remains the same */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
              <div className="mt-1 flex items-center">
                {isEditing ? (
                  <label className="cursor-pointer bg-emerald-50 p-2 rounded-lg hover:bg-emerald-100">
                    <FaUpload className="inline mr-2" />
                    Upload
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageChange(e, 'profile')}
                      className="hidden"
                    />
                  </label>
                ) : (
                  <img
                    src={profile.profileImage || 'default-profile.jpg'}
                    alt="Profile"
                    className="h-32 w-32 rounded-full object-cover"
                  />
                )}
              </div>
            </div>
          </div>

          {isEditing && (
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700"
              >
                Save Changes
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default GardenerProfile;


