# Admin Portal Credentials

## Access the Admin Panel
URL: http://localhost:3001/admin/login

## Default Admin Accounts

### Super Admin
- **Email:** admin@arthoscenter.com
- **Password:** Admin@123456
- **Role:** SUPER_ADMIN
- **Permissions:** Full access to all features

### Doctor Account
- **Email:** dr.kumar@arthoscenter.com
- **Password:** Doctor@123456
- **Role:** DOCTOR
- **Permissions:** Patient management, consultations, appointments

## Login Instructions

1. Open browser and navigate to http://localhost:3001/admin/login
2. Enter email and password from above
3. Click "Sign In"
4. You will be redirected to the admin dashboard

## Troubleshooting

If you get "Invalid credentials":
- Make sure the database server is running: `brew services list`
- Check that PostgreSQL is active
- Verify you're using the exact credentials above (case-sensitive)

If the page doesn't load CSS:
- Clear your browser cache and cookies
- Hard refresh the page (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

## Security Notes

⚠️ **IMPORTANT**: These are development credentials only.
- Change these passwords before deploying to production
- Use strong, unique passwords for production
- Never commit real credentials to version control
