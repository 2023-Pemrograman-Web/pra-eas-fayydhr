import { CollectionConfig } from "payload/types";

const grub: CollectionConfig = {
  slug: "grub",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
};

export default grub;
