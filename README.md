# SpendWise Interactive Architecture (Week 7)

## Improvements Made to SpendWise This Week
This update transitions the SpendWise application away from basic popup `prompt()` routines to an event-driven system template. Users can now input records directly into a layout form, adjust allocation baselines dynamically, and view an organized ledger layout sheet on-screen.

## Core Architectural Concepts Handled
1. **Decision Making (Conditionals)**: Implemented conditional branches within `renderDashboardMetrics()` to evaluate if net remainders drop below zero, automatically altering balance colors and triggering structured alert danger notifications.
2. **Multiple Records (Arrays)**: Replaced single variables with a global data array framework (`expensesArray`) that stores transaction records as separate structured objects containing specific identity, title, and tracking keys.
3. **Data Processing (Loops)**: Utilized standard indexing `for` loop frameworks to traverse active array objects, calculate running cost sums, and append visual list rows to document grids.
4. **Dynamic DOM Interaction**: Leveraged methods like `document.createElement()` and `appendChild()` to inject live nodes directly into the browser layout view without page resets.
5. **User Interactions (Events)**: Wired up explicit `.addEventListener()` binds to listen to form submission loops (`submit`) and baseline adjustments (`click`) seamlessly.

## Technical Challenges & Resolutions
* *Challenge*: Standard HTML forms automatically trigger browser page refreshes on form submission, which clears active JavaScript array records stored in short-term volatile memory.
* *Resolution*: Resolved this cleanly by passing the native submission wrapper event down into our event listener method and calling `event.preventDefault()` to lock standard form reload properties completely.
