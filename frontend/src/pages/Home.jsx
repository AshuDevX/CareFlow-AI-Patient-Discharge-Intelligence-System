import { useEffect } from "react";
import { usePatientStore } from "../store/usePatientStore";

export default function Home() {
  const { patients, fetchPatients } = usePatientStore();

  useEffect(() => { fetchPatients(); }, []);

  return <div>{patients.map(p => <div key={p._id}>{p.name}</div>)}</div>;
}
