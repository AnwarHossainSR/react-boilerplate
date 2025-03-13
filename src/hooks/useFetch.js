// src/hooks/useFetch.js
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../services/api";

export const useFetch = (endpoint, queryKey, options = {}) => {
  const fetchData = async () => {
    const response = await api.get(endpoint);
    return response.data;
  };

  return useQuery({
    queryKey: [queryKey],
    queryFn: fetchData,
    ...options,
  });
};

export const usePost = (endpoint, options = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await api.post(endpoint, data);
      return response.data;
    },
    onSuccess: (data, variables, context) => {
      if (options.invalidateQueries) {
        options.invalidateQueries.forEach((query) => {
          queryClient.invalidateQueries({ queryKey: [query] });
        });
      }
      if (options.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
    ...options,
  });
};

export const usePut = (endpoint, options = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }) => {
      const response = await api.put(`${endpoint}/${id}`, data);
      return response.data;
    },
    onSuccess: (data, variables, context) => {
      if (options.invalidateQueries) {
        options.invalidateQueries.forEach((query) => {
          queryClient.invalidateQueries({ queryKey: [query] });
        });
      }
      if (options.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
    ...options,
  });
};

export const useDelete = (endpoint, options = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      const response = await api.delete(`${endpoint}/${id}`);
      return response.data;
    },
    onSuccess: (data, variables, context) => {
      if (options.invalidateQueries) {
        options.invalidateQueries.forEach((query) => {
          queryClient.invalidateQueries({ queryKey: [query] });
        });
      }
      if (options.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
    ...options,
  });
};
