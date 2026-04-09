# Admin Settings UI

A modern React.js admin settings interface built with Tailwind CSS. This project is located in the `setting ui` folder and replicates an exact HTML/CSS design with full interactive functionality.

## Overview

This Admin Settings UI provides a comprehensive dashboard with profile management, security settings, and password change functionality. The project is built as a pixel-perfect replica of the original HTML/CSS design while leveraging modern React.js best practices.

### 🚀 Live Demo

**Deployed URL:** https://settings-admin-ui1.vercel.app

### 📁 GitHub Repository

**Repository URL:** https://github.com/tushitha4/Admin-UI

The Admin Settings UI is live and fully functional on Vercel!

## Features

### Core Functionality
- **Profile Management**: View and edit user profile information
- **Security Settings**: Manage password and authentication settings
- **Password Change Modal**: Interactive password strength indicator with real-time validation
- **Responsive Design**: Optimized for various screen sizes
- **Modern UI/UX**: Clean, intuitive interface with smooth transitions

### Interactive Elements
- **Navigation**: Seamless page transitions between main and edit views
- **Modal System**: Functional password change modal with validation
- **Form Validation**: Real-time password strength checking
- **User Feedback**: Success alerts for all actions
- **Password Visibility Toggle**: Show/hide password functionality

## Technology Stack

- **Frontend Framework**: React 18.2.0
- **Styling**: Tailwind CSS 3.3.0
- **Icons**: Font Awesome 6.5.0
- **Typography**: Inter Font Family
- **Build Tool**: Create React App (react-scripts 5.0.1)

## Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Navigate to the Admin Settings UI folder**
   ```bash
   cd "setting ui"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Access the application**
   - **Local Development:** Open your browser and navigate to: `http://localhost:3000`
   - **Live Demo:** Visit the deployed application at: https://settings-admin-ui1.vercel.app

## Project Structure

```
setting ui/
├── src/
│   ├── components/
│   │   ├── Sidebar.js           # Fixed sidebar with logo and navigation
│   │   ├── Header.js            # Top navigation with search and icons
│   │   ├── MainPage.js          # Main admin settings page
│   │   ├── EditPage.js          # Profile editing form
│   │   ├── ChangePasswordModal.js # Password change modal with validation
│   ├── App.js                   # Main application component with state management
│   ├── index.js                 # Application entry point
│   └── index.css                # Global styles and Tailwind imports
├── public/
│   ├── index.html               # HTML template with Font Awesome
│   └── logo.png                 # Application logo
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
└── README.md                    # This documentation file
```

## Component Details

### Sidebar Component
- Fixed positioning (90px width)
- Custom logo integration
- Back button navigation
- Pink background (#f3caca)

### Header Component
- Search bar with rounded styling
- Notification icons (bell, gear)
- User avatar display
- Responsive layout

### Main Page Component
- Profile section with user details
- Security settings with last login info
- Two-factor authentication status
- Interactive buttons for editing and password changes

### Edit Page Component
- Form fields for profile information
- Input validation
- Save/Cancel functionality
- Security alert display

### Change Password Modal
- Real-time password strength indicator
- Visual strength bars (4 levels)
- Password validation rules
- Show/hide password toggles
- Form validation and submission

## Styling & Design

### Color Scheme
- **Primary Red**: #ff2d2d / #ff1f1f
- **Background Pink**: #f3caca
- **Page Background**: #f5f6f8
- **White**: #ffffff
- **Text Colors**: Various shades of gray

### Typography
- **Font Family**: Inter
- **Font Weights**: 400, 500, 600, 700
- **Font Sizes**: 11px to 18px depending on element

### Layout Features
- Card-based design with rounded corners (12px/16px)
- Subtle shadows for depth
- Consistent spacing and padding
- Hover states and transitions

## Usage Instructions

### Navigation
1. **Main Page**: View profile and security settings
2. **Edit Profile**: Click "Edit Profile" to modify user information
3. **Change Password**: Click "Change Password" to open the modal
4. **Back Navigation**: Use the "Back" button or "Cancel" to return

### Folder Structure
- The entire Admin Settings UI is contained within the `setting ui` folder
- All React components are in `src/components/`
- Static assets are in the `public/` folder

### Password Change Process
1. Click "Change Password" in Security Settings
2. Enter current password
3. Create new password (minimum 8 characters, 1 uppercase, 1 number)
4. Confirm new password
5. Click "Update Password" to save changes

### Profile Editing
1. Click "Edit Profile" on the main page
2. Modify form fields (First Name, Last Name, Email, Role, Department)
3. Click "Save Changes" to update profile
4. Click "Cancel" to discard changes

## Browser Compatibility

- Chrome (latest version)
- Firefox (latest version)
- Safari (latest version)
- Edge (latest version)

## Development Notes

### State Management
- React useState hooks for component state
- Props drilling for component communication
- Event handlers for user interactions

### CSS Approach
- Inline styles for exact design replication
- Tailwind CSS for utility classes
- Custom CSS animations for modal transitions

### Performance Considerations
- Component-based architecture for maintainability
- Efficient re-rendering with React
- Optimized asset loading

## Future Enhancements

### Potential Improvements
- Backend API integration
- Form validation with error states
- Loading states for async operations
- Dark mode support
- Mobile responsiveness improvements
- Accessibility enhancements (ARIA labels, keyboard navigation)

### Security Features
- Input sanitization
- CSRF protection
- Rate limiting
- Secure password handling

## Troubleshooting

### Common Issues
1. **Logo not displaying**: Ensure logo.png is in the public folder
2. **Icons not showing**: Check Font Awesome CDN connection
3. **Styles not applying**: Verify Tailwind CSS is properly configured
4. **Development server not starting**: Check Node.js version and dependencies

### Solutions
- Clear browser cache
- Restart development server
- Verify all dependencies are installed
- Check console for error messages

## License

This project is for educational and demonstration purposes.

## Contact

For questions or support regarding this React admin settings application, please refer to the project documentation or contact the development team.

---

**Application Status**: Complete and Functional  
**Last Updated**: April 2026  
**Version**: 1.0.0  
**Folder**: `setting ui`
