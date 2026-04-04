import { create } from "zustand";
import API from "../api/axios";

export const usePatientStore = create((set) => ({
  patients: [],
  fetchPatients: async () => {
    const res = await API.get("/patients");
    set({ patients: res.data });
  }
}));
