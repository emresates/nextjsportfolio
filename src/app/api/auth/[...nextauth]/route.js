import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import connectMongoDB from "../../../../../utils/mongoDb";
import User from "../../../../../models/User";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      async authorize(credentials) {
        await connectMongoDB();

        try {
          const user = await User.findOne({ username: credentials.username });
          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password,
          );

          if (user && isPasswordCorrect) {
            return { id: user._id, username: user.username };
          } else {
            throw new Error("Wrong Credentials");
          }
        } catch (error) {
          throw new Error("Mongo err", error);
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
