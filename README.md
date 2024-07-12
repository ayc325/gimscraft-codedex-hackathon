# Codedex Hackathon - Track 2: Stoop Sale Invitation Website - *Angela's Prototype*

Submitted by: **Angela Cui**

This website: **Is an interactive webpage to invite people in the South Brooklyn area to a Stoop Sale**

## Criteria

The following **required** functionality is completed:

- [X] **There is a unique interactive feature relevant to the Stoop Sale**
- [X] **There is a Map API**
- [X] **Date and Time is displayed**
- [X] **Shareability**
- [X] **Good Vibes**

The following **additional** features are impleted:

- [X] **Gallery of clothes/surrounding area they're selling and try to pull them into like "do you wanna buy this?"**
- [X] **FAQ Section in the form of an accordion**
- [X] **Invitation leads to a Google Calendar Event so the user can add it to their Calendar and RSVP**
- [X] **Deployed on Vercel** [Here](https://gimscraft-codedex-hackathon.vercel.app/)
- [X] **Responsive on mobile so Shareability should be A+**
- [X] **Made sure every image in the page is less than 300kb except for the ~600kb header image ensuring legacy platforms can access this website without much trouble**
- [X] **Used color palettes similar to what the video showed**

## Technologies Used

- React Vite JSX
- Lots of CSS
- Google Maps Embed
- Google Calendar Link
- Other Imports listed in Works Cited


## Works Cited

- Accordion created with [SitePoint](https://www.sitepoint.com/react-js-accordion-component/)
- Scroll Gallery created with [Alice Carousel](https://maxmarinich.github.io/react-alice-carousel/#basic)

## Video Walkthrough

Here's a walkthrough of implemented features:

![Video Walkthrough](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbG5pdjdzZzl4dnlxbmdlYXozYmVlMDl6NTZqYXZ1M2Q0c2xuanpmayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iQHojruwFzmrpn6WNM/giphy.gif)

GIF created with [Kap](https://getkap.co/) for macOS and Giphy.

## Notes

**Describe an challenges encountered while doing the hackathon project.**

Some challenges I faced was with CSS and overflow X scrolling in images. I was able to fix this by setting a max-width. 

I also faced a challenge where the original slide carousel's arrows wouldn't work and wouldn't comply with my css file. I resolved this by using Alice Carousel instead since the one before had jQuery which I don't know how to use.

**Describe some features you would include further if you had more time.**

I would like to incorporate more pages and add an puzzle game like feature where for every Brooklyn landmark the user gets right, they get to have a sneak peek at a new piece of clothing that will be at the stoop sale.

## What each component does

| Component | Description |
|----------------|-------------|
| `AboveTheFold` | Everything above the fold. Essentially what the user sees when they first land on the web-page. Includes the header image and title. Everything in this section is wrapped in `<header>` so it should be SEO compliant. |
| `ClothingGallery2` | This was originally a very buggy ClothingGallery1 which is an image scroller. This revised version utilizes the Alice Carousel import to do that. It's also less buggy and is responsive across several devices. |
| `Calendar` | Includes date and time and the **call-to-action** button for users to RSVP for the event and this also helps Chelsea and Lil anticipate how many people are coming. The `Map` function is implemented inside this section. |
| `Map` | This is just customized embedded Google Maps. This was put into a component for modularity and reusablility throughout the program. |
| `FaqData` | Contains an array for questions and answers for the `Faq` component to use. |
| `Faq` | This is the Frequently Asked Questions section in the form of an accordion menu. |
| `Footer` | This is the footer of the webpage. If this project were to have multiple pages, this could be reused. This component is also wrapped in the `<footer>` tag to hopefully be SEO compliant. |

## Running the app

- npm install
- npm run dev
