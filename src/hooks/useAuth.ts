import { createSignal, createEffect } from "solid-js";
import { supabase } from "../config/supabase";
import { User as SupabaseUser } from "@supabase/supabase-js";
import { User } from "../types/user";

export function useAuth() {
  const [user, setUser] = createSignal<User | null>(null);
  const [isAdmin, setIsAdmin] = createSignal(false);

  createEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session?.user) {
        const mappedUser: User = mapSupabaseUserToUser(session.user);
        setUser(mappedUser);
        checkAdminStatus(mappedUser.id);
      } else {
        setUser(null);
      }
    };

    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_, session) => {
        if (session?.user) {
          const mappedUser: User = mapSupabaseUserToUser(session.user);
          setUser(mappedUser);
          checkAdminStatus(mappedUser.id);
        } else {
          setUser(null);
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  });

  const checkAdminStatus = async (userId: string) => {
    const response = await fetch(
      "https://tsudoi-backend.akms0929ama.workers.dev//check-admin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      }
    );

    const data = await response.json();
    setIsAdmin(data.isAdmin);
  };

  return { user, isAdmin };
}

const mapSupabaseUserToUser = (supabaseUser: SupabaseUser): User => {
  if (!supabaseUser.email) {
    throw new Error("Supabase user does not have an email");
  }

  return {
    id: supabaseUser.id,
    username: supabaseUser.email, // Supabaseのユーザーにはusernameがないため、emailを代用
    email: supabaseUser.email,
    firstName: "", // 必要に応じて追加
    lastName: "", // 必要に応じて追加
    createdAt: new Date(), // 必要に応じて追加
    updatedAt: new Date(), // 必要に応じて追加
  };
};
