import React, { useState } from "react";
import type { Project } from "../types";

type Props = {
  project: Project;
  onSave: (data: { name: string; description: string }) => Promise<void>;
  onCancel: () => void;
};

export default function EditProjectForm({ project, onSave, onCancel }: Props) {
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [loading, setLoading] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSave({ name, description });
    } finally {
      setLoading(false);
    }
  };
  


  return (
    <form onSubmit={handleSave} className="bg-white p-4 rounded shadow mb-4">
      <label className="block mb-2">
        <div className="text-sm text-gray-600">Name</div>
        <input className="mt-1 w-full p-2 border rounded" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label className="block mb-3">
        <div className="text-sm text-gray-600">Description</div>
        <textarea className="mt-1 w-full p-2 border rounded" value={description} onChange={e => setDescription(e.target.value)} />
      </label>
      <div className="flex gap-2">
        <button disabled={loading} type="submit" className="px-3 py-1 border rounded bg-slate-800 text-white">{loading ? "Saving..." : "Save"}</button>
        <button type="button" onClick={onCancel} className="px-3 py-1 border rounded">Cancel</button>
      </div>
    </form>
  );
}


