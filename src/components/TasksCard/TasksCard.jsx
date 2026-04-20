// import { CircleDollar } from "@gravity-ui/icons";
import { Card, Link } from "@heroui/react";
export function TasksCard({ task }) {
  const { title, id, description, status, priority } = task;

  return (
    <Card variant="primary" className="max-w-full w-full">
      {/* <CircleDollar
        aria-label="Dollar sign icon"
        className="text-primary size-6"
        role="img"
      /> */}
      <Card.Header>
        <Card.Title>{title}!</Card.Title>
        <Card.Description>{description}</Card.Description>
      </Card.Header>
      <Card.Footer>
        <Link
          aria-label="Go to Acme Creator Hub (opens in new tab)"
          href="https://heroui.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Creator Hub
          <Link.Icon aria-hidden="true" />
        </Link>
      </Card.Footer>
    </Card>
  );
}

// {
//     "id": 1,
//     "title": "Finish Next.js dashboard UI",
//     "description": "Complete layout and responsive design for dashboard page",
//     "status": "in-progress",
//     "priority": "high",
//     "due_date": "2026-04-22",
//     "created_at": "2026-04-20",
//     "tags": ["nextjs", "frontend", "ui"],
//     "assigned_to": "Am inur"
//   },
