# User Stories - GiftLink

## User Story 1: User Registration and Login
* **As a** new user,
* **I want to** register for an account and log in securely,
* **So that** I can list items to give away or claim items from others.

### Acceptance Criteria:
- Users can sign up with a unique email and password.
- Passwords must be securely hashed.
- Users receive a JWT upon successful login for authenticated sessions.

---

## User Story 2: Browse and Search Gift Items
* **As a** user,
* **I want to** browse available gift items and search for specific items by keywords or categories,
* **So that** I can easily find things I need.

### Acceptance Criteria:
- The home page displays a list of available gifts.
- A search bar filters items dynamically.
- Clicking an item shows its detailed view.

---

## User Story 3: Add Comments and Reviews
* **As a** logged-in user,
* **I want to** leave comments or reviews on item listings,
* **So that** I can ask questions or provide feedback to the giver.

### Acceptance Criteria:
- Only authenticated users can post comments.
- Comments are displayed alongside the item details.