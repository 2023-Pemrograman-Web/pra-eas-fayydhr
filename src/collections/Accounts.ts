import { CollectionConfig } from "payload/types";

const Accounts: CollectionConfig = {
  slug: "accounts",
  auth: true,
  admin: {
    useAsTitle: "Username",
  },
  fields: [
    {
      name: "username",
      type: "text",
      minLength: 4,
      maxLength: 20,
      required: true,
    },
  ],
};

export default Accounts;
