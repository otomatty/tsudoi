import { createSignal, createEffect } from "solid-js";
import { supabase } from "../config/supabase";
import { User as SupabaseUser } from "@supabase/supabase-js";
import { User } from "../../../share/types/user";

export function useAuth() {
  const [user, setUser] = createSignal<User | null>(null);
  const [isAdmin, setIsAdmin] = createSignal(false);
  const [isLoading, setIsLoading] = createSignal(true);

  createEffect(() => {
    const checkSession = async () => {
      setIsLoading(true);
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        await fetchUserData(session.user);
        await checkAdminStatus(session.access_token);
      } else {
        setUser(null);
        setIsAdmin(false);
      }
      setIsLoading(false);
    };

    checkSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session) {
        await fetchUserData(session.user);
        await checkAdminStatus(session.access_token);
      } else {
        setUser(null);
        setIsAdmin(false);
      }
    });

    return () => subscription.unsubscribe();
  });

  const fetchUserData = async (supabaseUser: SupabaseUser) => {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", supabaseUser.id)
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        // ユーザーが見つからない場合の処理
        console.log("User not found in the database");
      } else {
        console.error("Error fetching user data:", error);
      }
      return;
    }

    setUser(convertRawUser(data));
  };

  const checkAdminStatus = async (token: string) => {
    try {
      const response = await fetch(
        "https://tsudoi-server.akms0929ama.workers.dev/check-admin",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to check admin status");
      }

      const { isAdmin } = await response.json();
      setIsAdmin(isAdmin);
    } catch (error) {
      console.error("Error checking admin status:", error);
    }
  };

  const signUp = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    return data.user;
  };

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return data.session;
  };

  return { user, isAdmin, isLoading, signUp, signIn };
}

const convertRawUser = (rawUser: any): User => {
  return {
    id: rawUser.id,
    username: rawUser.username,
    email: rawUser.email,
    firstName: rawUser.first_name,
    lastName: rawUser.last_name,
    createdAt: rawUser.created_at,
    updatedAt: rawUser.updated_at,
    role: rawUser.role,
  };
};
