import React, { useState } from 'react';
    import { Select, Checkbox } from '@shadcn/ui';


    interface UserSettings {
      theme: 'light' | 'dark';
      emailNotifications: boolean;
    }


    const UserSettings: React.FC = () => {
      const [settings, setSettings] = useState<UserSettings>({
        theme: 'light',
        emailNotifications: false,
      });


      const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSettings({ ...settings, theme: event.target.value as 'light' | 'dark' });
        // Simulate saving settings (replace with actual saving logic)
        saveSettings(settings);
      };


      const handleEmailNotificationsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSettings({ ...settings, emailNotifications: event.target.checked });
        // Simulate saving settings (replace with actual saving logic)
        saveSettings(settings);
      };


      const saveSettings = (settings: UserSettings) => {
        console.log('Saving settings:', settings);
        // Replace this with actual local storage or backend API call to save settings
        localStorage.setItem('userSettings', JSON.stringify(settings));
      };


      return (
        <div>
          <h2>User Settings</h2>
          <Select
            options={[
              { value: 'light', label: 'Light' },
              { value: 'dark', label: 'Dark' },
            ]}
            value={settings.theme}
            onChange={handleThemeChange}
            label="Theme"
          />
          <Checkbox checked={settings.emailNotifications} onChange={handleEmailNotificationsChange} label="Email Notifications" />
        </div>
      );
    };


    export default UserSettings;
