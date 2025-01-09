import React, { useState } from 'react';
    import { Input, Button } from '@shadcn/ui';
    import { useAtom } from 'jotai';
    import { userAtom } from '@/store/user'; // Import your user atom


    interface UserProfileData {
      name: string;
      email: string;
    }


    const UserProfile: React.FC = () => {
      const [user, setUser] = useAtom(userAtom);
      const [profileData, setProfileData] = useState<UserProfileData>({
        name: user?.name || '',
        email: user?.email || '',
      });
      const [updateError, setUpdateError] = useState('');
      const [updating, setUpdating] = useState(false);


      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProfileData({ ...profileData, [event.target.name]: event.target.value });
      };


      const handleUpdateProfile = async () => {
        setUpdating(true);
        setUpdateError('');
        try {
          // Simulate updating the user profile (replace with your actual update logic)
          const updatedUser = await updateUser(profileData);
          setUser(updatedUser);
          setUpdateError('');
        } catch (error: any) {
          setUpdateError(error.message || 'Failed to update profile.');
          console.error('Failed to update user profile:', error);
        } finally {
          setUpdating(false);
        }
      };


      const updateUser = async (profileData: UserProfileData) => {
        // Simulate API call to update user profile
        await new Promise((resolve) => setTimeout(resolve, 500));
        return { ...user, ...profileData };
      };


      return (
        <div>
          <h2>User Profile</h2>
          {updateError && <p className="text-red-500">{updateError}</p>}
          <Input type="text" name="name" value={profileData.name} onChange={handleInputChange} label="Name" />
          <Input type="email" name="email" value={profileData.email} onChange={handleInputChange} label="Email" />
          <Button onClick={handleUpdateProfile} disabled={updating}>
            {updating ? 'Updating...' : 'Update Profile'}
          </Button>
        </div>
      );
    };


    export default UserProfile;
