/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_Ep8JRn9gokQS@ep-black-firefly-a1ae4btp-pooler.ap-southeast-1.aws.neon.tech/ai-mock-interview?sslmode=require",
  },
};
