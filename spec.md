# Empower Southwest

## Current State
A simple landing page with:
- Home page (mission statement)
- Privacy Policy page
- Header with brand name
- Footer with legal disclosure and Privacy Policy link
- Empty backend (actor {})

## Requested Changes (Diff)

### Add
- A "Get Involved" page at `/get-involved` with a sign-up form
- Form fields: First & Last Name, Zip Code, Cell Phone, SMS opt-in checkbox
- SMS disclaimer text below the checkbox
- Backend: store form submissions (name, zip, phone, smsOptIn, timestamp)
- Navigation link to "Get Involved" in the header
- Link to "Get Involved" in the footer

### Modify
- Header: add nav link to the new Get Involved page
- App.tsx: register the new route
- Backend: add submitSignup and getSignups functions

### Remove
- Nothing removed

## Implementation Plan
1. Add `submitSignup(name: Text, zip: Text, phone: Text, smsOptIn: Bool) : async ()` and `getSignups() : async [Signup]` to backend
2. Create `src/frontend/src/pages/GetInvolved.tsx` with the form
3. Register `/get-involved` route in App.tsx
4. Add "Get Involved" nav link to Header
5. Add "Get Involved" link to Footer bottom bar
