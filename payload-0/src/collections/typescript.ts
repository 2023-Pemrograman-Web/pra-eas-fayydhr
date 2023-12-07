import { CollectionConfig } from "payload/types";

const typesript: CollectionConfig = {
  slug: "typesript",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
};

export default typesript;
