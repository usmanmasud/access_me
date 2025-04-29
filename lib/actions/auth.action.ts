"use server";

import { db } from "@/firebase/admin";

export async function signUp(params: SignUpParams) {
  const { uid, name, email } = params;

  try {
    const userRecord = await db.collection("users").doc(uid).get();

    if (userRecord.exists) {
      return {
        success: false,
        message: "User already exists. sign in",
      };
    }

    await db.collection("users").doc(uid).set({
      name,
      email,
    });
  } catch (error: any) {
    console.error("Error creating account", error);

    if (error.code === "auth/email-already-exist") {
      return {
        success: false,
        message: "User already exists",
      };
    }

    return {
      success: false,
      message: "failed to create an account",
    };
  }
}
