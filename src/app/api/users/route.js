import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectMongoDB from "../../../../utils/mongoDb";
import User from "../../../../models/User";

export async function POST(request) {
  const { password, username } = await request.json();

  const hashedPassword = await bcrypt.hash(password, 8);
  await connectMongoDB();
  const newUser = new User({
    username,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    return NextResponse.json({ message: `User Created` }, { status: 201 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
}

export async function GET() {
  await connectMongoDB();
  const users = await User.find();
  return NextResponse.json({ users });
}
