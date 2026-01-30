"use client";

import { useForm } from "react-hook-form";
import { useTransition } from "react";
import { Loader2, Save } from "lucide-react";

export type ProjectFormValues = {
  title: string;
  description?: string;
  category: string;
  is_published: boolean;
  order_index: number;
};

interface ProjectFormProps {
  defaultValues?: Partial<ProjectFormValues>;
  onSubmit: (data: ProjectFormValues) => Promise<void>;
  submitLabel?: string;
}

const categories = [
  "furniture",
  "dining",
  "living room",
  "bedroom",
  "office",
  "kitchen",
  "outdoor",
  "storage",
  "custom",
];

export function ProjectForm({
  defaultValues,
  onSubmit,
  submitLabel = "Save Project",
}: ProjectFormProps) {
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectFormValues>({
    defaultValues: {
      title: "",
      description: "",
      category: "furniture",
      is_published: false,
      order_index: 0,
      ...defaultValues,
    },
  });

  const handleFormSubmit = (data: ProjectFormValues) => {
    startTransition(async () => {
      await onSubmit(data);
    });
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      {/* Title */}
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Project Title *
        </label>
        <input
          {...register("title")}
          type="text"
          id="title"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="e.g., Walnut Dining Table"
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Description
        </label>
        <textarea
          {...register("description")}
          id="description"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
          placeholder="Describe this project..."
        />
      </div>

      {/* Category */}
      <div>
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Category
        </label>
        <select
          {...register("category")}
          id="category"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Order Index */}
      <div>
        <label
          htmlFor="order_index"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Display Order
        </label>
        <input
          {...register("order_index")}
          type="number"
          id="order_index"
          min={0}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <p className="mt-1 text-sm text-gray-500">
          Lower numbers appear first
        </p>
      </div>

      {/* Published */}
      <div className="flex items-center gap-3">
        <input
          {...register("is_published")}
          type="checkbox"
          id="is_published"
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="is_published" className="text-sm text-gray-700">
          Publish this project (visible on public site)
        </label>
      </div>

      {/* Submit */}
      <div className="flex justify-end pt-4 border-t">
        <button
          type="submit"
          disabled={isPending}
          className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isPending ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            <Save size={20} />
          )}
          {isPending ? "Saving..." : submitLabel}
        </button>
      </div>
    </form>
  );
}
