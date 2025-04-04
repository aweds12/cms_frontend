"use client";

import React, { useEffect, useState } from "react";
import { api } from "../utils/api";
import { UserProps } from "../types/schema";

const useUser = (): [
  UserProps | undefined,
  React.Dispatch<React.SetStateAction<UserProps | undefined>>
] => {
  const [user, setUser] = useState<UserProps | undefined>(undefined);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res: UserProps = await api({
          url: "/users/profile",
          method: "GET",
        });

        if (res) {
          setUser(res);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchProfile();
  }, []);

  return [user, setUser];
};

export default useUser;
