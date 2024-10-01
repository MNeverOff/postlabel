# PostLabel - Printing your Royal Mail post labels in bulk

PostLabel is a small tool build in NextJS that allows you to convert your RoyalMail, ParcelForce and EBay shipping labels into easily printable A4 pages, suitable for home office printing.

🖨️ See it live and print some labels: [PostLabel](https://postlabel.neveroff.dev/)

Link above will take you to a Vercel deployment of PostLabel that doesn't collect or store any of your PII and uses cookieless and aggregated tracking for stats purposes alone.

## Getting Started

If you want to run PostLabel on your own machine, you're welcome to do so:

1. Clone the repository.
2. Restore dependencies with `npm i` from the root directory.
3. Finally run `npm run dev` to start the development server

> Note: you will not see the usage statistics without the .env file being set up pointing to a database. Add a `POSTGRES_PRISMA_URL` env variable to your `.env` file to enable this feature.

## Contributing

Contributions are encouraged and welcome. The project roadmap, ideas, bugs and issues are tracked in the [Project](https://github.com/users/MNeverOff/projects/1).

## Structure & Quality Note

This project has been initially built in 2023 in some of my spare time. It's been built rather haphazardly, aiming to solve my own immediate need to no longer produce dozens of A4 label pages in Photoshop. With that in mind I have disregarded certain approaches otherwise considered best practice.

Simultaneously, I wanted to give NextJS on Vercel a try, as well as experiment with doing a Copilot-first project, where I let GitHub Copilot write most of the code for me, set structure and suggest tools. I ultimately decided to clean up most of the results and ended up reworking most of that, but it has provided for an insightful experience.
