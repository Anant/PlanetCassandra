# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
## [1.1.2] - 2023-08-09
All notable changes to this project will be documented in this file.

### Unreleased
- Notifications for the DataStax team in the Content Submissions channel on Discord
- Expose RSS Feed for events page 
- Opening up Github 
- Implement Design for new use case card and update Wordpress/Gatsby to pull in new field
- Use case titles need to be created for use cases and place into the Submissions Airtable
- Use cases title card: When Implementation is complete, Cases in the Submissions table can be marked as Revised (status) and the automation will pick up and publish the new short description and title
- Implement Headless CMS for static content
- Scheduling a blog post to publish on a certain date without having to “Push the Button”
- Auto-post to PC social media accounts (Twitter and LinkedIn)
- Feedback mechanism for logo on use case
- User Engagement: Karma points
- User Engagement: Featured user
- User Picture on Use Case

### Changed
- “Contact” navigation button has been removed from the Navigation bar 


### Fixed
- “Contribute” replaces “Contact” navigation button and points the user to the landing page that contains the form for use case submission. 


### Updated
- RSS news feeds have been cleaned up, but do not pull from the Apache Cassandra blog due to restrictions on the Apache Cassandra site.


## [1.1.1] - 2023-07-28
All notable changes to this project will be documented in this file.

### Unreleased
- PLANETCASSANDRA-AAAA MINOR - Created a changelog for the users who want to track website changes
- Expose RSS Feed for events page 
- Opening up Github 
- Implement Design for new use case card and update Wordpress/Gatsby to pull in new field
- Use case titles need to be created for use cases and place into the Submissions Airtable
- Use cases title card: When Implementation is complete, Cases in the Submissions table can be marked as Revised (status) and the automation will pick up and publish the new short description and title
- Implement Headless CMS for static content
- Scheduling a blog post to publish on a certain date without having to “Push the Button”
- Auto-post to PC social media accounts (Twitter and LinkedIn)
- Feedback mechanism for logo on use case
- User Engagement: Karma points
- User Engagement: Featured user
- User Picture on Use Case

### Added
- PLANETCASSANDRA-AAAA MINOR -A new field for Use Case Title has been added to the form and to the Airtable
- Added social link and author name to Use Case Detail page
- Added T-Shirt Landing Page / CTA
- Added an Author Plugin
- Generated new API for events page
- Events page: Event Mapping Options
- Added auto-publish of blogs in WP (every 30 minutes) / Moderators can still publish manually
- Pictures processing
- Descriptions and formatting
- Navigation on Events
- CTA in Handbook
- Added skeleton grid when loading for results
- New Readme file
- Added pagination for search results and also for use cases page
- Added new CTA’s to use cases page and a new hero banner
- Added 404 error page
- Implemented facets and Search field for the Use Cases Page
- Show More button for use cases
- Images to News, Posts and News cards images
- Synonyms in Algolia
- Multiple use cases per company
- Use Cases automation: Auto Builds with logo >10min from ‘approved’ or ‘revised’
- Apache Cassandra Meetup Organiser Handbook published
- Footer
- Algolia Search
- Algolia Indexing
- Outgoing links to DataStax academy
- Contact Page
- Contribute Page
- Gatsby Images
- Use Cases Listing Page
- Use Cases Single Page
- Navigation
- News Listing Page
- News Single Page
- Events Listing Page
- Events Single Page
- SEO optimized Pages have been created for all posts
- Article Listing Page
- Article Single Page
- All the data sources have been added (WordPress, RSS and Airtable)

### Changed
- Use Case Hero text changed
- Correct contribute on Events; favicon
- Changed airtable links for production (forms)
- Changed modal height for airtable forms, now it takes more space and it looks better

### Fixed
- Fixed use cases card images, now it doesn't crop the images
- Facet ordering bug, when clicked they were reordering, now it's fixed
- Bug fixes: Carousel button displaying over text bug
- Bug fixes: Search bar context bug (default to all from global search field)
- Bug fixes: Hide facets and page titles when no results on search page
- Blog: Testing solution for publish push
- Bug fixes: Contribute/Contact Html titles
- Bug fixes: Continue Reading Overwriting 
- Implement better spacing / layout for article/item pages

### Updated
- Automation has been updated to pull the title from Submissions to Cases
- Automation has been updated to pull the Short Description from Submissions to Cases
- Re-designed multiple use case card
- Featured posts: Team can choose what posts get highlighted as a feature post
- Improved the use cases form
- Events landing page - better design to match rest of site
- Improved SEO, changed meta tags for description
- Redesign 404 page, new button for contributing and text changes
- Reviewed rendering on social media and other sites (validated FB and LinkedIn)
- Verified essential metadata is there.
- Optimized SEO to raise score 8 points (Lighthouse from 90% to 98%)
- Engineering Environment Setup [WP, Airtable, Netlify, Algolia]
- Changed use cases published date and improved sorting of the items (Config)
- Improve and refactor search page
- Search Update: Limited ‘Facets’ UI (only 7 show)
- Search Update: “All” Content Type for Search results
- Search Update: Images for results
- Search Update: Press enter in Navigation Bar search from search results
- ‘Contribute’ page with 3 forms linked
- Revisions to use cases can now be completed in the Submissions table
- Use Cases update: SEO Optimization
- Use Cases update: Related Cases
- Use Cases update: Original URL Link credit
- Use Cases update: Related Company Details in the Landing Pages
- Use Cases update: Landing Page for each use case (with external links)
- Use Cases update: Industry tag added to form
- Use Cases update: User can submit use cases without a link
- Optimized Cached Images using gatsby-image
- Refactored code from cassandra link to use Typescript
- Deployed to Netlify
- Leaves Data with optimized Gatsby Cache for images
- Styling of Home Pages

### Removed
- Use case form (T-shirt form will replace it for now)


