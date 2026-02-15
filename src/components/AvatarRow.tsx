import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import avatar5 from "@/assets/avatar-5.jpg";

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

interface AvatarRowProps {
  direction?: "left" | "right";
  speed?: number;
  offset?: number;
}

const AvatarRow = ({ direction = "left", speed = 30, offset = 0 }: AvatarRowProps) => {
  // Double the array for seamless loop
  const doubled = [...avatars, ...avatars, ...avatars, ...avatars];

  return (
    <div className="overflow-hidden w-full">
      <div
        className={direction === "left" ? "animate-scroll-left" : "animate-scroll-right"}
        style={{
          display: "flex",
          gap: "1rem",
          width: "max-content",
          animationDuration: `${speed}s`,
          animationDelay: `${offset}s`,
        }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            className="avatar-card flex-shrink-0"
            style={{
              width: "160px",
              height: "180px",
            }}
          >
            <img
              src={src}
              alt={`Student avatar ${(i % avatars.length) + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvatarRow;
