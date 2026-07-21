interface VideoEmbedProps {
  id: string;
  title: string;
}

export function VideoEmbed({ id, title }: VideoEmbedProps) {
  return (
    <div className="aspect-video overflow-hidden rounded-2xl">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        className="h-full w-full"
      />
    </div>
  );
}
