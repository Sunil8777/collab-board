import { useMutation } from "convex/react";
import { useState } from "react";

export const useApiMutation = (mutationFn:any) => {
  const [isLoading, setIsLoading] = useState(false);

  const apiMutation = useMutation(mutationFn);

  const mutate = async (payload:any) => {
    setIsLoading(true)
    try {
      return await apiMutation(payload)
    } catch (error) {
        throw new Error("Something went wrong")
    }
    finally{
        setIsLoading(false)
    }
  };

  return {
    mutate,
    isLoading,
  };
};
