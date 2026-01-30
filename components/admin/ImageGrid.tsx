"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  Star,
  Trash2,
  GripVertical,
  Loader2,
  Pencil,
  X,
  Check,
} from "lucide-react";
import {
  deleteProjectImage,
  setFeaturedImage,
  reorderImages,
  updateProjectImage,
} from "@/lib/actions/images";

interface ProjectImage {
  id: string;
  storage_path: string;
  alt_text: string | null;
  title: string | null;
  display_order: number;
  is_featured: boolean;
}

interface ImageGridProps {
  projectId: string;
  images: ProjectImage[];
  supabaseUrl: string;
}

function SortableImage({
  image,
  projectId,
  supabaseUrl,
}: {
  image: ProjectImage;
  projectId: string;
  supabaseUrl: string;
}) {
  const [isDeleting, startDeleteTransition] = useTransition();
  const [isSettingFeatured, startFeaturedTransition] = useTransition();
  const [isEditing, setIsEditing] = useState(false);
  const [altText, setAltText] = useState(image.alt_text || "");
  const [isSaving, startSaveTransition] = useTransition();

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: image.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this image?")) {
      startDeleteTransition(async () => {
        await deleteProjectImage(image.id, projectId);
      });
    }
  };

  const handleSetFeatured = () => {
    startFeaturedTransition(async () => {
      await setFeaturedImage(image.id, projectId);
    });
  };

  const handleSaveAltText = () => {
    startSaveTransition(async () => {
      await updateProjectImage(image.id, projectId, { alt_text: altText });
      setIsEditing(false);
    });
  };

  const imageUrl = `${supabaseUrl}/storage/v1/object/public/project-images/${image.storage_path}`;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`relative group bg-white rounded-lg shadow-sm border overflow-hidden ${
        image.is_featured ? "ring-2 ring-yellow-400" : ""
      }`}
    >
      {/* Drag Handle */}
      <div
        {...attributes}
        {...listeners}
        className="absolute top-2 left-2 z-10 p-1 bg-white/90 rounded cursor-grab opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <GripVertical size={16} className="text-gray-500" />
      </div>

      {/* Featured Badge */}
      {image.is_featured && (
        <div className="absolute top-2 right-2 z-10 px-2 py-1 bg-yellow-400 text-yellow-900 text-xs font-medium rounded flex items-center gap-1">
          <Star size={12} />
          Featured
        </div>
      )}

      {/* Image */}
      <div className="aspect-square relative">
        <Image
          src={imageUrl}
          alt={image.alt_text || "Project image"}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>

      {/* Actions */}
      <div className="p-3 space-y-2">
        {isEditing ? (
          <div className="flex gap-2">
            <input
              type="text"
              value={altText}
              onChange={(e) => setAltText(e.target.value)}
              placeholder="Alt text..."
              className="flex-1 px-2 py-1 text-sm border rounded"
            />
            <button
              onClick={handleSaveAltText}
              disabled={isSaving}
              className="p-1 text-green-600 hover:bg-green-50 rounded"
            >
              {isSaving ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Check size={16} />
              )}
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="p-1 text-gray-600 hover:bg-gray-100 rounded"
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          <>
            <p className="text-xs text-gray-500 truncate">
              {image.alt_text || "No alt text"}
            </p>
            <div className="flex justify-between items-center">
              <button
                onClick={() => setIsEditing(true)}
                className="p-1 text-gray-600 hover:bg-gray-100 rounded"
                title="Edit alt text"
              >
                <Pencil size={14} />
              </button>
              <div className="flex gap-1">
                {!image.is_featured && (
                  <button
                    onClick={handleSetFeatured}
                    disabled={isSettingFeatured}
                    className="p-1 text-yellow-600 hover:bg-yellow-50 rounded"
                    title="Set as featured"
                  >
                    {isSettingFeatured ? (
                      <Loader2 size={14} className="animate-spin" />
                    ) : (
                      <Star size={14} />
                    )}
                  </button>
                )}
                <button
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className="p-1 text-red-600 hover:bg-red-50 rounded"
                  title="Delete"
                >
                  {isDeleting ? (
                    <Loader2 size={14} className="animate-spin" />
                  ) : (
                    <Trash2 size={14} />
                  )}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export function ImageGrid({ projectId, images, supabaseUrl }: ImageGridProps) {
  const [items, setItems] = useState(images);
  const [, startTransition] = useTransition();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        const newItems = arrayMove(items, oldIndex, newIndex);

        // Update order in database
        startTransition(async () => {
          await reorderImages(
            projectId,
            newItems.map((item, index) => ({
              id: item.id,
              display_order: index,
            }))
          );
        });

        return newItems;
      });
    }
  };

  if (items.length === 0) {
    return (
      <p className="text-gray-500 text-center py-8">
        No images yet. Upload some above.
      </p>
    );
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={rectSortingStrategy}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((image) => (
            <SortableImage
              key={image.id}
              image={image}
              projectId={projectId}
              supabaseUrl={supabaseUrl}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
