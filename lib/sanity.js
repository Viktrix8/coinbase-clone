import sanityClient from "@sanity/client";

export const client = sanityClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2021-03-25",
    token: process.env.SANITY_TOKEN,
    useCdn: false
})



